import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(bodyParser.json());
app.use(cors());

const ticketsRoutes = require('./routes/ticketsRoutes');

app.use('/api/tickets', ticketsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));