import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="mb-4">Simple & Transparent Pricing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Plan</CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">$22</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <p>Flexible month-to-month access</p>
              <p>Perfect for testing or small campaigns</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
              Save 5%
            </Badge>
            <CardHeader>
              <CardTitle>Yearly Plan</CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">$251</span>
                <span className="text-muted-foreground">/year</span>
              </div>
            </CardHeader>
            <CardContent>
              <p>Best value for long-term automation</p>
              <p>Includes priority support & updates</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
