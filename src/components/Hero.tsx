
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-agroBeige to-agroBeige-light -z-10" />
      
      <div className="container px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col space-y-6 max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-agroBrown-dark">
            <span className="text-agroGreen">Fresh</span> From Farm <br className="hidden sm:inline" />
            To Your Table
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            AgroConnect brings together local farmers and buyers for direct trade, 
            supporting sustainable agriculture and rural communities.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-agroGreen hover:bg-agroGreen-dark text-white px-8 py-6">
              <Link to="/farmers/register">I'm a Farmer</Link>
            </Button>
            <Button variant="outline" className="border-agroGreen text-agroGreen hover:bg-agroGreen-light/20 px-8 py-6">
              <Link to="/buyers/browse">Browse Produce</Link>
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div>
              <p className="font-bold text-2xl text-agroBrown">3000+</p>
              <p className="text-sm text-gray-600">Registered Farmers</p>
            </div>
            <div className="h-8 border-l border-gray-300"></div>
            <div>
              <p className="font-bold text-2xl text-agroBrown">150+</p>
              <p className="text-sm text-gray-600">Local Communities</p>
            </div>
            <div className="h-8 border-l border-gray-300"></div>
            <div>
              <p className="font-bold text-2xl text-agroBrown">100%</p>
              <p className="text-sm text-gray-600">Direct Trade</p>
            </div>
          </div>
        </div>
        {/* Image for desktop view */}
        <div className="hidden lg:block flex-1 pl-16">
          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
            alt="Fresh produce from local farmers"
            className="rounded-lg shadow-xl object-cover h-[500px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
