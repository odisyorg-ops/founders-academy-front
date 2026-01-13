import { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Dumbbell, Heart, Brain, Target, Clock, Users, Zap, Shield, Star, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";

const Fitness = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const benefits = [
    { title: "Physical Performance", desc: "Optimized workout routines designed for busy sales professionals.", icon: Dumbbell },
    { title: "Mental Clarity", desc: "Meditation and mindfulness practices to sharpen focus and reduce stress.", icon: Brain },
    { title: "Energy Management", desc: "Nutrition and sleep strategies to maintain peak energy throughout the day.", icon: Heart },
    { title: "Goal Setting", desc: "Align your fitness goals with your career ambitions for holistic success.", icon: Target },
    { title: "Time Efficiency", desc: "Quick, effective workouts that fit into your demanding schedule.", icon: Clock },
    { title: "Community Support", desc: "Join a community of like-minded professionals committed to excellence.", icon: Users },
  ];

  const valueProps = [
    { title: "Crush Full Days Without Burnout", desc: "Build the energy systems that power through 12-hour days and evening networking.", icon: Zap },
    { title: "Razor-Sharp Mental Focus", desc: "Clear the brain fog that costs you deals with proven cognitive optimization.", icon: Brain },
    { title: "Handle Pressure Like a Champion", desc: "Build physical and mental resilience that makes rejection bounce off you.", icon: Shield },
    { title: "Perform When It Matters Most", desc: "Peak when stakes are highest with conditioning that matches your ambition.", icon: TrendingUp },
  ];

  const testimonials = [
    { quote: "I went from barely making it through the day to having energy for evening networking events. My close rate improved by 25%.", author: "Mark Stevens", role: "Senior Account Executive" },
    { quote: "The mindfulness techniques helped me handle rejection so much better. My mental game is now as strong as my sales skills.", author: "Lisa Chen", role: "Enterprise SDR" },
    { quote: "Lost 15kg and gained incredible focus. I perform better in high-pressure sales situations than ever before.", author: "Daniel Otieno", role: "VP of Sales" },
  ];

  const packages = [
    { title: "Starter", desc: "Weekly fitness plan and nutrition basics.", price: "£199/mo" },
    { title: "Pro", desc: "Personalized coaching, meal plans, and weekly check-ins.", price: "£399/mo", special: true },
    { title: "Elite", desc: "Full wellness coaching with 1:1 sessions and premium support.", price: "£699/mo" },
  ];

  return (
    <div className="antialiased text-slate-800 bg-background">
      {/* Sticky Sub Nav */}
      <header className="w-full border-b bg-background sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
          <Link to="hero" smooth duration={600} className="cursor-pointer hover:underline">Fitness</Link>
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
              Build Unstoppable Energy and Mental Toughness in 12 Weeks to Dominate Your Sales Career
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Burning out by 3pm and losing focus in crucial meetings? Our fitness programs for sales professionals build the physical and mental stamina that separates top performers from everyone else.
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
                  Start Your Transformation <ArrowRight className="w-4 h-4" />
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
                <span className="font-bold text-emerald-600">10%</span>
                <span>Profits to Charity</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-lg" data-aos="fade-left">
            <h3 className="text-lg font-bold mb-4 text-center">The Wellness Journey</h3>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-3 rounded-t-lg font-semibold text-sm">
                🎯 Assessment & Goal Setting
              </div>
              <div className="w-[90%] bg-gradient-to-r from-indigo-400 to-purple-400 text-white text-center py-3 font-semibold text-sm">
                🏋️ Physical Training Plan
              </div>
              <div className="w-[78%] bg-gradient-to-r from-indigo-300 to-purple-300 text-white text-center py-3 font-semibold text-sm">
                🧠 Mental & Mindfulness
              </div>
              <div className="w-[65%] bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-800 text-center py-3 font-semibold text-sm">
                🥗 Nutrition & Recovery
              </div>
              <div className="w-[50%] bg-gradient-to-r from-green-400 to-emerald-500 text-white text-center py-3 rounded-b-lg font-bold text-sm">
                ✅ Peak Performance
              </div>
            </div>
            <div className="mt-5 text-sm text-slate-600 text-center">
              <p><strong>Transform</strong> your body and mind for career excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINT SECTION */}
      <section id="pain" className="bg-slate-50 py-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Exhausted and Foggy by Midday? Your Body Is Holding Your Career Back
          </h2>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Pain Point Copy */}
              <div className="p-8">
                <p className="text-lg font-medium mb-4">Dear Sales Professional,</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Do you crash after lunch and struggle to focus in afternoon meetings?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Are you too tired after work to network, exercise, or spend time on what matters?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Have you noticed your mental sharpness declining as stress levels rise?</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">
                  Sales is a high-performance sport. But you're trying to compete at the top level while running on empty.
                </p>
                
                <p className="text-slate-600 mb-4">
                  The long hours, constant rejection, and pressure are taking a physical toll you can feel.
                </p>
                
                <p className="text-slate-600 mb-4">
                  <strong>The issue isn't your work ethic or motivation.</strong>
                </p>
                
                <p className="text-slate-600 mb-6">
                  It's that your body and mind aren't optimized for the demands you're placing on them.
                </p>
                
                <p className="text-slate-700 font-medium">
                  You don't need to become a gym rat or spend hours meditating. You need a practical program designed specifically for busy sales professionals that builds sustainable energy, mental clarity, and resilience.
                </p>
              </div>
              
              {/* Right Side - Framework Image */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-full">
                  <h3 className="text-white font-bold text-lg mb-4 text-center">Peak Performance System</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold text-sm">1</div>
                      <span className="text-white font-medium">Energy Optimization</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold text-sm">2</div>
                      <span className="text-white font-medium">Mental Clarity</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold text-sm">3</div>
                      <span className="text-white font-medium">Stress Resilience</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold text-sm">4</div>
                      <span className="text-white font-medium">Sustained Performance</span>
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
        <h2 className="text-3xl font-bold mb-4 text-center">Why Fitness Matters for Sales Success</h2>
        <p className="text-center text-lg font-medium text-indigo-600 mb-8">
          Your body is your first sales tool. Train it accordingly.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">Unshakeable Energy</h4>
            <p className="text-sm text-slate-600">Power through full days of prospecting, meetings, and networking without burning out by 3pm.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">Razor-Sharp Focus</h4>
            <p className="text-sm text-slate-600">Clear the mental fog. Stay present in negotiations and close deals with precision.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">Built-In Resilience</h4>
            <p className="text-sm text-slate-600">Handle rejection, pressure, and long sales cycles without it taking a toll on your health.</p>
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
      <section id="other-markets" className="py-16 bg-gradient-to-br from-emerald-700 to-teal-800" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                We Support High-Performers Across Multiple Industries
              </h2>
              <p className="text-slate-200 text-lg mb-6">
                While sales professionals are our specialty, our wellness programs adapt to busy professionals across demanding industries:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Sales & Business Dev", "Finance & Banking", "Consulting", "Technology", "Legal & Law", "Entrepreneurs"].map((market, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                    <span className="text-sm">{market}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 mb-6">
                <strong className="text-white">Different profession?</strong> Our wellness approach is built to flex. We've successfully helped professionals across high-pressure careers optimize their health and performance.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">Have Unique Wellness Goals?</h3>
              <p className="text-slate-200 mb-6">
                Every body and lifestyle is different. Let's explore how our programs can be tailored to your schedule, goals, and specific challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Free 30-minute discovery call to understand your needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Custom program based on your lifestyle and goals</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">No obligation — just honest advice on how we can help</p>
                </div>
              </div>
              <Link to="cta-section" smooth duration={600}>
                <button className="mt-6 w-full px-6 py-3 rounded-md bg-white text-emerald-700 font-semibold hover:bg-slate-100 transition flex items-center justify-center gap-2">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Energy and Performance?</h2>
          <p className="mb-6">Book your free wellness consultation and start your journey to peak performance.</p>
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

export default Fitness;