
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="text-center max-w-xl px-4">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <div className="w-full max-w-sm mx-auto h-px bg-border my-8"></div>
        <h2 className="text-3xl font-bold mb-4">Page not found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg" className="btn-hover">
            <Home className="mr-2 h-5 w-5" /> Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
