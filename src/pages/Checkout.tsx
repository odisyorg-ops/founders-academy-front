import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  Trash2,
  ShoppingCart,
  ArrowLeft,
  CreditCard,
  Sparkles,
  Check,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "@/hooks/use-toast";
import axios from "axios"


/* -------------------------------------------------------------------------- */
/*                                  Assets                                    */
/* -------------------------------------------------------------------------- */

import ebookSdr from "@/assets/ebook-sdr.png";
import ebookBdm from "@/assets/ebook-bdm.png";
import ebookAm from "@/assets/ebook-am.png";
import ebookColdCalls from "@/assets/ebook-sales-training.png";
import ebookCoaching from "@/assets/ebook-coaching.png";

/* -------------------------------------------------------------------------- */
/*                               Static Config                                */
/* -------------------------------------------------------------------------- */

const SERIES_BOOK_IDS = ["ebook-sdr", "ebook-bdm", "ebook-am"];

const SERIES_BOOKS = [
  { id: "ebook-sdr", title: "SDR Success Playbook", price: 69, image: "ebook-sdr" },
  { id: "ebook-bdm", title: "Business Development Playbook", price: 69, image: "ebook-bdm" },
  { id: "ebook-am", title: "Account Manager Playbook", price: 69, image: "ebook-am" },
];

const IMAGE_MAP: Record<string, string> = {
  "ebook-sdr": ebookSdr,
  "ebook-bdm": ebookBdm,
  "ebook-am": ebookAm,
  "ebook-cold-calls": ebookColdCalls,
  "ebook-coaching": ebookCoaching,
};

const SERIES_ORIGINAL_PRICE = 207;
const SERIES_DISCOUNT_RATE = 0.6;
const BUNDLE_PRICE = 109;

/* -------------------------------------------------------------------------- */
/*                               Helpers                                      */
/* -------------------------------------------------------------------------- */

const isSeriesBook = (id: string) => SERIES_BOOK_IDS.includes(id);
const applySeriesDiscount = (price: number) =>
  Math.round(price * SERIES_DISCOUNT_RATE);

/* -------------------------------------------------------------------------- */
/*                                 Component                                  */
/* -------------------------------------------------------------------------- */

