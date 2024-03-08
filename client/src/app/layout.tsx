// app/layout.tsx
import { Providers } from "./providers";
import "./globals.css";
import "./config.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="white">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
