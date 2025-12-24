import { Router } from "express";
import bcrypt from "bcrypt";
import { getCollections } from "../db/mongoRepository";

/**
 * Create an Express router.
 * This router will contain all user-related routes:
 * - Get all users
 * - Register
 * - Login
 */
export const router = Router();

/* =========================================================
   GET /
   ========================================================= */

/**
 * GET /
 *
 * Purpose:
 * - Return a list of all users from the database.
 *
 * Why this route exists:
 * - To demonstrate how to READ data from MongoDB.
 * - To show how the `find()` method works.
 *
 * Important MongoDB note:
 * - `find()` returns a cursor (not the data itself).
 * - `toArray()` is required to actually fetch the data.
 */
router.get("/users", async (req, res) => {
  // Get access to MongoDB collections
  const { users } = getCollections();

  // Find all users in the "users" collection
  // {} means "no filter" → return everything
  const allUsers = await users.find({}).toArray();

  // Send the list of users back to the client
  // If there are no users, an empty array [] is returned
  res.status(200).json(allUsers);
});

/* =========================================================
   POST /register
   ========================================================= */

/**
 * POST /register
 *
 * Purpose:
 * - Create a new user account.
 *
 * Expected request body:
 * {
 *   "email": "user@example.com",
 *   "password": "123456"
 * }
 *
 * Steps performed:
 * 1. Read email and password from request body
 * 2. Check if a user with the same email already exists
 * 3. Hash the password using bcrypt
 * 4. Save the user in the database
 */
router.post("/register", async (req, res) => {
  // Extract email and password from the request body
  const { email, password } = req.body;

  /**
   * Input validation (VERY IMPORTANT)
   * Never assume the client sends correct data
   */
  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  // Get the users collection
  const { users } = getCollections();

  /**
   * Step 1: Check if the user already exists
   *
   * findOne():
   * - Returns ONE document or null
   * - Perfect for checking existence
   */
  const existingUser = await users.findOne({ email });

  if (existingUser) {
    // If user already exists, stop the process
    return res.status(400).json({
      message: "User already exists",
    });
  }

  /**
   * Step 2: Hash the password
   *
   * Why hashing?
   * - Passwords should NEVER be stored as plain text
   * - Hashing protects users if the database is leaked
   *
   * 10 = salt rounds (safe default)
   */
  const hashedPassword = await bcrypt.hash(password, 10);

  /**
   * Step 3: Save the new user
   */
  await users.insertOne({
    email,
    password: hashedPassword,
  });

  /**
   * Step 4: Send success response
   */
  res.status(201).json({
    message: "User registered successfully",
  });
});

/* =========================================================
   POST /login
   ========================================================= */

/**
 * POST /login
 *
 * Purpose:
 * - Authenticate a user.
 *
 * Expected request body:
 * {
 *   "email": "user@example.com",
 *   "password": "123456"
 * }
 *
 * Steps performed:
 * 1. Find user by email
 * 2. Compare password with hashed password
 * 3. Return success or error
 */
router.post("/login", async (req, res) => {
  // Extract credentials from request body
  const { email, password } = req.body;

  // Get the users collection
  const { users } = getCollections();

  /**
   * Step 1: Find user by email
   */
  const user = await users.findOne({ email });

  if (!user) {
    // Email not found
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  /**
   * Step 2: Compare passwords
   *
   * bcrypt.compare():
   * - Compares plain text password with hashed password
   * - Returns true or false
   */
  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    // Password does not match
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  /**
   * Step 3: Login successful
   *
   * (JWT / sessions will be added later)
   */
  res.status(200).json({
    message: "Login successful",
  });
});
