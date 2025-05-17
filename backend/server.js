import express from 'express';
// import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});