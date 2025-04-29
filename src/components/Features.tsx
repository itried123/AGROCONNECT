
import { Handshake, Sprout, Leaf, CircleDollarSign } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CircleDollarSign className="h-10 w-10 text-agroGreen" />,
      title: "Fair Prices",
      description: "Farmers earn more by selling directly to consumers without intermediaries."
    },
    {
      icon: <Leaf className="h-10 w-10 text-agroGreen" />,
      title: "Sustainable Farming",
      description: "Support eco-friendly agricultural practices that protect our planet."
    },
    {
      icon: <Handshake className="h-10 w-10 text-agroGreen" />,
      title: "Community Support",
      description: "Build stronger rural communities through direct farmer-consumer relationships."
    },
    {
      icon: <Sprout className="h-10 w-10 text-agroGreen" />,
      title: "Fresh Produce",
      description: "Get fresher, healthier food with shorter farm-to-table journeys."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-agroBrown-dark">Why Choose AgroConnect?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our platform empowers farmers and provides buyers with access to the freshest local produce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-agroBeige p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:translate-y-[-5px]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium text-agroBrown mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
