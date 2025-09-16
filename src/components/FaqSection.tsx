import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "How do I start using msgcraft?",
      answer:
        "Simply sign up for an account, scan the QR code to connect your WhatsApp number, and start sending messages through our REST API.",
    },
    {
      question: "Can I use it for multiple WhatsApp numbers?",
      answer:
        "Yes, you can connect multiple WhatsApp numbers to your account and manage them separately through our API.",
    },
    {
      question: "Is it secure?",
      answer:
        "Absolutely. We use industry-standard encryption and security protocols to protect your data and messages.",
    },
    {
      question: "Does it support multimedia files?",
      answer:
        "Yes, you can send images, videos, audio files, and documents through our API.",
    },
    {
      question: "Do I need technical knowledge?",
      answer:
        "Basic programming knowledge is helpful, but we provide comprehensive documentation and code examples in multiple languages to get you started quickly.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about msgcraft.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
