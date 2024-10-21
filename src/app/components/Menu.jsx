"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import ArrowSecondIcon from "../assets/icons/arrowSecond.svg";
import MenuIcon from "../assets/icons/menu.svg";
import CancelIcon from "../assets/icons/cancel.svg";
import { Button } from "./Button";

import { socialsIcons } from "../constans/socialsIcons";
import { socialsLinks } from "../constans/socialsLinks";

export const Menu = ({ className }) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const menuRef = useRef(null); // Referencja do elementu menu

  const menuItems = [
    {
      name: "Home",
      src: "/",
    },
    {
      name: "Company",
      submenus: [
        {
          name: "About Us",
          src: "/about-us",
        },
      ],
    },
    {
      name: "Services",
      submenus: [
        {
          name: "Tree Planting",
          src: "/services/tree-planting",
        },
        {
          name: "Flower Scaping",
          src: "/services/flower-scaping",
        },
        {
          name: "Grass Cutting",
          src: "/services/grass-cutting",
        },
      ],
    },
    {
      name: "Blog",
      submenus: [
        {
          name: "Flowers",
          src: "/blog/search&search=flowers",
        },
        {
          name: "Grass",
          src: "/blog/search&search=grass",
        },
        {
          name: "Garden",
          src: "/blog/search&search=garden",
        },
      ],
    },
    {
      name: "Contact",
      src: "/contact-us",
    },
  ];

  // Funkcja obsługi kliknięcia, która rozwija/zamyka podmenu
  const handleMenuClick = (name) => {
    setActiveMenu((prevActiveMenu) => (prevActiveMenu === name ? null : name));
  };

  // Funkcja do zamykania menu po kliknięciu poza nim
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <ul
        ref={menuRef}
        className={`relative inline-flex items-center gap-10 z-10 bg-background hidden lg:inline-flex ${className}`}
      >
        {menuItems.map((item) => {
          const isActive = item.src === pathname;
          const hasSubmenus = item.submenus && item.submenus.length > 0;
          return (
            <li key={item.name} className="z-10 bg-background">
              {item.src ? (
                <Link
                  href={item.src}
                  className={`text-textDark text-base font-semibold hover:text-main ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => setActiveMenu(null)} // Zamknięcie menu po kliknięciu
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleMenuClick(item.name)}
                  className="text-textDark text-base font-semibold inline-flex items-center justify-center hover:text-main"
                >
                  {item.name}{" "}
                  <ArrowSecondIcon className="scale-50 -rotate-90" />
                </button>
              )}

              {hasSubmenus && activeMenu === item.name && (
                <ul className="absolute top-full z-2 p-4 shadow-sm bg-zinc-50 transition-all">
                  {item.submenus.map((submenu) => (
                    <li
                      key={submenu.name}
                      className="p-2 border-solid border-t-0 border-r-0 border-l-0 border-b-2 border-menuDivider last:border-b-0"
                    >
                      <Link
                        href={submenu.src}
                        className={`text-textDark text-lg hover:text-main ${
                          submenu.src === pathname ? "active" : ""
                        }`}
                        onClick={() => setActiveMenu(null)} // Zamknięcie menu po kliknięciu subelementu
                      >
                        {submenu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <Button
        color="noneDark"
        type="icon"
        className={`text-main fill-main md:block sm:block lg:hidden ${className}`}
        onClick={() => setMobileMenuShown((prevState) => !prevState)}
      >
        {mobileMenuShown ? <CancelIcon /> : <MenuIcon />}
      </Button>
      {mobileMenuShown && (
        <div className="fixed flex flex-col top-44 left-0 w-full h-[100%] bg-second z-[99999]">
          <ul className="relative flex flex-col z-10 py-4 px-5">
            {menuItems.map((item) => {
              const isActive = item.src === pathname;
              const hasSubmenus = item.submenus && item.submenus.length > 0;
              return (
                <li
                  key={item.name}
                  className="z-10 py-4 border-solid border-t-0 border-r-0 border-l-0 border-b-[1px] border-mobileMenuDivider"
                >
                  {item.src ? (
                    <Link
                      href={item.src}
                      className={`text-textMedium text-2xl hover:font-bold ${
                        isActive ? "activeMobile" : ""
                      }`}
                      onClick={() => setMobileMenuShown(false)} // Zamknięcie mobilnego menu po kliknięciu
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleMenuClick(item.name)}
                      className="text-textMedium text-2xl inline-flex items-center justify-center hover:font-bold"
                    >
                      {item.name}{" "}
                      <ArrowSecondIcon className="scale-50 -rotate-90" />
                    </button>
                  )}

                  {hasSubmenus && activeMenu === item.name && (
                    <ul className="transition-all pt-2">
                      {item.submenus.map((submenu) => (
                        <li key={submenu.name} className="p-2">
                          <Link
                            href={submenu.src}
                            className={`text-textMedium text-2xl hover:font-bold ${
                              submenu.src === pathname ? "activeMobile" : ""
                            }`}
                            onClick={() => setMobileMenuShown(false)} // Zamknięcie mobilnego menu po kliknięciu subelementu
                          >
                            {submenu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-2 justify-end items-center text-textLight flex-1">
            <ul className="flex gap-7 items-center justify-center pt-7">
              {socialsLinks.map((social) => (
                <li
                  key={social.name}
                  className="p-2 flex items-center justify-center cursor-pointer"
                >
                  {socialsIcons[social.name]}
                </li>
              ))}
            </ul>
            <p>© Copyright Industrio 2021-22. All right reserved.</p>
          </div>
        </div>
      )}
    </>
  );
};
