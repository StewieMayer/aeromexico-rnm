import Image from "next/image";
import ReduxProvider from "../lib/ReduxProvider";
import Logo from "../public/logo.png";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grass"></div>
        <div className="content-layer">
          <div className="main-container">
            <div className="header">
              <Image src={Logo} alt="Rick And morty Logo" />
            </div>
            <div className="app-container">
              <ReduxProvider>{children}</ReduxProvider>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
