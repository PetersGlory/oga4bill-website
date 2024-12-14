import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from 'next'
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
// import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: "Oga4bill",
  description: "Payments made easy",
}

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

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
