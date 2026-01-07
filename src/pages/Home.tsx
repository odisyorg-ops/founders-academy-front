import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GraduationCap, Users, Handshake, LineChart, PiggyBank, Brain, Dumbbell, UserSearch, ShoppingCart, Code,
  TrendingUp, Target, BookOpen, Check, ArrowRight, CheckCircle2, Award, Clock, Zap,
  Rocket, Eye, Leaf, ChevronDown, ChevronLeft, ChevronRight, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import ServiceDialog from "@/components/ServiceDialog";

import ebookSdr from "@/assets/ebook-sdr.png";
import ebookBdm from "@/assets/ebook-bdm.png";
import ebookAm from "@/assets/ebook-am.png";

const Home = () => {
  const navigate = useNavigate();
  const { addToCart, isInCart, itemCount } = useCart();
  const [expandedCard, setExpandedCard] = useState<'mission' | 'vision' | 'esg' | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Sales Training Dialog Options
  const salesTrainingOptions = [
    { title: "SDR Program", subtitle: "Sales Development Representative", description: "Master prospecting, cold calling, and lead generation.", icon: GraduationCap, path: "/sdr", color: "from-cyan-500 to-cyan-600" },
    { title: "BDM Program", subtitle: "Business Development Manager", description: "Excel in business development with our 12-step roadmap.", icon: TrendingUp, path: "/bdm", color: "from-violet-500 to-violet-600" },
    { title: "AM Program", subtitle: "Account Manager", description: "Grow accounts, retain clients, and drive revenue.", icon: Users, path: "/am", color: "from-indigo-500 to-indigo-600" },
  ];

  // All services we offer (Sales Training handled separately with dialog)
  const services = [
    { icon: GraduationCap, title: "Sales Training", desc: "SDR, BDM, and Account Manager programs", path: "/sdr", hasDialog: true },
    { icon: Users, title: "Coaching", desc: "1:1 career and performance coaching", path: "/coaching", hasDialog: false },
    { icon: Handshake, title: "Mentorship", desc: "Long-term guidance from proven leaders", path: "/mentorship", hasDialog: false },
    { icon: Brain, title: "Consulting", desc: "Sales strategy and process optimization", path: "/consultancy", hasDialog: false },
    { icon: LineChart, title: "Financial Planning", desc: "Wealth building and forecasting", path: "/financial", hasDialog: false },
    { icon: PiggyBank, title: "Accountancy", desc: "Tax, VAT, payroll, and compliance", path: "/accountancy", hasDialog: false },
    { icon: Dumbbell, title: "Fitness & Wellbeing", desc: "Peak performance programs", path: "/fitness", hasDialog: false },
    { icon: UserSearch, title: "Recruitment", desc: "Build high-performing sales teams", path: "/recruitment", hasDialog: false },
    { icon: ShoppingCart, title: "E-commerce", desc: "Online sales and marketing strategy", path: "/ecommerce", hasDialog: false },
    { icon: Code, title: "Software Development", desc: "Custom apps and web solutions", path: "/software-development", hasDialog: false },
  ];

  const ebooks = [
    {
      id: "ebook-sdr",
      title: "Build Your Foundation",
      subtitle: "SDR Success Playbook",
      description: "Master cold calling, prospecting, and pipeline building. 64 pages of proven scripts and frameworks.",
      image: ebookSdr,
      price: 69
    },
    {
      id: "ebook-bdm",
      title: "Revenue Growth",
      subtitle: "BDM Success Playbook",
      description: "Scale your deal closing and revenue generation. 124 pages of strategic partnership tactics.",
      image: ebookBdm,
      price: 69
    },
    {
      id: "ebook-am",
      title: "Master Retention",
      subtitle: "Account Manager Playbook",
      description: "Maximize lifetime value with retention and upselling strategies. 79 pages.",
      image: ebookAm,
      price: 69
    },
  ];

  const handleAddToCart = (ebook: typeof ebooks[0]) => {
    addToCart({
      id: ebook.id,
      title: ebook.subtitle,
      price: ebook.price,
      image: ebook.id,
    });
    toast({
      title: "Added to cart!",
      description: `${ebook.subtitle} has been added to your cart.`,
    });
  };

  const handleBuyBundle = () => {
    navigate("/checkout?bundle=true");
  };

  const testimonials = [
    { text: "After 4 weeks of coaching, I booked more meetings than the previous 3 months combined.", author: "Marcus Thompson", role: "Sales Development Representative", category: "SDR Training" },
    { text: "The 12-step roadmap transformed my approach to enterprise sales. I closed a £250K deal within 6 weeks.", author: "Richard Hayes", role: "Business Development Manager", category: "BDM Training" },
    { text: "My retention rate went from 78% to 94% in just one quarter.", author: "Laura Bennett", role: "Strategic Account Manager", category: "AM Training" },
    { text: "The 1:1 coaching sessions completely changed my sales approach. I now consistently exceed quota by 30%.", author: "Tom Anderson", role: "Enterprise Account Executive", category: "Coaching" },
    { text: "I went from individual contributor to team lead in 8 months. The guidance was exactly what I needed.", author: "Jessica Park", role: "Sales Team Lead", category: "Mentorship" },
    { text: "They saved me £8,000 in tax through legitimate planning I never knew about.", author: "Michael Thompson", role: "Senior Account Executive", category: "Accountancy" },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const currentTestimonials = testimonials.slice(
    currentTestimonialIndex * testimonialsPerPage,
    (currentTestimonialIndex + 1) * testimonialsPerPage
  );

  const goToPrev = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % totalPages);
  };

  return (
    <div className="antialiased text-slate-800 bg-background">
      {/* HERO SECTION - Crystal Clear Value Proposition */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>

        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16">
          {/* Two-column layout: Text left, Icons right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div data-aos="fade-right">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                Not Hitting Your Goals?{" "}
                <span className="gradient-text">Unlock Your Full Potential</span>{" "}
                With Expert Training, Coaching, and Resources
              </h1>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The Founder Academy is where ambitious professionals come to accelerate their careers. From sales training and 1:1 coaching to financial planning, recruitment, and software development, we provide everything you need to perform at your peak and build lasting success.
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>Sales Training Programs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>1:1 Coaching & Mentorship</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>Financial & Tax Services</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>Recruitment & Team Building</span>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <NavLink to="/resources">
                  <Button size="lg" className="gradient-primary text-white text-lg px-6 py-5 shadow-xl hover:shadow-2xl transition-all">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explore Our Resources
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </NavLink>
                <NavLink to="/request">
                  <Button size="lg" variant="outline" className="text-lg px-6 py-5 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                    Book a Free Strategy Call
                  </Button>
                </NavLink>
              </div>

              {/* FUD Reducer */}
              <p className="text-sm text-slate-500 flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  No commitment required
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  Free resources available
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  Trusted by leading professionals
                </span>
              </p>
            </div>

            {/* Right Column - Service Icons Grid */}
            <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
              {services.map((service, i) => {
                const IconComponent = service.icon;

                if (service.hasDialog) {
                  return (
                    <ServiceDialog
                      key={i}
                      title="Sales Training Programs"
                      subtitle="Choose the program that matches your career stage"
                      options={salesTrainingOptions}
                    >
                      <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm mb-0.5">{service.title}</h3>
                            <p className="text-xs text-slate-500 leading-tight">{service.desc}</p>
                          </div>
                        </div>
                      </div>
                    </ServiceDialog>
                  );
                }

                return (
                  <NavLink
                    key={i}
                    to={service.path}
                    className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-0.5">{service.title}</h3>
                        <p className="text-xs text-slate-500 leading-tight">{service.desc}</p>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Social Proof Bar - Below the hero content */}
          <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-12 pt-8 border-t border-slate-200 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-medium">Trusted by Industry Professionals</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-indigo-600">£50M+</span>
              <span>Pipeline Generated</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-emerald-600">10%</span>
              <span>Profits to Charity</span>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCE LIBRARY - E-book Sales Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div data-aos="fade-up" className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
              THE SALES EXCELLENCE SERIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Battle-Tested Sales Playbooks That Deliver Results in 30 Days
            </h2>
            <p className="text-lg text-slate-600 mb-2 max-w-2xl mx-auto">
              Whether you are just starting out or scaling to six figures, our proven frameworks give you the exact scripts, strategies, and systems used by top performers across the industry.
            </p>
            <p className="text-slate-500">
              No fluff. No theory. Just actionable resources you can implement today.
            </p>
          </div>

          {/* E-book Grid */}
          <div className="grid gap-[clamp(1.5rem,3vw,2.5rem)] md:grid-cols-3 mb-[clamp(3rem,6vh,4.5rem)]">
            {ebooks.map((ebook, i) => {
              const inCart = isInCart(ebook.id)
              return (
                <div
                  key={ebook.id}
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={ebook.image}
                      alt={ebook.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-indigo-600 backdrop-blur">
                      £{ebook.price}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-[clamp(1.25rem,2vw,1.75rem)]">
                    <div className="mb-2 flex items-center gap-2 text-indigo-600">
                      <BookOpen className="h-4 w-4" />
                      <span className="text-xs font-semibold tracking-wide uppercase">
                        E-Book
                      </span>
                    </div>

                    <h3 className="mb-1 text-lg font-bold leading-snug">
                      {ebook.title}
                    </h3>

                    <p className="mb-3 text-sm font-medium text-indigo-600">
                      {ebook.subtitle}
                    </p>

                    <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">
                      {ebook.description}
                    </p>

                    <Button
                      onClick={() =>
                        inCart ? navigate("/checkout") : handleAddToCart(ebook)
                      }
                      className={`mt-auto w-full text-sm font-semibold ${inCart
                          ? "bg-green-500 hover:bg-green-600"
                          : "gradient-primary"
                        }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          In Cart – View Checkout
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart – £{ebook.price}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>


          {/* Bundle Offer with FUD Reducers */}
          <div
            className="bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden"
            data-aos="zoom-in"
          >
            {/* Urgency Banner */}
            <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-2 text-sm font-bold animate-pulse">
              🔥 LIMITED TIME OFFER - Ends Soon! 🔥
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
                  🎁 EXCLUSIVE BUNDLE - SAVE £98
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Get All 3 E-Books and Master the Complete Sales Journey</h3>
                <p className="text-indigo-100 mb-4">
                  From booking meetings as an SDR, to closing deals as a BDM, to maximizing retention as an AM. Everything you need.
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded text-sm">✓ SDR Playbook (64 pages)</span>
                  <span className="bg-white/20 px-3 py-1 rounded text-sm">✓ BDM Playbook (124 pages)</span>
                  <span className="bg-white/20 px-3 py-1 rounded text-sm">✓ AM Playbook (79 pages)</span>
                </div>
                {/* FUD Reducers */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-indigo-200">
                  <span className="flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    Instant digital download
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    Lifetime access
                  </span>
                </div>
              </div>
              <div className="text-center lg:border-l lg:border-white/20 lg:pl-8">
                <div className="mb-2">
                  <span className="text-indigo-200 line-through text-xl block">£207</span>
                  <span className="text-5xl font-bold">£109</span>
                </div>
                <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-green-900 px-4 py-2 rounded-full font-bold text-sm mb-2">
                  SAVE £98 (47% OFF)
                </div>
                <p className="text-xs text-indigo-200 mb-4">⚡ Price increases when timer ends</p>
                <Button
                  onClick={handleBuyBundle}
                  size="lg"
                  className="bg-white text-indigo-700 hover:bg-slate-100 font-semibold px-8 w-full shadow-lg"
                >
                  Claim Your Bundle Now
                </Button>
                <p className="text-xs text-indigo-200 mt-2">🔒 Secure checkout • Instant access</p>
              </div>
            </div>
          </div>

          {/* Browse All Resources Link */}
          <div className="text-center mt-8">
            <NavLink to="/resources" className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline">
              Browse all resources including free downloads
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITIONS - Why Choose Us */}
      <section className="py-16 bg-white">
        <div data-aos="fade-up" className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Professionals Trust The Founder Academy
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real results from real practitioners. No theory, just frameworks that work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl p-6 border border-slate-200" data-aos="fade-up" data-aos-delay="0">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Battle-Tested Frameworks</h3>
              <p className="text-slate-600 text-sm">Copy and paste scripts that have generated £50M+ in pipeline across leading sales teams.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl p-6 border border-slate-200" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Results in 30 Days</h3>
              <p className="text-slate-600 text-sm">Start booking more meetings and closing more deals within your first month of implementation.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl p-6 border border-slate-200" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Written by Practitioners</h3>
              <p className="text-slate-600 text-sm">Every strategy comes from founders who built million-pound pipelines themselves, not theorists.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl p-6 border border-slate-200" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Instant Access</h3>
              <p className="text-slate-600 text-sm">Download immediately and start implementing proven systems today, not next month.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl p-6 border border-slate-200" data-aos="fade-up" data-aos-delay="400">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Step-by-Step Roadmaps</h3>
              <p className="text-slate-600 text-sm">No guesswork. Follow clear frameworks designed for SDRs, BDMs, and Account Managers.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl p-6 border border-slate-200" data-aos="fade-up" data-aos-delay="500">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Career Acceleration</h3>
              <p className="text-slate-600 text-sm">Join professionals who have doubled their income and fast-tracked promotions using our methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / SOCIAL PROOF */}
      <section className="py-16 bg-slate-50">
        <div data-aos="fade-up" className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Results from Real Professionals
            </h2>
            <p className="text-slate-600">
              Join hundreds who have transformed their careers.
            </p>
          </div>

          <div className="relative">
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 rounded-full bg-card shadow-lg hover:bg-slate-100 transition"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 rounded-full bg-card shadow-lg hover:bg-slate-100 transition"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>

            <div className="grid md:grid-cols-3 gap-6 transition-all duration-500">
              {currentTestimonials.map((testi, i) => (
                <div key={`${currentTestimonialIndex}-${i}`} className="bg-card p-6 rounded-lg shadow animate-fade-in">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full gradient-primary text-white mb-3">
                    {testi.category}
                  </span>
                  <p className="text-slate-600 mb-4">"{testi.text}"</p>
                  <p className="font-semibold">- {testi.author}</p>
                  <p className="text-sm text-indigo-600">{testi.role}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonialIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentTestimonialIndex ? "w-6 gradient-primary" : "bg-slate-300"
                    }`}
                  aria-label={`Go to testimonial page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / ESG */}
      <section data-aos="fade-up" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Built by Founders Who Have Been Where You Are</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A collective of proven practitioners who came together to create what we wished existed earlier in our careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div
            onClick={() => setExpandedCard(expandedCard === 'mission' ? null : 'mission')}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <ChevronDown className={`w-5 h-5 text-indigo-500 transition-transform duration-300 ${expandedCard === 'mission' ? 'rotate-180' : ''}`} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Our Mission</h3>
            <p className="text-indigo-600 font-semibold text-sm mb-2">To turn ambition into advantage.</p>
            {expandedCard !== 'mission' && <p className="text-xs text-slate-500 mt-2">Click to explore →</p>}
            <div className={`overflow-hidden transition-all duration-300 ${expandedCard === 'mission' ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-600 text-sm">
                The Founder Academy exists to empower professionals with proven frameworks, coaching, mentorship, and financial clarity.
              </p>
            </div>
          </div>

          <div
            onClick={() => setExpandedCard(expandedCard === 'vision' ? null : 'vision')}
            className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <ChevronDown className={`w-5 h-5 text-cyan-500 transition-transform duration-300 ${expandedCard === 'vision' ? 'rotate-180' : ''}`} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Our Vision</h3>
            <p className="text-cyan-600 font-semibold text-sm mb-2">The world's most trusted platform for high-performers.</p>
            {expandedCard !== 'vision' && <p className="text-xs text-slate-500 mt-2">Explore our vision →</p>}
            <div className={`overflow-hidden transition-all duration-300 ${expandedCard === 'vision' ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-600 text-sm">
                A global community of professionals who outperform ethically, earn intentionally, and lead with clarity.
              </p>
            </div>
          </div>

          <div
            onClick={() => setExpandedCard(expandedCard === 'esg' ? null : 'esg')}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <ChevronDown className={`w-5 h-5 text-emerald-500 transition-transform duration-300 ${expandedCard === 'esg' ? 'rotate-180' : ''}`} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">ESG & Impact</h3>
            <p className="text-emerald-600 font-semibold text-sm mb-2">10% of profits to charity.</p>
            {expandedCard !== 'esg' && <p className="text-xs text-slate-500 mt-2">See our impact →</p>}
            <div className={`overflow-hidden transition-all duration-300 ${expandedCard === 'esg' ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-600 text-sm">
                When you invest in The Founder Academy, you are contributing to meaningful, measurable change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="gradient-primary text-white py-16">
        <div data-aos="fade-up" className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Unlock Your Full Potential?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Whether you need training, coaching, resources, or business services, we have got you covered. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/resources">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 font-semibold text-lg px-8 py-6">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Resources
              </Button>
            </NavLink>
            <NavLink to="/request">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 font-semibold text-lg px-8 py-6">
                Book a Free Call
              </Button>
            </NavLink>
          </div>
          <p className="text-sm text-indigo-200 mt-6 flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4" />
              No commitment
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4" />
              Free resources available
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4" />
              Instant access
            </span>
          </p>
        </div>
      </section>

      {/* Cart indicator */}
      {itemCount > 0 && (
        <div className="fixed bottom-6 right-6 z-50" data-aos="fade-up">
          <NavLink to="/checkout">
            <Button className="gradient-primary text-white shadow-xl px-6 py-6 rounded-full">
              <ShoppingCart className="w-5 h-5 mr-2" />
              View Cart ({itemCount})
            </Button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Home;
