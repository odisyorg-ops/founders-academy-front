import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Download, Star, Lock, GraduationCap, Users, Handshake, Brain, LineChart, Receipt, Dumbbell, UserSearch, ShoppingCart, Code, BookOpen, Check, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import FreeResourceDialog from "@/components/FreeResourceDialog";
import InterestDialog from "@/components/InterestDialog";
import FreeEbookDialog from "@/components/FreeEbookDialog";

import ebookSdr from "@/assets/ebook-sdr.png";
import ebookBdm from "@/assets/ebook-bdm.png";
import ebookAm from "@/assets/ebook-am.png";
import ebookSalesTraining from "@/assets/ebook-sales-training.png";
import ebookCoaching from "@/assets/ebook-coaching.png";
import ebookFitness from "@/assets/ebook-fitness.png";
import ebookRecruitment from "@/assets/ebook-recruitment.png";




// Reusable E-book Card Component
const EbookCard = ({ ebook, type, delay, onAction, isInCart, onRemove }) => {
  const renderContent = () => {
    if (type === "premium-coming-soon") {
      return (
        <>
          <div className="relative overflow-hidden h-80 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex flex-col items-center justify-center">
            <p className="text-amber-400 font-semibold text-sm tracking-wider mb-2">The Founder Academy</p>
            <h3 className="text-white text-2xl font-bold text-center px-4 mb-4">{ebook.title.split(' ').slice(0, -1).join(' ')}<br />{ebook.title.split(' ').slice(-1)}</h3>
            <div className="bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm">COMING SOON</div>
            <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1">
              <Lock className="w-3 h-3" />
              £{ebook.price}
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span className="text-xs text-amber-600 font-medium uppercase tracking-wide">Premium E-Book</span>
            </div>
            <h4 className="text-xl font-bold mb-1">{ebook.title}</h4>
            <p className="text-sm text-indigo-600 font-medium mb-3">{ebook.subtitle}</p>
            <p className="text-slate-600 text-sm mb-4">{ebook.description}</p>
            <Button onClick={onAction} className="w-full bg-amber-500 hover:bg-amber-600 text-white">
              <Bell className="w-4 h-4 mr-2" />
              Register Interest
            </Button>
          </div>
        </>
      );
    }

    const badgeConfig = {
      free: { bg: "bg-green-500", text: "FREE" },
      paid: { bg: "bg-indigo-600", text: `£${ebook.price}` }
    };
    const badge = badgeConfig[type];

    const iconConfig = {
      free: { Icon: Download, color: "text-green-500", label: "Free E-Book", labelColor: "text-green-600" },
      paid: { Icon: BookOpen, color: "text-indigo-500", label: "Full E-Book", labelColor: "text-indigo-600" }
    };
    const icon = iconConfig[type];

    const buttonConfig = {
      free: { 
        className: "bg-green-500 hover:bg-green-600",
        icon: Download,
        text: "Download Free E-Book"
      },
      paid: isInCart ? {
        className: "bg-green-500 hover:bg-green-600",
        icon: Check,
        text: "In Cart - View Checkout"
      } : {
        className: "gradient-primary",
        icon: ShoppingCart,
        text: `Buy Now - £${ebook.price}`
      }
    };
    const btn = buttonConfig[type];

    return (
      <>
        <div className="relative overflow-hidden">
          <img 
            src={ebook.image} 
            alt={ebook.title}
            className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className={`absolute top-4 right-4 ${badge.bg} text-white px-3 py-1 rounded-full font-bold text-sm`}>
            {badge.text}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <icon.Icon className={`w-4 h-4 ${icon.color}`} />
            <span className={`text-xs ${icon.labelColor} font-medium uppercase tracking-wide`}>{icon.label}</span>
          </div>
          <h4 className="text-xl font-bold mb-1">{ebook.title}</h4>
          <p className="text-sm text-indigo-600 font-medium mb-3">{ebook.subtitle}</p>
          <p className="text-slate-600 text-sm mb-4">{ebook.description}</p>
          <Button onClick={onAction} className={`w-full ${btn.className} text-white`}>
            <btn.icon className="w-4 h-4 mr-2" />
            {btn.text}
          </Button>
          {isInCart && type === "paid" && (
            <Button 
              variant="outline"
              onClick={onRemove}
              className="w-full mt-2 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
            >
              Remove from Cart
            </Button>
          )}
        </div>
      </>
    );
  };

  return (
    <div 
      className="bg-card rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {renderContent()}
    </div>
  );
};

