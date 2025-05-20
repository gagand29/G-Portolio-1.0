import { useState } from "react";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UXAnnotation from "@/components/UXAnnotation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="mt-16 flex-grow py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <UXAnnotation
              explanation="Headers provide clear context about the page content and purpose."
              showIndicator
            >
              <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
            </UXAnnotation>
            <UXAnnotation
              explanation="Subheaders offer additional context and set user expectations."
              showIndicator
            >
              <p className="text-lg text-muted-foreground">
                Have a question or want to work together? I'd love to hear from
                you!
              </p>
            </UXAnnotation>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <UXAnnotation
                explanation="Section headers help organize content into logical sections."
                showIndicator
              >
                <h2 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h2>
              </UXAnnotation>

              <UXAnnotation
                explanation="Contact methods provide multiple ways for users to reach out based on their preferences."
                showIndicator
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="Gagandoddanna@gmail.com"
                        className="text-primary hover:underline"
                      >
                        Gagandoddanna@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Social Media</p>
                      <div className="flex gap-2">
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          LinkedIn
                        </a>
                        <span>•</span>
                        <a
                          href="https://github.com/gagand29"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          GitHub
                        </a>
                        <span>•</span>
                        <a
                          href="https://www.behance.net/gagand1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                          aria-label="Behance"
                        >
                          Behance
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Chicago, IL, USA</p>
                    </div>
                  </div>
                </div>
              </UXAnnotation>
            </div>

            {/* Contact Form */}
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <UXAnnotation
                explanation="Forms should clearly indicate their purpose to set user expectations."
                showIndicator
              >
                <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
              </UXAnnotation>

              <UXAnnotation
                explanation="Contact forms provide a direct way for users to send messages without leaving the site."
                showIndicator
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      className="min-h-[150px] w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </UXAnnotation>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
