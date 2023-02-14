import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HBlogo from "../public/HBlogo.jpg";
import navbarsvg1 from "../public/navbarsvg1.svg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navbarItems = [
    {
      navName: "Home",
      slug: "/",
    },
    {
      navName: "About Us",
      slug: "/about",
    },
    {
      navName: "Blogs",
      slug: "/blogs",
    },
    {
      navName: "Contact Us",
      slug: "/contact",
    },
  ];
  return (
    <>
      <nav className="w-full bg-indigo-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex items-center">
                <Link href={"/"} className="pl-2">
                  <Image
                    src={HBlogo}
                    alt="logo"
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </Link>

                <Link href={"/"} className="pl-2">
                  <h2 className="text-2xl text-white font-bold">H.B</h2>
                </Link>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={navbarsvg1} alt="x-close" />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {navbarItems.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className={`text-white ${navbar ? "text-center" : ""}`}
                    >
                      <Link href={item.slug}>{item.navName}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
