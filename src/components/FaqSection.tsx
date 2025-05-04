
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I pay my rent?",
    answer: "You can easily pay your rent through our mobile app using various payment methods including credit/debit cards, bank transfers, or e-wallets. The app will send you reminders before your payment is due."
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel your booking through the app. Cancellation policies vary depending on how close you are to your move-in date. Check your contract details in the app for specific terms."
  },
  {
    question: "Are utilities included in the price?",
    answer: "Yes, all standard utilities (electricity, water, internet) are included in your monthly rent. Premium plans may include additional services and amenities."
  },
  {
    question: "How do I report maintenance issues?",
    answer: "You can easily report any maintenance issues through our app by submitting a maintenance request. Our staff will respond promptly to address your concerns."
  },
  {
    question: "Is there a minimum stay requirement?",
    answer: "Yes, our standard contracts are for a minimum of 6 months. However, we do offer flexible options for shorter stays during certain periods of the year."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 px-6 bg-nine-purple/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about living at Nine Residence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
