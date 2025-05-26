import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github, FileText, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UXAnnotation from "@/components/UXAnnotation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Realtime Riddle Board",
      category: "fullstack",
      description:
        "Build Fast. Sync Live. Auth & Comments in Minutes using cursor and supabase.",
      previewType: "slide",
      image: "/images/rrb.png",
      slideUrl: "https://pitch.com/v/realtime-riddle-board-4qhdnk",
      repo: "https://github.com/gagand29/realtime-riddle-board",
      keywords: ["cursor", "supabase", "live", "auth", "comments"],
    },
    {
      id: 2,
      title: "Movie Database App",
      category: "fullstack",
      description:
        "Secure movie app with Next.js, AWS RDS & S3, JWT Auth, Swagger, CI/CD.",
      previewType: "slide",
      image: "/images/md.png",
      slideUrl: "https://pitch.com/v/copy-of-movie-database-app-7uqwts",
      keywords: [
        "Next.js",
        "AWS RDS",
        "AWS S3",
        "JWT Auth",
        "CI/CD",
        "Swagger Docs",
        "Full Stack App",
      ],
      repo: "https://github.com/gagand29/movie-database-app",
    },
    {
      id: 3,
      title: "Indian Recipe Hub",
      category: "fullstack",
      description:
        "Full-stack recipe platform using React.js & Django REST, deployed on AWS S3, EC2, and CloudFront.",
      previewType: "slide",
      image: "/images/irh.png",
      slideUrl: "https://pitch.com/v/aws---irh-project-gqc9sj",
      keywords: [
        "React.js",
        "Django REST",
        "AWS EC2",
        "AWS S3",
        "CloudFront",
        "Full Stack App",
        "Scalable Deployment",
      ],
      repo: "https://github.com/gagand29/IRH-Indian-Recipe-Hub",
    },
    {
      id: 4,
      title: "OurMainApp",
      category: "fullstack",
      description:
        "Social media web app built with Laravel, featuring auth, user profiles, and live search.",
      previewType: "repo",
      image: "/images/op.png",
      slideUrl: "https://github.com/gagand29/ourmainapp",
      keywords: [
        "Laravel",
        "PHP",
        "MySQL",
        "Authentication",
        "Social Media",
        "Blade Template",
        "Web Development",
      ],
      repo: "https://github.com/gagand29/ourmainapp",
    },
    {
      id: 5,
      title: "Grade Submission System",
      category: "fullstack",
      description:
        "Spring Boot + React app with REST API, form validation, and secure grade submissions.",
      previewType: "repo",
      image: "/images/Gss.png",
      slideUrl: "https://github.com/gagand29/grade-submission",
      keywords: [
        "Spring Boot",
        "React.js",
        "REST API",
        "Form Validation",
        "MVC Architecture",
        "Backend Security",
        "Dependency Injection",
      ],
      repo: "https://github.com/gagand29/grade-submission",
    },
    {
      id: 6,
      title: "Receipt Processor",
      category: "backend",
      description:
        "Backend service using Node.js & Express to process receipts, calculate points, and return unique IDs. Dockerized for easy deployment.",
      previewType: "slide",
      image: "/images/rp.png",
      slideUrl:
        "https://pitch.com/v/receipt-processor--gagan-doddanna---fetch-iakzji",
      keywords: [
        "Node.js",
        "Express.js",
        "REST API",
        "Docker",
        "Backend Development",
        "In-Memory Storage",
        "Receipt Scoring",
      ],
      repo: "https://github.com/gagand29/Receipt-processor",
    },
    {
      id: 7,
      title: "Full-Stack Research Portal",
      category: "others",
      description:
        "Conceptual platform for secure scientific collaboration with AI-powered search, role-based access, and notebook sharing.",
      previewType: "slide",
      image: "/images/rsp.png",
      slideUrl: "https://pitch.com/v/gagan-doddanna-hfyq2s",
      keywords: [
        "Research Collaboration",
        "AI Model Sharing",
        "Jupyter Notebooks",
        "Role-Based Access",
        "Secure Data Management",
        "Scientific Platform Design",
        "UX Architecture Proposal",
      ],
    },
    {
      id: 8,
      title: "Superstore Analysis",
      category: "dataviz",
      description:
        "Created impactful Superstore visualizations with RStudio and Tableau to support data-driven decisions.",
      previewType: "slide",
      image: "/images/dv.png",
      slideUrl: "https://pitch.com/v/superstore-analysis-rsec57",
      keywords: [
        "Data Visualization",
        "RStudio",
        "Tableau",
        "Superstore",
        "Impactful Insights",
        "Data-Driven Decisions",
        "Collaborative Analytics",
      ],
      repo: "",
    },
    {
      id: 9,
      title: "Shippy – UX/UI Case Study",
      category: "uiux",
      description:
        "Revolutionized delivery experience through secure UX, smart notifications, and cross-device UI flows.",
      previewType: "external",
      image: "/images/shippy.png",
      externalUrl: "https://www.behance.net/gagand1",
      keywords: [
        "UX Strategy",
        "Persona Development",
        "Wireframing",
        "Prototype",
        "Cross-Device Design",
        "Smart Notifications",
        "Seamless UX",
      ],
    },
    {
      id: 10,
      title: "Revamp Chicago Library Site",
      category: "uiux",
      description:
        "Transformed CPL's online experience with user research, personas, and intuitive navigation.",
      previewType: "external",
      image: "/images/cpl.png",
      externalUrl: "https://www.behance.net/gagand1",
      keywords: [
        "Informed User Research",
        "Design Thinking",
        "Persona-Driven Design",
        "Wireframing",
        "Intuitive UI",
        "UX Redesign",
        "Library Interface",
      ],
    },
    {
      id: 11,
      title: "SneakerZ",
      category: "uiux",
      description:
        "Crafted a stylish sneaker discovery experience with pixel-perfect UI and seamless branding.",
      previewType: "external",
      image: "/images/sn.png",
      externalUrl: "https://www.behance.net/gagand1",
      keywords: [
        "Empowered UX",
        "User-Centric Design",
        "Intuitive UI",
        "Optimized Journeys",
        "Maximized Satisfaction",
        "E-commerce UX",
        "Visual Branding",
      ],
    },
    {
      id: 12,
      title: "UX Genie – No-Code UX Research Tool",
      category: "uiux",
      description:
        "Proposed a scalable UX research assistant using Bubble.io, OpenAI API, and rapid prototyping.",
      previewType: "external",
      image: "/images/uxgenie.png",
      externalUrl: "https://www.behance.net/gagand1",
      keywords: [
        "Bubble.io",
        "No-Code Development",
        "OpenAI API",
        "Rapid Prototyping",
        "Responsive Design",
        "UX/UI Design",
        "AI-Powered UX",
      ],
    },
    {
      "id": 13,
      "title": "Feedback App – Built with Microsoft Power Platform",
      "category": "others",
      "description": "Designed a feedback submission system using Power Apps, Dataverse, and Power Automate with future integration plans for Power BI and Power Pages.",
      "previewType": "external",
      "image": "/images/feedback.png",
      "externalUrl": "https://pitch.com/v/feedback-app---built-with-microsoft-power-platform-975e27",
      "keywords": [
        "Power Apps",
        "Dataverse",
        "Power Automate",
        "Low-Code Development",
        "Microsoft 365",
        "Workflow Automation",
        "Feedback System",
        "No-Code Dashboard"
      ]
    },
  ];

  const blogPosts = [
    {
      title: "Deployed new version of Portfolio",
      category: "deploy",
      date: "2024-06-01",
      summary:
        "Successfully deployed the latest version of my portfolio with improved performance and accessibility features.",
    },
    {
      title: "Feedback received on UX Case Study",
      category: "feedback",
      date: "2024-05-30",
      summary:
        "Received valuable feedback on my recent UX case study focusing on e-commerce checkout experiences.",
    },
    {
      title: "First build level 1",
      category: "deploy",
      date: "2024-05-28",
      summary:
        "Completed the initial build phase for the new project, incorporating all core functionality requirements.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="mt-16 flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <UXAnnotation explanation="A clear header with subtitle provides context about the page content and sets expectations.">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
            <p className="text-lg text-muted-foreground mt-2">
              A selection of my recent work, spanning fullstack, UI/UX, and
              more.
            </p>
          </div>
        </UXAnnotation>

        <UXAnnotation explanation="Category filters help users quickly find projects of interest to them.">
          <Tabs
            defaultValue="all"
            className="mb-10"
            onValueChange={setActiveCategory}
          >
            <TabsList className="mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="fullstack">Fullstack</TabsTrigger>
              <TabsTrigger value="uiux">UI/UX</TabsTrigger>
              <TabsTrigger value="dataviz">Data Visualization</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="others">Others</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0"></TabsContent>
            <TabsContent value="fullstack" className="mt-0"></TabsContent>
            <TabsContent value="uiux" className="mt-0"></TabsContent>
            <TabsContent value="dataviz" className="mt-0"></TabsContent>
            <TabsContent value="backend" className="mt-0"></TabsContent>
            <TabsContent value="others" className="mt-0"></TabsContent>
          </Tabs>
        </UXAnnotation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project, index) => (
            <UXAnnotation
              key={index}
              explanation="Project cards include visual previews, concise descriptions, and clear action buttons to view more details."
            >
              <Card className="flex flex-col h-full border border-border overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex gap-1">
                      {project.category === "fullstack" && (
                        <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-0.5 px-2 rounded-full">
                          Fullstack
                        </span>
                      )}
                      {project.category === "uiux" && (
                        <span className="text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 py-0.5 px-2 rounded-full">
                          UI/UX
                        </span>
                      )}
                      {project.category === "dataviz" && (
                        <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 py-0.5 px-2 rounded-full">
                          Data Viz
                        </span>
                      )}
                      {project.category === "backend" && (
                        <span className="text-sm bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 py-0.5 px-2 rounded-full">
                          Backend
                        </span>
                      )}
                      {project.category === "others" && (
                        <span className="text-sm bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-0.5 px-2 rounded-full">
                          Others
                        </span>
                      )}
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {(project.keywords || []).map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={
                          project.previewType === "external"
                            ? project.externalUrl
                            : project.slideUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    </Button>
                    {project.repo && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Github className="w-4 h-4" /> Code
                        </a>
                      </Button>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <FileText className="w-4 h-4" /> Docs
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </UXAnnotation>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
