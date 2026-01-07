import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SupportModal } from "../SupportModal";
import { ContactModal } from "../ContactModal";
import { CookieSettingsModal } from "../CookieSettingsModal";
import SponsorBanner from "../SponsorBanner";

const ScrollLink = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const Footer = () => {
  const [supportOpen, setSupportOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <>
      {/* SPONSOR BANNER IN FOOTER - Hidden until sponsors are added */}
      {/* <SponsorBanner variant="dark" showTitle={true} /> */}
      
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Section */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <ScrollLink to="/" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                    About Us
                  </ScrollLink>
                </li>
                <li>
                  <button
                    onClick={() => setContactOpen(true)}
                    className="text-slate-400 hover:text-white transition-colors text-sm text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <ScrollLink to="/request" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Book a Call
                  </ScrollLink>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <ScrollLink to="/sdr" className="text-slate-400 hover:text-white transition-colors text-sm">
                    SDR Training
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/bdm" className="text-slate-400 hover:text-white transition-colors text-sm">
                    BDM Training
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/am" className="text-slate-400 hover:text-white transition-colors text-sm">
                    AM Training
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/coaching" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Coaching
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/mentorship" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Mentorship
                  </ScrollLink>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setSupportOpen(true)}
                    className="text-slate-400 hover:text-white transition-colors text-sm text-left"
                  >
                    Customer Support
                  </button>
                </li>
                <li>
                  <ScrollLink to="/resources" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Resource Library
                  </ScrollLink>
                </li>
                <li>
                  <button
                    onClick={() => setCookieOpen(true)}
                    className="text-slate-400 hover:text-white transition-colors text-sm text-left"
                  >
                    Cookie Settings
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <ScrollLink to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="/terms-of-use" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Terms of Use
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm text-center">
              © {new Date().getFullYear()} The Founder Academy™. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <SupportModal open={supportOpen} onOpenChange={setSupportOpen} />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
      <CookieSettingsModal open={cookieOpen} onOpenChange={setCookieOpen} />
    </>
  );
};

export default Footer;
