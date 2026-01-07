import { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Handshake, Lightbulb, Shield, Compass, Clock, Heart, Users, TrendingUp, Star, CheckCircle2, ArrowRight, Zap, Target } from "lucide-react";

const Mentorship = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const benefits = [
    { title: "Experienced Guidance", desc: "Learn from mentors who have achieved 6-figure success and scaled their careers.", icon: Handshake },
    { title: "Career Navigation", desc: "Get advice on career decisions, promotions, and transitioning to higher-paying roles.", icon: Compass },
    { title: "Wisdom & Insight", desc: "Benefit from years of industry experience and avoid common pitfalls.", icon: Lightbulb },
    { title: "Safe Space", desc: "Discuss challenges openly in a confidential, supportive environment.", icon: Shield },
    { title: "Long-term Support", desc: "Build a lasting relationship with ongoing guidance throughout your career.", icon: Clock },
    { title: "Personal Development", desc: "Grow not just professionally but personally with holistic mentorship.", icon: Heart },
  ];

  const valueProps = [
    { title: "Double Your OTE in 18 Months", desc: "Get the career strategies that accelerate your path to 6-figure earnings.", icon: TrendingUp },
    { title: "Access Their Network", desc: "Get warm introductions to decision-makers and opportunities you'd never find alone.", icon: Users },
    { title: "Skip a Decade of Mistakes", desc: "Learn from their failures so you don't have to make the same expensive errors.", icon: Shield },
    { title: "An Advocate in Your Corner", desc: "Have someone genuinely invested in your success who will champion your career.", icon: Heart },
  ];

  const testimonials = [
    { quote: "Having a mentor who had been in my exact position was invaluable. They helped me navigate a promotion that doubled my OTE.", author: "Rebecca Foster", role: "Regional Sales Director" },
    { quote: "The network access alone was worth it. My mentor introduced me to three people who became pivotal in my career journey.", author: "David Nkrumah", role: "VP of Sales" },
    { quote: "I went from individual contributor to team lead in 8 months. The guidance on leadership transition was exactly what I needed.", author: "Jessica Park", role: "Sales Team Lead" },
  ];

  const packages = [
    { title: "Starter", desc: "Monthly mentorship sessions with career guidance.", price: "£299/mo" },
    { title: "Pro", desc: "Bi-weekly sessions with career planning and network access.", price: "£549/mo", special: true },
    { title: "Elite", desc: "Weekly mentorship with full career support and introductions.", price: "£899/mo" },
  ];

  return (
    <div className="antialiased text-slate-800 bg-background">
      {/* Sticky Sub Nav */}
      <header className="w-full border-b bg-background sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
          <Link to="hero" smooth duration={600} className="cursor-pointer hover:underline">Mentorship</Link>
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
              Reach 6 Figures in 18 Months With a Mentor Who Has Already Done It
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Tired of figuring everything out alone while watching others accelerate past you? Our mentors have walked your exact path and will give you the roadmap, connections, and wisdom to reach your goals years faster.
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
                  Find Your Mentor <ArrowRight className="w-4 h-4" />
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
            <h3 className="text-lg font-bold mb-4 text-center">The Mentorship Journey</h3>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-3 rounded-t-lg font-semibold text-sm">
                🎯 Discovery & Goal Alignment
              </div>
              <div className="w-[90%] bg-gradient-to-r from-indigo-400 to-purple-400 text-white text-center py-3 font-semibold text-sm">
                🧭 Career Navigation & Strategy
              </div>
              <div className="w-[78%] bg-gradient-to-r from-indigo-300 to-purple-300 text-white text-center py-3 font-semibold text-sm">
                💡 Knowledge & Skill Transfer
              </div>
              <div className="w-[65%] bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-800 text-center py-3 font-semibold text-sm">
                🤝 Network & Connections
              </div>
              <div className="w-[50%] bg-gradient-to-r from-green-400 to-emerald-500 text-white text-center py-3 rounded-b-lg font-bold text-sm">
                ✅ Career Advancement
              </div>
            </div>
            <div className="mt-5 text-sm text-slate-600 text-center">
              <p><strong>Your path</strong> to career success with experienced guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINT SECTION */}
      <section id="pain" className="bg-slate-50 py-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Feeling Lost in Your Career? The Right Mentor Can Change Everything
          </h2>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Pain Point Copy */}
              <div className="p-8">
                <p className="text-lg font-medium mb-4">Dear Ambitious Professional,</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Are you unsure what move to make next in your career?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Do you lack the connections and insider knowledge that others seem to have?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Have you been making decisions alone without anyone to validate your thinking?</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">
                  The difference between a 5-year grind and a 2-year sprint to success is often just one thing: the right mentor.
                </p>
                
                <p className="text-slate-600 mb-4">
                  You see people with half your talent getting twice the opportunities. It's not luck. It's who they know.
                </p>
                
                <p className="text-slate-600 mb-4">
                  <strong>The gap isn't your ability.</strong>
                </p>
                
                <p className="text-slate-600 mb-6">
                  It's that you don't have someone who's already been where you want to go, showing you the shortcuts.
                </p>
                
                <p className="text-slate-700 font-medium">
                  You don't need another course or certification. You need a relationship with someone who genuinely cares about your success and has the experience, network, and wisdom to help you get there faster.
                </p>
              </div>
              
              {/* Right Side - Framework Image */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-full">
                  <h3 className="text-white font-bold text-lg mb-4 text-center">Mentorship Success Path</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">1</div>
                      <span className="text-white font-medium">Goal Alignment</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">2</div>
                      <span className="text-white font-medium">Knowledge Transfer</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">3</div>
                      <span className="text-white font-medium">Network Access</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">4</div>
                      <span className="text-white font-medium">Career Breakthrough</span>
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
        <h2 className="text-3xl font-bold mb-4 text-center">Why Mentorship Matters</h2>
        <p className="text-center text-lg font-medium text-indigo-600 mb-8">
          Learn from those who've already walked the path.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">Fast-Track Your Growth</h4>
            <p className="text-sm text-slate-600">Avoid years of trial and error. Learn the shortcuts that took your mentor a decade to discover.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">Access Their Network</h4>
            <p className="text-sm text-slate-600">Get introductions to decision-makers and industry connections that open doors.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold mb-2">An Advocate in Your Corner</h4>
            <p className="text-sm text-slate-600">More than advice - a champion who's genuinely invested in seeing you succeed.</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" data-aos="fade-up" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">What Mentorship Provides</h2>
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
                We Mentor Professionals Across Multiple Industries & Career Stages
              </h2>
              <p className="text-slate-200 text-lg mb-6">
                While sales mentorship is our foundation, our experienced mentors come from diverse backgrounds and can guide professionals across:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Technology & SaaS", "Financial Services", "Professional Services", "Healthcare & Pharma", "Media & Advertising", "Startups & Founders"].map((market, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-300 flex-shrink-0" />
                    <span className="text-sm">{market}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 mb-6">
                <strong className="text-white">Different industry or career path?</strong> Our mentorship approach is built to flex. We've successfully guided professionals through unique career transitions and challenges.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">Have Unique Mentorship Needs?</h3>
              <p className="text-slate-200 mb-6">
                Every career journey is different. Let's explore how the right mentor can be matched to your specific industry, goals, and ambitions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Free 30-minute discovery call to understand your needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-200 text-sm">Mentor matching based on your industry and goals</p>
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
        <h3 className="text-xl font-bold mb-6">What Our Mentees Say</h3>
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
          <h2 className="text-3xl font-bold mb-10 text-center">Mentorship Packages</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Learn from the Best?</h2>
          <p className="mb-6">Connect with a mentor who can help you reach your 6-figure goals faster.</p>
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

export default Mentorship;