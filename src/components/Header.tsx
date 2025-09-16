import { Button } from "./ui/button";
import msgcraft from "../../public/images/MsgCraft.svg";
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center">
            <img
              src={msgcraft}
              alt="Error loading image"
              width="120px"
              height="120px"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm hover:text-primary">
            Features
          </a>
          <a href="#pricing" className="text-sm hover:text-primary">
            Pricing
          </a>
          <a href="#tutorials" className="text-sm hover:text-primary">
            Tutorials
          </a>
          <a href="#faq" className="text-sm hover:text-primary">
            FAQ
          </a>
          <a href="#contact" className="text-sm hover:text-primary">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <a
            href="https://crm.msgcraft.net"
            target="_blank"
            variant="ghost"
            size="sm"
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}
