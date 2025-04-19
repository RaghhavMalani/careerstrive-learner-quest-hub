
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Award, Calendar, LineChart, Folder } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface DomainInfo {
  isSelected: boolean;
  name: string;
  completedItems: number;
  totalItems: number;
}

const Dashboard = () => {
  const [domain, setDomain] = useState<DomainInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching user domain data
  useEffect(() => {
    const fetchDomain = async () => {
      // Simulate API call
      setTimeout(() => {
        // Mock data - in real app would come from API
        const userDomain = localStorage.getItem("selectedDomain");
        
        if (userDomain) {
          setDomain({
            isSelected: true,
            name: userDomain,
            completedItems: 3,
            totalItems: 12,
          });
        } else {
          setDomain({
            isSelected: false,
            name: "",
            completedItems: 0,
            totalItems: 0,
          });

          // Show toast notification to guide new users
          toast({
            title: "Welcome to Career Strive!",
            description: "Start by selecting your domain of interest.",
            duration: 5000,
          });
        }
        
        setIsLoading(false);
      }, 1000);
    };

    fetchDomain();
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading your dashboard...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        {/* Welcome section */}
        <section className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            {domain?.isSelected 
              ? `Welcome to your ${domain.name} journey` 
              : "Welcome to Career Strive"}
          </h1>
          <p className="text-muted-foreground">
            {domain?.isSelected 
              ? `Track your progress and continue your learning path` 
              : "Let's start by selecting your domain of interest"}
          </p>
        </section>

        {/* Domain selection prompt or Progress overview */}
        {!domain?.isSelected ? (
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Learning Domain</CardTitle>
              <CardDescription>
                Select the field you want to master to get a personalized learning roadmap
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-6">
              <img 
                src="public/lovable-uploads/fb257225-9fb0-4b98-b263-573f085a91c9.png" 
                alt="Choose a learning domain" 
                className="h-48 object-contain"
              />
            </CardContent>
            <CardFooter className="justify-end">
              <Link to="/domain-selection">
                <Button>Select Domain <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Your Learning Progress</CardTitle>
              <CardDescription>
                {domain.name} mastery: {Math.round((domain.completedItems / domain.totalItems) * 100)}% complete
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-2 bg-secondary rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-primary rounded-full" 
                  style={{ width: `${(domain.completedItems / domain.totalItems) * 100}%` }}
                ></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-medium">Completed Milestones</p>
                  <p className="text-2xl font-bold mt-1">{domain.completedItems} / {domain.totalItems}</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-medium">Estimated Completion</p>
                  <p className="text-2xl font-bold mt-1">3 weeks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick links or recommendations */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link to="/study-plan" className="hover:no-underline">
            <Card className="hover-scale">
              <CardHeader className="p-4">
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Study Plan</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  {domain?.isSelected ? "Continue your daily learning schedule" : "Create a personalized study schedule"}
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/roadmap" className="hover:no-underline">
            <Card className="hover-scale">
              <CardHeader className="p-4">
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Learning Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  {domain?.isSelected ? "View your custom learning path" : "Discover structured learning paths"}
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/progress" className="hover:no-underline">
            <Card className="hover-scale">
              <CardHeader className="p-4">
                <LineChart className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  {domain?.isSelected ? "Review your weekly performance" : "Monitor your learning journey"}
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/projects" className="hover:no-underline">
            <Card className="hover-scale">
              <CardHeader className="p-4">
                <Folder className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Practice Projects</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  {domain?.isSelected ? "Complete your weekly challenge" : "Apply skills with hands-on projects"}
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {domain?.isSelected && (
          <section>
            <h2 className="text-xl font-bold mb-4">Recommended Next Steps</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-3 border rounded-md bg-secondary/50">
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Complete the introduction to {domain.name} fundamentals</span>
              </div>
              <div className="flex items-center gap-2 p-3 border rounded-md bg-secondary/50">
                <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Schedule your next study session</span>
              </div>
              <div className="flex items-center gap-2 p-3 border rounded-md bg-secondary/50">
                <Folder className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Start your first practice project</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
