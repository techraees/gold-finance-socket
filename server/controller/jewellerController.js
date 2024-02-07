import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Jeweler } from './../Model/jewelerSchema.js';

async function signup(req, res) {
    try {
      const {
        name,
        email,
        password,
        phoneNumber,
        companyName,
        companyType,
        billingAddress,
        city,
        state,
        pincode,
        GST
      } = req.body;
  
      // Get the filename of the uploaded file
      const gstFile = req.file ? req.file.filename : null;
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new Jeweler
      const newJeweler = new Jeweler({
        name,
        email,
        password: hashedPassword,
        phoneNumber,
        companyName,
        companyType,
        billingAddress,
        city,
        state,
        pincode,
        GST,
        
      });
  
      // Save the Jeweler to the database
      await newJeweler.save();
  
      res.status(201).send('Jeweler registered successfully.');
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(400).send(error.message || 'An error occurred during signup.');
    }
  }

async function login(req, res) {
    try {
        const { email, password } = req.body;
    
        // Find the Jeweler by email
        const jeweler = await Jeweler.findOne({ email });
    
        if (!jeweler) {
          throw new Error('Invalid email or password');
        }
    
        // Compare the passwords
        const isPasswordValid = await bcrypt.compare(password, jeweler.password);
    
        if (!isPasswordValid) {
          throw new Error('Invalid email or password');
        }
    
        // Generate JWT token
        const token = jwt.sign({ id: jeweler._id }, 'secretkey', { expiresIn: '1h' });
    
        // Send token and user data in the response
        res.status(200).json({
          token: token,
          user: jeweler // Include all user fields
        });
      } catch (error) {
        res.status(401).send(error.message);
      }
}

export { signup, login };
