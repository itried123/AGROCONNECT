
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  // In a real app, this would come from an API or context
  const [products] = useState([
    {
      id: "1",
      name: "Fresh Tomatoes",
      farmer: "Green Valley Farm",
      location: "Riverside County",
      price: "$2.99",
      unit: "kg",
      imageUrl: "https://images.unsplash.com/photo-1524593166156-312f362cada0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      organic: true,
      quantity: 50
    },
    {
      id: "2",
      name: "Organic Carrots",
      farmer: "Sunshine Fields",
      location: "Mountain View",
      price: "$3.49",
      unit: "bunch",
      imageUrl: "https://images.unsplash.com/photo-1447175008436-054170c2e979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      organic: true,
      quantity: 30
    },
    {
      id: "3",
      name: "Fresh Corn",
      farmer: "Golden Acres",
      location: "Lakeside County",
      price: "$0.99",
      unit: "piece",
      imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      organic: false,
      quantity: 100
    },
    {
      id: "4",
      name: "Organic Apples",
      farmer: "Hillside Orchards",
      location: "Apple Valley",
      price: "$4.99",
      unit: "kg",
      imageUrl: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      organic: true,
      quantity: 75
    }
  ]);

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-agroBrown-dark">Featured Produce</h2>
            <p className="mt-2 text-gray-600">
              Discover the freshest selections from local farms
            </p>
          </div>
          <Button variant="link" className="text-agroGreen p-0 h-auto mt-2 md:mt-0">
            <Link to="/buyers/browse">View all products →</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
