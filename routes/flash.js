const express         = require('express');
const flashController = require('../controllers/flash');

const router = express.Router();

router.put(
    '/send',
    flashController.sendFlash
);

module.exports = router;
