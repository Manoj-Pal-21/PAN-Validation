const express = require('express');
// const cors = require('cors');
// const panRoutes = require('./routes/panRoutes');
const PORT = process.env.PORT || 6000

const app = express();

// app.use(cors());
app.use(express.json());

// app.use('/api', panRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
