import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import herobanner from "../../public/images/hero-img.png";
export function HeroSection() {
  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-6">Supercharge Your WhatsApp Communication</h1>
            <p className="mb-8 text-muted-foreground">
              Simplify customer engagement with a powerful, easy-to-use WhatsApp
              API built for businesses and developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://crm.msgcraft.net"
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 flex items-center"
              >
                Start Now
              </a>
              <a
                href="#pricing"
                className="border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4 flex items-center"
              >
                View pricing
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid ">
              <div className="">
                <ImageWithFallback
                  src={herobanner}
                  alt="WhatsApp mockup"
                  // className="w-full h-48 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
