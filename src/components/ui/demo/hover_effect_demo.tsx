import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 bg-black">
      <h1 className="text-4xl text-center">Our Testimonials </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Abhishek Kumar",
    description:
      "Korsera is a great platform to learn new things. I have learned a lot from this platform. I am very thankful to the creators of this platform.",
    link: "https://stripe.com",
  },
  {
    title: "Ali Khan",
    description:
      "this plaform is best for learning new things. 100 % recommended. I have learned a lot from this platform.",
    link: "https://netflix.com",
  },
  {
    title: "Krtika Sharma",
    description:
      "I have learned a lot from this platform. I am very thankful to the creators of this platform.",
    link: "https://google.com",
  },
  {
    title: "Shubham Kumar",
    description:
      "Korsera is a great platform to learn new things. I have learned a lot from this platform. I am very thankful to the creators of this platform.",
    link: "https://meta.com",
  },
  {
    title: "Kaushal Kishor",
    description:
      "this plaform is best for learning new things. 100 % recommended. I have learned a lot from this platform.this plaform is best for learning new things. 100 % recommended. I have learned a lot from this platform.",
    link: "https://amazon.com",
  },
  {
    title: "Gaurav Verma",
    description:
      "I have learned a lot from this platform. I am very thankful to the creators of this platform.I have learned a lot from this platform. I am very thankful to the creators of this platform.",
    link: "https://microsoft.com",
  },
];
