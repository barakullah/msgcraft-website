import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function TutorialsSection() {
  const codeExamples = {
    php: `<?php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.msgcraft.net/api/send-message/1',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => json_encode(array(
      "to" => "+1234567890",          // recipient’s WhatsApp number
      "body" => "Hello from MsgCraft 🚀"
  )),
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'x-client-token: your_token_here'
  ),
));

$response = curl_exec($curl);
curl_close($curl);

echo $response;
`,
    python: `import requests

url = "https://api.msgcraft.net/api/send-message/1"

payload = {
    "to": "+1234567890",       # recipient’s WhatsApp number
    "body": "Hello from MsgCraft 🚀"
}

headers = {
    "Content-Type": "application/json",
    "x-client-token": "your_token_here"
}

response = requests.post(url, json=payload, headers=headers)

print(response.status_code)
print(response.text)
`,
    node: `const axios = require("axios");

const url = "https://api.msgcraft.net/api/send-message/1";

const payload = {
  to: "+1234567890",           // recipient’s WhatsApp number
  body: "Hello from MsgCraft 🚀"
};

const headers = {
  "Content-Type": "application/json",
  "x-client-token": "your_token_here"
};

axios.post(url, payload, { headers })
  .then(response => {
    console.log("Status:", response.status);
    console.log("Response:", response.data);
  })
  .catch(error => {
    console.error("Error:", error.response ? error.response.data : error.message);
  });
`,
  };

  return (
    <section id="tutorials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="mb-4">Get Started in Minutes</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred programming language and start sending
            messages right away.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Code Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="php" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="php">PHP</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="node">Node.js</TabsTrigger>
              </TabsList>
              {Object.entries(codeExamples).map(([lang, code]) => (
                <TabsContent key={lang} value={lang}>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{code}</code>
                  </pre>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
