
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-agroGreen to-agroGreen-dark">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform How You Buy and Sell Local Produce?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Join thousands of farmers and buyers already using AgroConnect to support sustainable, 
          local agriculture and build stronger communities.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-agroGreen hover:bg-agroBeige">
            <Link to="/farmers/register">Register as Farmer</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
            <Link to="/buyers/register">Register as Buyer</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
