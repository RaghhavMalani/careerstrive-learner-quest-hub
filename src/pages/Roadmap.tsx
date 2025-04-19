
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Download, Clock, BookOpen, Video, Globe, Award, CheckCircle, Flag } from "lucide-react";

const beginnerItems = [
  {
    id: "b1",
    title: "Introduction to Web Development",
    description: "Understand the basics of how the web works",
    type: "article",
    icon: BookOpen,
    duration: "2 hours",
    completed: true,
  },
  {
    id: "b2",
    title: "HTML Foundations",
    description: "Learn the building blocks of web pages",
    type: "course",
    icon: Video,
    duration: "5 hours",
    completed: true,
  },
  {
    id: "b3",
    title: "CSS Basics",
    description: "Style your web pages with CSS",
    type: "course",
    icon: Video,
    duration: "6 hours",
    completed: false,
  },
  {
    id: "b4",
    title: "Simple Portfolio Project",
    description: "Build your first HTML & CSS website",
    type: "project",
    icon: Flag,
    duration: "8 hours",
    completed: false,
  },
  {
    id: "b5",
    title: "JavaScript Fundamentals",
    description: "Add interactivity to your websites",
    type: "course",
    icon: Video,
    duration: "10 hours",
    completed: false,
  },
];

const intermediateItems = [
  {
    id: "i1",
    title: "Responsive Web Design",
    description: "Make websites that work on all devices",
    type: "course",
    icon: Video,
    duration: "8 hours",
    completed: false,
  },
  {
    id: "i2",
    title: "JavaScript DOM Manipulation",
    description: "Learn to manipulate web page content with JS",
    type: "course",
    icon: Video,
    duration: "6 hours",
    completed: false,
  },
  {
    id: "i3",
    title: "CSS Frameworks (Tailwind/Bootstrap)",
    description: "Build websites faster with CSS frameworks",
    type: "article",
    icon: BookOpen,
    duration: "4 hours",
    completed: false,
  },
  {
    id: "i4",
    title: "Interactive Website Project",
    description: "Create a website with dynamic features",
    type: "project",
    icon: Flag,
    duration: "15 hours",
    completed: false,
  },
  {
    id: "i5",
    title: "Version Control with Git",
    description: "Manage your code and collaborate with others",
    type: "course",
    icon: Video,
    duration: "5 hours",
    completed: false,
  },
];

const advancedItems = [
  {
    id: "a1",
    title: "Modern JavaScript (ES6+)",
    description: "Master advanced JavaScript concepts",
    type: "course",
    icon: Video,
    duration: "12 hours",
    completed: false,
  },
  {
    id: "a2",
    title: "React Framework Fundamentals",
    description: "Build powerful single-page applications",
    type: "course",
    icon: Video,
    duration: "20 hours",
    completed: false,
  },
  {
    id: "a3",
    title: "API Integration",
    description: "Connect your apps to external services",
    type: "article",
    icon: BookOpen,
    duration: "6 hours",
    completed: false,
  },
  {
    id: "a4",
    title: "Full-Stack Project",
    description: "Build a complete web application",
    type: "project",
    icon: Flag,
    duration: "30 hours",
    completed: false,
  },
  {
    id: "a5",
    title: "Deployment & DevOps Basics",
    description: "Learn to deploy and maintain web applications",
    type: "course",
    icon: Video,
    duration: "8 hours",
    completed: false,
  },
];

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState("beginner");
  
  const getProgressPercentage = (items: any[]) => {
    const completed = items.filter(item => item.completed).length;
    return Math.round((completed / items.length) * 100);
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Your Web Development Roadmap</h1>
            <p className="text-muted-foreground">
              Follow this personalized learning path to master web development
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" /> Export Roadmap
            </Button>
            <Link to="/tools">
              <Button size="sm" className="btn-hover">
                Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                Beginner
              </CardTitle>
              <CardDescription>Fundamentals and basics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${getProgressPercentage(beginnerItems)}%` }}
                ></div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {getProgressPercentage(beginnerItems)}% complete
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-amber-500" />
                Intermediate
              </CardTitle>
              <CardDescription>Build on core skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div
                  className="bg-amber-500 h-2.5 rounded-full"
                  style={{ width: `${getProgressPercentage(intermediateItems)}%` }}
                ></div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {getProgressPercentage(intermediateItems)}% complete
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-blue-500" />
                Advanced
              </CardTitle>
              <CardDescription>Master complex concepts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${getProgressPercentage(advancedItems)}%` }}
                ></div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {getProgressPercentage(advancedItems)}% complete
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="beginner" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="beginner" className="mt-6 space-y-4">
            {beginnerItems.map((item) => (
              <Card key={item.id} className={`hover-scale ${item.completed ? 'bg-secondary/30' : ''}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(item.type)}`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg flex items-center">
                          {item.title}
                          {item.completed && <CheckCircle className="ml-2 h-4 w-4 text-green-500" />}
                        </CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {item.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      {item.completed ? "Review" : "Start Learning"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="intermediate" className="mt-6 space-y-4">
            {intermediateItems.map((item) => (
              <Card key={item.id} className={`hover-scale ${item.completed ? 'bg-secondary/30' : ''}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(item.type)}`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg flex items-center">
                          {item.title}
                          {item.completed && <CheckCircle className="ml-2 h-4 w-4 text-green-500" />}
                        </CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {item.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      {item.completed ? "Review" : "Start Learning"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="advanced" className="mt-6 space-y-4">
            {advancedItems.map((item) => (
              <Card key={item.id} className={`hover-scale ${item.completed ? 'bg-secondary/30' : ''}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(item.type)}`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg flex items-center">
                          {item.title}
                          {item.completed && <CheckCircle className="ml-2 h-4 w-4 text-green-500" />}
                        </CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {item.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      {item.completed ? "Review" : "Start Learning"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

// Helper function to get background color based on content type
function getTypeColor(type: string) {
  switch (type) {
    case "article":
      return "bg-blue-100 text-blue-700";
    case "course":
      return "bg-purple-100 text-purple-700";
    case "project":
      return "bg-amber-100 text-amber-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default Roadmap;
