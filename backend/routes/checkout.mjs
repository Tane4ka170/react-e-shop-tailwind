import { Router } from "express";
import Stripe from "stripe";

const router = Router();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

router.post("/checkout", async (req, res) => {
  const stripe = new Stripe(stripeSecretKey, {});
  try {
    const { items, email } = await req.body;
    const extractingItems = await items.map((item) => {
      quantity: item.quantity;
      priceData: {
        currency: "usd";
        unit_amount: item.discountedPrice * 100;
        productData: {
          name: item.name;
          description: item.description;
          images: item.images;
        }
      }
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_type: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url:
        "http://localhost:5173/success?session_id:{CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:5173/cancel",
      metadata: {
        email,
      },
    });

    res.json({
      message: "Server is connected",
      success: true,
      id: session.id,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
