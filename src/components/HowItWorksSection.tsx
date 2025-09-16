import { UserPlus, QrCode, MessageSquare } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up & Get Your Workspace",
      description:
        "Create your MsgCraft account and instantly access your personalized dashboard.",
    },
    {
      icon: QrCode,
      title: "Link Your WhatsApp in One Tap",
      description:
        "Securely pair your WhatsApp number by scanning a QR code — no complex setup required.",
    },
    {
      icon: MessageSquare,
      title: "Craft & Launch Messages",
      description:
        "Use our REST API to send texts, media, or campaigns in minutes. Scale as you grow, no limits.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="mb-4">How It Works</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Automating WhatsApp with MsgCraft is as simple as brewing coffee —
            just follow three quick steps:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
