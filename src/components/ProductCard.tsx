
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  farmer: string;
  location: string;
  price: string;
  unit: string;
  imageUrl: string;
  organic: boolean;
  quantity: number;
}

const ProductCard = ({
  id,
  name,
  farmer,
  location,
  price,
  unit,
  imageUrl,
  organic,
  quantity
}: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        {organic && (
          <Badge className="absolute top-2 left-2 bg-agroGreen hover:bg-agroGreen-dark">
            Organic
          </Badge>
        )}
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg leading-none">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">by {farmer}</p>
          </div>
          <p className="font-medium text-lg">{price}<span className="text-sm text-muted-foreground">/{unit}</span></p>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-3 w-3 mr-1" />
          {location}
        </div>
        <p className="text-sm mt-2">Available: {quantity} {unit}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-agroGreen hover:bg-agroGreen-dark">Contact Farmer</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
