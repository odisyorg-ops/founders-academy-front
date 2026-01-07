import { Building2 } from "lucide-react";

// Placeholder sponsor logos - replace with actual sponsor images
const sponsors = [
  { name: "Partner One", logo: null },
  { name: "Partner Two", logo: null },
  { name: "Partner Three", logo: null },
  { name: "Partner Four", logo: null },
  { name: "Partner Five", logo: null },
  { name: "Partner Six", logo: null },
];

interface SponsorBannerProps {
  variant?: "light" | "dark";
  showTitle?: boolean;
}

const SponsorBanner = ({ variant = "light", showTitle = true }: SponsorBannerProps) => {
  const isDark = variant === "dark";

  return (
    <section className={`py-10 ${isDark ? "bg-slate-800" : "bg-slate-50"}`}>
      <div className="max-w-6xl mx-auto px-6">
        {showTitle && (
          <p className={`text-center text-sm font-medium mb-6 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            Trusted by leading organisations and partners
          </p>
        )}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor, i) => (
            <div
              key={i}
              className={`flex items-center justify-center w-28 h-14 rounded-lg transition-opacity hover:opacity-100 ${
                isDark 
                  ? "bg-slate-700/50 opacity-60" 
                  : "bg-white shadow-sm opacity-50"
              }`}
              title={sponsor.name}
            >
              {sponsor.logo ? (
                <img src={sponsor.logo} alt={sponsor.name} className="max-h-8 max-w-full object-contain" />
              ) : (
                <div className="flex items-center gap-2">
                  <Building2 className={`w-5 h-5 ${isDark ? "text-slate-400" : "text-slate-400"}`} />
                  <span className={`text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    Logo
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorBanner;
