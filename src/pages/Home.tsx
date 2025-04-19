import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, AuthContextType } from "@/App";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Target, MapIcon, CalendarIcon, LineChart, Code, Wrench as ToolsIcon, CheckCircle, Star, Sparkles, Users, BookOpen } from "lucide-react";
import { ElegantCard } from "@/components/ui/elegant-card";

const Home = () => {
  const { user } = useContext(AuthContext) as AuthContextType;

  return (
    <Layout>
      <div className="flex flex-col gap-16 py-8 md:py-16">
        {/* Hero section with enhanced color contrast */}
        <section className="min-h-screen flex items-center justify-center text-center px-4 md:px-8 relative overflow-hidden">
          {/* Vibrant blob backgrounds */}
          <div className="absolute top-20 -left-20 w-64 h-64 bg-[#8B5CF6]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-40 -right-20 w-64 h-64 bg-[#F97316]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-[#0EA5E9]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
          
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in relative z-10">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>AI-Powered Learning Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-[#1A1A2E] leading-tight">
              Unlock Your Potential with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#F97316]">Personalized Learning</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#4B5563] max-w-3xl mx-auto mt-6">
              AI-powered study plans, expert-curated resources, and intelligent progress tracking to transform your learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to={user ? "/dashboard" : "/login"}>
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#8B5CF6] to-[#F97316] hover:from-[#F97316] hover:to-[#8B5CF6] transition-all hover:-translate-y-1 duration-300 text-white">
                  {user ? "Go to Dashboard" : "Get Started"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-all hover:-translate-y-1 duration-300">
                  {user ? "Explore Domains" : "Learn More"}
                </Button>
              </Link>
            </div>

            {/* Trust badges with enhanced colors */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-12 pt-6 border-t border-[#E5E7EB]">
              {[
                { icon: CheckCircle, color: "text-[#10B981]", text: "Trusted by 10K+ learners" },
                { icon: BookOpen, color: "text-[#6366F1]", text: "25+ learning domains" },
                { icon: Star, color: "text-[#F59E0B]", text: "Free starter plan" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm text-[#4B5563]">
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats section */}
        <section className="py-8 bg-[#F9F1EE] rounded-2xl">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "25+", label: "Domains", icon: BookOpen },
                { value: "100+", label: "Tools & Resources", icon: ToolsIcon },
                { value: "50k+", label: "Active Users", icon: Users },
                { value: "4.9/5", label: "User Rating", icon: Star },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-[#4A3F3A]">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features section with enhanced cards */}
        <section className="space-y-12 py-8 animate-fade-in">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              <span>Key Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#4A3F3A]">Your Personal Learning Companion</h2>
            <p className="text-muted-foreground text-lg">
              All the tools and guidance you need to excel in your chosen field
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Target}
              title="Domain Selection"
              description="Choose your area of interest and get tailored recommendations for specializations."
              buttonText="Find my domain"
              route="/domain-selection"
            />
            <FeatureCard 
              icon={MapIcon}
              title="Custom Roadmaps"
              description="Access essential tools, study materials, and a step-by-step roadmap tailored to your domain."
              buttonText="Explore tools and more"
              route="/roadmap"
            />
            <FeatureCard 
              icon={CalendarIcon}
              title="Flexible Study Plans"
              description="Smart AI-generated study plans adapt to your busy schedule, ensuring consistent progress with just 1 hour a day!"
              buttonText="Generate a plan for me"
              route="/study-plan"
            />
            <FeatureCard 
              icon={LineChart}
              title="Progress Tracking"
              description="Stay on top of your learning with real-time progress tracking, AI-powered feedback, and weekly insights."
              buttonText="View my progress"
              route="/progress"
            />
            <FeatureCard 
              icon={Code}
              title="Weekly Projects"
              description="Strengthen your skills with new mini-projects every week to apply what you've learned and gain practical experience."
              buttonText="Let's test myself!"
              route="/projects"
            />
            <FeatureCard 
              icon={ToolsIcon}
              title="AI Feedback"
              description="Receive AI-powered feedback tailored to your progress, highlighting strengths and pinpointing areas for improvement."
              buttonText="Generate my feedback!"
              route="/progress"
            />
          </div>
        </section>

        {/* How it works section with numbered steps */}
        <section className="space-y-12 py-8 animate-fade-in relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-3xl"></div>
          
          <div className="text-center space-y-4 max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Simple Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#4A3F3A]">How It Works</h2>
            <p className="text-muted-foreground text-lg">
              A simple process designed to maximize your learning potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                step: "01",
                title: "Define Your Goals",
                description: "Select your domain of interest and specific areas you want to focus on."
              },
              {
                step: "02",
                title: "Follow Your Roadmap",
                description: "Access personalized learning resources, tools, and study plans."
              },
              {
                step: "03",
                title: "Track & Improve",
                description: "Measure your progress, complete projects, and receive AI-powered feedback."
              }
            ].map((step, idx) => (
              <ElegantCard key={idx} className="relative border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="absolute -top-4 -left-4 bg-[#4A3F3A] text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2 text-[#4A3F3A] pt-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </ElegantCard>
            ))}
          </div>
        </section>

        {/* Benefits section with enhanced styling */}
        <section className="space-y-8 py-8 animate-fade-in">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              <span>For Everyone</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#4A3F3A]">Why Choose Career Strive</h2>
            <p className="text-muted-foreground text-lg">
              We're committed to helping you reach your full potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-[#F9F1EE] border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#4A3F3A]">For Beginners</h3>
              <ul className="space-y-3">
                {[
                  "Clear starting points and foundational concepts",
                  "Guidance on which skills to prioritize",
                  "Simplified explanations with practical examples",
                  "Bite-sized learning modules to build confidence"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white to-[#F9F1EE] border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#4A3F3A]">For Advanced Learners</h3>
              <ul className="space-y-3">
                {[
                  "Deep dives into specialized topics and techniques",
                  "Advanced projects to challenge your abilities",
                  "Personalized feedback on your work",
                  "Connections to industry standards and best practices"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials section (NEW) */}
        <section className="py-12 bg-[#F9F1EE] rounded-2xl">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center px-4 py-2 mb-4 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                <span>Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-[#4A3F3A]">What Our Users Say</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Read stories from people who transformed their learning journey with Career Strive
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  text: "Career Strive helped me transition from a complete beginner to a confident web developer in just 4 months. The structured roadmap was exactly what I needed!",
                  name: "Sarah Johnson",
                  role: "Web Developer"
                },
                {
                  text: "As someone juggling a full-time job, Career Strive's flexible study plans made learning data science manageable and actually enjoyable. The weekly projects kept me motivated.",
                  name: "Michael Chen", 
                  role: "Data Scientist"
                },
                {
                  text: "The personalized feedback on my projects was invaluable. It felt like having a personal mentor guiding me through my UX design journey.",
                  name: "Priya Sharma",
                  role: "UX Designer"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#4A3F3A]">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section with gradient background */}
        <section className="text-center space-y-8 py-12 animate-fade-in relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4A3F3A]/10 to-[#F9F1EE] rounded-2xl"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#4A3F3A]">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of learners who are achieving their goals with Career Strive
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link to={user ? "/dashboard" : "/login"}>
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#4A3F3A] to-[#6b5a52] hover:from-[#6b5a52] hover:to-[#4A3F3A] transition-all hover:-translate-y-1 duration-300">
                  {user ? "Go to Dashboard" : "Get Started for Free"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#4A3F3A] text-[#4A3F3A] hover:bg-[#4A3F3A]/10 transition-all hover:-translate-y-1 duration-300">
                  {user ? "Explore Domains" : "Learn More"}
                </Button>
              </Link>
            </div>

            {/* Additional trust badges */}
            <div className="flex flex-wrap justify-center items-center gap-4 pt-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Career Strive. All rights reserved.</p>
        </footer>
      </div>
    </Layout>
  );
};

// Feature Card Component
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText, 
  route 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  buttonText: string;
  route: string;
}) => {
  return (
    <div className="group bg-gradient-to-br from-white to-[#F9F1EE] rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6 space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-2 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-[#4A3F3A]">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Link to={route}>
          <Button 
            variant="outline" 
            className="mt-4 border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-primary group-hover:translate-x-1 transition-all"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
