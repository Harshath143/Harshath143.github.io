
import React from 'react';
import { Github, ExternalLink, Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI AGENT– INVESTMENT ADVISORY SYSTEM",
      description: "Developed a personalized investment advisor using LangChain/RAG and transformer models for predictive stock analysis, delivering accurate, tailored forecasts and suggestions. Built containerized inference API using FastAPI + Docker with 99.9% uptime for scalable model serving.",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=500&h=300&fit=crop",
      technologies: ["LangChain", "LlamaIndex", "FastAPI", "Python", "Docker", "RAG", "Transformers"],
      githubUrl: "https://github.com/Harshath143/AI_Agent_Investment_Advisory",
      featured: true
    },
    {
      title: "VOICEGPT – MULTILINGUAL VOICE-BASED AI ASSISTANT",
      description: "Developed an end-to-end multilingual AI voice assistant (Tamil & Marathi support) using Wav2Vec2 for accurate Speech-to-Text and MMS-TTS for natural Text-to-Speech generation. Implemented an offline, privacy-focused system that processes data locally, utilizing fine-tuned transformer models for intent classification and Retrieval-Augmented Generation (RAG) with Sentence Transformers to provide real-time, contextually relevant answers.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      technologies: ["HuggingFace", "RAG", "Ollama", "Wav2Vec2", "MMS-TTS", "Transformers", "Python"],
      githubUrl: "https://github.com/Harshath143/VoiceGPT-AI-Voice-Assistant",
      featured: true
    },
    {
      title: "WorkSync System",
      description: "WorkSync System is a staff monitoring solution built with FastAPI and PostgreSQL, enabling efficient staff data management and real-time performance visualization. It supports image uploads and offers a clean, modular backend architecture. Future enhancements include user authentication, cloud image storage, and advanced admin features.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      technologies: ["FastAPI", "PostgreSQL", "Python", "SQL", "Docker", "REST APIs"],
      githubUrl: "https://github.com/Harshath143/WorkSync_System",
      featured: true
    },
    {
      title: "AI_Company_prototype",
      description: "NeoForge AI is an autonomous software development system built with Python and FastAPI, enabling the seamless transformation of high-level requirements into production-ready codebases. It utilizes a multi-agent orchestration architecture to ensure high code quality through specialized roles—including Architects and Developers—and provides reliable, placeholder-free file generation. The system features a built-in dashboard for real-time workflow visualization and operates within isolated project environments to maintain strict structural integrity.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      technologies: ["FastAPI", "Python", "Multi-Agent Architecture", "Groq API", "File Management", "LangGraph"],
      githubUrl: "https://github.com/Harshath143/AI_Company_prototype",
      featured: true
    }
  ];

  const workExperience = [
    {
      title: "AI & ML Engineer",
      company: "Holistic MD LLP",
      location: "Coimbatore, India [On-site]",
      duration: "Dec 2025 – Present",
      type: "Full-time",
      description: "AI Developer specializing in GenAI backend development and distributed systems. Expert in building scalable LLM inference platforms, multi-agent orchestration, and RAG pipelines with strong focus on performance optimization and production reliability.",
      technologies: ["Python", "Django", "FastAPI", "Redis", "LangChain", "LangGraph", "Groq API", "RAG Pipelines", "Multi-Agent Systems", "Dynamic Task Execution", "Distributed Systems"],
      achievements: [
        "Developed VisionAnalyzer, a real-time computer vision application using Django and Groq API to perform low-latency object detection and automated ingredient extraction from live camera feeds.",
        "Implemented LLM-powered RAG workflows, enhancing document comprehension and policy analysis accuracy by 40%.",
        "Developed and deployed intelligent AI agents with tool-based reasoning and Dynamic Task Execution for management simulations.",
        "Built production legislative automation system using LangGraph + RAG pipelines, reducing processing latency by 30%."
      ]
    },
    {
      title: "AI Developer",
      company: "OPSEN",
      location: "London, UK [Remote]",
      duration: "Oct 2025 – Nov 2025 (2 months)",
      type: "Full-time",
      description: "AI Developer specializing in GenAI backend development and distributed systems. Expertise in building scalable LLM inference platforms, multi-agent orchestration, and RAG pipelines.",
      technologies: ["Python", "ClickHouse", "LLM", "RAG Pipelines", "Multi-Agent Architecture", "LangGraph", "Dynamic Task Execution", "Git", "Distributed Systems"],
      achievements: [
        "Integrated ClickHouse database with multi-agent architecture, enabling high-speed analytics and scalable data storage for AI-driven risk models.",
        "Implemented LLM-powered RAG workflows, enhancing document comprehension and policy analysis accuracy by 40%.",
        "Developed and deployed intelligent AI agents with tool-based reasoning and Dynamic Task Execution for risk management simulations.",
        "Built production legislative automation system using LangGraph + RAG pipelines, reducing processing latency by 30%."
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "TMIS",
      location: "Chennai, India",
      duration: "Feb 2025 – March 2025 (2 months)",
      type: "Full-time",
      description: "Assisted in developing and deploying machine learning models to solve real-world problems. Supported data preprocessing, exploratory data analysis, feature engineering, and model evaluation tasks.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Data Analysis", "Machine Learning", "Git", "Jupyter Notebook"],
      achievements: [
        "Built and deployed a classification model to detect anomalies in health records, improving data quality and consistency by 85%.",
        "Engineered data pipelines for preprocessing millions of patient records using Python and Pandas.",
        "Evaluated model performance using standard metrics and improved model accuracy through hyperparameter tuning.",
        "Documented workflows and collaborated with team members on project milestones."
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "WeInvest - Digital Wealth Platform",
      location: "Bengaluru, India [Remote]",
      duration: "Jul 2023 – Sep 2023 (3 months)",
      type: "Remote Internship",
      description: "Worked on financial data analysis and reporting to support digital wealth management solutions. Delivered data-driven insights and collaborated with cross-functional teams to optimize investment models.",
      technologies: ["Python", "SQL", "Tableau", "Excel", "Data Visualization", "Data Analysis", "Financial Analysis", "Reporting Tools"],
      achievements: [
        "Analyzed and processed over 1 million financial data points, identifying key market trends that contributed to a 15% improvement in portfolio recommendation accuracy.",
        "Automated routine data validation tasks, decreasing errors by 25% and improving data quality for downstream analysis.",
        "Developed interactive dashboards using Tableau to visualize financial metrics, enhancing decision-making for stakeholders.",
        "Collaborated with data engineering team to optimize ETL processes, reducing data processing time by 30%."
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects & Experience</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing technical projects and professional experience in GenAI, backend engineering, and distributed systems
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm border-border">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Professional Experience</h3>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {workExperience.map((experience, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <CardTitle className="text-xl font-semibold text-foreground">{experience.title}</CardTitle>
                    <Badge variant="outline" className="self-start lg:self-center bg-background">{experience.type}</Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-primary font-medium text-lg">{experience.company}</p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {experience.description}
                  </CardDescription>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Key Achievements:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1 text-xs">●</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
