import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import UXAnnotation from "./UXAnnotation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 py-4 px-6 md:px-12 flex items-center justify-between bg-background shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <UXAnnotation explanation="The logo serves as an identity anchor and navigation home button, a standard pattern users expect.">
        <NavLink
          to="/"
          className="text-xl font-bold hover:opacity-80 transition-opacity"
        >
          GD
        </NavLink>
      </UXAnnotation>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <UXAnnotation
            key={item.name}
            explanation={`Clear navigation option to the ${item.name} section, helping users understand site structure and available information.`}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-gray-500 border-b-2 border-blue-600 pb-1 font-medium"
                  : "text-gray-500 hover:text-blue-600 transition-colors pb-1 font-medium"
              }
            >
              {item.name}
            </NavLink>
          </UXAnnotation>
        ))}
        <div className="ml-2">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center gap-2">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-background border-b border-border py-4 px-6 z-50 md:hidden animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-500 border-b-2 border-blue-600 pb-1 font-medium"
                    : "text-gray-500 hover:text-blue-600 transition-colors pb-1 font-medium"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
