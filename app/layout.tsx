import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata = {
  title: "HopeFund",
  description: "Helping people through direct support",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}