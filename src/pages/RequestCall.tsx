import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useToast } from "@/hooks/use-toast";
import { Check, GraduationCap, Users, Brain, LineChart, Dumbbell, Star, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// ==========================================
// 1. CONSTANTS & DATA
// ==========================================
const API_URL = "https://founders-academy-back-rho.vercel.app";

const BENEFITS = [
  "Get personalized guidance on accelerating your career",
  "Discover which training program fits your goals",
  "Learn strategies to increase your income and performance",
  "Explore coaching, mentorship, and consulting options",
  "Understand how to maximize commissions and minimize tax",
];

const EXPERTISE = [
  { icon: GraduationCap, label: "Sales Training", color: "bg-indigo-100 text-indigo-600" },
  { icon: Users, label: "Coaching", color: "bg-cyan-100 text-cyan-600" },
  { icon: Brain, label: "Consulting", color: "bg-purple-100 text-purple-600" },
  { icon: LineChart, label: "Financial", color: "bg-emerald-100 text-emerald-600" },
  { icon: Dumbbell, label: "Wellbeing", color: "bg-red-100 text-red-600" },
];

// ==========================================
// 2. LOGIC LAYER (Custom Hook)
// ==========================================
const useContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    goals: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/api/request-call`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

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

  return { formData, isSubmitting, handleChange, handleSubmit };
};

// ==========================================
// 3. REUSABLE COMPONENTS (Atoms)
// ==========================================
const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-3 h-3 text-emerald-600" />
    </div>
    <p className="text-slate-700">{text}</p>
  </div>
);

const ExpertiseBadge = ({ icon: Icon, label, color }: { icon: LucideIcon; label: string; color: string }) => (
  <div className="flex items-center gap-2 text-slate-600">
    <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center`}>
      <Icon className="w-4 h-4" />
    </div>
    <span className="text-sm">{label}</span>
  </div>
);

const FormField = ({ 
  label, 
  required, 
  isTextArea, 
  ...props 
}: { 
  label: string; 
  required?: boolean; 
  isTextArea?: boolean; 
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) => (
  <div>
    <label className="block text-slate-700 font-medium mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {isTextArea ? (
      <textarea
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
      />
    ) : (
      <input
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
    )}
  </div>
);

// ==========================================
// 4. MAIN PAGE COMPONENT (Organism)
// ==========================================
const RequestCall = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Value Proposition */}
          <div data-aos="fade-right" className="lg:sticky lg:top-24">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your <span className="gradient-text">Free Strategy Call</span>
            </h1>
            
            <p className="text-slate-600 mb-6 text-lg">
              The Founder Academy helps ambitious professionals unlock their full potential. For a complimentary strategy session with an expert, fill out the form. Our team will be in touch within 24-48 hours.
            </p>

            <div className="space-y-4 mb-8">
              {BENEFITS.map((benefit, i) => (
                <BenefitItem key={i} text={benefit} />
              ))}
            </div>

            <div className="mb-8">
              <p className="text-sm text-slate-500 mb-4">Our expertise includes:</p>
              <div className="flex flex-wrap gap-6">
                {EXPERTISE.map((exp, i) => (
                  <ExpertiseBadge key={i} icon={exp.icon} label={exp.label} color={exp.color} />
                ))}
              </div>
            </div>

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

          {/* Right Side: Form */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <FormField 
                  label="Full Name" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Your full name" 
                />
                <FormField 
                  label="Email Address" 
                  name="email" 
                  type="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="your@email.com" 
                />
                <FormField 
                  label="Company / Role" 
                  name="company" 
                  value={formData.company} 
                  onChange={handleChange} 
                  placeholder="Your company or current role" 
                />
                <FormField 
                  label="How Can We Help?" 
                  name="goals" 
                  isTextArea 
                  rows={4} 
                  required 
                  value={formData.goals} 
                  onChange={handleChange} 
                  placeholder="Tell us about your goals and what you'd like to achieve..." 
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg gradient-primary text-white font-semibold shadow-lg hover:opacity-90 transition"
                >
                  {isSubmitting ? "Submitting..." : "Book a Call"}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to be contacted by our team.
                </p>
              </form>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-slate-600">
              {["No obligation", "100% free", "Response within 48hrs"].map((text, i) => (
                <span key={i} className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-500" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestCall;