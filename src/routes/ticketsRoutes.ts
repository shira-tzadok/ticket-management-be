import { getPageItems, getTicketsData } from "../services/ticketsService";

const express = require('express');

const router = express.Router();

router.get('/', (req: any, res: any) => {
    const { page, userType } = req.query
    const data = getTicketsData(userType, page)
    res.json(data);
});

module.exports = router;