const Resources = () => {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, isInCart, itemCount } = useCart();
  const [selectedResource, setSelectedResource] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [ebookDialogOpen, setEbookDialogOpen] = useState(false);
  const [ebookDialogVariant, setEbookDialogVariant] = useState("free");
  const [selectedEbook, setSelectedEbook] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const mainEbooks = [
    { id: "ebook-sdr", title: "Build Your Foundation", subtitle: "SDR Success Playbook", description: "Master the fundamentals of sales development. Learn cold calling, prospecting, and how to build a strong pipeline. 64 pages.", image: ebookSdr, price: 69 },
    { id: "ebook-bdm", title: "Revenue Growth", subtitle: "Business Development Success Playbook", description: "Scale your business development skills. Strategic partnerships, deal closing, and revenue generation techniques. 124 pages.", image: ebookBdm, price: 69 },
    { id: "ebook-am", title: "Master Retention, Renewals & Account Growth", subtitle: "Account Manager Success Playbook", description: "Maximize customer lifetime value. Retention strategies, upselling, and building long-term client relationships. 79 pages.", image: ebookAm, price: 69 }
  ];

  const ebookSections = [
    {
      icon: GraduationCap,
      title: "Sales Training",
      summary: {
        title: "Mastering Cold Calls: 5 Proven Scripts for Success",
        desc: "This book is a practical cold calling playbook designed for SaaS, recruitment, and e-commerce professionals. It explains why cold calling remains effective, how to structure high-quality outbound calls, and how to use five proven scripts to consistently book meetings and close deals."
      },
      books: [
        { id: "free-cold-calls", title: "Mastering Cold Calls", subtitle: "5 Proven Scripts for Success", description: "Get started with our free guide featuring 5 battle-tested cold calling scripts that consistently book meetings.", image: ebookSalesTraining, downloadUrl: "/downloads/mastering-cold-calls-free.pdf" },
        { id: "ebook-cold-calls", title: "Mastering Cold Calls", subtitle: "The Complete Cold Calling Guide", description: "The comprehensive guide with advanced scripts, objection handling frameworks, and real-world examples.", image: ebookSalesTraining, price: 29 },
        { id: "premium-sales", title: "Sales Training Masterclass", subtitle: "Complete Guide to B2B Sales Mastery", description: "The comprehensive guide covering cold calling, objection handling, closing techniques, and advanced strategies. 200+ pages with video tutorials.", price: 97 }
      ]
    },
    {
      icon: Users,
      title: "Coaching",
      summary: {
        title: "Unlocking Your Potential: One-to-One Coaching for Sales Professionals",
        desc: "This book presents a personalised one-to-one coaching framework designed to help sales professionals build confidence, sharpen skills, and accelerate career growth in competitive sales environments. It emphasises that sales success is not just about techniques, but mindset, resilience, personal branding, and consistent self-development."
      },
      books: [
        { id: "free-coaching", title: "Unlocking Your Potential", subtitle: "Introduction to 1-to-1 Sales Coaching", description: "Get started with our free introduction to effective sales coaching. Learn the foundations of personal development and self-improvement techniques.", image: ebookCoaching, downloadUrl: "/downloads/coaching-intro-free.pdf" },
        { id: "ebook-coaching", title: "Unlocking Your Potential", subtitle: "One-to-One Coaching for Sales Professionals", description: "The complete guide to 1-to-1 coaching with advanced frameworks, exercises, and actionable strategies to transform your sales performance.", image: ebookCoaching, price: 29 },
        { id: "premium-coaching", title: "Coaching Masterclass", subtitle: "Complete Transformation Program", description: "The ultimate coaching guide with 50+ exercises, worksheets, monthly planners, and advanced self-improvement frameworks. 150+ pages.", price: 97 }
      ]
    },
    {
      icon: Dumbbell,
      title: "Fitness & Wellbeing",
      summary: {
        title: "Revitalise Your Life: A 7-Day Energy Boost Plan",
        desc: "This guide is designed to help busy sales professionals reclaim their energy and focus through a practical 7-day plan. It covers simple daily habits, nutrition tips, movement exercises, and mindset shifts to help you feel revitalised, reduce stress, and perform at your best both professionally and personally."
      },
      books: [
        { id: "free-fitness", title: "Revitalise Your Life", subtitle: "A 7-Day Energy Boost Plan", description: "Get started with our free guide to boost your energy, improve focus, and feel revitalised in just 7 days.", image: ebookFitness, downloadUrl: "/downloads/fitness-7-day-free.pdf" },
        { id: "ebook-fitness", title: "Revitalise Your Life", subtitle: "Complete Energy & Wellbeing Guide", description: "The complete guide with meal plans, workout routines, mindset exercises, and a 30-day transformation programme.", image: ebookFitness, price: 29 },
        { id: "premium-fitness", title: "Peak Performance Program", subtitle: "90-Day Transformation", description: "The ultimate 90-day fitness and wellbeing transformation designed for busy sales professionals. Workout plans, meal guides, and mindset training.", price: 77 }
      ]
    },
    {
      icon: UserSearch,
      title: "Recruitment",
      summary: {
        title: "Building Your Personal Brand: A Recruitment Advantage",
        desc: "This guide teaches you how to craft a compelling personal brand that sets you apart in the recruitment industry. Learn to leverage LinkedIn, build your professional network, position yourself as an expert, and attract the career opportunities you deserve."
      },
      books: [
        { id: "free-recruitment", title: "Building Your Personal Brand", subtitle: "A Recruitment Advantage", description: "Learn how to stand out in a competitive job market by building a powerful personal brand that attracts top opportunities.", image: ebookRecruitment, downloadUrl: "/downloads/recruitment-personal-brand-free.pdf" },
        { id: "ebook-recruitment", title: "Building Your Personal Brand", subtitle: "Complete Personal Brand Blueprint", description: "The comprehensive guide with LinkedIn optimisation, networking strategies, interview preparation, and career positioning techniques.", image: ebookRecruitment, price: 29 },
        { id: "premium-recruitment", title: "Recruitment Mastery", subtitle: "Build High-Performing Teams", description: "Advanced hiring strategies, assessment frameworks, onboarding systems, and team-building techniques to recruit top talent.", price: 147 }
      ]
    }
  ];

  const handleAddToCart = (ebook) => {
    addToCart({ id: ebook.id, title: ebook.subtitle, price: ebook.price, image: ebook.id });
    toast({ title: "Added to cart!", description: `${ebook.subtitle} has been added to your cart.` });
  };

  // For the Main Bundle (£109)
