import {
  Bot,
  Megaphone,
  Headphones,
  Film,
  Bell,
  Key,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function UseCasesSection() {
  const useCases = [
    {
      icon: Bot,
      title: "Chatbots",
      description: "Build interactive assistants",
    },
    {
      icon: Megaphone,
      title: "Re-marketing",
      description: "Re-engage your audience",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Answer queries fast",
    },
    {
      icon: Film,
      title: "Multimedia Messages",
      description: "Send images, video & audio",
    },
    {
      icon: Bell,
      title: "Notifications & Reminders",
      description: "Keep customers updated",
    },
    {
      icon: Key,
      title: "Authentication",
      description: "Verify users securely",
    },
    {
      icon: MessageCircle,
      title: "Automated Communication",
      description: "Simplify client engagement",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="mb-4">Use Cases</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the many ways you can use msgcraft to enhance your business
            communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <useCase.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
