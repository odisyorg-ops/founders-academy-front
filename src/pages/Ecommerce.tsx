import { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShoppingCart, TrendingUp, Globe, CreditCard, BarChart, Package, ChevronDown, Target, Zap, Star, CheckCircle2, ArrowRight, Shield } from "lucide-react";

const Ecommerce = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    { title: "Online Sales Strategy", desc: "Develop winning e-commerce strategies that drive conversions and revenue.", icon: ShoppingCart },
    { title: "Growth Marketing", desc: "Master digital marketing channels including paid ads, SEO, and social media.", icon: TrendingUp },
    { title: "Global Expansion", desc: "Scale your e-commerce business internationally with proven frameworks.", icon: Globe },
    { title: "Payment Optimization", desc: "Increase checkout conversions with optimized payment flows and options.", icon: CreditCard },
    { title: "Analytics & Insights", desc: "Make data-driven decisions with comprehensive e-commerce analytics.", icon: BarChart },
    { title: "Operations & Fulfillment", desc: "Streamline your supply chain and fulfillment for better margins.", icon: Package },
  ];

  const valueProps = [
    { title: "Increase Checkout Rate 45%", desc: "Eliminate friction points that cost you sales with conversion-optimized funnels.", icon: Target },
    { title: "4X Your Revenue in 12 Months", desc: "Proven growth frameworks that scale profitably, not just increase spend.", icon: TrendingUp },
    { title: "Acquire Customers Profitably", desc: "Master paid acquisition with strategies that deliver positive ROAS from day one.", icon: Zap },
    { title: "Build a Moat, Not Just a Store", desc: "Create defensible advantages that protect margins as you scale.", icon: Shield },
  ];

  const packages = [
    { title: "Starter", desc: "E-commerce strategy consultation and growth roadmap.", price: "£399/mo" },
    { title: "Pro", desc: "Full marketing support with conversion optimization and analytics.", price: "£799/mo", special: true },
    { title: "Elite", desc: "Complete e-commerce partnership with dedicated growth support.", price: "£1,299/mo" },
  ];

  const testimonials = [
    { quote: "Their conversion optimization strategies increased our checkout rate by 45%. Revenue jumped by £180K in just 3 months.", author: "Alex Harrison", role: "E-commerce Founder" },
    { quote: "From £50K/month to £200K/month in revenue. The growth marketing frameworks they provided were game-changing.", author: "Priya Patel", role: "E-commerce CEO" },
    { quote: "The analytics insights helped us identify where customers were dropping off. We fixed it and saw immediate results.", author: "David Chen", role: "E-commerce Director" },
  ];

  return (
    <div className="antialiased text-slate-800 bg-background">
      {/* Sticky Sub Nav */}
      <header className="w-full border-b bg-background sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
          <Link to="hero" smooth duration={600} className="cursor-pointer hover:underline">E-commerce</Link>
          <Link to="pain" smooth duration={600} className="cursor-pointer hover:underline">The Problem</Link>
          <Link to="value" smooth duration={600} className="cursor-pointer hover:underline">What You Get</Link>
          <Link to="testimonials" smooth duration={600} className="cursor-pointer hover:underline">Testimonials</Link>
          <Link to="pricing" smooth duration={600} className="cursor-pointer hover:underline">Pricing</Link>
          <NavLink to="/resources" className="hover:underline gradient-text">Resource Library</NavLink>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="hero-bg">
        <div data-aos="fade-up" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              4X Your E-commerce Revenue in 12 Months and Increase Checkout Conversions 45% With Proven Growth Systems
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Spending on ads but watching revenue plateau? Our e-commerce experts build profitable acquisition channels, optimize conversions, and create sustainable growth that doesn't rely on burning cash.
            </p>
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <Link to="pricing" smooth duration={600}>
                <button className="px-6 py-3 rounded-md text-white font-semibold shadow gradient-primary hover:opacity-90 transition flex items-center gap-2">
                  View Packages <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <NavLink to="/request">
                <button className="px-6 py-3 rounded-md text-white gradient-primary font-semibold shadow hover:opacity-90 transition flex items-center gap-2">
                  Start Your Growth Journey <ArrowRight className="w-4 h-4" />
                </button>
              </NavLink>
              <Link to="value" smooth duration={600} className="text-sm font-medium text-slate-700 hover:underline cursor-pointer">
                See what you get →
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-slate-200 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-medium">Trusted by Industry Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-indigo-600">£50M+</span>
                <span>Pipeline Generated</span>
              </div>
            </div>
          </div>
          {/* E-commerce Funnel Diagram */}
          <div className="bg-card rounded-2xl p-6 shadow-lg" data-aos="fade-left">
            <h3 className="text-center font-semibold text-lg mb-6 text-slate-700">E-commerce Sales Funnel</h3>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 rounded-t-lg text-center font-medium">
                <span className="text-sm">Traffic & Awareness</span>
                <p className="text-xs opacity-80">SEO, Ads, Social Media</p>
              </div>
              <ChevronDown className="w-5 h-5 text-indigo-400" />
              <div className="w-[85%] bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 text-center font-medium">
                <span className="text-sm">Interest & Engagement</span>
                <p className="text-xs opacity-80">Browse, Compare, Wishlist</p>
              </div>
              <ChevronDown className="w-5 h-5 text-indigo-400" />
              <div className="w-[70%] bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 text-center font-medium">
                <span className="text-sm">Add to Cart</span>
                <p className="text-xs opacity-80">Product Selection</p>
              </div>
              <ChevronDown className="w-5 h-5 text-indigo-400" />
              <div className="w-[55%] bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 text-center font-medium">
                <span className="text-sm">Checkout</span>
                <p className="text-xs opacity-80">Payment & Conversion</p>
              </div>
              <ChevronDown className="w-5 h-5 text-indigo-400" />
              <div className="w-[40%] bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-4 rounded-b-lg text-center font-medium">
                <span className="text-sm">💰 Purchase</span>
                <p className="text-xs opacity-80">Revenue & Retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINT SECTION */}
      <section id="pain" className="bg-slate-50 py-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Burning Cash on Ads With Nothing to Show? Your Funnel Is Leaking Revenue
          </h2>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Pain Point Copy */}
              <div className="p-8">
                <p className="text-lg font-medium mb-4">Dear E-commerce Owner,</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Are you spending more on ads each month but seeing the same flat revenue?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Do you watch customers add to cart and then abandon at checkout?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Have you tried agencies and courses but nothing moved the needle?</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">
                  E-commerce is a game of margins. Every percentage point in conversion is worth thousands.
                </p>
                
                <p className="text-slate-600 mb-4">
                  But you're guessing at what works instead of knowing for certain.
                </p>
                
                <p className="text-slate-600 mb-4">
                  <strong>The problem isn't your product or your ads.</strong>
                </p>
                
                <p className="text-slate-600 mb-6">
                  It's that you don't have a DATA-DRIVEN system to identify leaks and optimize every step.
                </p>
                
                <p className="text-slate-700 font-medium">
                  You don't need to spend more on acquisition. You need to convert more of the traffic you already have, increase average order value, and build retention that turns one-time buyers into repeat customers.
                </p>
              </div>
              
              {/* Right Side - Framework Image */}
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-8 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-full">
                  <h3 className="text-white font-bold text-lg mb-4 text-center">Revenue Growth Framework</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold text-sm">1</div>
                      <span className="text-white font-medium">Traffic Optimization</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold text-sm">2</div>
                      <span className="text-white font-medium">Conversion Boost</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold text-sm">3</div>
                      <span className="text-white font-medium">AOV Increase</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold text-sm">4</div>
                      <span className="text-white font-medium">Retention & LTV</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section id="value" className="py-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">What You'll Achieve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, i) => {
              const IconComponent = prop.icon;
              return (
                <div key={i} className="bg-card rounded-lg shadow p-6 hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay={i * 100}>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{prop.title}</h3>
                  <p className="text-slate-600 text-sm">{prop.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" data-aos="fade-up" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Why E-commerce Expertise Matters</h2>
        <p className="text-center text-lg font-medium text-indigo-600 mb-8">
          A website isn't a business. Strategy is.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">Convert Browsers to Buyers</h4>
            <p className="text-sm text-slate-600">Traffic means nothing without conversions. We optimise every step of the funnel to maximise revenue.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">Scale Profitably</h4>
            <p className="text-sm text-slate-600">Grow without burning cash. Learn how to acquire customers at sustainable costs that protect your margins.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">Stay Ahead of the Curve</h4>
            <p className="text-sm text-slate-600">E-commerce moves fast. Get strategies that work today, not tactics from three years ago.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" data-aos="fade-up" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div key={i} className="bg-card rounded-lg shadow p-6 hover:shadow-lg transition text-center" data-aos="zoom-in" data-aos-delay={i * 100}>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-6xl mx-auto px-6 py-12" data-aos="fade-up">
        <h3 className="text-xl font-bold mb-6">What Our Clients Say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testi, idx) => (
            <blockquote key={idx} className="p-6 bg-slate-50 rounded-lg" data-aos="fade-up">
              "{testi.quote}"
              <footer className="mt-3">
                <p className="font-semibold text-sm">{testi.author}</p>
                <p className="text-xs text-indigo-600">{testi.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" data-aos="fade-up" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((plan, i) => (
              <div key={i} className={`bg-card rounded-lg shadow p-6 text-center ${plan.special ? "border-2 border-indigo-600" : ""}`} data-aos="fade-up" data-aos-delay={i * 100}>
                <h3 className="font-bold text-lg mb-2">{plan.title}</h3>
                <p className="text-slate-600 mb-4">{plan.desc}</p>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <NavLink to="/request">
                  <button className="px-4 py-2 rounded-md gradient-primary text-white hover:opacity-90 transition">
                    Choose Plan
                  </button>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-aos="fade-up" className="gradient-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your E-commerce Business?</h2>
          <p className="mb-6">Book your free strategy call and discover how we can help you grow online sales.</p>
          <NavLink to="/request">
            <button className="px-6 py-3 rounded-md bg-white text-indigo-700 font-semibold hover:bg-slate-100 transition">
              Book Your Free Strategy Call
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;