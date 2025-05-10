import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UXAnnotation from "@/components/UXAnnotation";

const SkillBadge = ({ skill }) => (
  <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
    {skill}
  </span>
);

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Yes Hardsoft Solutions Inc",
      location: "IL",
      period: "Dec 2024 – Present",
      skills: [
        "React.js",
        "Node.js",
        "AWS Lambda",
        "AWS S3",
        "Serverless",
        "State Management",
        "API Integration",
        "Scalable Systems",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "2ndSight.ai",
      location: "IL",
      period: "Jul 2024 – Nov 2024 · 5 mos",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "AWS EC2",
        "AWS Lambda",
        "OpenAI API",
        "WebRTC",
        "DynamoDB",
        "Firebase",
        "CI/CD",
        "Docker",
        "Agile/Scrum",
        "UX Improvement",
      ],
    },
    {
      title: "Software Engineer",
      company: "Triaim Enterprise",
      location: "IL",
      period: "Feb 2024 – Jun 2024 · 5 mos",
      skills: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "Responsive Design",
        "E-commerce",
        "CI/CD",
        "GitHub Actions",
        "Product Catalog APIs",
      ],
    },
    {
      title: "Web Developer & Mentor",
      company: "DePaul University",
      location: "IL",
      period: "Mar 2022 – Sep 2023 · 1 yr 7 mos",
      skills: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "WCAG Accessibility",
        "Usability Testing",
        "Wireframing",
        "User Research",
        "Agile",
        "Git",
      ],
    },
    {
      title: "Engineer",
      company: "Fugo Services",
      location: "India",
      period: "Aug 2020 – Sep 2021 · 1 yr 1 mo",
      skills: [
        "JavaScript",
        "Java",
        "HTML",
        "CSS",
        "Workflow Automation",
        "BFSI Solutions",
        "Jenkins",
        "Docker",
        "CI/CD",
        "Reporting Tools",
      ],
    },
  ];

  const volunteerExperiences = [
    {
      title: "Web Developer",
      organization: "Bright Mind Enrichment & Schooling",
      period: "Sep 2024 – Dec 2024 · 4 mos",
      categories: [
        "WordPress",
        "SEO",
        "UX/UI Collaboration",
        "Responsive Design",
        "Web Performance",
        "Nonprofit Outreach",
      ],
    },
    {
      title: "Web Developer",
      organization: "Changing The Present",
      period: "Feb 2024 – Apr 2024 · 3 mos",
      categories: [
        "Asana",
        "Team Communication",
        "Research",
        "Squarespace",
        "UX Design",
        "Digital Strategy",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="mt-16 flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <UXAnnotation explanation="A clear page title helps users understand what content to expect on this page.">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Experience</h1>
        </UXAnnotation>

        <UXAnnotation explanation="Experience is presented in chronological order with the most recent first, following standard resume convention.">
          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border border-border transition-all hover:shadow-md"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg font-bold">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-base font-normal">
                        {exp.company}{" "}
                        {exp.location && (
                          <span className="text-xs text-muted-foreground">
                            · {exp.location}
                          </span>
                        )}
                      </CardDescription>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((skill, i) => (
                      <SkillBadge key={i} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </UXAnnotation>

        {/* Volunteer Experience Section */}
        <UXAnnotation explanation="Volunteer experience is highlighted separately to showcase community involvement and leadership.">
          <h2 className="text-2xl font-bold mt-16 mb-8">
            Volunteer Experience
          </h2>
          <div className="grid gap-8">
            {volunteerExperiences.map((vol, index) => (
              <Card
                key={index}
                className="border border-border transition-all hover:shadow-md"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg font-bold">
                        {vol.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-base font-normal">
                        {vol.organization}
                      </CardDescription>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium whitespace-nowrap">
                      {vol.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {vol.categories.map((cat, i) => (
                      <SkillBadge key={i} skill={cat} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </UXAnnotation>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
