import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Analog Future",
  description: "We are a small agency operating on the intersection of architecture, design and technology.",
  openGraph: {
    title: "Analog Future",
    description: "We are a small agency operating on the intersection of architecture, design and technology.",
    url: "https://analogfuture.xyz",
    images: [
      {
        url: "/images/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Social Preview Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analog Future",
    description: "Chat with kind robot",
    image: "/images/social-preview.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
