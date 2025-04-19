import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, AuthContextType } from "@/App";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { ArrowRight, User, Lock, Mail, Loader2, ImagePlus } from "lucide-react";

const Login = () => {
  const { login, signup, isLoading } = useContext(AuthContext) as AuthContextType;
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (isLogin) {
        await login(email, password);
        toast({
          title: "Welcome back!",
          description: "Successfully logged in to your account.",
        });
      } else {
        await signup(name, email, password);
        toast({
          title: "Account created!",
          description: "Your account has been created successfully.",
        });
      }
      navigate("/domain-selection");
    } catch (error) {
      toast({
        title: "Authentication error",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-[80vh] gap-8 md:gap-16 items-center">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 max-w-md mx-auto md:order-1 animate-fade-in">
          <div className="space-y-6">
            {/* Avatar Upload Section */}
            {!isLogin && (
              <div className="flex flex-col items-center space-y-4">
                <input 
                  type="file" 
                  id="avatar-upload" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleAvatarUpload}
                />
                <label htmlFor="avatar-upload" className="cursor-pointer">
                  <Avatar className="w-24 h-24 border-4 border-primary/20 hover:border-primary transition-all">
                    {avatarUrl ? (
                      <AvatarImage src={avatarUrl} alt="Profile avatar" />
                    ) : (
                      <AvatarFallback className="bg-secondary">
                        <ImagePlus className="w-8 h-8 text-muted-foreground" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                </label>
                <p className="text-sm text-muted-foreground">
                  {avatarUrl ? "Avatar Uploaded" : "Upload Profile Picture"}
                </p>
              </div>
            )}

            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight">
                {isLogin ? "Welcome back" : "Create an account"}
              </h1>
              <p className="text-muted-foreground">
                {isLogin
                  ? "Enter your credentials to access your account"
                  : "Enter your information to get started"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="pl-10"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isLogin ? "Logging in..." : "Creating account..."}
                  </>
                ) : (
                  <>
                    {isLogin ? "Log in" : "Create account"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="text-center">
              <Button
                variant="link"
                className="text-muted-foreground"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Log in"}
              </Button>
            </div>
          </div>
        </div>

        {/* Right side - Image/Info */}
        <div className="w-full md:w-1/2 md:order-2 animate-scale-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden border bg-card">
              <div className="bg-primary/5 h-full dot-pattern p-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Unlock Your Potential</h2>
                  <p className="text-muted-foreground">
                    Join thousands of students who are accelerating their learning journey with personalized roadmaps and expert guidance.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {[
                      { title: "Domains", value: "25+" },
                      { title: "Tools", value: "100+" },
                      { title: "Roadmaps", value: "50+" },
                      { title: "Projects", value: "200+" }
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-white bg-opacity-70 backdrop-blur-sm p-4 rounded-lg">
                        <p className="text-3xl font-bold">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