const handleBuyMainBundle = () => {
  navigate("/checkout?bundle=true&bundleType=main");
};

// For the Complete Bundle (£171)
const handleBuyCompleteBundle = () => {
  navigate("/checkout?bundle=true&bundleType=complete");
};

  const handleEbookAction = (book, type) => {
    if (type === "free") {
      setSelectedEbook({ title: book.title, desc: book.subtitle, downloadUrl: book.downloadUrl });
      setEbookDialogVariant("free");
      setEbookDialogOpen(true);
    } else if (type === "paid") {
      const inCart = isInCart(book.id);
      if (inCart) {
        navigate("/checkout");
      } else {
        handleAddToCart(book);
        navigate(`/checkout?upsell=${book.id.replace('ebook-', '')}`);
      }
    } else {
      setSelectedEbook({ title: book.title, desc: book.subtitle, price: book.price });
      setEbookDialogVariant("paid");
      setEbookDialogOpen(true);
    }
  };

  return (
    <div className="antialiased text-slate-800 bg-background min-h-screen">
      {/* Sticky Cart Button - Always Visible */}
      {itemCount > 0 && (
        <div className="fixed top-24 right-6 z-50">
          <NavLink to="/checkout">
            <Button className="gradient-primary text-white shadow-xl px-6 py-3 rounded-full hover:scale-105 transition-transform">
              <ShoppingCart className="w-5 h-5 mr-2" />
              View Cart ({itemCount})
            </Button>
          </NavLink>
        </div>
      )}
      {/* Hero Section */}
      <section className="hero-bg py-16">
        <div data-aos="fade-up" className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="gradient-text">Resource Library</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Access our curated collection of free and premium resources across all areas we cover to accelerate your success.
          </p>
        </div>
      </section>

      {/* Sales Excellence Series */}
      <section data-aos="fade-up" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
              SALES EXCELLENCE SERIES
            </div>
            <h2 className="text-3xl font-bold mb-4">The Complete Sales Playbook Collection</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Master the complete sales journey - from booking meetings and beating quota as an SDR, through closing deals and scaling revenue as a BDM, to maximising retention, renewals and account growth as an Account Manager. Proven frameworks, real-world strategies, and actionable systems to accelerate your career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {mainEbooks.map((ebook, i) => (
              <EbookCard
                key={ebook.id}
                ebook={ebook}
                type="paid"
                delay={i * 150}
                isInCart={isInCart(ebook.id)}
                onAction={() => isInCart(ebook.id) ? navigate("/checkout") : handleAddToCart(ebook)}
                onRemove={() => {
                  removeFromCart(ebook.id);
                  toast({ title: "Removed from cart", description: `${ebook.subtitle} has been removed from your cart.` });
                }}
              />
            ))}
          </div>

          {/* Bundle Offer */}
          <div className="bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden" data-aos="zoom-in">
            <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-2 text-sm font-bold animate-pulse">
              🔥 LIMITED TIME OFFER - Ends Soon! 🔥
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
                  🎁 EXCLUSIVE BUNDLE - SAVE £98
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Get All 3 E-Books and Master the Complete Sales Journey</h3>
                <p className="text-indigo-100 mb-4">
                  From booking meetings as an SDR, to closing deals as a BDM, to maximising retention as an AM. Everything you need.
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded text-sm">✓ SDR Playbook (64 pages)</span>
                  <span className="bg-white/20 px-3 py-1 rounded text-sm">✓ BDM Playbook (124 pages)</span>
                  <span className="bg-white/20 px-3 py-1 rounded text-sm">✓ AM Playbook (79 pages)</span>
                </div>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-indigo-200">
                  <span>✓ Instant digital download</span>
                  <span>✓ Lifetime access</span>
                </div>
              </div>
              <div className="text-center lg:border-l lg:border-white/20 lg:pl-8">
                <div className="mb-2">
                  <span className="text-indigo-200 line-through text-xl block">£207</span>
                  <span className="text-5xl font-bold">£109</span>
                </div>
                <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-green-900 px-4 py-2 rounded-full font-bold text-sm mb-2">
                  SAVE £98 (47% OFF)
                </div>
                <p className="text-xs text-indigo-200 mb-4">⚡ Price increases when timer ends</p>
                <Button onClick={() => handleBuyMainBundle()} size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 font-semibold px-8 w-full shadow-lg">
                  Claim Your Bundle Now
                </Button>
                <p className="text-xs text-indigo-200 mt-2">🔒 Secure checkout • Instant access</p>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Free Downloads Section */}
      <section data-aos="fade-up" className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            FREE DOWNLOADS
          </div>
          <h2 className="text-3xl font-bold mb-4">Get Started with Free Resources</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Download our free guides, templates, and tools to kickstart your journey in each area.
          </p>
        </div>

        {ebookSections.map((section, idx) => (
          <div key={idx} className={idx > 0 ? "mb-12 mt-16" : "mb-12"}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <section.icon className="w-5 h-5 text-indigo-600" />
              {section.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {section.books.map((book, i) => (
                <EbookCard
                  key={book.id}
                  ebook={book}
                  type={i === 0 ? "free" : i === 1 ? "paid" : "premium-coming-soon"}
                  delay={i * 150}
                  isInCart={isInCart(book.id)}
                  onAction={() => handleEbookAction(book, i === 0 ? "free" : i === 1 ? "paid" : "premium")}
                  onRemove={() => {
                    removeFromCart(book.id);
                    toast({ title: "Removed from cart", description: `${book.subtitle} has been removed from your cart.` });
                  }}
                />
              ))}
            </div>
            <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
              <h4 className="font-bold text-lg mb-2 text-indigo-800">{section.summary.title}</h4>
              <p className="text-slate-700 text-sm leading-relaxed">{section.summary.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Bundle Offer */}
      <section data-aos="fade-up" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
            <Star className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">Complete Resource Bundle</h2>
            <p className="text-violet-100 mb-4 max-w-xl mx-auto">
              Get access to ALL 7 premium e-books at a massive discount. Everything you need to transform your career.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["SDR Playbook", "BDM Playbook", "AM Playbook", "Mastering Cold Calls", "Coaching Mastery", "Revitalise Your Life", "Personal Brand"].map(name => (
                <span key={name} className="bg-white/20 px-3 py-1 rounded text-sm">✓ {name}</span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-5xl font-bold">£171</span>
              <div className="text-left">
                <span className="text-violet-200 line-through text-lg block">£323</span>
                <span className="bg-green-400 text-green-900 px-2 py-1 rounded text-sm font-bold">SAVE 47%</span>
              </div>
            </div>
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 font-semibold px-8" onClick={() => handleBuyCompleteBundle()}>
              Get Complete Bundle - £171
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-aos="fade-up" className="gradient-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p className="mb-6">Book a free strategy call and we'll help you choose the right resources for your goals.</p>
          <NavLink to="/request">
            <button className="px-6 py-3 rounded-md bg-white text-indigo-700 font-semibold hover:bg-slate-100 transition">
              Book Your Free Call
            </button>
          </NavLink>
        </div>
      </section>

      {selectedResource && (
        <FreeResourceDialog open={dialogOpen} onOpenChange={setDialogOpen} resource={selectedResource} />
      )}

      {selectedEbook && (
        <FreeEbookDialog open={ebookDialogOpen} onOpenChange={setEbookDialogOpen} variant={ebookDialogVariant} resource={selectedEbook} />
      )}
    </div>
  );
};

export default Resources;