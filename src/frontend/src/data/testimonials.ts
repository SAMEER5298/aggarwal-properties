export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Dwarka",
    rating: 5,
    review:
      "Aggarwal Properties made our home buying journey so smooth. Highly professional team with deep knowledge of the Delhi market!",
  },
  {
    id: 2,
    name: "Priya Mehta",
    location: "Rohini",
    rating: 5,
    review:
      "Found the perfect 2BHK rental within a week. Amazing service and support throughout the entire process.",
  },
  {
    id: 3,
    name: "Amit Verma",
    location: "South Delhi",
    rating: 4,
    review:
      "Sold my property at the best market price. Very transparent process and great communication at every step.",
  },
  {
    id: 4,
    name: "Sunita Agarwal",
    location: "Vasant Kunj",
    rating: 5,
    review:
      "Best real estate experience in Delhi. The team went above and beyond to help us find our dream home.",
  },
];
