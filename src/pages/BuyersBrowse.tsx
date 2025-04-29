
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, Leaf, Filter, MapPin } from "lucide-react";

// Mock data - in a real app, this would come from an API
const mockProducts = [
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
  },
  {
    id: "5",
    name: "Fresh Spinach",
    farmer: "Riverbed Farm",
    location: "Green Valley",
    price: "$3.50",
    unit: "bunch",
    imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
    organic: true,
    quantity: 25
  },
  {
    id: "6",
    name: "Potatoes",
    farmer: "Highland Fields",
    location: "Mountain County",
    price: "$2.25",
    unit: "kg",
    imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
    organic: false,
    quantity: 60
  },
  {
    id: "7",
    name: "Fresh Strawberries",
    farmer: "Berry Patch",
    location: "Sunny Hills",
    price: "$5.99",
    unit: "basket",
    imageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
    organic: true,
    quantity: 20
  },
  {
    id: "8",
    name: "Onions",
    farmer: "Valley View Farm",
    location: "Red County",
    price: "$1.75",
    unit: "kg",
    imageUrl: "https://images.unsplash.com/photo-1618512496248-a3c12c8151d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
    organic: false,
    quantity: 45
  }
];

const BuyersBrowse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [organicOnly, setOrganicOnly] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [products, setProducts] = useState(mockProducts);
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.farmer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => !organicOnly || product.organic);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="bg-agroBeige py-12">
          <div className="container">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-agroBrown-dark mb-3">Browse Local Produce</h1>
              <p className="text-gray-600">
                Find fresh, seasonal produce directly from farmers in your area
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search by produce, farm or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="md:w-auto flex items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">Filters</span>
                </Button>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="mt-6 p-6 bg-white rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Price Range</h3>
                  <div className="px-2">
                    <Slider 
                      value={priceRange} 
                      onValueChange={setPriceRange} 
                      min={0} 
                      max={20} 
                      step={0.5} 
                      className="mb-6"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4">Farming Methods</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <Checkbox id="organic" checked={organicOnly} onCheckedChange={(checked) => setOrganicOnly(!!checked)} />
                    <Label htmlFor="organic" className="flex items-center">
                      <Leaf className="h-4 w-4 mr-2 text-agroGreen" />
                      Organic Only
                    </Label>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4">Location</h3>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input placeholder="Enter your location" className="pl-10" />
                    <p className="text-xs text-gray-500 mt-2">
                      Enter your location to find produce nearby
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Product listings */}
        <div className="container py-12">
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-sm text-gray-500 mb-6">Showing {filteredProducts.length} items</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyersBrowse;
