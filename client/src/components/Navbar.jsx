import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";
import { handleLogout } from "../Utility/Logout";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const user = localStorage.getItem("token");
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">EmbraceAI</span>
          </div>
          {window.innerWidth<1024?
          <ul className="hidden lg:flex ml-14 space-x-12">
          {navItems.map((item, index) => (
            <li key={index}>
              <a></a>
            </li>
          ))}
        </ul>:
          <div>
          <Link to={'/'} className="py-2 px-3  rounded-md">
             Home
            </Link><Link to={'/Datasets'} className="py-2 px-3  rounded-md">
             Datasets
            </Link><Link to={user==null?'/login':'/Profile'} className="py-2 px-3  rounded-md">
             Profile
            </Link>
          </div>
}
          <div className="hidden lg:flex justify-center gap-3 items-center">
           {user==null? <><Link to={'/login'} className="py-2 px-3 border rounded-md">
              Sign In
            </Link>
            <Link
              to={'/signup'}
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </Link>
            </>
          :
            <div onClick={handleLogout} className="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
              Logout</div>
          }
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href=" " className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href=" "
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
