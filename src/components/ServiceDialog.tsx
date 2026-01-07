import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { NavLink } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServiceOption {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color: string;
}

interface ServiceDialogProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  options: ServiceOption[];
}

const ServiceDialog = ({ children, title, subtitle, options }: ServiceDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            {title}
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            {subtitle}
          </p>
        </DialogHeader>
        
        <div className={`grid gap-4 mt-6 ${options.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {options.map((option) => (
            <NavLink
              key={option.path}
              to={option.path}
              className="group block p-5 bg-slate-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <option.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-1">{option.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{option.subtitle}</p>
              <p className="text-sm text-slate-600">{option.description}</p>
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

export default ServiceDialog;