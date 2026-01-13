import { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { UserSearch, Users, Target, Award, TrendingUp, Briefcase, ChevronDown, Star, CheckCircle2, ArrowRight, Shield, Zap } from "lucide-react";

const Recruitment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    { title: "Talent Sourcing", desc: "Find top-tier sales talent using advanced sourcing strategies and networks.", icon: UserSearch },
    { title: "Interview Excellence", desc: "Master interview techniques to identify high-performers and culture fits.", icon: Users },
    { title: "Hiring Strategy", desc: "Develop data-driven hiring processes that reduce time-to-hire and improve quality.", icon: Target },
    { title: "Employer Branding", desc: "Build a compelling employer brand that attracts the best candidates.", icon: Award },
    { title: "Team Scaling", desc: "Strategies for rapidly scaling your sales team while maintaining quality.", icon: TrendingUp },
    { title: "Onboarding Systems", desc: "Create onboarding processes that get new hires productive faster.", icon: Briefcase },
  ];

  const valueProps = [
    { title: "Reduce Bad Hires by 70%", desc: "Interview frameworks that identify true high-performers before you make an offer.", icon: Target },
    { title: "Cut Time-to-Hire in Half", desc: "Streamlined processes that fill roles faster without sacrificing quality.", icon: Zap },
    { title: "Build a Talent Pipeline", desc: "Attract top candidates organically so you're never scrambling to fill roles.", icon: Users },
    { title: "Scale Without Breaking", desc: "Grow your team 5x while maintaining culture and performance standards.", icon: TrendingUp },
  ];

  const packages = [
    { title: "Starter", desc: "Recruitment strategy consultation and basic frameworks.", price: "£499/mo" },
    { title: "Pro", desc: "Full recruitment support with interview coaching and hiring playbooks.", price: "£899/mo", special: true },
    { title: "Elite", desc: "End-to-end recruitment partnership with dedicated support.", price: "£1,499/mo" },
  ];

  const testimonials = [
    { quote: "Their interview frameworks helped us reduce bad hires by 70%. The quality of candidates we bring in now is exceptional.", author: "Sarah Thompson", role: "VP of Sales" },
    { quote: "We scaled our sales team from 5 to 25 in 6 months with their guidance. Every hire has been a performer.", author: "James Okonkwo", role: "Founder & CEO" },
    { quote: "The talent sourcing strategies they taught us completely transformed our hiring pipeline. We now attract top talent organically.", author: "Emma Richards", role: "Head of People" },
  ];

  return (
    <div className="antialiased text-slate-800 bg-background">
      {/* Sticky Sub Nav */}
      <header className="w-full border-b bg-background sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
          <Link to="hero" smooth duration={600} className="cursor-pointer hover:underline">Recruitment</Link>
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
              Reduce Bad Hires by 70% and Scale Your Sales Team 5x Faster With Proven Recruitment Systems
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Tired of bad hires killing your team's momentum and wasting months of training? Our recruitment frameworks help you identify A-players before you make an offer and build high-performing teams that scale.
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
                  Get Recruitment Support <ArrowRight className="w-4 h-4" />
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
          {/* Recruitment Funnel Diagram */}
          <div className="bg-card rounded-2xl p-6 shadow-lg" data-aos="fade-left">
            <h3 className="text-center font-semibold text-lg mb-6 text-slate-700">Recruitment Funnel</h3>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 rounded-t-lg text-center font-medium">
                <span className="text-sm">Sourcing</span>
                <p className="text-xs opacity-80">Job Ads, LinkedIn, Referrals</p>
              </div>
              <ChevronDown className="w-5 h-5 text-indigo-400" />
              <div className="w-[85%] bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 text-center font-medium">
                <span className="text-sm">Screening</span>
                <p className="text-xs opacity-80">CV Review & Initial Call</p>
              </div>
              <ChevronDown className="w-5 h-5 text-indigo-400" />
              <div className="w-[70%] bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 text-center font-medium">
                <span className="text-sm">Interviews</span>
                <p className="text-xs opacity-80">Skills & Culture Fit</p>
              </div>
              <ChevronDown className="w-5 h-5 text-indigo-400" />
              <div className="w-[55%] bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 text-center font-medium">
                <span className="text-sm">Offer</span>
                <p className="text-xs opacity-80">Negotiation & Terms</p>
              </div>
              <ChevronDown className="w-5 h-5 text-indigo-400" />
              <div className="w-[40%] bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-4 rounded-b-lg text-center font-medium">
                <span className="text-sm">🎯 Hire</span>
                <p className="text-xs opacity-80">Onboarding & Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINT SECTION */}
      <section id="pain" className="bg-slate-50 py-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Bad Hires Costing You Months and Thousands? Your Interview Process Is the Problem
          </h2>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Pain Point Copy */}
              <div className="p-8">
                <p className="text-lg font-medium mb-4">Dear Hiring Manager,</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Are you hiring people who interview well but underperform once they start?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Does it feel like you're always scrambling to fill positions instead of building ahead?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Have bad hires damaged team morale and set your growth back months?</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">
                  One bad hire costs 3-6 months of salary, training time, and team disruption. Multiply that across a year and it's devastating.
                </p>
                
                <p className="text-slate-600 mb-4">
                  You need great people yesterday. But rushing leads to mistakes.
                </p>
                
                <p className="text-slate-600 mb-4">
                  <strong>The problem isn't the talent pool.</strong>
                </p>
                
                <p className="text-slate-600 mb-6">
                  It's that you don't have a SYSTEMATIC process to identify true high-performers before they join.
                </p>
                
                <p className="text-slate-700 font-medium">
                  You don't need to lower your standards or pay recruiters 20% fees. You need proven interview frameworks and sourcing strategies that attract A-players and filter out the rest.
                </p>
              </div>
              
              {/* Right Side - Framework Image */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-full">
                  <h3 className="text-white font-bold text-lg mb-4 text-center">Hiring Excellence Framework</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">1</div>
                      <span className="text-white font-medium">Talent Sourcing</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">2</div>
                      <span className="text-white font-medium">Interview Framework</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">3</div>
                      <span className="text-white font-medium">Performance Validation</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">4</div>
                      <span className="text-white font-medium">Onboarding Success</span>
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

      {/* OTHER MARKETS SECTION */}
      <section id="other-markets" className="py-16 bg-gradient-to-br from-indigo-700 to-purple-800" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                We Recruit Across Multiple Industries & Roles
              </h2>
              <p className="text-slate-200 text-lg mb-6">
                While sales recruitment is our specialty, our proven frameworks adapt to diverse roles and sectors. We've helped businesses hire across:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["SaaS & Technology", "Financial Services", "Healthcare & Pharma", "Professional Services", "Manufacturing", "Retail & E-commerce"].map((market, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-300 flex-shrink-0" />
                    <span className="text-sm">{market}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 mb-6">
                <strong className="text-white">Don't see your industry?</strong> Our recruitment methodology is built to flex. We've successfully adapted our approach to niche markets and specialized roles.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">Have Unique Hiring Needs?</h3>
              <p className="text-slate-200 mb-6">
                Every team is different. Let's explore how our expertise can be tailored to your specific roles, culture, and growth ambitions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Free 30-minute discovery call to understand your needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Custom proposal based on your industry and role requirements</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">No obligation — just honest advice on how we can help</p>
                </div>
              </div>
              <Link to="cta-section" smooth duration={600}>
                <button className="mt-6 w-full px-6 py-3 rounded-md bg-white text-purple-700 font-semibold hover:bg-slate-100 transition flex items-center justify-center gap-2">
                  Let's Explore Together <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* <section id="testimonials" className="max-w-6xl mx-auto px-6 py-12" data-aos="fade-up">
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
      </section> */}

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
      <section id="cta-section" data-aos="fade-up" className="gradient-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Sales Team?</h2>
          <p className="mb-6">Book your free consultation and discover how we can transform your hiring process.</p>
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

export default Recruitment;