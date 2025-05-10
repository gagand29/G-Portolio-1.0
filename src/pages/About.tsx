import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UXAnnotation from "@/components/UXAnnotation";

const About = () => {
  const skills = [
    "React.js",
    "Next.js",
    "Node.js",
    "AWS",
    "JavaScript",
    "TypeScript",
    "Full Stack Development",
    "Web Applications",
    "User Experience",
    "Scalable Systems",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="mt-16 flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <UXAnnotation explanation="A clear page title helps users understand what content to expect on this page.">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
        </UXAnnotation>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <UXAnnotation explanation="A clear, modern About Me section with visual hierarchy, logical sections, and readable typography.">
              <section className="prose dark:prose-invert max-w-none">
                <h2 className="text-lg font-semibold mb-2 mt-0">Education</h2>
                <p className="mb-2">
                  <span className="font-medium">
                    Master of Science in Computer Science (HCI)
                  </span>
                  , DePaul University, IL
                  <br />
                  Specialized in Human-Computer Interaction, full-stack
                  development, and software engineering.
                  <br />
                  Also completed a{" "}
                  <span className="font-medium">
                    Diploma in UI/UX Design
                  </span>{" "}
                  from Edit Institute, Mumbai.
                  <br />
                  Started my academic journey with a{" "}
                  <span className="font-medium">B.E. in Computer Science </span>
                  from VTU, India.
                </p>
                <h2 className="text-lg font-semibold mb-2 mt-6">
                  Professional Summary
                </h2>
                <p className="mb-2">
                  I'm a full-stack software engineer passionate about building
                  scalable, user-centered web apps.
                  <br />
                  With a solid base in both frontend (
                  <span className="font-mono bg-gray-100 px-1 rounded">
                    React.js
                  </span>
                  ,
                  <span className="font-mono bg-gray-100 px-1 rounded">
                    Next.js
                  </span>
                  ,
                  <span className="font-mono bg-gray-100 px-1 rounded">
                    JavaScript
                  </span>
                  ) and backend (
                  <span className="font-mono bg-gray-100 px-1 rounded">
                    Node.js
                  </span>
                  ,
                  <span className="font-mono bg-gray-100 px-1 rounded">
                    AWS
                  </span>
                  ),
                  <br />
                  I create solutions that combine performance, aesthetics, and
                  functionality.
                  <br />I thrive in Agile teams, optimize developer workflows,
                  and always explore new technologies.
                </p>
                <h2 className="text-lg font-semibold mb-2 mt-6">
                  Career Objective
                </h2>
                <p className="mb-2">
                  I'm{" "}
                  <span className="font-mono bg-gray-100 px-1 rounded">
                    #open_to_job_opportunities
                  </span>{" "}
                  where I can contribute, grow, and solve real-world problems.
                  <br />
                  If you're hiring or collaborating on something exciting, feel
                  free to reach out!
                </p>
              </section>
            </UXAnnotation>
            <UXAnnotation explanation="Certifications establish credibility and provide context about your formal training.">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
                <ul className="space-y-2">
                  <li>
                    <strong>AWS Certified Cloud Practitioner (CLF-C02)</strong>
                    <a
                      href="https://www.credly.com/badges/932f9574-cc9b-43cb-a8a6-2eee283f7650/linked_in_profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-xs text-primary underline underline-offset-2 hover:text-blue-700 transition-colors"
                    >
                      Link
                    </a>
                    <span className="text-muted-foreground">
                      {" "}
                      — Oct 2024 – Oct 2027
                    </span>
                  </li>
                  <li>
                    <strong>
                      AWS Certified Solutions Architect – Associate (SAA-C03)
                    </strong>
                    <a
                      href="https://www.credly.com/badges/16f1b4a6-ab2b-4a99-8c51-c09c1921abe3/linked_in_profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-xs text-primary underline underline-offset-2 hover:text-blue-700 transition-colors"
                    >
                      Link
                    </a>
                    <span className="text-muted-foreground">
                      {" "}
                      — Feb 2025 – Feb 2028
                    </span>
                  </li>
                  <li>
                    <strong>Generative AI with Large Language Models</strong>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/33BJMHJ8JFPP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-xs text-primary underline underline-offset-2 hover:text-blue-700 transition-colors"
                    >
                      Link
                    </a>
                    <span className="text-muted-foreground">
                      {" "}
                      — Oct 2024 (Coursera)
                    </span>
                  </li>
                </ul>
              </div>
            </UXAnnotation>
            <UXAnnotation explanation="Skills grouped by category help visitors quickly assess your expertise and capabilities.">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-1">Languages</h3>
                    <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                      <li>Python</li>
                      <li>Java</li>
                      <li>PHP</li>
                      <li>R</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Frameworks</h3>
                    <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>Spring Boot</li>
                      <li>Laravel</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Cloud & DB</h3>
                    <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <li>AWS (Lambda, EC2, S3, RDS, DynamoDB)</li>
                      <li>Firebase</li>
                      <li>PostgreSQL</li>
                      <li>MySQL</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">DevOps</h3>
                    <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <li>Docker</li>
                      <li>GitHub Actions</li>
                      <li>Jenkins</li>
                      <li>CI/CD</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Design/Tools</h3>
                    <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <li>Figma</li>
                      <li>Adobe Suite</li>
                      <li>WordPress</li>
                      <li>Notion</li>
                      <li>Webflow</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">UX</h3>
                    <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <li>Research</li>
                      <li>Wireframing</li>
                      <li>Prototyping</li>
                      <li>WCAG</li>
                      <li>User Testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </UXAnnotation>
          </div>

          <div>
            <UXAnnotation explanation="A sidebar with a photo and quick details creates visual interest and provides easy-to-scan information.">
              <div className="sticky top-24 space-y-6">
                <div className="space-y-4">
                  <img
                    src="/G5.png"
                    alt="Profile picture of Gagan Doddanna"
                    className="rounded-full shadow-sm border border-gray-200"
                  />
                  <div>
                    <h3 className="text-sm text-muted-foreground">Location</h3>
                    <p>Chicago, IL</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground">
                      Get in touch
                    </h3>
                    <a
                      href="/contact"
                      className="text-primary hover:underline font-medium"
                    >
                      Contact me
                    </a>
                  </div>
                  <a
                    href="/Resume/Gagan_Doddanna_Resume.pdf"
                    download
                    className="w-full flex gap-2 items-center"
                  >
                    <Button
                      className="w-full flex gap-2 items-center"
                      asChild={false}
                    >
                      <Download className="w-4 h-4" /> Download CV
                    </Button>
                  </a>
                </div>
              </div>
            </UXAnnotation>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
