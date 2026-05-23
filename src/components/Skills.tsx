
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, Cloud, Award, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "GenAI & LLM",
      icon: Brain,
      description: "Advanced AI agents, LLM orchestration, and RAG pipelines",
      skills: [
        "LangChain", "LangGraph", "AutoGen", "vLLM", "HuggingFace", 
        "RAG Pipelines", "Multi-Agent Systems", "Ollama", "Dynamic Task Execution"
      ],
      color: "text-purple-500"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Deep learning models, architectures, and fine-tuning",
      skills: [
        "PyTorch", "BERT", "Transformers", "Model Fine-tuning", "Vector Databases", 
        "MLOps", "Deep Learning", "Wav2Vec2", "MMS-TTS"
      ],
      color: "text-blue-500"
    },
    {
      title: "Backend & Microservices",
      icon: Code2,
      description: "Scalable backend services, APIs, and microservice architectures",
      skills: [
        "FastAPI", "Django", "Celery", "Redis", "PostgreSQL", 
        "REST APIs", "Microservices", "Bash"
      ],
      color: "text-green-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Infrastructure, containerization, and orchestration platforms",
      skills: [
        "Docker", "Kubernetes (Learning)", "GCP", "AWS", "Distributed Systems", 
        "Git", "GitHub"
      ],
      color: "text-orange-500"
    },
    {
      title: "Programming Languages",
      icon: Code2,
      description: "Core programming and scripting languages",
      skills: [
        "Python", "SQL", "Bash"
      ],
      color: "text-indigo-500"
    },
    {
      title: "Achievements & Certifications",
      icon: Award,
      description: "National distinctions and professional credentials",
      skills: [
        "GATE 2024 (Data Science & AI - Rank 2852)",
        "Master Data Science (IITM GUVI)",
        "Advanced Programming Professional (IITM GUVI)"
      ],
      color: "text-red-500"
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set in GenAI, Distributed Systems, and Machine Learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

