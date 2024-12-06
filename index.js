require('dotenv').config()
const express = require('express');  
const app = express();  
const port = 4000;  

// Middleware for parsing JSON and URL-encoded data (if needed in the future)  
// app.use(express.json());  
// app.use(express.urlencoded({ extended: true }));  

// Route for root  
app.get('/', (req, res) => {  
  res.send('Hello World!');  
});  

// Route for Saurabh  
app.get('/saurabh', (req, res) => {  
  res.send('<h1>Hii I am Saurabh Pandey</h1>');  
});  

// Route for YouTube link  
app.get('/youtube', (req, res) => {  
  res.send('Youtube is start here');  
});  

// Generic error handler (optional enhancement)  
app.use((err, req, res, next) => {  
  console.error(err.stack);  
  res.status(500).send('Something broke!');  
});  

// Start the server  
app.listen(port, () => {  
  console.log(`Example app listening on port ${port}`);  
});