import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

interface Item extends ReadableStream<Uint8Array> {}

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!);
  let data = await request.json();
  let gameList: { id: number; name: string; price: number }[] = data.gameList;
  let totalPrice = data.price;
  const session = await stripe.checkout.sessions.create({
    line_items: gameList.map((game) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: game.name,
          },
          unit_amount: game.price * 100,
        },
        quantity: 1,
      };
    }),

    // [
    //   {
    //     price: totalPrice,
    //     quantity: gameList.length,
    //   },
    // ],
    // submit_type: "pay",
    mode: "payment",
    // payment_method_types: ["card"],
    // billing_address_collection: "auto",
    // success_url: `http://localhost:3000`,
    // cancel_url: `http://localhost:3000`,
    success_url: `https://e-commerce-game-website.vercel.app/`,
    cancel_url: `https://e-commerce-game-website.vercel.app/`,
  });
  return NextResponse.json(session.url);
}
