import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface CookieSettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CookieSettingsModal = ({ open, onOpenChange }: CookieSettingsModalProps) => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  const handleSave = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    toast.success("Cookie preferences saved");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cookie Settings</DialogTitle>
          <DialogDescription>
            Manage your cookie preferences. Essential cookies are always enabled.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="font-medium">Necessary Cookies</Label>
              <p className="text-xs text-muted-foreground">Required for the website to function</p>
            </div>
            <Switch checked={preferences.necessary} disabled />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label className="font-medium">Analytics Cookies</Label>
              <p className="text-xs text-muted-foreground">Help us improve our website</p>
            </div>
            <Switch 
              checked={preferences.analytics} 
              onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: checked }))}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label className="font-medium">Marketing Cookies</Label>
              <p className="text-xs text-muted-foreground">Used for targeted advertising</p>
            </div>
            <Switch 
              checked={preferences.marketing} 
              onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: checked }))}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="flex-1 gradient-primary" onClick={handleSave}>
            Save Preferences
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
