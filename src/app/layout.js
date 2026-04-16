import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rhoda Pickens",
  description: "Software Engineering student at WGU and freelance web developer",
  keywords: [
    "Rhoda Pickens",
    "Software Engineer", 
    "WGU Software Engineering",
    "Java Spring Boot Developer",
    "Python",
    "Perl Scripting",
    "Full Stack Development",
    "AWS",
    "Docker",
    "Angular",
    "ReactJS",
    "SQL"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
