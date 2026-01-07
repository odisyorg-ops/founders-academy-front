import { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Users, Target, MessageCircle, TrendingUp, Award, Calendar, Compass, Shield, Zap, Star, CheckCircle2, ArrowRight } from "lucide-react";

const Coaching = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const benefits = [
    { title: "Personalized Sessions", desc: "One-to-one coaching tailored to your specific career challenges and goals.", icon: Users },
    { title: "Goal Setting", desc: "Define clear, measurable objectives and create actionable plans to achieve them.", icon: Target },
    { title: "Feedback & Guidance", desc: "Regular constructive feedback to improve your sales techniques and communication.", icon: MessageCircle },
    { title: "Performance Tracking", desc: "Monitor your progress with data-driven insights and adjust strategies accordingly.", icon: TrendingUp },
    { title: "Skill Development", desc: "Build essential sales competencies from prospecting to closing.", icon: Award },
    { title: "Flexible Scheduling", desc: "Sessions that fit your busy schedule with convenient booking options.", icon: Calendar },
  ];

  const valueProps = [
    { title: "Exceed Quota by 30%", desc: "Get personalized strategies that transform your sales performance within weeks.", icon: Target },
    { title: "Close Deals 40% Faster", desc: "Master discovery calls and objection handling to accelerate your sales cycle.", icon: Zap },
    { title: "Build Unshakeable Confidence", desc: "Develop the mindset that top performers use to handle rejection and pressure.", icon: Shield },
    { title: "Clear Path to Promotion", desc: "Create a career roadmap that positions you for your next role.", icon: TrendingUp },
  ];

  const testimonials = [
    { quote: "The 1:1 coaching sessions completely changed my sales approach. I went from struggling to hit quota to consistently exceeding it by 30%.", author: "Tom Anderson", role: "Enterprise Account Executive" },
    { quote: "My coach helped me overcome my fear of rejection and develop a winning mindset. Best investment I ever made in my career.", author: "Fatima Al-Hassan", role: "Sales Executive" },
    { quote: "The personalized feedback on my discovery calls was invaluable. I now close deals 40% faster than before.", author: "Chris Morgan", role: "Mid-Market Account Executive" },
  ];

  const packages = [
    { title: "Starter", desc: "Bi-weekly 1:1 coaching sessions with goal tracking.", price: "£349/mo" },
    { title: "Pro", desc: "Weekly sessions with call reviews and personalized action plans.", price: "£649/mo", special: true },
    { title: "Elite", desc: "Unlimited access with priority scheduling and 24/7 support.", price: "£999/mo" },
  ];

  return (
    <div className="antialiased text-slate-800 bg-background">
      {/* Sticky Sub Nav */}
      <header className="w-full border-b bg-background sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
          <Link to="hero" smooth duration={600} className="cursor-pointer hover:underline">Coaching</Link>
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
              Exceed Quota by 30% and Close Deals Faster With Personalized 1:1 Sales Coaching
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Feeling stuck in your sales career with no clear path forward? Our expert coaches work with you personally to build the skills, confidence, and strategies that transform underperformers into top closers.
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
                  Start Your Coaching Journey <ArrowRight className="w-4 h-4" />
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
          <div className="bg-card rounded-2xl p-6 shadow-lg" data-aos="fade-left">
            <h3 className="text-lg font-bold mb-4 text-center">The Coaching Journey</h3>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-3 rounded-t-lg font-semibold text-sm">
                🎯 Discovery & Goal Setting
              </div>
              <div className="w-[90%] bg-gradient-to-r from-indigo-400 to-purple-400 text-white text-center py-3 font-semibold text-sm">
                📋 Personalized Action Plan
              </div>
              <div className="w-[78%] bg-gradient-to-r from-indigo-300 to-purple-300 text-white text-center py-3 font-semibold text-sm">
                💪 Skill Building & Practice
              </div>
              <div className="w-[65%] bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-800 text-center py-3 font-semibold text-sm">
                📈 Performance Review
              </div>
              <div className="w-[50%] bg-gradient-to-r from-green-400 to-emerald-500 text-white text-center py-3 rounded-b-lg font-bold text-sm">
                ✅ Career Transformation
              </div>
            </div>
            <div className="mt-5 text-sm text-slate-600 text-center">
              <p><strong>Your journey</strong> to becoming a top performer starts here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINT SECTION */}
      <section id="pain" className="bg-slate-50 py-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Feeling Stuck While Others Get Promoted? You Need a Coach, Not Another Course
          </h2>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Pain Point Copy */}
              <div className="p-8">
                <p className="text-lg font-medium mb-4">Dear Sales Professional,</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Are you working harder than everyone else but still missing quota?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Do you feel like you've hit a ceiling and don't know how to break through?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Have you watched less experienced colleagues get promoted while you stay stuck?</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">
                  Sales is lonely. Everyone tells you to "just make more calls" but nobody shows you HOW to improve.
                </p>
                
                <p className="text-slate-600 mb-4">
                  You've tried courses, books, and podcasts. Nothing sticks.
                </p>
                
                <p className="text-slate-600 mb-4">
                  <strong>The problem isn't motivation.</strong>
                </p>
                
                <p className="text-slate-600 mb-6">
                  It's that you don't have someone in your corner who can identify YOUR specific gaps and help you fix them.
                </p>
                
                <p className="text-slate-700 font-medium">
                  You don't need more generic advice. You need a coach who's been where you are, knows what it takes to get to the next level, and will hold you accountable while you get there.
                </p>
              </div>
              
              {/* Right Side - Framework Image */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-full">
                  <h3 className="text-white font-bold text-lg mb-4 text-center">Coaching Success Framework</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">1</div>
                      <span className="text-white font-medium">Gap Analysis</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">2</div>
                      <span className="text-white font-medium">Skill Development</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">3</div>
                      <span className="text-white font-medium">Accountability</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">4</div>
                      <span className="text-white font-medium">Career Acceleration</span>
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
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our Coaching?</h2>
        <p className="text-center text-lg font-medium text-indigo-600 mb-8">
          Personalised guidance that meets you where you are.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">Tailored to You</h4>
            <p className="text-sm text-slate-600">No generic scripts. Every session is built around your unique challenges, goals, and career stage.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">Coaches Who've Done It</h4>
            <p className="text-sm text-slate-600">Learn from professionals who've closed enterprise deals, led teams, and built six-figure careers.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">Faster Results</h4>
            <p className="text-sm text-slate-600">Skip the trial and error. Get direct feedback and proven strategies that accelerate your growth.</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" data-aos="fade-up" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">What You'll Get</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const IconComponent = benefit.icon;
              return (
                <div key={i} className="bg-card rounded-lg shadow p-6 hover:shadow-lg transition text-center" data-aos="zoom-in" data-aos-delay={i * 100}>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.desc}</p>
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
                We Coach Professionals Across Multiple Roles & Industries
              </h2>
              <p className="text-slate-200 text-lg mb-6">
                While sales coaching is our specialty, our proven methods adapt to diverse roles and career stages. We've helped professionals across:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["SDRs & BDRs", "Account Executives", "Sales Managers", "Customer Success", "Business Development", "Founders & CEOs"].map((market, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-300 flex-shrink-0" />
                    <span className="text-sm">{market}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 mb-6">
                <strong className="text-white">Different role or industry?</strong> Our coaching methodology is built to flex. We've successfully adapted our approach to unique career challenges and goals.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">Have Unique Coaching Needs?</h3>
              <p className="text-slate-200 mb-6">
                Every career journey is different. Let's explore how our expertise can be tailored to your specific role, industry, and ambitions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Free 30-minute discovery call to understand your needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Custom coaching plan based on your goals</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
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
      <section id="pricing" data-aos="fade-up" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Coaching Packages</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Sales Career?</h2>
          <p className="mb-6">Book your free discovery call and find out how coaching can transform your results.</p>
          <NavLink to="/request">
            <button className="px-6 py-3 rounded-md bg-white text-indigo-700 font-semibold hover:bg-slate-100 transition">
              Book Your Free Discovery Call
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Coaching;