const express = require("express");
const router = express.Router();
const { connectToDb, getDb } = require("../DB.js");
const session = require("express-session");
const store = new session.MemoryStore();
const { request } = require("express");
router.use(
  session({
    secret: "secret-key",
    cookie: { maxAge: 30000 },
    resave: true,
    saveUninitialized: false,
    store,
  })
);

let db;

connectToDb((err) => {
  if (!err) {
    console.log("Connected to DB");
    db = getDb();
  }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Credential:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: User's username
 *         password:
 *           type: string
 *           description: User's password
 *       example:
 *         username: admin
 *         password: password
 *
 *     Booking:
 *       type: object
 *       required:
 *         - username
 *         - source
 *         - destination
 *         - passengers
 *         - departureDate
 *         - returnDate
 *         - studentFare
 *         - armedForceFare
 *         - seniorCitizenFare
 *         - tripType
 *       properties:
 *         username:
 *           type: string
 *           description: User's username
 *         password:
 *           type: string
 *           description: User's password
 *       example:
 *         username: admin
 *         password: password
 */

/**
 * @swagger
 * tags:
 *   name: Airline
 *   description: The airline website managing API
 *
 * /airline/api/login:
 *   post:
 *    summary: Validate a user's credentials and log them in
 *    tags: [Login & Sign Up]
 *    requestBody:
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *             $ref: '#/components/schemas/Credential'
 *    responses:
 *      200:
 *        description: The user exists in the database and the credentials are correct
 *      401:
 *        description: The user does not exist or the credentials are not correct
 *
 * /airline/api/user:
 *   get:
 *    summary: Check the user ID of the active session
 *    tags: [User]
 *    responses:
 *      message:
 *        description: A JSON object containing the parameter req.session.userid
 *
 * /airline/api/signup:
 *   post:
 *    summary: Check if a user already exists and sign them up
 *    tags: [Login & Sign Up]
 *    requestBody:
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *             $ref: '#/components/schemas/Credential'
 *    responses:
 *      200:
 *        description: The user doen not exist in the database
 *      400:
 *        description: The user already exists
 *
 * /airline/api/logout:
 *   get:
 *    summary: Close the currently active session
 *    tags: [Login & Sign Up]
 *    responses:
 *      200:
 *        description: The currently running session was destroyed
 *      400:
 *        description: There was no session active
 *
 * /airline/api/bookings:
 *   get:
 *    summary: Open the booking page
 *    tags: [Bookings & Check In]
 *    responses:
 *      200:
 *        description: The page was opened succesfully
 *
 *   post:
 *    summary: Create a new booking
 *    tags: [Bookings & Check In]
 *    requestBody:
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *             $ref: '#/components/schemas/Credential'
 *    responses:
 *      200:
 *        description: The booking was created successfully
 *      401:
 *        description: There is no currently active session
 */

async function validate(req, res) {
  const query = {
    Username: req.body.username,
    Password: req.body.password,
  };
  console.log(query);
  const creds = await db.collection("credentials").findOne(query);
  if (creds != null) {
    req.session.authenticated = true;
    req.session.userid = req.body.username;
    db.collection("activeuser").deleteMany({});
    await db.collection("activeuser").insertOne({ ID: req.session.userid });
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
}

router.post("/api/login", (req, res) => {
  validate(req, res);
});

router.get("/api/user", (req, res) => {
  //console.log(req.session.authenticated);
  let sessionCreds = db
    .collection("activeuser")
    .findOne({ ID: req.session.userid }, { projection: { _id: 0 } });
  if (sessionCreds) {
    res.status(200).send("Working");
  } else {
    res.status(401).send("Unauthorized");
  }
});

router.get("/api/signup", (req, res) => {
  res.sendStatus(200);
});

async function addCred(req, res) {
  const newUser = {
    Username: req.body.username,
    Password: req.body.password,
    Email: req.body.email,
  };
  const oldUser = await db
    .collection("credentials")
    .findOne(newUser, { projection: { _id: 0 } });
  if (oldUser != null) {
    res.sendStatus(400);
  } else {
    await db.collection("credentials").insertOne(newUser);
    req.session.authenticated = true;
    req.session.userid = req.body.username;
    res.sendStatus(200);
  }
}

router.post("/api/signup", (req, res) => {
  addCred(req, res);
});

router.get("/api/logout", (req, res) => {
  db.collection("activeuser").deleteMany({});
});

async function makeBooking(req, res) {
  let timestamp = Date.now();
  let collection = await db.collection("activeuser");
  let results = await collection.find({}).limit(1).toArray();
  console.log(results);
  if (results == null) {
    res.sendStatus(401);
  } else {
    const newBooking = {
      BookingId: timestamp,
      User: results[0].ID,
      From: req.body.source,
      To: req.body.destination,
      tripType: req.body.tripType,
      depDate: req.body.departureDate,
      retDate: req.body.returnDate,
      numPassengers: req.body.passengers,
      checkedIn: false,
      paid: false,
    };
    const oldBooking = await db
      .collection("bookings")
      .findOne(newBooking, { projection: { _id: 0 } });
    if (oldBooking != null) {
      res.sendStatus(400);
    } else {
      await db.collection("bookings").insertOne(newBooking);
      //res.sendStatus(200);
      res.send({ ID: timestamp });
    }
  }
  /*let sessionCreds = await db
    .collection("activeuser")
    .find()
    .skip(db.collection("activeuser").count() - 1);*/
  //console.log(sessionCreds);
}

router.post("/api/bookings", (req, res) => {
  makeBooking(req, res);
});

async function checkin(req, res) {
  const query = {
    BookingId: parseInt(req.body.bookingid),
  };

  try {
    const booking = await db.collection("bookings").findOne(query);

    if (booking !== null) {
      if (!booking.checkedIn) {
        await db
          .collection("bookings")
          .updateOne(
            { BookingId: booking.BookingId },
            { $set: { checkedIn: true } }
          );
        res.sendStatus(200); // Send success status if the booking exists and is updated
      } else {
        res.status(400).send("Booking already checked in."); // Send bad request status if already checked in
      }
    } else {
      res.sendStatus(404); // Send not found status if the booking does not exist
    }
  } catch (error) {
    console.error("Error:", error);
    res.sendStatus(500); // Send server error status if an error occurs
  }
}

router.post("/api/checkin", (req, res) => {
  checkin(req, res);
});

async function makePayment(req, res) {
  const query = {
    BookingId: parseInt(req.body.bookingID),
  };
  console.log(query);
  try {
    const booking = await db.collection("bookings").findOne(query);

    if (booking !== null) {
      if (!booking.paid) {
        await db
          .collection("bookings")
          .updateOne(
            { BookingId: booking.BookingId },
            { $set: { paid: true } }
          );
        res.sendStatus(200); // Send success status if the booking exists and is updated
      } else {
        res.sendStatus(400); // Send bad request status if already checked in
      }
    } else {
      res.sendStatus(404); // Send not found status if the booking does not exist
    }
  } catch (error) {
    console.error("Error:", error);
    res.sendStatus(500); // Send server error status if an error occurs
  }
}

router.post("/api/payment", (req, res) => {
  makePayment(req, res);
});

module.exports = router;
