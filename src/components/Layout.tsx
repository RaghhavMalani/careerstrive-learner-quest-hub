
import { ReactNode, useContext } from "react";
import { AuthContext, AuthContextType } from "@/App";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundBlobs } from "@/components/ui/background-blobs";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  hideFooter?: boolean;
}

const Layout = ({ children, hideFooter = false }: LayoutProps) => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Decorative background blobs */}
      <BackgroundBlobs variant="subtle" />
      
      {user && (
        <>
          {!isMobile && <Sidebar />}
          <Navbar />
        </>
      )}

      {!user && <Navbar />}
      
      <main
        className={cn(
          "min-h-screen overflow-y-auto transition-all duration-300 ease-in-out",
          user ? (isMobile ? "pt-16" : "pt-16 md:pl-64") : "pt-16"
        )}
      >
        <div className="container px-4 md:px-8 py-6 max-w-7xl mx-auto">
          {children}
        </div>
        
        {!hideFooter && <Footer />}
      </main>
    </div>
  );
};

export default Layout;
