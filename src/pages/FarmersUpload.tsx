
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const FarmersUpload = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrganic, setIsOrganic] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Product uploaded",
        description: "Your product has been successfully listed.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 py-12 bg-agroBeige-light">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-agroBrown-dark">Upload Your Produce</h1>
            <p className="text-gray-600 mt-2">
              List your fresh farm products and connect with local buyers
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>
                Provide information about the produce you'd like to sell
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="productName">Product Name</Label>
                  <Input id="productName" required placeholder="e.g. Fresh Tomatoes, Organic Carrots" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vegetables">Vegetables</SelectItem>
                        <SelectItem value="fruits">Fruits</SelectItem>
                        <SelectItem value="dairy">Dairy & Eggs</SelectItem>
                        <SelectItem value="grains">Grains & Cereals</SelectItem>
                        <SelectItem value="herbs">Herbs & Spices</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="variety">Variety (Optional)</Label>
                    <Input id="variety" placeholder="e.g. Roma, Cherry, Beefsteak" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity Available</Label>
                    <Input id="quantity" type="number" min="1" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">Kilogram (kg)</SelectItem>
                        <SelectItem value="lb">Pound (lb)</SelectItem>
                        <SelectItem value="piece">Piece</SelectItem>
                        <SelectItem value="bunch">Bunch</SelectItem>
                        <SelectItem value="dozen">Dozen</SelectItem>
                        <SelectItem value="basket">Basket</SelectItem>
                        <SelectItem value="crate">Crate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price per Unit ($)</Label>
                    <Input id="price" type="number" min="0.01" step="0.01" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your product, its freshness, how it was grown, etc."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="organic">Organic Certification</Label>
                    <p className="text-sm text-muted-foreground">
                      Is this product organically grown?
                    </p>
                  </div>
                  <Switch 
                    id="organic" 
                    checked={isOrganic} 
                    onCheckedChange={setIsOrganic}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Product Images</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((index) => (
                      <div 
                        key={index}
                        className="border-2 border-dashed border-gray-300 rounded-md aspect-square flex flex-col items-center justify-center hover:bg-agroBeige/50 cursor-pointer"
                      >
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-xs text-gray-500">Upload image</p>
                        <Input 
                          id={`image${index}`} 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Upload up to 3 images. First image will be the main product image.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="harvestDate">Harvest Date</Label>
                  <Input id="harvestDate" type="date" />
                  <p className="text-xs text-muted-foreground">
                    When was this product harvested? (Leave blank for ongoing harvests)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability Period</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1_week">Up to 1 week</SelectItem>
                      <SelectItem value="2_weeks">Up to 2 weeks</SelectItem>
                      <SelectItem value="1_month">Up to 1 month</SelectItem>
                      <SelectItem value="seasonal">Seasonal</SelectItem>
                      <SelectItem value="year_round">Year-round</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Save as Draft</Button>
                <Button 
                  type="submit" 
                  className="bg-agroGreen hover:bg-agroGreen-dark" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Uploading..." : "Upload Product"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FarmersUpload;
