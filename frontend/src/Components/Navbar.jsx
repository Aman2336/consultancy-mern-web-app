import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between">
          <div>
            <span className="mr-4">Monday - Friday 8AM-8PM</span>
            <span className="mr-4">Call Us: ---------------</span>
            <span>Location: ---------------</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              Google
            </a>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">
            <Link to="/">WEBAPP</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-500">
              About
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-blue-500">
              Services
            </Link>
            <Link to="/community" className="text-gray-800 hover:text-blue-500">
              Community
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
