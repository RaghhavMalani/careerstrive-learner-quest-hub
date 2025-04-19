
import { useState, useContext } from "react";
import { Menu, X, User, Bell, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthContext, AuthContextType } from "@/App";
import { useLocation, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "@/components/MobileMenu";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext) as AuthContextType;
  const location = useLocation();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/domain-selection":
        return "Select Your Domain";
      case "/roadmap":
        return "Your Learning Roadmap";
      case "/tools":
        return "Learning Tools";
      case "/study-plan":
        return "Your Study Plan";
      case "/progress":
        return "Weekly Progress";
      case "/projects":
        return "Practice Projects";
      default:
        return "Career Strive";
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully",
      description: "See you again soon!",
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-white/90 backdrop-blur-md border-b border-border/50 flex items-center justify-between px-4 md:px-8 shadow-sm animate-fade-in">
      {/* Left: Logo + page title */}
      <div className="flex items-center gap-x-4">
        {isMobile && user && (
          <button
            onClick={toggleMobileMenu}
            className="p-2 -ml-2 rounded-full hover:bg-secondary"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
        <Link to="/" className="flex items-center gap-x-2">
          <span className="text-xl font-bold font-display gradient-text-primary">Career Strive</span>
        </Link>
        {user && (
          <div className="hidden md:block h-6 w-px bg-border mx-2"></div>
        )}
        {user && (
          <h1 className="hidden md:block text-sm font-medium text-muted-foreground">
            {getPageTitle()}
          </h1>
        )}
      </div>

      {/* Center: Navigation items for non-mobile */}
      {!user && !isMobile && (
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium underline-grow hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="#features" className="text-sm font-medium underline-grow hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="#testimonials" className="text-sm font-medium underline-grow hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link to="#pricing" className="text-sm font-medium underline-grow hover:text-primary transition-colors">
            Pricing
          </Link>
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)} 
              className="text-sm font-medium underline-grow hover:text-primary transition-colors flex items-center gap-1"
            >
              Resources
              <ChevronDown size={14} className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showDropdown && (
              <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-elegant p-2 border border-border/30 animate-fade-in z-10">
                <Link 
                  to="#blog" 
                  className="block px-4 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setShowDropdown(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="#guides" 
                  className="block px-4 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setShowDropdown(false)}
                >
                  Guides
                </Link>
                <Link 
                  to="#community" 
                  className="block px-4 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setShowDropdown(false)}
                >
                  Community
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Right: Search, notifications, user menu */}
      <div className="flex items-center gap-x-2">
        {user && (
          <>
            <button className="p-2 rounded-full hover:bg-secondary hidden md:flex items-center justify-center">
              <Search size={18} />
            </button>
            <button className="p-2 rounded-full hover:bg-secondary relative flex items-center justify-center">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-6 w-px bg-border mx-1 hidden md:block"></div>
          </>
        )}

        {user ? (
          <div className="flex items-center gap-x-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full w-8 h-8 bg-secondary"
              onClick={handleLogout}
            >
              <User size={16} />
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="hover:bg-secondary hover:text-primary">
                Log in
              </Button>
            </Link>
            <Link to="/login">
              <Button size="sm" className="gradient-button">Sign up</Button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
    </header>
  );
};

export default Navbar;
