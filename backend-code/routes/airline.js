const express = require("express");
const router = express.Router();
const { connectToDb, getDb } = require("../DB.js");
const session = require("express-session");
const { request } = require("express");
router.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
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

router.get("/api", (req, res) => {
  res.sendStatus(200);
});

router.get("/api/login", (req, res) => {
  res.sendStatus(200);
});

async function validate(req, res) {
  const query = {
    Username: req.body.username,
    Password: req.body.password,
  };
  const creds = await db.collection("credentials").findOne(query);
  if (creds != null) {
    req.session.authenticated = true;
    req.session.userid = req.body.username;
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
}

router.post("/api/login", (req, res) => {
  validate(req, res);
});

router.get("/api/user", (req, res) => {
  res.send({
    message: req.session.userid,
  });
});

router.get("/api/signup", (req, res) => {
  res.sendStatus(200);
});

async function addCred(req, res) {
  const newUser = {
    Username: req.body.username,
    Password: req.body.password,
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
  if (req.session.authenticated) {
    req.session.destroy();
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

router.get("/api/bookings", (req, res) => {
  if (true) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

router.post("/api/bookings", (req, res) => {
  if (true) {
    const booking = req.body;
    console.log(booking);
    db.collection("bookings").insertOne(booking);
    res.sendStatus(201);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
