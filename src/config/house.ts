type Home = {
  location: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  squareFootage: number;
  price: number;
};

export const homes: Home[] = [
  {
    location: "San Francisco, CA",
    numberOfBedrooms: 3,
    numberOfBathrooms: 2,
    squareFootage: 1200,
    price: 250000,
  },
  {
    location: "New York, NY",
    numberOfBedrooms: 4,
    numberOfBathrooms: 3,
    squareFootage: 1800,
    price: 350000,
  },
  {
    location: "Los Angeles, CA",
    numberOfBedrooms: 2,
    numberOfBathrooms: 1,
    squareFootage: 1000,
    price: 200000,
  },
  {
    location: "Seattle, WA",
    numberOfBedrooms: 5,
    numberOfBathrooms: 4,
    squareFootage: 2200,
    price: 450000,
  },
];
