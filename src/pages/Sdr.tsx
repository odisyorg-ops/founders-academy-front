import { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star, Phone, Target, TrendingUp, Users, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

const Sdr = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const framework = [
    ["Prospecting & Lead Gen", "LinkedIn Sales Navigator, social selling, organic leads, and building a repeatable outreach system."],
    ["Metrics & Analytics", "Simple Excel KPIs, tracking templates, and A/B testing for outreach sequences."],
    ["Communication & Meetings", "Meeting agendas, value-first messaging, and follow-up cadences (2–3 day sequences)."],
    ["Pitch & Role Play", "Elevator pitch craft, role play sessions, feedback loops, and speed & tone training."],
    ["Cold Calling Confidence", "Scripts, objection handling, live call shadowing and fear-management techniques."],
    ["Growth & Resources", "Mentorship, book & podcast recommendations, and a growth mindset plan tailored to you."],
  ];

  const valueProps = [
    { title: "Book 30% More Meetings", desc: "Master proven cold outreach scripts that get prospects to say yes in 14 days.", icon: Phone },
    { title: "Crush Call Anxiety Forever", desc: "Transform fear into confidence with live call shadowing and real-time feedback.", icon: Target },
    { title: "Hit Quota Consistently", desc: "Build a predictable pipeline system that delivers results month after month.", icon: TrendingUp },
    { title: "Get Promoted Faster", desc: "Develop the skills and track record that fast-tracks you to AE or leadership roles.", icon: Users },
  ];

  const testimonials = [
    { quote: "After 4 weeks of coaching, I booked more meetings than the previous 3 months combined. The cold call scripts alone were worth it.", author: "Marcus Thompson", role: "Sales Development Representative" },
    { quote: "The live call reviews completely transformed my approach. I went from dreading cold calls to actually enjoying them.", author: "Emily Chen", role: "Sales Development Representative" },
    { quote: "My cold-calling confidence doubled - and so did my pipeline. I hit 150% of quota last quarter.", author: "Daniel Osei", role: "SDR Team Lead" },
  ];

  return (
    <div className="antialiased text-slate-800 bg-background">
      {/* NAV */}
      <header className="w-full border-b bg-background sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
          <Link to="hero" smooth duration={600} className="cursor-pointer hover:underline">SDR Mentor</Link>
          <Link to="pain" smooth duration={600} className="cursor-pointer hover:underline">The Problem</Link>
          <Link to="value" smooth duration={600} className="cursor-pointer hover:underline">What You Get</Link>
          <Link to="testimonials" smooth duration={600} className="cursor-pointer hover:underline">Testimonials</Link>
          <Link to="pricing" smooth duration={600} className="cursor-pointer hover:underline">Pricing</Link>
          <NavLink to="/resources" className="hover:underline gradient-text">Resource Library</NavLink>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="hero-bg">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Book 30% More Meetings and Hit Quota in 6 Weeks Using Our Proven Cold Calling System
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Tired of dreading every cold call and watching your pipeline dry up? Our 1:1 SDR coaching gives you the scripts, confidence, and daily structure to consistently hit quota and get promoted faster.
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
                <button className="px-6 py-3 rounded-md text-white font-semibold shadow gradient-primary hover:opacity-90 transition flex items-center gap-2">
                  Get Your Free Strategy Call <ArrowRight className="w-4 h-4" />
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
            <h3 className="text-lg font-bold mb-4 text-center">The SDR Success Funnel</h3>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-3 rounded-t-lg font-semibold text-sm">
                🎯 Prospecting & Lead Generation
              </div>
              <div className="w-[90%] bg-gradient-to-r from-indigo-400 to-purple-400 text-white text-center py-3 font-semibold text-sm">
                📞 Cold Outreach & Calls
              </div>
              <div className="w-[78%] bg-gradient-to-r from-indigo-300 to-purple-300 text-white text-center py-3 font-semibold text-sm">
                💬 Qualifying Conversations
              </div>
              <div className="w-[65%] bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-800 text-center py-3 font-semibold text-sm">
                📅 Meetings Booked
              </div>
              <div className="w-[50%] bg-gradient-to-r from-green-400 to-emerald-500 text-white text-center py-3 rounded-b-lg font-bold text-sm">
                ✅ Qualified Pipeline
              </div>
            </div>
            <div className="mt-5 text-sm text-slate-600 text-center">
              <p><strong>Master each stage</strong> to consistently hit your targets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINT SECTION */}
      <section id="pain" className="bg-slate-50 py-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Struggling to Book Meetings? It's Not Your Fault, It's Your System
          </h2>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Pain Point Copy */}
              <div className="p-8">
                <p className="text-lg font-medium mb-4">Dear Sales Development Rep,</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Do you dread picking up the phone because rejection hurts every single time?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Are you sending hundreds of emails but barely getting any responses?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Have you tried every script online but nothing seems to work?</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">
                  We get it. The pressure to hit quota is real.
                </p>
                
                <p className="text-slate-600 mb-4">
                  You watch other reps book meetings while your calendar stays empty. You wonder if you're just not cut out for sales.
                </p>
                
                <p className="text-slate-600 mb-4">
                  <strong>But here's the truth:</strong> Most SDRs fail not because they lack talent.
                </p>
                
                <p className="text-slate-600 mb-6">
                  They fail because they don't have a PROVEN SYSTEM.
                </p>
                
                <p className="text-slate-700 font-medium">
                  You don't need to make 200 calls a day hoping something sticks. You don't need generic scripts that sound robotic. You need a personalised approach that builds real confidence and gets real results within weeks, not months.
                </p>
              </div>
              
              {/* Right Side - Framework Image */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-full">
                  <h3 className="text-white font-bold text-lg mb-4 text-center">SDR Success Framework</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">1</div>
                      <span className="text-white font-medium">Script Mastery</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">2</div>
                      <span className="text-white font-medium">Confidence Building</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">3</div>
                      <span className="text-white font-medium">Pipeline Systems</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-sm">4</div>
                      <span className="text-white font-medium">Consistent Results</span>
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

      {/* WHAT YOU'LL LEARN */}
      <section id="learn" className="bg-card border-t" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-6">A Proven Framework for SDR Success</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {framework.map(([title, desc], idx) => (
              <article key={idx} className="p-6 bg-slate-50 rounded-lg" data-aos="zoom-in">
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-sm text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO FOR */}
      <section className="bg-slate-50" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-lg font-bold mb-4">Who this is for</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-lg shadow">
              <h4 className="font-semibold">New SDRs</h4>
              <p className="text-sm text-slate-600">Start strong with proven frameworks.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow">
              <h4 className="font-semibold">Struggling Reps</h4>
              <p className="text-sm text-slate-600">Get consistent results with structure & feedback.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow">
              <h4 className="font-semibold">Ambitious SDRs</h4>
              <p className="text-sm text-slate-600">Prepare for AE roles or leadership promotion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-6xl mx-auto px-6 py-12" data-aos="fade-up">
        <h3 className="text-xl font-bold mb-6">What Others Are Saying</h3>
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
      <section id="pricing" className="bg-card border-t" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-xl font-bold mb-6">Packages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-lg text-center" data-aos="fade-right">
              <h4 className="font-semibold mb-2">Starter</h4>
              <p className="text-sm text-slate-600 mb-4">Weekly 1:1 - Call scripts & KPI dashboard</p>
              <div className="font-bold text-lg mb-4">£199/mo</div>
              <button className="px-4 py-2 rounded-md text-white gradient-primary hover:opacity-90 transition">
                Choose Starter
              </button>
            </div>

            <div className="p-6 gradient-primary text-white rounded-lg text-center shadow-lg" data-aos="zoom-in">
              <h4 className="font-semibold mb-2">Pro</h4>
              <p className="text-sm mb-4">Weekly coaching + call reviews & role play</p>
              <div className="font-bold text-lg mb-4">£399/mo</div>
              <button className="px-4 py-2 rounded-md bg-white text-indigo-600 font-semibold hover:bg-slate-100 transition">
                Choose Pro
              </button>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg text-center" data-aos="fade-left">
              <h4 className="font-semibold mb-2">Elite</h4>
              <p className="text-sm text-slate-600 mb-4">Full mentorship + live shadowing</p>
              <div className="font-bold text-lg mb-4">£999/mo</div>
              <button className="px-4 py-2 rounded-md text-white gradient-primary hover:opacity-90 transition">
                Choose Elite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary text-white py-12" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Book More Meetings and Hit Quota?</h3>
          <p className="mb-6 text-sm">Get a free 20-minute strategy call. No pressure. No commitment. Just clarity on your next steps.</p>
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

export default Sdr;