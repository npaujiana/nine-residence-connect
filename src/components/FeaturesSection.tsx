
import { CreditCard, Clock, Calendar } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Online Payments",
    description: "Pay your rent and other bills digitally with one click - no more cash or bank transfers needed.",
  },
  {
    icon: Clock,
    title: "Billing Reminders",
    description: "Receive timely notifications about upcoming payments so you never miss a deadline.",
  },
  {
    icon: Calendar,
    title: "Instant Room Booking",
    description: "Browse available rooms and book instantly through our easy-to-use digital platform.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed to make your co-living experience seamless and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="p-3 bg-nine-purple inline-block rounded-lg mb-6">
                <feature.icon className="h-6 w-6 text-nine-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
