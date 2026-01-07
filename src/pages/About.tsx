import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Heart, Users, Target, Lightbulb, Shield, TrendingUp, Award, Handshake } from "lucide-react";
import SponsorBanner from "@/components/SponsorBanner";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const values = [
    { 
      title: "Excellence", 
      desc: "We hold ourselves to the highest standards in everything we do, delivering exceptional quality in our training and services.", 
      icon: Award 
    },
    { 
      title: "Integrity", 
      desc: "We operate with complete transparency and honesty, building trust through our actions and commitments.", 
      icon: Shield 
    },
    { 
      title: "Empowerment", 
      desc: "We believe in unlocking potential. Our mission is to equip individuals with the skills and confidence to achieve their goals.", 
      icon: TrendingUp 
    },
    { 
      title: "Community", 
      desc: "We foster a supportive environment where professionals can learn, grow, and succeed together.", 
      icon: Users 
    },
    { 
      title: "Innovation", 
      desc: "We continuously evolve our methods and embrace new approaches to stay ahead in an ever-changing business landscape.", 
      icon: Lightbulb 
    },
    { 
      title: "Impact", 
      desc: "We measure our success by the tangible results our clients achieve and the positive change we create in their lives.", 
      icon: Target 
    },
  ];

  const founders = [
    { name: "Sales Training", expertise: "Prospecting, cold calling, and pipeline mastery" },
    { name: "Business Development", expertise: "Enterprise deals and strategic partnerships" },
    { name: "Financial Planning", expertise: "Wealth building and tax optimization" },
    { name: "Coaching & Mentorship", expertise: "Career development and personal growth" },
    { name: "Technology", expertise: "Software solutions and digital transformation" },
    { name: "Wellness", expertise: "Peak performance and work-life balance" },
  ];

  return (
    <div className="antialiased text-slate-800 bg-background">
      {/* HERO */}
      <section className="relative bg-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-indigo-900/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')] bg-cover bg-center opacity-30"></div>
        <div data-aos="fade-up" className="relative z-20 max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-indigo-300">The Founder Academy</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            A collective of industry experts united by a single mission: to help ambitious professionals 
            unlock their full potential in their corporate careers and beyond.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section data-aos="fade-up" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                The Founder Academy was born from a simple yet powerful idea: what if the best minds in sales, 
                business development, finance, and personal growth came together on one platform?
              </p>
              <p>
                We are a group of founders, each experts in our own fields, who recognised that success in the 
                corporate world requires more than just one skill set. From mastering the art of cold calling 
                to understanding tax planning, from building physical resilience to developing leadership capabilities,
                we saw that ambitious professionals needed comprehensive support.
              </p>
              <p>
                So we joined forces. We combined our decades of collective experience, our proven frameworks, 
                and our genuine passion for helping others succeed. The result is The Founder Academy, a 
                one-stop platform designed to support you in every aspect of your corporate career and life.
              </p>
              <p>
                Whether you're an SDR looking to book more meetings, a business developer closing enterprise deals, 
                or a professional seeking better work-life balance, we're here to guide you every step of the way.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8" data-aos="fade-left">
            <h3 className="font-bold text-lg mb-6 text-center">Our Combined Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {founders.map((founder, i) => (
                <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-sm gradient-text">{founder.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{founder.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section data-aos="fade-up" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            To empower corporate and sales professionals with the knowledge, skills, and support they need 
            to achieve financial freedom and personal fulfilment. We believe everyone deserves access to 
            world-class training and mentorship, regardless of their starting point.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Clear Goals</h3>
              <p className="text-sm text-slate-600">Help professionals define and achieve their career ambitions</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Genuine Support</h3>
              <p className="text-sm text-slate-600">Provide ongoing guidance from experts who truly care</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Real Results</h3>
              <p className="text-sm text-slate-600">Deliver measurable outcomes that transform careers</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section data-aos="fade-up" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const IconComponent = value.icon;
              return (
                <div key={i} className="bg-card rounded-lg shadow p-6 hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay={i * 100}>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GIVING BACK */}
      <section data-aos="fade-up" className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Giving Back</h2>
            <p className="text-lg text-slate-600 mb-4">
              We believe in using our success to make a difference. That's why we commit 
              <span className="font-bold text-indigo-600"> 10% of all profits to charitable causes</span>.
            </p>
            <p className="text-slate-600">
              From supporting education initiatives to helping underprivileged communities access career opportunities, 
              we're dedicated to creating positive impact beyond our immediate community. When you work with us, 
              you're not just investing in your career - you're contributing to meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* SPONSOR BANNER - Hidden until sponsors are added */}
      {/* <SponsorBanner variant="light" /> */}

      {/* CONTACT */}
      <section data-aos="fade-up" className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Have questions about The Founder Academy or want to learn more about how we can help you? 
            We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:enquiry@thefound.academy" 
              className="px-6 py-3 rounded-md gradient-primary text-white font-semibold hover:opacity-90 transition"
            >
              enquiry@thefound.academy
            </a>
            <NavLink 
              to="/request"
              className="px-6 py-3 rounded-md border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
            >
              Book a Free Consultation
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-aos="fade-up" className="gradient-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="mb-6 text-lg">Join thousands of professionals who have accelerated their success with The Founder Academy.</p>
          <NavLink to="/request">
            <button className="px-8 py-4 rounded-md bg-white text-indigo-700 font-semibold hover:bg-slate-100 transition shadow-lg">
              Start Your Journey Today
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default About;
