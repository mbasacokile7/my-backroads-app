// Import Images
import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

// The Social links
export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

// Service Data
export const serviceData = [
  { id: 1, title: "Saving Money", icon: "fas fa-wallet fa-fw" },
  { id: 2, title: "Endless Hiking", icon: "fas fa-tree fa-fw" },
  { id: 3, title: "Amazing Comfort", icon: "fas fa-socks fa-fw" },
];

// Tour Data
export const tourData = [
  {
    id: 1,
    img: img1,
    title: "Tibet Adventure",
    country: "China",
    amount: "$2100",
    duration: "6 Days",
    date: "August 26th 2026",
  },
  {
    id: 2,
    img: img2,
    title: "Best of Java",
    country: "Indonesia",
    amount: "$1400",
    duration: "11 Days",
    date: "October 11th, 2026",
  },
  {
    id: 3,
    img: img3,
    title: "Explore Hong Kong",
    country: "Hong Kong",
    amount: "$5000",
    duration: "8 Days",
    date: "September 15th, 2026",
  },
  {
    id: 4,
    img: img4,
    title: "Kenya Highlights",
    country: "Kenya",
    amount: "$3300",
    duration: "20 Days",
    date: "December 5th, 2026",
  },
];
