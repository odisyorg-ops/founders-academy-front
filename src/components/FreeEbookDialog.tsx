import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Lock, ShoppingCart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FreeEbookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant: "free" | "paid";
  resource: {
    title: string;
    desc: string;
    price?: number;
    downloadUrl?: string;
  };
}

const FreeEbookDialog = ({ open, onOpenChange, variant, resource }: FreeEbookDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Name and email are required.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      if (variant === "free") {
        const downloadUrl = resource.downloadUrl || `https://example.com/downloads/${encodeURIComponent(resource.title.toLowerCase().replace(/\s+/g, '-'))}.pdf`;
        window.open(downloadUrl, '_blank');
        
        toast({
          title: "Download started!",
          description: `Your ${resource.desc} is opening in a new tab.`,
        });
      } else {
        toast({
          title: "Interest registered!",
          description: `We'll notify you when ${resource.title} is available for purchase.`,
        });
      }

      setIsSubmitting(false);
      setName("");
      setEmail("");
      onOpenChange(false);
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {variant === "free" ? (
              <>
                <Download className="w-5 h-5 text-green-500" />
                Download Free E-Book
              </>
            ) : (
              <>
                <Lock className="w-5 h-5 text-amber-500" />
                Get Notified - Premium E-Book
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {variant === "free" ? (
              <>Enter your details to download: <span className="font-medium text-foreground">{resource.desc}</span></>
            ) : (
              <>Register interest for: <span className="font-medium text-foreground">{resource.title}</span> (£{resource.price})</>
            )}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button 
            type="submit" 
            className={`w-full ${variant === "free" ? "bg-green-500 hover:bg-green-600" : "bg-amber-500 hover:bg-amber-600"} text-white`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Processing..."
            ) : variant === "free" ? (
              <>
                <Download className="w-4 h-4 mr-2" />
                Get Free Download
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Register Interest
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            {variant === "free" 
              ? "We respect your privacy. No spam, ever."
              : "We'll email you when this premium guide launches."
            }
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FreeEbookDialog;
