const { default: Stripe } = require("stripe");


exports.chargeStripe = async (req, res, next) => {
    const {amount, stripeTokenId} = req.body;
    try {
        const charge = await Stripe.charges.create({
            amount: amount,
            token: stripeTokenId,
            currency: 'idr'
        })
        if (charge) {
            res.status(200).json({
                status : 200,
                Success: true,
                data: charge
            })
        } else {
            res.status(400).json({
                msg : "transaction declined"
            })
        }        
    } catch (err) {
        next(err)
    }
}
