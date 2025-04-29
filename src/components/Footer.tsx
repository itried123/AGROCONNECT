
import { Link } from "react-router-dom";
import { Sprout } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-agroBeige-dark py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Sprout className="h-6 w-6 text-agroGreen" />
            <span className="font-bold text-xl text-agroGreen">AgroConnect</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Connecting farmers directly with local buyers for a more sustainable and fair agricultural marketplace.
          </p>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-medium text-sm mb-3 text-agroBrown">For Farmers</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/farmers/register" className="hover:text-agroGreen">Register</Link></li>
            <li><Link to="/farmers/upload" className="hover:text-agroGreen">Upload Produce</Link></li>
            <li><Link to="/farmers/dashboard" className="hover:text-agroGreen">Manage Listings</Link></li>
            <li><Link to="/farmers/resources" className="hover:text-agroGreen">Resources</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-medium text-sm mb-3 text-agroBrown">For Buyers</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/buyers/browse" className="hover:text-agroGreen">Browse Listings</Link></li>
            <li><Link to="/buyers/register" className="hover:text-agroGreen">Register</Link></li>
            <li><Link to="/buyers/favorites" className="hover:text-agroGreen">Saved Listings</Link></li>
            <li><Link to="/buyers/contact" className="hover:text-agroGreen">Contact Farmers</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-medium text-sm mb-3 text-agroBrown">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-agroGreen">About Us</Link></li>
            <li><Link to="/mission" className="hover:text-agroGreen">Our Mission</Link></li>
            <li><Link to="/contact" className="hover:text-agroGreen">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-agroGreen">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-8 pt-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} AgroConnect. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-xs text-gray-500 hover:text-agroGreen">Terms</Link>
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-agroGreen">Privacy</Link>
            <Link to="/cookies" className="text-xs text-gray-500 hover:text-agroGreen">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
