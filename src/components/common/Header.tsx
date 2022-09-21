import React from "react";
import { styled } from "@stitches/local";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { violet } from "@radix-ui/colors";
import Logo from "./Logo";
import Link from "next/link";

const NavigationMenu = styled(NavigationMenuPrimitive.Root, {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: "$nav",
  px: 48,
  py: 16,
  height: 84,
});

const NavigationMenuList = styled(NavigationMenuPrimitive.List, {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  padding: 4,
  borderRadius: 6,
  listStyle: "none",
  gap: "1.5rem",
});

const NavigationMenuLink = styled(NavigationMenuPrimitive.Link, {
  display: "block",
  textDecoration: "none",
  fontSize: "$link",
  letterSpacing: "$wide",
  color: "$textPrimary",
  lineHeight: 1,
  padding: "8px 12px",
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  borderRadius: 4,
  transition: "background-color 150ms ease-in-out",
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px ${violet.violet7}` },
  "&:hover": { backgroundColor: violet.violet3 },
});

const ContactUsLink = styled(NavigationMenuLink, {
  border: "1.5px solid $textSecondary",
  borderRadius: "1.25rem",
  px: 20,
  transition: "all 200ms ease-in-out",
  "&:hover": {
    backgroundColor: "$textSecondary",
    color: "White",
  },
});

// Exports
const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <Logo />

      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" passHref>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#about" passHref>
            <NavigationMenuLink>About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#portfolio" passHref>
            <NavigationMenuLink>Portfolio</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#pricing" passHref>
            <NavigationMenuLink>Pricing</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <Link href="/contact" passHref>
        <ContactUsLink>Contact us</ContactUsLink>
      </Link>
    </NavigationMenu>
  );
};

export default NavigationMenuDemo;
