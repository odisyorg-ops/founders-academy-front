import { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Receipt, FileText, Calculator, Building2, PoundSterling, ClipboardCheck, CheckCircle2, ArrowRight, Shield, Zap, Target } from "lucide-react";

const Budgeting = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    { title: "VAT Returns", desc: "Accurate and timely VAT return preparation and submission to HMRC, ensuring compliance and maximizing reclaims.", icon: Receipt },
    { title: "Self Assessment", desc: "Complete self-assessment tax return preparation for individuals, sole traders, and partnerships.", icon: FileText },
    { title: "Corporation Tax", desc: "Expert corporation tax planning and returns for limited companies to minimize tax liability legally.", icon: Building2 },
    { title: "Payroll Services", desc: "Full payroll management including PAYE, National Insurance, pension auto-enrolment, and RTI submissions.", icon: PoundSterling },
    { title: "Tax Planning", desc: "Strategic tax planning to optimize your tax position and keep more of what you earn.", icon: Calculator },
    { title: "Compliance & Reporting", desc: "Ensure your business meets all statutory requirements with accurate financial reporting and compliance.", icon: ClipboardCheck },
  ];

  const benefits = [
    "Stay compliant with HMRC regulations and deadlines",
    "Minimize your tax liability through legal planning",
    "Free up time to focus on growing your sales career",
    "Expert guidance from qualified accountants",
    "Clear understanding of your tax obligations",
    "Peace of mind knowing your finances are in order",
  ];

  const packages = [
    { title: "Essential", desc: "Annual self-assessment and basic bookkeeping support.", price: "£199/mo" },
    { title: "Business", desc: "Full accounting, VAT returns, and quarterly reviews.", price: "£399/mo", special: true },
    { title: "Premium", desc: "Complete tax planning, payroll, and dedicated accountant.", price: "Contact Us", isContact: true },
  ];

  const testimonials = [
    { quote: "They saved me £8,000 in tax through legitimate planning I never knew about. The best investment for my sales career.", author: "Michael Thompson", role: "Senior Account Executive" },
    { quote: "Finally, an accountant who understands commission-based income. My tax returns are now stress-free.", author: "Jennifer Walsh", role: "Enterprise Sales Executive" },
    { quote: "The quarterly reviews keep me on track. I always know exactly where I stand with HMRC.", author: "David Adeyemi", role: "Sales Director" },
  ];

  return (
    <div className="antialiased text-slate-800 bg-background">
      {/* Sticky Sub Nav */}
      <header className="w-full border-b bg-background sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
          <Link to="hero" smooth duration={600} className="cursor-pointer hover:underline">Accountancy</Link>
          <Link to="why" smooth duration={600} className="cursor-pointer hover:underline">Why</Link>
          <Link to="services" smooth duration={600} className="cursor-pointer hover:underline">Services</Link>
          <Link to="testimonials" smooth duration={600} className="cursor-pointer hover:underline">Testimonials</Link>
          <Link to="pricing" smooth duration={600} className="cursor-pointer hover:underline">Pricing</Link>
          <NavLink to="/resources" className="hover:underline gradient-text">Resource Library</NavLink>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative bg-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-indigo-900/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80')] bg-cover bg-center opacity-30"></div>
        <div data-aos="fade-up" className="relative z-20 max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-indigo-300">Accountancy & Tax</span> Services
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Expert accounting, tax returns, and compliance services to keep your finances in perfect order.
          </p>
          <NavLink to="/request">
            <button className="px-8 py-4 rounded-md bg-white text-slate-800 font-semibold shadow-lg hover:bg-slate-100 transition">
              Get Accounting Support
            </button>
          </NavLink>
        </div>
      </section>

      {/* WHY */}
      <section id="why" data-aos="fade-up" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Proper Accounting Matters</h2>
        <p className="text-center max-w-3xl mx-auto text-slate-600">
          As a sales professional with variable income, managing your taxes can be complex. Commission payments, bonuses, and expenses all need careful tracking and reporting. Our accountancy services ensure you stay compliant with HMRC while maximizing your tax efficiency, so you can focus on what you do best: closing deals.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" data-aos="fade-up" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
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

      {/* KEY DEADLINES */}
      <section data-aos="fade-up" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Tax Deadlines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 shadow text-center" data-aos="fade-up">
              <div className="text-2xl font-bold gradient-text mb-2">31 Jan</div>
              <p className="text-sm text-slate-600">Self Assessment deadline for online returns</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-2xl font-bold gradient-text mb-2">31 July</div>
              <p className="text-sm text-slate-600">Second payment on account due</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-2xl font-bold gradient-text mb-2">Quarterly</div>
              <p className="text-sm text-slate-600">VAT returns due (if VAT registered)</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-2xl font-bold gradient-text mb-2">Monthly</div>
              <p className="text-sm text-slate-600">PAYE/NI due by 22nd each month</p>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER MARKETS SECTION */}
      <section id="other-markets" className="py-16 bg-gradient-to-br from-slate-800 to-indigo-900" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                We Support Professionals Across Multiple Industries
              </h2>
              <p className="text-slate-200 text-lg mb-6">
                While sales professionals are our specialty, our accounting expertise extends to diverse sectors and business models. We've helped clients across:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Sales & Commission Earners", "Freelancers & Contractors", "Small Business Owners", "Property Landlords", "Creative Industries", "Consultants"].map((market, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span className="text-sm">{market}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 mb-6">
                <strong className="text-white">Don't see your situation?</strong> Tax and accounting needs vary widely. We've successfully adapted our services to unique income structures and business challenges.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">Have Unique Tax Needs?</h3>
              <p className="text-slate-200 mb-6">
                Every financial situation is different. Let's explore how our expertise can be tailored to your specific circumstances and goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Free 30-minute discovery call to understand your needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Custom proposal based on your income structure</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">No obligation — just honest advice on tax efficiency</p>
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
      <section id="pricing" data-aos="fade-up" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Accountancy Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((plan: any, i) => (
              <div key={i} className={`bg-card rounded-lg shadow p-6 text-center ${plan.special ? "border-2 border-indigo-600" : ""}`} data-aos="fade-up" data-aos-delay={i * 100}>
                <h3 className="font-bold text-lg mb-2">{plan.title}</h3>
                <p className="text-slate-600 mb-4">{plan.desc}</p>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <NavLink to="/request">
                  <button className="px-4 py-2 rounded-md gradient-primary text-white hover:opacity-90 transition">
                    {plan.isContact ? "Get a Quote" : "Choose Plan"}
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
          <h2 className="text-3xl font-bold mb-4">Get Your Taxes Sorted</h2>
          <p className="mb-6">Book your free consultation and let us handle your accounting needs.</p>
          <NavLink to="/request">
            <button className="px-6 py-3 rounded-md bg-white text-indigo-700 font-semibold hover:bg-slate-100 transition">
              Book Your Free Consultation
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Budgeting;