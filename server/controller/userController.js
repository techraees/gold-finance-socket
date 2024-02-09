import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './../Model/userSchema.js';

export async function register(req, res) {
  const { name, email, password, confirmPassword, role } = req.body;
  
  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ success: false, message: "Passwords don't match" });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }

  // Determine the role based on the request
  const userRole = role === 'admin' ? 'admin' : 'user';

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user with the determined role
  const user = new User({
    name,
    email,
    password: hashedPassword,
    role: userRole, // Set the role here
  });

  await user.save();

  res.status(201).json({ success: true, message: 'User registered successfully', user: { name, email, role: userRole } });
}


export async function login(req, res) {
  const { email, password } = req.body;
  console.log(email,password)

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  // Check if password is correct
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  // Create and send JWT token
  const token = jwt.sign({ userId: user._id, role: user.role }, 'secret');
  console.log(token)
  res.json({ success: true, message: 'Login successful', token, user: { name: user.name, email: user.email,role: user.role } });
}
