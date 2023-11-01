// FAQ.js
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqData = [
    {
      question: "1. What is special about comparing rental car deals?",
      answer: "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies."
    },
    {
      question: "2. How do I find the car rental deals?",
      answer: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions."
    },
    {
      question: "3. How do I find such low rental car prices?",
      answer: "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices."
    }
  ];

  return (
    <div className="container mx-auto my-32 p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="border">
        {faqData.map((item, index) => (
          <div key={index}>
            <div
              className={`p-4 ${openIndex === index ? 'bg-black text-white shadow-black' : 'bg-white'}`}
            >
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg font-semibold">{item.question}</h2>
                <div className="text-xl">{openIndex === index ? "−" : "+"}</div>
              </div>
            </div>
            {openIndex === index && (
              <p className="text-[#8c8b95] bg-white p-4">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;