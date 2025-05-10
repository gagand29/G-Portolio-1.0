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
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Responsive Avatar & Popover */}
          <div
            className="relative group flex flex-col items-center select-none"
            tabIndex={0}
            ref={avatarRef}
            onClick={handleAvatarClick}
            onBlur={handleAvatarBlur}
          >
            {/* Avatar Placeholder (no image) */}
            <div className="w-20 h-20 md:w-48 md:h-48 rounded-full bg-gray-200 flex items-center justify-center text-3xl md:text-5xl font-bold text-gray-500 border-4 border-background shadow-lg cursor-pointer relative">
              G
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full mb-6 hover:bg-gray-200 transition-colors"
                style={{ textDecoration: "none" }}
              >
                <span className="mr-2 text-base align-middle">🏅</span>
                <span className="text-sm">View my latest certification</span>
              </a>
            </UXAnnotation>

            <UXAnnotation
              explanation="A warm personal greeting with a hand emoji creates an inviting first impression and sets a friendly tone."
              showIndicator={isUXMode}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hello 👋, I'm Gagan Doddanna!
              </h1>
            </UXAnnotation>

            <UXAnnotation
              explanation="A concise professional summary that quickly communicates core skills and expertise to visitors."
              showIndicator={isUXMode}
            >
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                a Software Engineer based in Chicago, IL. Passionate about
                building scalable web applications and crafting seamless user
                experiences. Experienced in full-stack development with
                React.js, Next.js, Node.js, and AWS.
                <br />
                <span className="font-medium">#OpenToWork</span>
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
                    href="https://linkedin.com"
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
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
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
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.006 10.377c.309-.154.522-.457.522-.81 0-.021-.001-.042-.003-.063-.03-.32-.19-.57-.47-.73-.23-.13-.53-.19-.89-.19H2.01v6.03h5.13c.36 0 .66-.06.89-.19.28-.16.44-.41.47-.73.002-.021.003-.042.003-.063 0-.353-.213-.656-.522-.81.41-.18.67-.54.67-.98 0-.02-.001-.04-.003-.06-.03-.32-.19-.57-.47-.73-.23-.13-.53-.19-.89-.19h-3.98v-1.17h3.98c.18 0 .32.04.41.13.09.09.14.23.16.41-.02.18-.07.32-.16.41-.09.09-.23.13-.41.13zm-1.386 2.265H3.15v-1.17h3.47c.18 0 .32.04.41.13.09.09.14.23.16.41-.02.18-.07.32-.16.41-.09.09-.23.13-.41.13zm10.38-2.265c.309-.154.522-.457.522-.81 0-.021-.001-.042-.003-.063-.03-.32-.19-.57-.47-.73-.23-.13-.53-.19-.89-.19h-5.13v6.03h5.13c.36 0 .66-.06.89-.19.28-.16.44-.41.47-.73.002-.021.003-.042.003-.063 0-.353-.213-.656-.522-.81.41-.18.67-.54.67-.98 0-.02-.001-.04-.003-.06-.03-.32-.19-.57-.47-.73-.23-.13-.53-.19-.89-.19h-3.98v-1.17h3.98c.18 0 .32.04.41.13.09.09.14.23.16.41-.02.18-.07.32-.16.41-.09.09-.23.13-.41.13zm-1.386 2.265h-3.47v-1.17h3.47c.18 0 .32.04.41.13.09.09.14.23.16.41-.02.18-.07.32-.16.41-.09.09-.23.13-.41.13zM19.5 8.5h-3v1h3v-1zm-1.5 2.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm0 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                    </svg>
                  </a>
                </div>
              </UXAnnotation>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
