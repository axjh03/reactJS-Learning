import React from "react";
import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export const TheLogo = () => {
  return <img src="/avatar.svg" alt="Logo" width="36" height="36" />;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  let [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    "Menu",
    "Contact",
    "Home",
    "Photos",
    "Locations",
    "Contact Aalok",
    "Logout",
    "Help",
  ];

  // Created a function to handle navbar item clicks
  const handleItemClick = (item) => {
    setActiveItem(item); // Update active item
    setIsMenuOpen(false); // Close mobile menu
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand style={{ gap: "10px" }}>
          <TheLogo />
          <p className="font-bold text-inherit">Kalinchowk</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {menuItems.slice(0, 5).map((item) => (
          <NavbarItem key={item} isActive={activeItem === item}>
            <Link
              color={activeItem === item ? "primary" : "foreground"}
              href="#"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}{" "}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
