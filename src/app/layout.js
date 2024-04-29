import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ScriptHandler from "./scriptHandler";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
// let toggleBtn = document.querySelector("#navbar-toggle");
// let collapse = document.querySelector("#navbar-collapse");

// toggleBtn.onclick = () => {
//   collapse.classList.toggle("hidden");
//   collapse.classList.toggle("flex");
// };

export default function RootLayout({ children, isLoading }) {
  return (
    <html lang="en">
      <head>
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9831135411942124"
     crossorigin="anonymous"></script> */}
        <ScriptHandler/>
      </head>
      <body className={inter.className}>
        <div className="header-2">
          <nav className="bg-white py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">
              <div className="flex justify-between items-center">
                <a href="/" className="font-bold text-xl text-indigo-600">
                  <Image
                    src="/tamilcs-logo.svg"
                    alt="Tamil Christian songs"
                    // className="dark"
                    width={150}
                    height={60}
                    priority
                  />
                </a>
                <button
                  className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                  id="navbar-toggle"
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>

              <div
                className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                id="navbar-collapse"
              >
                <Link
                  href="/"
                  className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                >
                  Home
                </Link>
                <Link
                  href="/tamil-christian-songs"
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  தமிழ் கிறிஸ்தவ பாடல்கள்
                </Link>
                <Link
                  href="/malayalam-christian-songs"
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  മലയാളം ക്രിസ്ത്യൻ ഗാനങ്ങൾ
                </Link>
                <Link
                  href=""
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  Popular Songs
                </Link>
              </div>
            </div>
          </nav>

        
            {children}
           
          
        </div>
        <nav className="bg-white py-2 md:py-4">
          <div className="container px-4 mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <Image
                  src="/tamilcs-logo.svg"
                  alt="Tamil Christian songs"
                  // className="dark"
                  width={150}
                  height={60}
                  priority
                />
              </div>
              <div>
                Design by{" "}
                <a
                  href="https://leon.net.in"
                  className="font-bold text-indigo-600"
                >
                  leon.net.in
                </a>
              </div>
            </div>
          </div>
        </nav>
      </body>
    </html>
  );
}
