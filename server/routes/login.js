const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('http://localhost:3000/login', (req, res) => {
    // 임시로 값을 넣어 주었다.
    console.log(req)
});

module.exports = router;