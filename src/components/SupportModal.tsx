import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Phone, Clock } from "lucide-react";

interface SupportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SupportModal = ({ open, onOpenChange }: SupportModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Customer Support</DialogTitle>
          <DialogDescription>
            We're here to help you succeed in your sales career.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-indigo-600 mt-0.5" />
            <div>
              <p className="font-medium text-sm">Email Support</p>
              <a href="mailto:enquiry@thefound.academy" className="text-sm text-indigo-600 hover:underline">
                enquiry@thefound.academy
              </a>
              <p className="text-xs text-muted-foreground mt-1">We typically respond within 24 hours</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-indigo-600 mt-0.5" />
            <div>
              <p className="font-medium text-sm">Phone Support</p>
              <p className="text-sm text-muted-foreground">Available for Pro and Elite members</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-indigo-600 mt-0.5" />
            <div>
              <p className="font-medium text-sm">Support Hours</p>
              <p className="text-sm text-muted-foreground">Monday - Friday: 9am - 6pm GMT</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
