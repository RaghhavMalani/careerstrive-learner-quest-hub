
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Laptop, Book, Clock, Target, Users, BarChart, Wrench as ToolsIcon, MapIcon, CalendarIcon, Brain, Sparkles, Star } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("students");
  
  const features = [
    {
      icon: Target,
      title: "Domain Selection",
      description: "Choose your area of interest and get personalized learning paths tailored to your skills and goals."
    },
    {
      icon: MapIcon,
      title: "Learning Roadmap",
      description: "Follow a clear, step-by-step pathway designed by experts to master your chosen field."
    },
    {
      icon: ToolsIcon,
      title: "Resource Library",
      description: "Access a curated collection of tools, tutorials, and materials specifically for your domain."
    },
    {
      icon: CalendarIcon,
      title: "Custom Study Plans",
      description: "Get AI-generated study schedules that adapt to your availability and learning pace."
    },
    {
      icon: BarChart,
      title: "Progress Tracking",
      description: "Monitor your growth with detailed analytics and stay motivated with milestone achievements."
    },
    {
      icon: Brain,
      title: "AI Feedback",
      description: "Receive personalized feedback on your progress to help you improve and overcome challenges."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Web Development Student",
      content: "Career Strive helped me go from knowing nothing about coding to building my first professional website in just 3 months! The roadmap was incredibly clear, and the weekly projects kept me motivated.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "Data Science Enthusiast",
      content: "The AI-generated study plan worked perfectly around my full-time job. I could finally make consistent progress without feeling overwhelmed. The tool recommendations saved me countless hours of research.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Aisha Patel",
      role: "UI/UX Design Student",
      content: "The feedback on my projects was invaluable. It felt like having a personal mentor guiding me through my design journey. I've improved more in 2 months than I did in a year of self-study.",
      avatar: "/placeholder.svg"
    }
  ];

  const domains = [
    "Web Development", "Mobile App Development", "Data Science", "UI/UX Design", 
    "Digital Marketing", "Machine Learning", "Graphic Design", "Game Development",
    "Cybersecurity", "Cloud Computing", "DevOps", "Blockchain"
  ];

  const stats = [
    { label: "Domains", value: "25+", description: "Specialized fields" },
    { label: "Tools", value: "100+", description: "Curated resources" },
    { label: "Roadmaps", value: "50+", description: "Expert pathways" },
    { label: "Projects", value: "200+", description: "Hands-on learning" },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Background blobs */}
      <div className="blob-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative gradient-bg overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 opacity-10">
          <div className="dot-pattern h-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                  <Sparkles className="w-4 h-4 mr-1" />
                  AI-Powered Learning Platform
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance animate-in stagger-1">
                Accelerate Your Learning Journey with <span className="text-gradient bg-gradient-to-r from-primary to-primary/60">AI-Powered Guidance</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-in stagger-2">
                Personalized roadmaps, custom study plans, and expert resources tailored to your goals and schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in stagger-3">
                <Button size="lg" className="btn-hover group" asChild>
                  <Link to="/login">
                    Get Started Free 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="btn-hover" asChild>
                  <Link to="#features">
                    Learn More
                  </Link>
                </Button>
              </div>
              <div className="pt-4 flex items-center justify-center lg:justify-start text-sm animate-in stagger-4">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span>No credit card required</span>
                <span className="mx-2">•</span>
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative glass-card rounded-xl overflow-hidden border card-shine soft-shadow floating-element">
                <img 
                  src="/placeholder.svg" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto shadow-lg rounded-lg"
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 bg-yellow-100 w-20 h-20 rounded-full opacity-70 floating-element-fast"></div>
              <div className="absolute -bottom-8 -left-8 bg-blue-100 w-24 h-24 rounded-full opacity-70 floating-element-slow"></div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-in stagger-5">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border soft-shadow hover-scale card-shine">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="font-medium">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24 relative" id="how-it-works">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
                <Star className="w-4 h-4 mr-1" />
                Simple Process
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Career Strive Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple process designed to help you reach your learning goals efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-8 rounded-xl border card-highlight hover-scale soft-shadow relative overflow-hidden">
              <div className="absolute -top-2 -left-2 bg-primary text-white text-xl font-bold w-12 h-12 flex items-center justify-center rounded-br-xl">
                01
              </div>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 soft-shadow">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Domain</h3>
              <p className="text-muted-foreground">
                Select your field of interest and let us know your current skill level and learning goals.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 rounded-xl border card-highlight hover-scale soft-shadow relative overflow-hidden">
              <div className="absolute -top-2 -left-2 bg-primary text-white text-xl font-bold w-12 h-12 flex items-center justify-center rounded-br-xl">
                02
              </div>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 soft-shadow">
                <CalendarIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Roadmap</h3>
              <p className="text-muted-foreground">
                Receive a personalized learning path with resources, tools, and a schedule tailored to your availability.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 rounded-xl border card-highlight hover-scale soft-shadow relative overflow-hidden">
              <div className="absolute -top-2 -left-2 bg-primary text-white text-xl font-bold w-12 h-12 flex items-center justify-center rounded-br-xl">
                03
              </div>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 soft-shadow">
                <BarChart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track & Improve</h3>
              <p className="text-muted-foreground">
                Follow your progress, complete projects, and receive AI-powered feedback to continuously enhance your skills.
              </p>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="hidden md:flex justify-center my-8">
            <div className="h-1 w-3/4 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 gradient-bg relative" id="features">
        <div className="absolute inset-0 opacity-10">
          <div className="dot-pattern h-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
                <Sparkles className="w-4 h-4 mr-1" />
                Powerful Features
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to accelerate your learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border soft-shadow hover-scale card-shine"
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-16 md:py-24" id="domains">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700 font-medium">
                <MapIcon className="w-4 h-4 mr-1" />
                Learning Paths
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Learning Domains</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover expert-crafted roadmaps for popular fields
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {domains.map((domain, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-lg border text-center hover-scale card-shine group cursor-pointer"
              >
                <span className="font-medium group-hover:text-primary transition-colors">{domain}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button className="btn-hover group" asChild>
              <Link to="/login">
                Browse All Domains
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 gradient-bg relative">
        <div className="absolute inset-0 opacity-10">
          <div className="dot-pattern h-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-700 font-medium">
                <Users className="w-4 h-4 mr-1" />
                Success Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of learners achieving their goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border soft-shadow card-shine relative overflow-hidden">
                <Star className="absolute top-4 right-4 text-yellow-400 w-5 h-5" />
                <Star className="absolute top-4 right-10 text-yellow-400 w-5 h-5" />
                <Star className="absolute top-4 right-16 text-yellow-400 w-5 h-5" />
                <Star className="absolute top-4 right-22 text-yellow-400 w-5 h-5" />
                <Star className="absolute top-4 right-28 text-yellow-400 w-5 h-5" />
                
                <div className="space-y-4">
                  <p className="italic text-muted-foreground">"{testimonial.content}"</p>
                  <div className="pt-4 border-t flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-primary/10 to-blue-100/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-100 rounded-full opacity-50 floating-element-slow"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-100 rounded-full opacity-50 floating-element"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Learning Journey?</h2>
              <p className="text-xl">
                Join Career Strive today and start making progress toward your goals with personalized guidance.
              </p>
              <Button size="lg" className="btn-hover group" asChild>
                <Link to="/login">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <p className="text-sm">No credit card required</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <p className="text-sm">Free plan available</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <p className="text-sm">Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Career Strive</h3>
              <p className="text-muted-foreground">
                Accelerate your learning journey with AI-powered guidance and personalized roadmaps.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Domain Selection</a></li>
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Learning Roadmap</a></li>
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Study Plans</a></li>
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Progress Tracking</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Career Strive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
