
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home, Target, MapIcon, Wrench as ToolsIcon, CalendarIcon, BarChart, Folder, MessageSquare, FileText, BookOpen, Users } from "lucide-react";
import { AuthContext, AuthContextType } from "@/App";
import { cn } from "@/lib/utils";
import { ElegantBadge } from "@/components/ui/elegant-badge";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Domain Selection", path: "/domain-selection", icon: Target, badge: "Start Here" },
    { name: "Learning Roadmap", path: "/roadmap", icon: MapIcon },
    { name: "Tools", path: "/tools", icon: ToolsIcon },
    { name: "Study Plan", path: "/study-plan", icon: CalendarIcon },
    { name: "Progress", path: "/progress", icon: BarChart },
    { name: "Projects", path: "/projects", icon: Folder, new: true },
  ];

  const resourceItems = [
    { name: "Documentation", icon: FileText },
    { name: "Guides", icon: BookOpen },
    { name: "Community", icon: Users },
    { name: "Support", icon: MessageSquare },
  ];

  return (
    <div className="fixed inset-0 z-40 mt-16 bg-white/90 backdrop-blur-md animate-fade-in">
      <div className="py-6 px-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
        {user && (
          <div className="space-y-6">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between py-3 px-3 rounded-lg transition-colors",
                    location.pathname === item.path 
                      ? "bg-secondary/70 text-primary elegant-border" 
                      : "hover:bg-secondary/50"
                  )}
                >
                  <div className="flex items-center gap-x-3">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center",
                      location.pathname === item.path 
                        ? "bg-primary/10" 
                        : "bg-secondary/70"
                    )}>
                      <item.icon size={18} className={location.pathname === item.path ? "text-primary" : "text-muted-foreground"} />
                    </div>
                    <span className={cn(
                      "text-sm font-medium", 
                      location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                    )}>
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <ElegantBadge variant="gold" className="text-[10px]">
                        {item.badge}
                      </ElegantBadge>
                    )}
                    {item.new && (
                      <ElegantBadge variant="success" className="text-[10px]">
                        New
                      </ElegantBadge>
                    )}
                    <ChevronRight size={16} className="text-muted-foreground/50" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 pl-3">
                Resources
              </p>
              {resourceItems.map((item, index) => (
                <Link
                  key={index}
                  to="#"
                  className="flex items-center gap-x-3 py-3 px-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/70 flex items-center justify-center">
                    <item.icon size={18} className="text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
