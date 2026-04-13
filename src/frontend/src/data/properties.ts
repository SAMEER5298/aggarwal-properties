export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: "Buy" | "Sell" | "Rent";
  category: "Apartment" | "Villa" | "Plot" | "Commercial";
  bhk: number | null;
  area: string;
  furnished: string | null;
  parking: boolean;
  status: "Available" | "Sold" | "Rented";
  isFeatured: boolean;
  bathrooms: number | null;
  description: string;
  image: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    location: "Vasant Kunj, Delhi",
    price: "₹1.8 Cr",
    type: "Buy",
    category: "Apartment",
    bhk: 3,
    area: "1850 sqft",
    furnished: "Semi-Furnished",
    parking: true,
    status: "Available",
    isFeatured: true,
    bathrooms: 3,
    description:
      "A stunning 3BHK luxury apartment in the upscale Vasant Kunj locality. Features premium Italian marble flooring, modular kitchen, and breathtaking city views. Located in a gated society with 24/7 security, swimming pool, and gym.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Spacious 2BHK Flat",
    location: "Dwarka Sector 12",
    price: "₹75 Lac",
    type: "Buy",
    category: "Apartment",
    bhk: 2,
    area: "1200 sqft",
    furnished: "Unfurnished",
    parking: true,
    status: "Available",
    isFeatured: true,
    bathrooms: 2,
    description:
      "Well-maintained 2BHK flat in the heart of Dwarka. Ready-to-move property with spacious rooms, good ventilation, and excellent connectivity to metro and highways. Ideal for first-time home buyers.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Modern 2BHK for Rent",
    location: "Rohini Sector 9",
    price: "₹28,000/mo",
    type: "Rent",
    category: "Apartment",
    bhk: 2,
    area: "1100 sqft",
    furnished: "Fully Furnished",
    parking: false,
    status: "Available",
    isFeatured: true,
    bathrooms: 2,
    description:
      "Fully furnished modern apartment available for rent in Rohini. Comes with all amenities including AC, refrigerator, washing machine, and high-speed internet. Pet-friendly building with 24/7 security.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Commercial Office Space",
    location: "Connaught Place",
    price: "₹3.2 Cr",
    type: "Buy",
    category: "Commercial",
    bhk: null,
    area: "3500 sqft",
    furnished: "Bare Shell",
    parking: true,
    status: "Available",
    isFeatured: false,
    bathrooms: 4,
    description:
      "Prime commercial office space in the prestigious Connaught Place business district. Ground floor with excellent visibility and footfall. Suitable for corporate offices, showrooms, or retail businesses. Power backup and dedicated parking included.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 5,
    title: "Premium Villa",
    location: "South Delhi",
    price: "₹5.5 Cr",
    type: "Buy",
    category: "Villa",
    bhk: 4,
    area: "4200 sqft",
    furnished: "Fully Furnished",
    parking: true,
    status: "Sold",
    isFeatured: false,
    bathrooms: 5,
    description:
      "An exquisite 4BHK villa in South Delhi's most coveted neighbourhood. Features a private garden, rooftop terrace, home theatre, and smart home automation. A true masterpiece of contemporary design and luxury living.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 6,
    title: "Plot for Sale",
    location: "Saket, Delhi",
    price: "₹95 Lac",
    type: "Sell",
    category: "Plot",
    bhk: null,
    area: "2400 sqft",
    furnished: null,
    parking: false,
    status: "Available",
    isFeatured: false,
    bathrooms: null,
    description:
      "Prime residential plot in Saket, one of Delhi's most sought-after localities. Clear title with all approvals in place. Excellent investment opportunity in a rapidly developing area with upcoming metro connectivity.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop&auto=format",
  },
];
