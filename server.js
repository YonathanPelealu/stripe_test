require('dotenv')
const  express  = require ('express');
const app = express();
// const { Router } = require('routes')
// const router = Router()
const secret_key = process.env.STRIPE_SECRET_KEY
const public_key = process.env.STRIPE_PUBLIC_KEY
const stripe = require('stripe')(secret_key);
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const PORT = process.env.PORT || 3000

// app.use(express.static('public'));

app.listen(PORT, () => console.log("Listening on port " + PORT));