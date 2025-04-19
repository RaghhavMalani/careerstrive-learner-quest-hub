
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, LineChart, BookOpen, PenTool, HeartPulse, CreditCard, Lightbulb, ChevronRight, Search, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Domain categories and their options
const domains = [
  {
    id: "technology",
    name: "Technology",
    icon: Code,
    options: ["Web Development", "Mobile Development", "Data Science", "Cybersecurity", "Cloud Computing", "Machine Learning", "Blockchain", "DevOps"]
  },
  {
    id: "business",
    name: "Business",
    icon: CreditCard,
    options: ["Marketing", "Finance", "Entrepreneurship", "Project Management", "Human Resources", "Sales", "Business Strategy", "E-commerce"]
  },
  {
    id: "design",
    name: "Design",
    icon: PenTool,
    options: ["UX/UI Design", "Graphic Design", "Motion Graphics", "3D Modeling", "Product Design", "Interior Design", "Web Design", "Branding"]
  },
  {
    id: "health",
    name: "Health",
    icon: HeartPulse,
    options: ["Nutrition", "Fitness", "Mental Health", "Public Health", "Healthcare Management", "Nursing", "Physical Therapy", "Medical Research"]
  },
  {
    id: "education",
    name: "Education",
    icon: BookOpen,
    options: ["Teaching", "Educational Technology", "Curriculum Development", "Child Development", "Special Education", "Language Learning", "Educational Psychology"]
  },
  {
    id: "analytics",
    name: "Analytics",
    icon: LineChart,
    options: ["Business Analytics", "Data Visualization", "Statistical Analysis", "Market Research", "Operations Analytics", "Financial Analytics", "Social Media Analytics"]
  },
];

const DomainSelection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("technology");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedSubDomain, setSelectedSubDomain] = useState<string | null>(null);
  const [customSubDomain, setCustomSubDomain] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Filter domains based on search query
  const filteredDomains = domains.map(domain => {
    return {
      ...domain,
      options: domain.options.filter(option => 
        option.toLowerCase().includes(searchQuery.toLowerCase())
      )
    };
  });

  const handleDomainSelect = (domain: string) => {
    setSelectedDomain(domain);
    setSelectedSubDomain(null);
  };

  const handleSubDomainSelect = (subDomain: string) => {
    setSelectedSubDomain(subDomain);
    setCustomSubDomain("");
  };

  const handleSubmit = async () => {
    if (!selectedDomain) {
      toast({
        title: "Please select a domain",
        description: "You need to select a main domain first",
        variant: "destructive"
      });
      return;
    }

    const finalSubDomain = selectedSubDomain || customSubDomain || "General";
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Store selection in localStorage (in a real app, this would go to a database)
      localStorage.setItem("selectedDomain", selectedDomain);
      localStorage.setItem("selectedSubDomain", finalSubDomain);
      
      toast({
        title: "Domain selected!",
        description: `Your learning path for ${selectedDomain}${finalSubDomain ? ` - ${finalSubDomain}` : ''} has been created.`,
      });
      
      setIsLoading(false);
      navigate("/roadmap");
    }, 1500);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Select Your Domain</h1>
          <p className="text-muted-foreground">
            Choose your area of interest to receive a personalized learning roadmap
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What do you want to learn?</CardTitle>
            <CardDescription>
              Don't worry, you can always change or refine your selection later
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search domains or skills..." 
                  className="pl-9" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <Tabs defaultValue="technology" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
                {domains.map(domain => (
                  <TabsTrigger key={domain.id} value={domain.id} className="flex flex-col items-center p-2 h-auto">
                    <domain.icon className="h-5 w-5 mb-1" />
                    <span className="text-xs">{domain.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {domains.map(domain => (
                <TabsContent key={domain.id} value={domain.id} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {filteredDomains.find(d => d.id === domain.id)?.options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className={`justify-between h-auto py-3 ${
                          selectedDomain === option ? 'border-primary bg-primary/10' : ''
                        }`}
                        onClick={() => handleDomainSelect(option)}
                      >
                        <span className="text-left">{option}</span>
                        {selectedDomain === option && (
                          <CheckCircle className="h-4 w-4 text-primary ml-2" />
                        )}
                      </Button>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {selectedDomain && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Narrow Down Your Focus (Optional)</CardTitle>
              <CardDescription>
                Select a specific area within {selectedDomain} or add a custom focus
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Dynamically generated sub-domains based on main domain */}
                  {[
                    "Beginner", 
                    "Intermediate", 
                    "Advanced", 
                    "Full Stack", 
                    "Frontend", 
                    "Backend"
                  ].map((subDomain, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`justify-between h-auto py-3 ${
                        selectedSubDomain === subDomain ? 'border-primary bg-primary/10' : ''
                      }`}
                      onClick={() => handleSubDomainSelect(subDomain)}
                    >
                      <span className="text-left">{subDomain}</span>
                      {selectedSubDomain === subDomain && (
                        <CheckCircle className="h-4 w-4 text-primary ml-2" />
                      )}
                    </Button>
                  ))}
                </div>
                
                <div className="space-y-2 pt-4">
                  <Label htmlFor="custom-subdomain">Or specify your own focus area:</Label>
                  <Input
                    id="custom-subdomain"
                    placeholder="e.g., React Native Development, Django APIs..."
                    value={customSubDomain}
                    onChange={(e) => {
                      setCustomSubDomain(e.target.value);
                      if (e.target.value) setSelectedSubDomain(null);
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex items-center justify-between mt-8">
          <p className="text-sm text-muted-foreground">
            {selectedDomain ? (
              <>Selected: <strong>{selectedDomain}</strong>{selectedSubDomain || customSubDomain ? ` - ${selectedSubDomain || customSubDomain}` : ''}</>
            ) : (
              "Please select a domain to continue"
            )}
          </p>
          <Button onClick={handleSubmit} disabled={!selectedDomain || isLoading}>
            {isLoading ? (
              <>
                <div className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin mr-2"></div>
                Creating Your Roadmap
              </>
            ) : (
              <>
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DomainSelection;
