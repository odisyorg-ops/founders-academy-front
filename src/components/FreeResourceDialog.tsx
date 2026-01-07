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
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FreeResourceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resource: {
    title: string;
    desc: string;
    downloadUrl?: string;
  };
}

const FreeResourceDialog = ({ open, onOpenChange, resource }: FreeResourceDialogProps) => {
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

    // Simulate processing and open download in new tab
    setTimeout(() => {
      // For now, use a placeholder URL - in production this would be the actual download link
      const downloadUrl = resource.downloadUrl || `https://example.com/downloads/${encodeURIComponent(resource.title.toLowerCase().replace(/\s+/g, '-'))}.pdf`;
      
      window.open(downloadUrl, '_blank');
      
      toast({
        title: "Download started!",
        description: `Your ${resource.desc} is opening in a new tab.`,
      });

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
            <Download className="w-5 h-5 text-green-500" />
            Download Free Resource
          </DialogTitle>
          <DialogDescription>
            Enter your details to access: <span className="font-medium text-foreground">{resource.desc}</span>
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
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Processing..."
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Get Free Download
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FreeResourceDialog;
