import { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-[800px] min-h-full mx-auto px-8 mt-32">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
