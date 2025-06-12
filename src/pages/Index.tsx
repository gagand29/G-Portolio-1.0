import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UXAnnotation from "@/components/UXAnnotation";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isUXMode, setIsUXMode] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const avatarRef = useRef(null);

  // Check if UX mode is active
  useEffect(() => {
    const checkUXMode = () => {
      setIsUXMode(document.body.classList.contains("ux-mode-active"));
    };

    // Initial check
    checkUXMode();

    // Set up a mutation observer to watch for class changes on the body
    const observer = new MutationObserver(checkUXMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Handle popover for mobile (tap/focus)
  const handleAvatarClick = () => {
    if (window.innerWidth < 768) {
      setShowPopover((prev) => !prev);
    }
  };
  const handleAvatarBlur = () => {
    if (window.innerWidth < 768) {
      setShowPopover(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="mt-16 flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <UXAnnotation
              explanation="A small UI element that showcases recent achievements, creating an immediate point of interest."
              showIndicator={isUXMode}
            >
              <a
                href="https://www.credly.com/badges/16f1b4a6-ab2b-4a99-8c51-c09c1921abe3/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full hover:bg-gray-200 transition-colors"
                style={{ textDecoration: "none" }}
              >
                <span className="mr-2 text-base align-middle">🏅</span>
                <span className="text-sm">View my latest certification</span>
              </a>
            </UXAnnotation>

            <div>
              <UXAnnotation
                explanation="A warm personal greeting with a hand emoji creates an inviting first impression and sets a friendly tone."
                showIndicator={isUXMode}
              >
                <h1 className="text-4xl md:text-5xl font-bold mt-8">
                  Hello 👋, I'm Gagan Doddanna!
                </h1>
                <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl font-normal font-sans">
                  I <strong>design</strong> with users in mind and{" "}
                  <strong>ship</strong> with React, Next.js, Node, and AWS—
                  bringing <strong>LLM ideas</strong> to life.
                </p>
                <p className="mt-4 text-sm text-blue-600 hover:underline">
                  <Link to="/projects">Explore projects →</Link>
                </p>
                <p className="mt-4 mb-6 text-sm text-slate-500 flex flex-wrap gap-x-2">
                  <span>#FullStackEngineer</span>
                  <span>#React</span>
                  <span>#NextJS</span>
                  <span>#NodeJS</span>
                  <span>#AWS</span>
                  <span>#LLMs</span>
                  <span>#UXDesign</span>
                  <a
                    href="#"
                    className="text-blue-500 underline underline-offset-2 font-medium hover:text-blue-700 transition cursor-pointer"
                  >
                    #OpenToWork
                  </a>
                </p>
              </UXAnnotation>

              <div className="flex flex-wrap gap-4">
                <UXAnnotation
                  explanation="Primary call-to-action that makes it easy for potential employers or clients to initiate contact."
                  showIndicator={isUXMode}
                >
                  <Link to="/contact">
                    <Button size="lg" className="gap-2 rounded-full">
                      Get in touch <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </UXAnnotation>

                <UXAnnotation
                  explanation="Secondary action allowing visitors to download resume, providing a quick way to share professional details."
                  showIndicator={isUXMode}
                >
                  <a
                    href="/Resume/Gagan_Doddanna_Resume.pdf"
                    download
                    className="inline-block"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 rounded-full"
                      asChild={false}
                    >
                      Download CV <Download className="w-4 h-4" />
                    </Button>
                  </a>
                </UXAnnotation>

                <UXAnnotation
                  explanation="Social profile links provide additional engagement points for visitors to connect on professional platforms."
                  showIndicator={isUXMode}
                >
                  <div className="flex gap-3 items-center">
                    <a
                      href="https://www.linkedin.com/in/gagan-doddanna-326988135 "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/gagand29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.behance.net/gagand1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                      aria-label="Behance"
                    >
                      <img
                        src="/behance.png"
                        alt="Behance"
                        className="w-5 h-5 object-contain"
                        width={20}
                        height={20}
                      />
                    </a>
                  </div>
                </UXAnnotation>
              </div>
            </div>
          </div>

          {/* Responsive Avatar & Popover */}
          <div
            className="relative group flex flex-col items-center select-none"
            tabIndex={0}
            ref={avatarRef}
            onClick={handleAvatarClick}
            onBlur={handleAvatarBlur}
          >
            {/* Avatar Placeholder (no image) */}
            <div className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-background shadow-lg cursor-pointer relative overflow-hidden">
              <img
                src="/pro.png"
                alt="Profile picture"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Badge-style greeting below avatar, only on hover/focus/tap */}
            <div
              className="flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full shadow-sm bg-gray-100 text-[#111] dark:bg-gray-800 dark:text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-200"
              style={{ opacity: showPopover ? 1 : undefined }}
            >
              <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500 border-2 border-white inline-block"></span>
              <span className="text-xs md:text-sm font-medium">Hello !</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
