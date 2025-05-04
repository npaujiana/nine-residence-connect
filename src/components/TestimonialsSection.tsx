
const testimonials = [
  {
    quote: "Nine Residence has made managing my student life so much easier. The app reminders mean I never forget to pay rent!",
    name: "Sarah",
    age: 19,
    avatar: "S",
  },
  {
    quote: "I love the community here. The app helps me connect with other residents - I've made friends for life.",
    name: "Alex",
    age: 18,
    avatar: "A",
  },
  {
    quote: "The booking process was super smooth. It took me less than 5 minutes to find and secure my perfect room.",
    name: "Jordan",
    age: 20,
    avatar: "J",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-6 bg-nine-gray/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Residents Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our community of young residents about their Nine Residence experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <div className="mb-6">
                <svg className="h-8 w-8 text-nine-accent opacity-80" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.5 10.3c-.7-.4-1.5-.7-2.2-1 .2-.6.5-1.2.9-1.7C6 6.5 7.5 6.2 7.7 6.2c.3-.1.6-.3.7-.6.2-.3.2-.7 0-1-.1-.3-.3-.5-.6-.6-.1 0-2.3-.6-4 1C2.5 6.5 1.7 8.4 1.5 10c-.1.6-.2 1.7.2 2.5.5.9 1.5 1.5 3 1.5 1.5 0 2.6-1.1 2.6-2.5.1-1-.7-1.8-1.8-2.1zM16 10.3c-.7-.4-1.5-.7-2.2-1 .2-.6.5-1.2.9-1.7 1-1.1 2.5-1.4 2.7-1.4.3-.1.6-.3.7-.6.2-.3.2-.7 0-1-.1-.3-.3-.5-.6-.6-.1 0-2.3-.6-4 1-1.2 1.5-2.1 3.4-2.2 5-.1.6-.2 1.7.2 2.5.5.9 1.5 1.5 3 1.5 1.5 0 2.6-1.1 2.6-2.5-.1-1-.7-1.8-1.8-2.1z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="bg-nine-accent text-white rounded-full w-10 h-10 flex items-center justify-center font-medium mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">Age {testimonial.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
