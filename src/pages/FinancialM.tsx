import { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { BookOpen, LineChart, PiggyBank, TrendingUp, Calculator, FileSpreadsheet, Star, CheckCircle2, ArrowRight, Shield, Zap, Target } from "lucide-react";

const FinancialM = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    { 
      title: "Book Keeping", 
      desc: "Efficient daily management of your accounts. From everyday accounting tasks to VAT and Tax returns, we handle it all.", 
      icon: BookOpen 
    },
    { 
      title: "Management Accounting", 
      desc: "Professional & informative management accounting packs that give you clear visibility into your business performance.", 
      icon: FileSpreadsheet 
    },
    { 
      title: "Budgeting", 
      desc: "Tailored budgeting solutions to optimize resource allocation and financial control for your business.", 
      icon: PiggyBank 
    },
    { 
      title: "Forecasting", 
      desc: "Accurate financial predictions for strategic planning and decision-making. Anticipate trends and plan for various scenarios.", 
      icon: TrendingUp 
    },
    { 
      title: "Financial Modelling", 
      desc: "Dynamic financial models that provide insights for informed business decisions with accurate and detailed projections.", 
      icon: Calculator 
    },
    { 
      title: "Accountancy & Tax", 
      desc: "Complete accounting services including VAT returns, tax planning, and compliance to keep your finances in order.", 
      icon: LineChart 
    },
  ];

  const valueProps = [
    { title: "Secure Funding Up to £2M", desc: "Get investor-ready financial models that open doors to serious capital.", icon: TrendingUp },
    { title: "Save 15+ Hours Monthly", desc: "Outsource your bookkeeping and financial admin to experts who do it right.", icon: Zap },
    { title: "Cut Tax Bills Legally", desc: "Smart tax planning strategies that keep more money in your pocket.", icon: PiggyBank },
    { title: "Make Confident Decisions", desc: "Crystal-clear financial visibility that removes guesswork from strategy.", icon: Shield },
  ];

  const benefits = [
    "Customized solutions tailored to your specific business needs",
    "Expert guidance from experienced finance professionals",
    "Clear visibility into your financial performance",
    "Strategic insights for better decision-making",
    "Optimized resource allocation and cost control",
    "Anticipate future trends and mitigate risks",
  ];

  const testimonials = [
    { quote: "Their financial modelling helped us secure £2M in funding. The investors were impressed by the quality of our projections.", author: "Thomas Wright", role: "CEO" },
    { quote: "The management accounting reports they provide give me complete visibility into our business. Game-changing insights.", author: "Claire Robertson", role: "CFO" },
    { quote: "We reduced our costs by 18% through their budgeting optimization. Highly recommend for any growing business.", author: "Ahmed Hassan", role: "Managing Director" },
  ];

  return (
    <div className="antialiased text-slate-800 bg-background">
      {/* Sticky Sub Nav */}
      <header className="w-full border-b bg-background sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
          <Link to="hero" smooth duration={600} className="cursor-pointer hover:underline">FP&A</Link>
          <Link to="pain" smooth duration={600} className="cursor-pointer hover:underline">The Problem</Link>
          <Link to="value" smooth duration={600} className="cursor-pointer hover:underline">What You Get</Link>
          <Link to="testimonials" smooth duration={600} className="cursor-pointer hover:underline">Testimonials</Link>
          <Link to="services" smooth duration={600} className="cursor-pointer hover:underline">Services</Link>
          <NavLink to="/resources" className="hover:underline gradient-text">Resource Library</NavLink>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative bg-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-indigo-900/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center opacity-40"></div>
        <div data-aos="fade-up" className="relative z-20 max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                Get Investor-Ready Financials and Save 15+ Hours Monthly With Expert FP&A Support
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                Drowning in spreadsheets while missing opportunities? Our financial planning experts give you the clarity, models, and strategy to secure funding, cut costs, and scale with confidence.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-4">
                <Link to="services" smooth duration={600}>
                  <button className="px-6 py-3 rounded-md bg-white text-slate-800 font-semibold shadow-lg hover:bg-slate-100 transition flex items-center gap-2">
                    View Services <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <NavLink to="/request">
                  <button className="px-6 py-3 rounded-md bg-white text-slate-800 font-semibold shadow-lg hover:bg-slate-100 transition flex items-center gap-2">
                    Get Financial Clarity <ArrowRight className="w-4 h-4" />
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
                  <span className="font-bold text-emerald-400">10%</span>
                  <span>Profits to Charity</span>
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
            Flying Blind on Finances? Your Growth Is Being Held Hostage by Bad Data
          </h2>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Pain Point Copy */}
              <div className="p-8">
                <p className="text-lg font-medium mb-4">Dear Business Owner,</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Are you making major decisions without accurate financial data?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Do investors or lenders keep asking for projections you don't have?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Are you spending hours on bookkeeping instead of growing the business?</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">
                  Running a business is hard enough. Doing it without financial visibility is like driving blindfolded.
                </p>
                
                <p className="text-slate-600 mb-4">
                  You know the numbers matter, but you're too busy operating to get them right.
                </p>
                
                <p className="text-slate-600 mb-4">
                  <strong>The problem isn't that you don't care about finances.</strong>
                </p>
                
                <p className="text-slate-600 mb-6">
                  It's that you don't have the TIME or EXPERTISE to build the systems that give you control.
                </p>
                
                <p className="text-slate-700 font-medium">
                  You don't need to become a finance expert. You need a partner who handles the complexity while giving you the insights you need to make confident decisions and attract investment.
                </p>
              </div>
              
              {/* Right Side - Framework Image */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-8 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-full">
                  <h3 className="text-white font-bold text-lg mb-4 text-center">Financial Clarity Framework</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-slate-700 flex items-center justify-center font-bold text-sm">1</div>
                      <span className="text-white font-medium">Data Organization</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-slate-700 flex items-center justify-center font-bold text-sm">2</div>
                      <span className="text-white font-medium">Forecasting & Modeling</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-slate-700 flex items-center justify-center font-bold text-sm">3</div>
                      <span className="text-white font-medium">Investor Readiness</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-slate-700 flex items-center justify-center font-bold text-sm">4</div>
                      <span className="text-white font-medium">Strategic Decisions</span>
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
      <section id="benefits" data-aos="fade-up" className="py-16">
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
      <section id="other-markets" className="py-16 bg-gradient-to-br from-slate-800 to-slate-900" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                We Support Businesses Across Multiple Industries
              </h2>
              <p className="text-slate-200 text-lg mb-6">
                While our financial expertise is our foundation, our proven systems adapt to diverse sectors and business models. From startups to established enterprises, we've helped businesses across:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Technology & SaaS", "Professional Services", "E-commerce & Retail", "Healthcare", "Manufacturing", "Hospitality"].map((market, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm">{market}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 mb-6">
                <strong className="text-white">Don't see your industry?</strong> Our financial frameworks are built to flex. We've successfully adapted our approach to niche markets and unique business challenges.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">Have Unique Financial Needs?</h3>
              <p className="text-slate-200 mb-6">
                Every business is different. Let's explore how our expertise can be tailored to your specific industry, goals, and growth ambitions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Free 30-minute discovery call to understand your needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Custom proposal based on your industry and objectives</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">No obligation — just honest advice on how we can help</p>
                </div>
              </div>
              <Link to="cta-section" smooth duration={600}>
                <button className="mt-6 w-full px-6 py-3 rounded-md bg-white text-slate-800 font-semibold hover:bg-slate-100 transition flex items-center justify-center gap-2">
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

      {/* WHO THIS IS FOR */}
      <section data-aos="fade-up" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Who This Is For</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 shadow" data-aos="fade-right">
              <h3 className="font-semibold text-lg mb-3">For Growing Startups</h3>
              <p className="text-slate-600 text-sm">
                Need investor-ready projections and financial models? We build the financial foundation that gets you funded.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow" data-aos="fade-left">
              <h3 className="font-semibold text-lg mb-3">For Established Businesses</h3>
              <p className="text-slate-600 text-sm">
                Want better visibility and cost control? Our management accounting and forecasting give you the insights to scale smartly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta-section" data-aos="fade-up" className="gradient-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Take Control of Your Financial Future</h2>
          <p className="mb-6 text-lg">Book your free consultation and discover how we can transform your financial operations.</p>
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

export default FinancialM;