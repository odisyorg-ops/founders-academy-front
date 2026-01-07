import { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Target, Users, Lightbulb, Rocket, BarChart3, Award, Star, CheckCircle2, ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";

const Consultancy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    { 
      title: "Sales Process Optimization", 
      desc: "Streamline your sales funnel for maximum efficiency and conversion. We analyze and improve every stage of your pipeline.", 
      icon: Target 
    },
    { 
      title: "Business Development Strategy", 
      desc: "Create actionable BD strategies tailored to your market and goals with clear roadmaps for growth.", 
      icon: Rocket 
    },
    { 
      title: "Team Training & Workshops", 
      desc: "Upskill your team with hands-on workshops and training sessions designed for real-world results.", 
      icon: Users 
    },
    { 
      title: "Go-to-Market Planning", 
      desc: "Launch products and services with a structured GTM approach that maximizes market penetration.", 
      icon: Lightbulb 
    },
    { 
      title: "Revenue Operations", 
      desc: "Align sales, marketing, and customer success for predictable, scalable growth.", 
      icon: BarChart3 
    },
    { 
      title: "Executive Coaching", 
      desc: "One-on-one coaching for sales leaders and executives to drive organizational performance.", 
      icon: Award 
    },
  ];

  const valueProps = [
    { title: "Increase Close Rate by 40%", desc: "Optimize your sales process with proven frameworks that convert more prospects.", icon: Target },
    { title: "Cut Sales Cycle in Half", desc: "Streamline your pipeline stages to move deals faster without sacrificing quality.", icon: Zap },
    { title: "Scale Predictable Revenue", desc: "Build repeatable systems that grow revenue consistently quarter over quarter.", icon: TrendingUp },
    { title: "De-Risk Your Growth", desc: "Make data-driven decisions with expert guidance that's been battle-tested.", icon: Shield },
  ];

  const benefits = [
    "Customized strategies tailored to your specific business needs",
    "Expert guidance from experienced consultants",
    "Actionable insights with clear implementation roadmaps",
    "Proven frameworks that deliver measurable results",
    "Ongoing support throughout implementation",
    "Data-driven decision making and performance tracking",
  ];

  const packages = [
    { title: "Strategy", desc: "Initial assessment and strategic roadmap development.", price: "£999" },
    { title: "Growth", desc: "Full consulting engagement with ongoing support.", price: "£2,499/mo", special: true },
    { title: "Enterprise", desc: "Comprehensive transformation with dedicated team.", price: "Custom" },
  ];

  const testimonials = [
    { quote: "Their sales process optimization increased our close rate by 40%. The ROI was evident within the first quarter.", author: "Richard Bennett", role: "CEO" },
    { quote: "The GTM strategy they developed helped us launch in 3 new markets successfully. Incredibly thorough and professional.", author: "Amanda Foster", role: "VP of Sales" },
    { quote: "Best investment we made last year. Our sales team is now operating at a completely different level.", author: "Oluwaseun Adebayo", role: "Founder" },
  ];

  return (
    <div className="antialiased text-slate-800 bg-background">
      {/* Sticky Sub Nav */}
      <header className="w-full border-b bg-background sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
          <Link to="hero" smooth duration={600} className="cursor-pointer hover:underline">Consultancy</Link>
          <Link to="pain" smooth duration={600} className="cursor-pointer hover:underline">The Problem</Link>
          <Link to="value" smooth duration={600} className="cursor-pointer hover:underline">What You Get</Link>
          <Link to="testimonials" smooth duration={600} className="cursor-pointer hover:underline">Testimonials</Link>
          <Link to="pricing" smooth duration={600} className="cursor-pointer hover:underline">Pricing</Link>
          <NavLink to="/resources" className="hover:underline gradient-text">Resource Library</NavLink>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative bg-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-indigo-900/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80')] bg-cover bg-center opacity-40"></div>
        <div data-aos="fade-up" className="relative z-20 max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                Increase Your Close Rate by 40% and Cut Sales Cycles in Half in 90 Days
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                Struggling with inconsistent revenue and stalled deals? Our consultants have helped 100+ businesses build predictable sales machines. Get the same proven frameworks working for you.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-4">
                <Link to="pricing" smooth duration={600}>
                  <button className="px-6 py-3 rounded-md bg-white text-slate-800 font-semibold shadow-lg hover:bg-slate-100 transition flex items-center gap-2">
                    View Packages <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <NavLink to="/request">
                  <button className="px-6 py-3 rounded-md bg-white text-slate-800 font-semibold shadow-lg hover:bg-slate-100 transition flex items-center gap-2">
                    Request a Consultation <ArrowRight className="w-4 h-4" />
                  </button>
                </NavLink>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-slate-500 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-medium">Trusted by Industry Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-indigo-300">£50M+</span>
                  <span>Pipeline Generated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINT SECTION */}
      <section id="pain" className="bg-slate-50 py-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Revenue Unpredictable and Deals Stalling? Your Sales Process Needs Surgery, Not Band-Aids
          </h2>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Pain Point Copy */}
              <div className="p-8">
                <p className="text-lg font-medium mb-4">Dear Business Leader,</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Is your revenue inconsistent month to month with no clear pattern?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Are deals taking forever to close while competitors move faster?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Have you tried training, new tools, and new hires but nothing sticks?</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">
                  Growing a business is hard. Growing it with broken sales processes is nearly impossible.
                </p>
                
                <p className="text-slate-600 mb-4">
                  You're putting in the hours, spending on marketing, hiring talent. But the machine isn't working.
                </p>
                
                <p className="text-slate-600 mb-4">
                  <strong>The problem isn't effort or investment.</strong>
                </p>
                
                <p className="text-slate-600 mb-6">
                  It's that you don't have a PROVEN SYSTEM designed by someone who's built and scaled sales operations before.
                </p>
                
                <p className="text-slate-700 font-medium">
                  You don't need another generic course or expensive tool. You need a consultant who understands your specific challenges, brings battle-tested frameworks, and works alongside you to implement real change.
                </p>
              </div>
              
              {/* Right Side - Framework Image */}
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-full">
                  <h3 className="text-white font-bold text-lg mb-4 text-center">Our Proven Framework</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">1</div>
                      <span className="text-white font-medium">Diagnose & Audit</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">2</div>
                      <span className="text-white font-medium">Strategy & Roadmap</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">3</div>
                      <span className="text-white font-medium">Implement & Train</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">4</div>
                      <span className="text-white font-medium">Optimize & Scale</span>
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

      {/* SERVICES */}
      <section id="services" data-aos="fade-up" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={i} 
                  className="bg-card rounded-lg shadow p-6 hover:shadow-lg transition group cursor-pointer"
                  data-aos="zoom-in" 
                  data-aos-delay={i * 100}
                >
                  <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section data-aos="fade-up" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className="flex items-start gap-3 bg-card p-4 rounded-lg shadow"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER MARKETS SECTION */}
      <section id="other-markets" className="py-16 bg-gradient-to-br from-slate-800 to-indigo-900" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                We Consult Across Multiple Industries & Markets
              </h2>
              <p className="text-slate-200 text-lg mb-6">
                While sales excellence is our foundation, our proven frameworks adapt to diverse sectors and business models. From startups to established enterprises, we've helped businesses across:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Technology & SaaS", "Financial Services", "Healthcare", "Professional Services", "Manufacturing", "E-commerce & Retail"].map((market, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span className="text-sm">{market}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 mb-6">
                <strong className="text-white">Don't see your industry?</strong> Our methodology is built to flex. We've successfully adapted our approach to niche markets and unique business challenges.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">Have a Unique Challenge?</h3>
              <p className="text-slate-200 mb-6">
                Every business is different. Let's explore how our expertise can be tailored to your specific market, goals, and growth ambitions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Free 30-minute discovery call to understand your needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Custom proposal based on your industry and objectives</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">No obligation — just honest advice on how we can help</p>
                </div>
              </div>
              <Link to="cta-section" smooth duration={600}>
                <button className="mt-6 w-full px-6 py-3 rounded-md bg-white text-indigo-700 font-semibold hover:bg-slate-100 transition flex items-center justify-center gap-2">
                  Let's Explore Together <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
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
      <section id="pricing" data-aos="fade-up" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Consulting Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((plan, i) => (
              <div key={i} className={`bg-card rounded-lg shadow p-6 text-center ${plan.special ? "border-2 border-indigo-600" : ""}`} data-aos="fade-up" data-aos-delay={i * 100}>
                <h3 className="font-bold text-lg mb-2">{plan.title}</h3>
                <p className="text-slate-600 mb-4">{plan.desc}</p>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <NavLink to="/request">
                  <button className="px-4 py-2 rounded-md gradient-primary text-white hover:opacity-90 transition">
                    Get Started
                  </button>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta-section" data-aos="fade-up" className="gradient-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build a Predictable Revenue Machine?</h2>
          <p className="mb-6 text-lg">Book your free consultation and discover how we can transform your sales operation.</p>
          <NavLink to="/request">
            <button className="px-8 py-4 rounded-md bg-white text-indigo-700 font-semibold hover:bg-slate-100 transition shadow-lg">
              Book Your Free Consultation
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Consultancy;