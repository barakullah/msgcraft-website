import React from "react";
import {
  Code,
  Terminal,
  Braces,
  Smartphone,
  Apple,
  Globe,
  Layers,
  Database,
  Monitor,
  Settings,
  Coffee,
} from "lucide-react";

export function DeveloperApiSection() {
  const stacks = [
    {
      icon: Settings,
      name: "REST API",
      description: "Simple and reliable HTTP endpoints for integration.",
    },
    {
      icon: Braces,
      name: "PHP",
      description: "SDK and examples ready to plug into your projects.",
    },
    {
      icon: Terminal,
      name: "Node.js",
      description: "Async-friendly API clients for modern JavaScript apps.",
    },
    {
      icon: Code,
      name: "Python",
      description: "Lightweight libraries for automation and scripting.",
    },

    {
      icon: Globe,
      name: "Angular",
      description: "Bring WhatsApp automation into Angular projects.",
    },
    {
      icon: Globe,
      name: "Go",
      description: "Fast and efficient API calls for Go developers.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Start Building with MsgCraft — Your WhatsApp Messaging Engine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            MsgCraft gives you a powerful REST API to integrate WhatsApp into
            any workflow — whether it’s apps, CRMs, or support systems. Built
            for developers, it makes automation seamless, reliable, and
            scalable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stacks.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{stack.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {stack.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
