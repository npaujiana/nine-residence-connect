
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: 299,
    description: "Perfect for students on a budget",
    features: [
      "Shared room (2-4 residents)",
      "Basic amenities included",
      "Access to common areas",
      "Monthly billing",
      "App access"
    ],
    mostPopular: false
  },
  {
    name: "Standard",
    price: 499,
    description: "Our most popular option",
    features: [
      "Private room, shared bathroom",
      "All basic amenities included",
      "Weekly cleaning service",
      "Access to study rooms", 
      "24/7 app support"
    ],
    mostPopular: true
  },
  {
    name: "Premium",
    price: 799,
    description: "Luxury co-living experience",
    features: [
      "Private room with ensuite",
      "All amenities included", 
      "Daily cleaning service",
      "Priority maintenance",
      "Premium app features"
    ],
    mostPopular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have options to fit every need and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-xl border ${plan.mostPopular ? 'border-nine-accent shadow-lg' : 'border-gray-200 shadow-sm'} flex flex-col h-full relative`}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-nine-accent text-white text-xs uppercase py-1 px-3 rounded-full font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500"> /month</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start mb-3">
                    <span className="mr-2 mt-1 text-nine-accent">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${plan.mostPopular ? 'bg-nine-accent hover:bg-nine-dark' : 'bg-gray-100 hover:bg-gray-200 text-nine-dark'}`}
              >
                Select Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
