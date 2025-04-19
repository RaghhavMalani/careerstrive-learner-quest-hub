
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Check, Clock, ArrowRight, Code, Calendar, FileText, Filter, Star } from "lucide-react";

const Projects = () => {
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);

  const projectCategories = [
    { id: "all", name: "All Projects" },
    { id: "current", name: "Current Week" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ];

  const projects = [
    {
      id: "p1",
      title: "Personal Portfolio Website",
      description: "Create a simple personal portfolio using HTML and CSS",
      difficulty: "beginner",
      status: "current",
      completionTime: "8 hours",
      technologies: ["HTML", "CSS"],
      dueDate: "This Week",
      starterCode: true,
      requirements: [
        "Create a responsive portfolio website",
        "Include sections for About, Projects, and Contact",
        "Style with CSS to create a professional appearance",
        "Ensure it works on both desktop and mobile devices",
      ],
    },
    {
      id: "p2",
      title: "Interactive Quiz App",
      description: "Build a quiz application with JavaScript",
      difficulty: "beginner",
      status: "upcoming",
      completionTime: "10 hours",
      technologies: ["HTML", "CSS", "JavaScript"],
      dueDate: "Next Week",
      starterCode: true,
      requirements: [
        "Create multiple choice questions with scoring",
        "Add a timer for each question",
        "Display final results at the end",
        "Include a restart button",
      ],
    },
    {
      id: "p3",
      title: "Weather Dashboard",
      description: "Create a weather app using a public API",
      difficulty: "intermediate",
      status: "upcoming",
      completionTime: "15 hours",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      dueDate: "Week 3",
      starterCode: false,
      requirements: [
        "Fetch data from a weather API",
        "Display current weather and 5-day forecast",
        "Allow users to search for different locations",
        "Implement error handling for failed API requests",
      ],
    },
    {
      id: "p4",
      title: "Task Management App",
      description: "Build a to-do list application with CRUD functionality",
      difficulty: "intermediate",
      status: "upcoming",
      completionTime: "20 hours",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      dueDate: "Week 4",
      starterCode: false,
      requirements: [
        "Create, read, update, and delete tasks",
        "Persist data using localStorage",
        "Add categories and priority levels for tasks",
        "Implement filtering and sorting functionality",
      ],
    },
    {
      id: "p5",
      title: "E-commerce Product Page",
      description: "Develop an interactive product page with a shopping cart",
      difficulty: "advanced",
      status: "upcoming",
      completionTime: "25 hours",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      dueDate: "Week 5",
      starterCode: false,
      requirements: [
        "Create product gallery with image zoom",
        "Implement add to cart functionality",
        "Create a responsive product description section",
        "Add related products section",
      ],
    },
    {
      id: "p6",
      title: "Blog Platform",
      description: "Build a blog with article creation and comments",
      difficulty: "advanced",
      status: "upcoming",
      completionTime: "30 hours",
      technologies: ["React", "Node.js", "MongoDB"],
      dueDate: "Week 6",
      starterCode: false,
      requirements: [
        "Create user authentication system",
        "Implement CRUD operations for blog posts",
        "Add commenting functionality",
        "Create admin dashboard for content management",
      ],
    },
  ];

  // Filter projects based on category and difficulty
  const filterProjects = (category: string) => {
    return projects.filter((project) => {
      const matchesCategory =
        category === "all" ||
        (category === "current" && project.status === "current") ||
        category === project.difficulty;
      
      const matchesDifficulty = !difficultyFilter || project.difficulty === difficultyFilter;
      
      return matchesCategory && matchesDifficulty;
    });
  };

  const toggleDifficultyFilter = (difficulty: string) => {
    if (difficultyFilter === difficulty) {
      setDifficultyFilter(null);
    } else {
      setDifficultyFilter(difficulty);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Practice Projects</h1>
            <p className="text-muted-foreground">
              Apply your skills with these hands-on projects
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={difficultyFilter === "beginner" ? "default" : "outline"}
              size="sm"
              onClick={() => toggleDifficultyFilter("beginner")}
            >
              Beginner
            </Button>
            <Button
              variant={difficultyFilter === "intermediate" ? "default" : "outline"}
              size="sm"
              onClick={() => toggleDifficultyFilter("intermediate")}
            >
              Intermediate
            </Button>
            <Button
              variant={difficultyFilter === "advanced" ? "default" : "outline"}
              size="sm"
              onClick={() => toggleDifficultyFilter("advanced")}
            >
              Advanced
            </Button>
            {difficultyFilter && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDifficultyFilter(null)}
              >
                Clear Filter
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-2xl mb-6">
            {projectCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {projectCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filterProjects(category.id).map((project) => (
                  <Card key={project.id} className="flex flex-col h-full hover-scale">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center">
                            {project.title}
                            {project.status === "current" && (
                              <Badge variant="default" className="ml-2">
                                Current
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className={`
                            ${project.difficulty === "beginner" ? "border-green-500 text-green-700" : 
                              project.difficulty === "intermediate" ? "border-amber-500 text-amber-700" :
                              "border-blue-500 text-blue-700"}
                          `}
                        >
                          {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Requirements:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1 pl-5 list-disc">
                            {project.requirements.slice(0, 2).map((req, idx) => (
                              <li key={idx}>{req}</li>
                            ))}
                            {project.requirements.length > 2 && (
                              <li>And {project.requirements.length - 2} more...</li>
                            )}
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{project.completionTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{project.dueDate}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 flex gap-2">
                      {project.starterCode && (
                        <Button variant="outline" className="flex-1">
                          <Code className="mr-2 h-4 w-4" /> View Starter
                        </Button>
                      )}
                      <Button className="flex-1 btn-hover">
                        {project.status === "current" ? "Start Project" : "View Details"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {filterProjects(category.id).length === 0 && (
                <div className="text-center py-12">
                  <Filter className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">No projects found</h3>
                  <p className="text-muted-foreground mb-4">
                    {difficultyFilter
                      ? `No ${difficultyFilter} level projects found in this category.`
                      : "No projects match the current filters."}
                  </p>
                  <Button onClick={() => setDifficultyFilter(null)}>Clear Filters</Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default Projects;
