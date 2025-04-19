
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Heart } from "lucide-react";
import { SectionDivider } from "@/components/ui/section-divider";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white/70 backdrop-blur-sm border-t border-border/50 pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold font-display gradient-text-primary">Career Strive</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 elegant-text">
              Empowering your journey to career excellence through personalized learning paths.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Domains</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Roadmaps</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Study Plans</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Progress Tracking</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Projects</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Blog</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Guides</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Case Studies</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Community</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Documentation</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">About Us</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Careers</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Contact</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <SectionDivider variant="line" className="py-4" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Career Strive. All rights reserved.
          </p>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-red-500" />
            <span>for aspiring professionals</span>
          </div>
          
          <div className="flex space-x-4">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Privacy</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Terms</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary underline-grow">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
