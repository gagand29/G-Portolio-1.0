
import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface UXAnnotationProps {
  children: React.ReactNode;
  explanation: string;
  defaultOpen?: boolean;
  showIndicator?: boolean;
}

export default function UXAnnotation({ 
  children, 
  explanation,
  defaultOpen = false,
  showIndicator = false
}: UXAnnotationProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [isUxModeActive, setIsUxModeActive] = useState(false);
  
  useEffect(() => {
    // Check if UX mode is active by looking for the class on the body
    const checkUxMode = () => {
      const isActive = document.body.classList.contains('ux-mode-active');
      setIsUxModeActive(isActive);
    };
    
    // Initial check
    checkUxMode();
    
    // Set up an observer to watch for changes to the body class
    const observer = new MutationObserver(checkUxMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);
  
  // If UX mode is not active, just render the children without any annotations
  if (!isUxModeActive) {
    return <>{children}</>;
  }
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative cursor-help group">
          {children}
          {showIndicator && (
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-yellow-100 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-800">
        <div className="flex items-center gap-2">
          <span className="p-1 bg-yellow-300 dark:bg-yellow-600 rounded-md text-xs font-medium">
            UX Reasoning Mode
          </span>
          <div className="text-sm">
            {explanation}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
