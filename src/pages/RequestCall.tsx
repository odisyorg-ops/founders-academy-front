import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useToast } from "@/hooks/use-toast";
import { Check, GraduationCap, Users, Brain, LineChart, Dumbbell, Star } from "lucide-react";
import { Button } from "@/components/ui/button";


const RequestCall = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    goals: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  console.log("Submitting form:", formData);
  const apiUrl = "https://founders-academy-back-rho.vercel.app";

  try {
    const res = await fetch(
      // "http://localhost:3000/request-call", 
      // `${process.env.VITE_API_URL}/request-call`, 
      `${apiUrl}/api/request-call`, 
      {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("Response status:", res.status);

    const data = await res.json();
    console.log("Response data:", data);

    if (data.success) {
      toast({
        title: "Thank you!",
        description: "Our team will get back to you within 24-48 hours.",
      });

      setFormData({ name: "", email: "", company: "", goals: "" });
    } else {
      throw new Error(data.message || "Failed to submit");
    }
  } catch (error) {
    console.error(error);
    toast({
      variant: "destructive",
      title: "Submission failed",
      description: "Please try again later.",
    });
  } finally {
    setIsSubmitting(false);
  }
};



  const benefits = [
    "Get personalized guidance on accelerating your career",
    "Discover which training program fits your goals",
    "Learn strategies to increase your income and performance",
    "Explore coaching, mentorship, and consulting options",
    "Understand how to maximize commissions and minimize tax",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Value Proposition */}
          <div data-aos="fade-right" className="lg:sticky lg:top-24">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your{" "}
              <span className="gradient-text">Free Strategy Call</span>
            </h1>
            
            <p className="text-slate-600 mb-6 text-lg">
              The Founder Academy helps ambitious professionals unlock their full potential. For a complimentary strategy session with an expert, fill out the form. Our team will be in touch within 24-48 hours.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <p className="text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>

            {/* What We Offer Icons */}
            <div className="mb-8">
              <p className="text-sm text-slate-500 mb-4">Our expertise includes:</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="text-sm">Sales Training</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Users className="w-4 h-4 text-cyan-600" />
                  </div>
                  <span className="text-sm">Coaching</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm">Consulting</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <LineChart className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm">Financial</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <Dumbbell className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm">Wellbeing</span>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-slate-600 font-medium">Trusted by leading professionals</span>
              </div>
              <blockquote className="text-slate-600 text-sm italic">
                "The strategy call alone gave me more clarity than months of trying to figure it out on my own. Highly recommend."
              </blockquote>
              <p className="text-sm font-medium mt-2">— Marcus T., Sales Development Representative</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    required
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    required
                    maxLength={255}
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Company / Role
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company or current role"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    How Can We Help? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    placeholder="Tell us about your goals and what you'd like to achieve..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                    required
                    maxLength={1000}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg gradient-primary text-white font-semibold shadow-lg hover:opacity-90 transition"
                >
                  {isSubmitting ? "Submitting..." : "Book a Call"}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to be contacted by our team. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>

            {/* FUD Reducers */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-slate-600">
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-500" />
                No obligation
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-500" />
                100% free
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-500" />
                Response within 48hrs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestCall;
