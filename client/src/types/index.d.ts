import { Icons } from "@/components/icons";

export type IconType = keyof typeof Icons;

export type SocialMedia = {
  icon: IconType;
  href: string;
};

export type Home = {
  location: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  squareFootage: number;
  imageUrl: string;
  price: number;
};
