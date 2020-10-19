const {Router} = require('express');
const router = Router();
const stripe = require('../controllers/chargeStripe')

router.post('/stripe',stripe)
module.exports = router