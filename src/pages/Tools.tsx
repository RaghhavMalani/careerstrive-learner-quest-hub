
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, Bookmark, Code, Server, Database, Layout as LayoutIcon, Monitor, Figma, Book, Video, Star, DollarSign, Lock, Wrench } from "lucide-react";

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Tools" },
    { id: "editors", name: "Code Editors" },
    { id: "learning", name: "Learning Resources" },
    { id: "frameworks", name: "Frameworks & Libraries" },
    { id: "design", name: "Design Tools" },
  ];

  const tools = [
    {
      id: "vs-code",
      name: "Visual Studio Code",
      description: "Lightweight but powerful source code editor",
      category: "editors",
      icon: Code,
      link: "https://code.visualstudio.com/",
      tags: ["free", "popular"],
      rating: 4.9,
    },
    {
      id: "mdn",
      name: "MDN Web Docs",
      description: "Comprehensive documentation for web technologies",
      category: "learning",
      icon: Book,
      link: "https://developer.mozilla.org/",
      tags: ["free", "documentation"],
      rating: 4.8,
    },
    {
      id: "react",
      name: "React",
      description: "JavaScript library for building user interfaces",
      category: "frameworks",
      icon: Code,
      link: "https://reactjs.org/",
      tags: ["free", "popular", "javascript"],
      rating: 4.7,
    },
    {
      id: "figma",
      name: "Figma",
      description: "Collaborative interface design tool",
      category: "design",
      icon: Figma,
      link: "https://www.figma.com/",
      tags: ["freemium", "design", "collaboration"],
      rating: 4.8,
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      category: "frameworks",
      icon: LayoutIcon,
      link: "https://tailwindcss.com/",
      tags: ["free", "css", "responsive"],
      rating: 4.7,
    },
    {
      id: "udemy",
      name: "Udemy Courses",
      description: "Online learning platform with web development courses",
      category: "learning",
      icon: Video,
      link: "https://www.udemy.com/",
      tags: ["paid", "courses", "video"],
      rating: 4.5,
    },
    {
      id: "github",
      name: "GitHub",
      description: "Code hosting platform for version control and collaboration",
      category: "editors",
      icon: Server,
      link: "https://github.com/",
      tags: ["free", "version control", "collaboration"],
      rating: 4.8,
    },
    {
      id: "mongodb",
      name: "MongoDB",
      description: "NoSQL database program",
      category: "frameworks",
      icon: Database,
      link: "https://www.mongodb.com/",
      tags: ["freemium", "database", "backend"],
      rating: 4.6,
    },
    {
      id: "css-tricks",
      name: "CSS-Tricks",
      description: "Tips, tricks, and techniques on using CSS",
      category: "learning",
      icon: LayoutIcon,
      link: "https://css-tricks.com/",
      tags: ["free", "tutorials", "articles"],
      rating: 4.7,
    },
  ];

  // Filter tools based on search query and selected category
  const filterTools = (category: string) => {
    return tools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === "all" || tool.category === category;
      return matchesSearch && matchesCategory;
    });
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Learning Tools & Resources</h1>
          <p className="text-muted-foreground">
            Discover the best tools to accelerate your web development journey
          </p>
        </div>

        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search tools and resources..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-3xl mb-6 h-auto flex flex-wrap space-x-0 space-y-0 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex-1 data-[state=active]:bg-secondary rounded-lg m-1 min-w-[100px] h-10"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterTools(category.id).map((tool) => (
                  <Card key={tool.id} className="overflow-hidden hover-scale">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary">
                          <tool.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center mr-2">
                            <Star className="h-4 w-4 text-amber-500 mr-1" />
                            <span className="text-sm font-medium">{tool.rating}</span>
                          </div>
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardTitle className="mt-2">{tool.name}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-0">
                      <div className="flex flex-wrap gap-2">
                        {tool.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-normal">
                            {tag === "free" ? (
                              <><DollarSign className="h-3 w-3 mr-1" /> Free</>
                            ) : tag === "paid" ? (
                              <><Lock className="h-3 w-3 mr-1" /> Paid</>
                            ) : tag === "freemium" ? (
                              <><DollarSign className="h-3 w-3 mr-1" /> Freemium</>
                            ) : (
                              tag
                            )}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <a 
                        href={tool.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full"
                      >
                        <Button variant="outline" className="w-full">
                          Open Resource <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {filterTools(category.id).length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">No tools found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or browse a different category
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default Tools;
