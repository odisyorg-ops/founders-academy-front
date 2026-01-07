import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  /* ------------------------ NAV CONFIG ------------------------ */

  const navGroups = [
    {
      label: "Sales Training",
      items: [
        { path: "/sdr", label: "SDR Program", desc: "Sales Development Representative" },
        { path: "/bdm", label: "BDM Program", desc: "Business Development Manager" },
        { path: "/am", label: "AM Program", desc: "Account Manager" },
      ],
    },
    {
      label: "Personal Growth",
      items: [
        { path: "/coaching", label: "Coaching", desc: "1:1 career guidance" },
        { path: "/mentorship", label: "Mentorship", desc: "Ongoing professional support" },
        { path: "/fitness", label: "Fitness & Wellbeing", desc: "Peak performance strategies" },
      ],
    },
    {
      label: "Business Services",
      items: [
        { path: "/consultancy", label: "Consulting", desc: "Sales process optimization" },
        { path: "/financial", label: "Financial Planning", desc: "Wealth building strategies" },
        { path: "/accountancy", label: "Accountancy & Tax", desc: "HMRC compliance & tax" },
      ],
    },
    {
      label: "Digital Solutions",
      items: [
        { path: "/ecommerce", label: "E-commerce", desc: "Online sales strategies" },
        { path: "/software-development", label: "Software Development", desc: "Custom software solutions" },
      ],
    },
  ];

  /* ------------------------ REUSABLE HELPERS ------------------------ */

  const linkClass = (isActive: boolean) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? "gradient-text font-bold" : "text-foreground"
    }`;

  const mobileLinkClass = (isActive: boolean) =>
    `block rounded-md px-4 py-2 text-sm transition ${
      isActive
        ? "bg-primary/10 gradient-text font-bold"
        : "text-foreground hover:bg-muted"
    }`;

  const closeMobile = () => setIsOpen(false);

  /* ------------------------ JSX ------------------------ */

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold gradient-text">
          The Founder Academy
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 lg:flex">
          <li>
            <NavLink to="/resources" className={({ isActive }) => linkClass(isActive)}>
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => linkClass(isActive)}>
              About Us
            </NavLink>
          </li>

          {navGroups.map((group) => (
            <li key={group.label}>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                  {group.label}
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className="w-64">
                  {group.items.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      <NavLink to={item.path} className="flex flex-col py-3">
                        <span className="font-medium">{item.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.desc}
                        </span>
                      </NavLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ))}

          <li>
            <NavLink
              to="/recruitment"
              className={({ isActive }) => linkClass(isActive)}
            >
              Recruitment
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/request"
              className="rounded-md bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Start Your Journey
            </NavLink>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden max-h-[80vh] overflow-y-auto pb-4">
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                onClick={closeMobile}
                className={({ isActive }) => mobileLinkClass(isActive)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={closeMobile}
                className={({ isActive }) => mobileLinkClass(isActive)}
              >
                About Us
              </NavLink>
            </li>

            {navGroups.map((group) => (
              <li key={group.label} className="px-4 py-2">
                <p className="mb-2 text-xs font-semibold text-muted-foreground">
                  {group.label}
                </p>
                <ul className="space-y-1 pl-2">
                  {group.items.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        onClick={closeMobile}
                        className={({ isActive }) =>
                          mobileLinkClass(isActive)
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li>
              <NavLink
                to="/recruitment"
                onClick={closeMobile}
                className={({ isActive }) => mobileLinkClass(isActive)}
              >
                Recruitment
              </NavLink>
            </li>

            <li className="px-4 pt-2">
              <NavLink
                to="/request"
                onClick={closeMobile}
                className="block rounded-md bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-center text-sm font-medium text-white"
              >
                Start Your Journey
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
