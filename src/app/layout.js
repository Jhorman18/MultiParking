import "./globals.css";

export const metadata = {
  title: "MultiParking",
  description: "Smart parking made simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="antialiased">
        {children}
      </body>
    </html>
  );
}
