
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AuthContext, AuthContextType } from "@/App";
import { Home, Target, MapIcon, Wrench as ToolsIcon, CalendarIcon, BarChart, Folder } from "lucide-react";

const Sidebar = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const location = useLocation();

  if (!user) return null;

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Domain Selection", path: "/domain-selection", icon: Target },
    { name: "Learning Roadmap", path: "/roadmap", icon: MapIcon },
    { name: "Tools", path: "/tools", icon: ToolsIcon },
    { name: "Study Plan", path: "/study-plan", icon: CalendarIcon },
    { name: "Progress", path: "/progress", icon: BarChart },
    { name: "Projects", path: "/projects", icon: Folder },
  ];

  return (
    <div className="fixed inset-y-0 left-0 z-40 w-64 border-r bg-card hidden md:block animate-fade-in">
      <div className="flex flex-col h-full pt-16 pb-4">
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-secondary/50"
                )}
              >
                <item.icon size={18} className={location.pathname === item.path ? "text-primary" : "text-muted-foreground"} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
