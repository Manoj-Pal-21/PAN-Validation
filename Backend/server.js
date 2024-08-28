const express = require('express');
const cors = require('cors');
const panRoutes = require('./routes/panRoutes');
const path = require('path');
const PORT = process.env.PORT || 5000

const app = express();

app.use(cors());
app.use(express.json());

app.use("/pan", (req, res) => {
    res.send("server is running")
  })

app.use('/api', panRoutes);

// Serve static files from the frontend build directory
const frontendPath = path.join(__dirname, '../Frontend/dist');
app.use(express.static(frontendPath));

// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
  console.log(frontendPath)
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
