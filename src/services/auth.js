// src/services/auth.js
import { Client, Account } from "appwrite";

// Initialize the Appwrite client
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject('6702274900285e6a0b4c'); // Replace with your project ID

const account = new Account(client);

// Function to create a new user (sign up)
export const signupUser = async (email, password, name) => {
  try {
    const response = await account.create(
      'unique()', 
      // Generates a unique ID for the user automatically
      email,
      password,
      name
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// Function to log in an existing user
export const loginUser = async ( email, password) => {
  try {
    const response = await account.createEmailPasswordSession(email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

// Optional: Function to log out the user
export const logoutUser = async () => {
  try {
    await account.deleteSession('current'); // Ends the current session
  } catch (error) {
    throw error;
  }
};