const Checkout = () => {
  const { items, removeFromCart, clearCart, addToCart, isInCart } = useCart();

  const [searchParams] = useSearchParams();
  const [upsellAdded, setUpsellAdded] = useState(false);

  const isBundleCheckout = searchParams.get("bundle") === "true";
  const bundleType = searchParams.get("bundleType"); // "main" or "complete"
  const upsellType = searchParams.get("upsell");
  const showUpsell = upsellType === "cold-calls" || upsellType === "coaching";

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                             Derived State                                 */
  /* ------------------------------------------------------------------------ */

  const displayItems = isBundleCheckout ? SERIES_BOOKS : items;

  // Bundle prices
  const MAIN_BUNDLE_PRICE = 109;
  const COMPLETE_BUNDLE_PRICE = 171;
  const COMPLETE_BUNDLE_ORIGINAL = 323;

  const bundlePrice = bundleType === "complete" ? COMPLETE_BUNDLE_PRICE : BUNDLE_PRICE;
  const bundleOriginal = bundleType === "complete" ? COMPLETE_BUNDLE_ORIGINAL : SERIES_ORIGINAL_PRICE;
  const bundleSavings = bundleOriginal - bundlePrice;

  const discountedSeriesPrice = Math.round(
    SERIES_ORIGINAL_PRICE * SERIES_DISCOUNT_RATE
  );
  const upsellSavings = SERIES_ORIGINAL_PRICE - discountedSeriesPrice;

  const hasFullSeries =
    upsellAdded || SERIES_BOOK_IDS.every((id) => isInCart(id));

  const calculateTotal = () => {
    if (isBundleCheckout) return bundlePrice;

    return items.reduce((total, item) => {
      if (upsellAdded && isSeriesBook(item.id)) {
        return total + applySeriesDiscount(item.price);
      }
      return total + item.price;
    }, 0);
  };

  const finalTotal = calculateTotal();



  /* ------------------------------------------------------------------------ */
  /*                             Handlers                                      */
  /* ------------------------------------------------------------------------ */

  const handleAddUpsellBundle = () => {
    SERIES_BOOKS.forEach((book) => {
      if (!isInCart(book.id)) addToCart(book);
    });

    setUpsellAdded(true);

    toast({
      title: "Bundle Added",
      description: "Sales Excellence Series added with 40% discount.",
    });
  };

  const handleCheckout = async () => {
    try {
      const payload = {
        items: displayItems.map((item) => ({
          id: item.id,
          quantity: 1,
        })),
        upsellAdded,
        isBundleCheckout,
      };

      const { data } = await axios.post(
        "http://localhost:3000/create-checkout-session",
        payload
      );

      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };


  /* ------------------------------------------------------------------------ */
  /*                             Empty Cart                                    */
  /* ------------------------------------------------------------------------ */

  if (!isBundleCheckout && items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <ShoppingCart className="w-16 h-16 mx-auto text-slate-300 mb-6" />
          <h1 className="text-[clamp(1.5rem,4vw,2rem)] font-bold mb-3">
            Your cart is empty
          </h1>
          <NavLink to="/resources">
            <Button className="w-full h-12 rounded-xl">
              Browse Resources
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------------------ */
  /*                                 Render                                    */
  /* ------------------------------------------------------------------------ */

  return (
    <div className="min-h-screen bg-background text-slate-800">
      <section className="py-[clamp(2rem,6vw,3rem)] text-center ">
        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold">
          Checkout
        </h1>
        <p className="text-slate-600 mt-2">Secure purchase</p>
      </section>

      <section className="max-w-6xl mx-auto px-[clamp(1rem,5vw,2rem)] pb-20">
        <div className="grid gap-[clamp(1.5rem,4vw,2.5rem)] lg:grid-cols-[2fr_1fr]">
          {/* ---------------------------- Cart Items --------------------------- */}
          <div className="space-y-4">
            {displayItems.map((item) => {
              const discounted = upsellAdded && isSeriesBook(item.id);
              const price = discounted
                ? applySeriesDiscount(item.price)
                : item.price;

              return (
                <div
                  key={item.id}
                  className="flex gap-4 border rounded-xl bg-white p-[clamp(0.75rem,2vw,1.25rem)]"
                >
                  <img
                    src={IMAGE_MAP[item.image]}
                    alt={item.title}
                    className="w-[clamp(4rem,18vw,5rem)] aspect-[3/4] rounded-lg object-cover border"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Sales Excellence Series
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      {discounted && (
                        <span className="text-sm line-through text-slate-400">
                          £{item.price}
                        </span>
                      )}
                      <span className="font-semibold">£{price}</span>
                      {discounted && (
                        <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                          40% OFF
                        </span>
                      )}
                    </div>
                  </div>

                  {!isBundleCheckout && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-4 h-4 text-slate-400" />
                    </Button>
                  )}
                </div>
              );
            })}

            {!isBundleCheckout && (
              <Button variant="outline" size="sm" onClick={clearCart}>
                Clear cart
              </Button>
            )}

            {/* Upsell */}
            {showUpsell && !hasFullSeries && !isBundleCheckout && (
              <div className="mt-8 rounded-2xl border bg-indigo-50/60 p-[clamp(1rem,4vw,1.75rem)]">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-semibold text-indigo-700">
                    Limited offer
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  Complete the Sales Excellence Series
                </h3>

                <p className="text-sm text-slate-600 mb-4">
                  Get all three playbooks with 40% off.
                </p>

                <div className="flex justify-between mb-4">
                  <div>
                    <span className="line-through text-slate-400 mr-2">
                      £207
                    </span>
                    <span className="text-2xl font-bold">
                      £{discountedSeriesPrice}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-emerald-700">
                    Save £{upsellSavings}
                  </span>
                </div>

                <Button
                  onClick={handleAddUpsellBundle}
                  className="w-full h-12 rounded-xl"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Add Bundle
                </Button>
              </div>
            )}
          </div>

          {/* -------------------------- Order Summary --------------------------- */}
          <div className="sticky top-[clamp(1rem,5vw,6rem)] rounded-2xl border bg-white p-[clamp(1rem,4vw,1.5rem)]">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="space-y-3 text-sm mb-6">
              {displayItems.map((item) => {
                const discounted = upsellAdded && isSeriesBook(item.id);
                const price = discounted
                  ? applySeriesDiscount(item.price)
                  : item.price;

                return (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-slate-600">{item.title}</span>
                    <div>
                      {discounted && (
                        <span className="line-through text-slate-400 mr-1">
                          £{item.price}
                        </span>
                      )}
                      <span>£{price}</span>
                    </div>
                  </div>
                );
              })}

              {isBundleCheckout && (
                <>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="line-through text-slate-400">£{bundleOriginal}</span>
                  </div>
                  <div className="flex justify-between text-emerald-600">
                    <span>Bundle Discount ({Math.round((bundleSavings / bundleOriginal) * 100)}% off)</span>
                    <span>-£{bundleSavings}</span>
                  </div>
                </>
              )}

              {upsellAdded && !isBundleCheckout && (
                <div className="flex justify-between text-emerald-600">
                  <span>Series Discount</span>
                  <span>-£{upsellSavings}</span>
                </div>
              )}
            </div>

            <div className="border-t pt-4 mb-6 flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-[clamp(1.5rem,4vw,1.75rem)] font-bold text-indigo-600">
                £{finalTotal}
              </span>
            </div>

            <Button
              onClick={handleCheckout}
              className="w-full h-[clamp(3rem,7vw,3.5rem)] rounded-xl text-base font-semibold gradient-primary"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Secure Checkout
            </Button>

            <p className="text-xs text-slate-500 text-center mt-3">
              Payments secured by Stripe
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <NavLink
            to="/resources"
            className="inline-flex items-center text-sm text-indigo-600 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Continue shopping
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Checkout;