import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import PersonalBranding from "./PersonalBranding";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar: React.FC = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
    else setIsMenuOpen(true);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-10 bg-navbar p-1 lg:p-3 text-font h-14 bg-opacity-15 backdrop-blur-md border-b-2 border-navbarBorderColor">
      <div className="absolute left-1 top-20">
        {" "}
        <ThemeToggleButton />
      </div>
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <PersonalBranding />
        </div>
        <div ref={menuRef}>
          <div
            className="lg:hidden flex items-center cursor-pointer border-[0.5px] rounded-md p-2 border-gray-500"
            onClick={() => {
              toggleMenu();
            }}
          >
            {hamburgerMenuSvg}
          </div>
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } absolute flex flex-col gap-1 bg-navbar border-[0.5px] border-navbarLogoText p-2 rounded-md right-4 mt-1 w-44`}
          >
            <li>
              <Link href="/" legacyBehavior>
                <a
                  className={`hover:underline transition-opacity duration-300  px-2 py-1 rounded-full  ${
                    router.pathname === "/"
                      ? "bg-selectedNavbarTab text-selectedNavbarTabText"
                      : "text-navbarLogoText"
                  }`}
                >
                  <span>About</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/posts" legacyBehavior>
                <a
                  className={`hover:underline transition-opacity duration-300  px-2 py-1 rounded-full  ${
                    router.pathname === "/posts"
                      ? "bg-selectedNavbarTab text-selectedNavbarTabText"
                      : "text-navbarLogoText"
                  }`}
                >
                  <span>Posts</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile View Hanburger Menu*/}
        <ul className="hidden lg:flex ml-4 text-gray-900 items-center justify-center">
          <li>
            <Link href="/" legacyBehavior>
              <a
                className={`hover:underline transition-opacity duration-300  px-2 py-1 rounded-full  ${
                  router.pathname === "/"
                    ? "bg-selectedNavbarTab text-selectedNavbarTabText"
                    : "text-navbarLogoText"
                }`}
              >
                <span>About</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/posts" legacyBehavior>
              <a
                className={`hover:underline transition-opacity duration-300  px-2 py-1 rounded-full  ${
                  router.pathname === "/posts"
                    ? "bg-selectedNavbarTab text-selectedNavbarTabText"
                    : "text-navbarLogoText"
                }`}
              >
                <span>Posts</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

const linkedinLogoSvg = (
  <svg
    height="15"
    width="15"
    viewBox="0 0 97.75 97.75"
    xmlns="http://www.w3.org/2000/svg"
    fill="var(--color-navbar-text)"
  >
    <path d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z M30.562,81.966h-13.74V37.758h13.74V81.966z M23.695,31.715c-4.404,0-7.969-3.57-7.969-7.968c0.001-4.394,3.565-7.964,7.969-7.964 c4.392,0,7.962,3.57,7.962,7.964C31.657,28.146,28.086,31.715,23.695,31.715z M82.023,81.966H68.294V60.467 c0-5.127-0.095-11.721-7.142-11.721c-7.146,0-8.245,5.584-8.245,11.35v21.869H39.179V37.758h13.178v6.041h0.185 c1.835-3.476,6.315-7.14,13-7.14c13.913,0,16.481,9.156,16.481,21.059V81.966z" />
  </svg>
);

const githubLogoSvg = (
  <svg
    height="16"
    width="16"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    fill="var(--color-navbar-text)"
    stroke="#ffffff"
  >
    <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path>
  </svg>
);

const hamburgerMenuSvg = (
  <svg
    height="22"
    width="22"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="var(--color-navbar-text)"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <title>Menu</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Menu">
          <rect
            id="Rectangle"
            fillRule="nonzero"
            x="0"
            y="0"
            width="24"
            height="24"
          ></rect>
          <line
            x1="5"
            y1="7"
            x2="19"
            y2="7"
            id="Path"
            stroke="var(--color-navbar-text)"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
          <line
            x1="5"
            y1="17"
            x2="19"
            y2="17"
            id="Path"
            stroke="var(--color-navbar-text)"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
            id="Path"
            stroke="var(--color-navbar-text)"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
        </g>
      </g>
    </g>
  </svg>
);
