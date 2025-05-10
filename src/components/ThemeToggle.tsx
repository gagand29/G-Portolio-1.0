import { useState, useEffect, useRef } from "react";
import { Moon, Sun, ToggleRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useToast } from "@/components/ui/use-toast";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [uxMode, setUxMode] = useState(false);
  const [showUxToast, setShowUxToast] = useState(false);
  const toastTimeout = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("ux-mode-active", uxMode);

    if (uxMode) {
      setShowUxToast(true);
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
      toastTimeout.current = setTimeout(() => setShowUxToast(false), 3500);
    } else {
      setShowUxToast(false);
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
    }
  }, [uxMode]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    window.localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex items-center gap-3 relative">
      <div className="relative">
        <Toggle
          pressed={uxMode}
          onPressedChange={setUxMode}
          aria-label="Toggle UX Research Mode"
          className={
            uxMode
              ? "rounded-full border border-blue-600 bg-blue-50 ring-2 ring-blue-500 text-black font-medium"
              : "rounded-full border hover:bg-muted"
          }
        >
          <ToggleRight className="h-4 w-4" />
          <span className="sr-only md:not-sr-only md:ml-2 md:text-xs">
            UX Mode
          </span>
        </Toggle>
        {/* Toast/Tooltip for UX Mode */}
        {showUxToast && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-[9999] w-screen max-w-xs px-2">
            <div className="bg-muted text-foreground text-sm rounded-md shadow-lg px-4 py-2 w-full animate-fade-in-out border border-border">
              I'm just exploring UX! Currently learning, building in public, and
              experimenting with ideas. Open to feedback 💬
            </div>
          </div>
        )}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full border hover:bg-muted"
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
