import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../../components/ui/navigation-menu";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", href: "#" },
    { name: "People", href: "#" },
    { name: "Tasks", href: "#" },
    { name: "Settings", href: "#" },
  ];

  return (
    <nav className="w-full flex justify-between items-center py-2 px-6 bg-white border-b border-gray-200 shadow-sm">
      <NavigationMenu className="px-4 mt-5">
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`px-3 py-2 rounded-tr-xl rounded-tl-xl transition-colors
                ${
                  active === item.name
                    ? "bg-[#EBEFFA] border-b-2 border-b-[#4069D0] text-[#4069D0]"
                    : "text-[#878787] hover:bg-[#EBEFFA] hover:text-[#4069D0] hover:border-b-2 hover:border-b-[#4069D0]"
                }`}
              >
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
