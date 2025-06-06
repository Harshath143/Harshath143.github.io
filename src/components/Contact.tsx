import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, User, Briefcase, Mail, MapPin, Award, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs.send(
      'service_plm5lgm', // <-- Replace with your actual EmailJS Service ID
      'template_oql9b0c', // <-- Replace with your actual Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'ibVnX2qm58CGhZ5Wt' // <-- Replace with your actual Public Key
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      toast({
        title: "Something went wrong.",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
      console.error('EmailJS error:', error);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'Harshath_Resume.pdf';
    link.download = 'Harshath_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking new opportunities in Gen AI engineering,AI Developer and Data Scientist. 
            Let's connect and discuss how we can build quality software together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">Let's Connect</CardTitle>
                <CardDescription>
                  I'm passionate about Gen AI engineering, AI development, and data science, with a strong foundation in software engineering and full-stack development. I love building intelligent, scalable solutions that create real-world impact. I'm open to new roles, collaborations, or tech conversations—let's connect!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <User className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Mohammed Harshath</h4>
                    <p className="text-muted-foreground text-sm">AI & Data Science Aspirant</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-green-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a href="mailto:harshath142@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      harshath142@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-purple-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground text-sm">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-orange-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Availability</h4>
                    <p className="text-muted-foreground text-sm">Open to full-time opportunities</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Award className="text-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Experience</h4>
                    <p className="text-muted-foreground text-sm">6+ months professional experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/Harshath143" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/mohammed-harshath-ss-a68435208/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="default" size="lg" onClick={downloadResume}>
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Drop me a line and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
