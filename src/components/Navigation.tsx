
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu, Sprout, Languages } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [language, setLanguage] = useState("english");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Sprout className="h-6 w-6 text-agroGreen" />
            <span className="font-bold text-xl text-agroGreen">AgroConnect</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/farmers" className="text-sm font-medium transition-colors hover:text-agroGreen">For Farmers</Link>
          <Link to="/buyers" className="text-sm font-medium transition-colors hover:text-agroGreen">For Buyers</Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-agroGreen">About Us</Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-agroGreen">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1">
            <Languages className="h-4 w-4" />
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[110px] h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Español</SelectItem>
                <SelectItem value="french">Français</SelectItem>
                <SelectItem value="swahili">Kiswahili</SelectItem>
                <SelectItem value="hindi">हिन्दी</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="default" className="bg-agroGreen hover:bg-agroGreen-dark hidden md:flex">
            Login
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/farmers" className="text-sm font-medium transition-colors hover:text-agroGreen">
                  For Farmers
                </Link>
                <Link to="/buyers" className="text-sm font-medium transition-colors hover:text-agroGreen">
                  For Buyers
                </Link>
                <Link to="/about" className="text-sm font-medium transition-colors hover:text-agroGreen">
                  About Us
                </Link>
                <Link to="/contact" className="text-sm font-medium transition-colors hover:text-agroGreen">
                  Contact
                </Link>
                <div className="flex items-center gap-2 mt-4">
                  <Languages className="h-4 w-4" />
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-[130px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Español</SelectItem>
                      <SelectItem value="french">Français</SelectItem>
                      <SelectItem value="swahili">Kiswahili</SelectItem>
                      <SelectItem value="hindi">हिन्दी</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="mt-4 bg-agroGreen hover:bg-agroGreen-dark">Login</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
