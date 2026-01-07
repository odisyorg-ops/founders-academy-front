import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { NavLink } from "react-router-dom";
import { GraduationCap, TrendingUp, Users } from "lucide-react";

interface SalesTrainingDialogProps {
  children: React.ReactNode;
}

const SalesTrainingDialog = ({ children }: SalesTrainingDialogProps) => {
  const programs = [
    {
      title: "SDR Program",
      subtitle: "Sales Development Representative",
      description: "Master prospecting, cold calling, and lead generation. Perfect for those starting their sales career or looking to improve their outreach skills.",
      icon: GraduationCap,
      path: "/sdr",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "BDM Program",
      subtitle: "Business Development Manager",
      description: "Excel in business development with our 12-step success roadmap. Learn to build 7-figure pipelines and close enterprise deals.",
      icon: TrendingUp,
      path: "/bdm",
      color: "from-violet-500 to-violet-600",
    },
    {
      title: "AM Program",
      subtitle: "Account Manager",
      description: "Grow accounts, retain clients, and drive revenue. A comprehensive framework for account management excellence.",
      icon: Users,
      path: "/am",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            Sales Training Programs
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            Choose the program that matches your career stage and goals
          </p>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {programs.map((program) => (
            <NavLink
              key={program.path}
              to={program.path}
              className="group block p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <program.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-1">{program.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{program.subtitle}</p>
              <p className="text-sm text-slate-600">{program.description}</p>
              <div className="mt-4 text-sm font-medium gradient-text group-hover:underline">
                Learn more →
              </div>
            </NavLink>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SalesTrainingDialog;
