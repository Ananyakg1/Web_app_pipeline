import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Sample endpoint
app.get('/api/destinations', (req, res) => {
  res.json([
    { id: 1, name: 'Paris', country: 'France' },
    { id: 2, name: 'Tokyo', country: 'Japan' },
    { id: 3, name: 'New York', country: 'USA' }
  ]);
});

app.get('/', (req, res) => {
  res.send('Travel Agency Backend API');
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
