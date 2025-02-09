# Unhandled Promise Rejection in Asynchronous Node.js Express App

This repository demonstrates a common error in asynchronous Node.js applications: unhandled promise rejections. The `bug.js` file contains code that simulates an asynchronous operation (using `setTimeout`) that might throw an error.  The error handling is incomplete, leading to an unhandled promise rejection, which may cause your app to crash or lead to unexpected behaviour.

The `bugSolution.js` file provides a corrected version with proper error handling, demonstrating how to gracefully handle errors within asynchronous functions and prevent unhandled rejections.