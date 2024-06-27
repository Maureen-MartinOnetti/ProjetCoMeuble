import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full flex flex-col min-h-screen items-stretch justify-start">
        <Header />
        <main className="w-full flex-1 mx-auto flex flex-col min-h-full">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
