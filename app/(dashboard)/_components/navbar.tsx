import NavbarRoutes from "@/components/navbar-routes";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm/50 backdrop-blur-sm z-50 relative">
      <MobileNavbar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
