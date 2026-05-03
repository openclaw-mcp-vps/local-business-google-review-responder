import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewReply AI — Respond to Google Reviews in Your Brand Voice",
  description: "Automatically generate personalized responses to Google reviews that match your business tone and address specific customer concerns."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9064d56b-141f-4b14-924d-f8ebea4c09d1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
