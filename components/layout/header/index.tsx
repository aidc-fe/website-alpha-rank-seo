"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../shadcn/navigation-menu";
import { Button } from "../../shadcn/button";
import {
  ALPHA_RANK_LISTING_URL,
  BLOG_PRODUCT_URL,
  Logo_Icon,
} from "../../../constants/home";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function NavigationMenuDemo() {
  const pathName = usePathname();

  return (
    <header className={"z-50 sticky flex flex-col items-center top-[-40px]"}>
      <div
        className="p-2 w-full text-center text-sm border-primary items-start"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #0D0C18 0%, #31296E 38%, #462961 61%, #100E1C 100%)",
        }}
      >
        🎉{"  "}
        <span className="opacity-50">
          Exclusive June Offer: Enjoy a FREE Trial & Unlock 30% OFF Your
          Purchase
        </span>
        <Button
          size={"sm"}
          variant={"outline"}
          className="bg-transparent font-bold opacity-50 border-white h-6 ml-6"
        >
          <Link
            href={BLOG_PRODUCT_URL}
            target="_blank"
            className="w-full h-full flex justify-center items-center"
          >
            Seize Your Deal Today !
          </Link>
        </Button>
      </div>

      <div
        className={cn("flex items-center py-4 px-8 backdrop-blur-md w-full", {
          "bg-black": pathName !== "/",
        })}
      >
        <Link href={"/"} className={"mr-14"}>
          {Logo_Icon}
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/tools/site-audit" title="Site Audit">
                    site audit
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blogs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}

            {/* <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Partner
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className={"flex gap-4 items-center ml-auto"}>
          <Button
            className={"text-accent-foreground px-0 font-semibold"}
            variant={"link"}
          >
            <Link href={"/contact"}>Book a Demo</Link>
          </Button>
          <Button
            className="font-semibold text-sm bg-transparent border-primary"
            size={"lg"}
            variant={"outline"}
          >
            <Link
              className="w-full h-full flex justify-center items-center"
              target="_blank"
              href={BLOG_PRODUCT_URL}
            >
              Log in
            </Link>
          </Button>
          <Button size={"lg"} variant={"colorful"}>
            <Link
              className="w-full"
              target="_blank"
              href={ALPHA_RANK_LISTING_URL}
            >
              Get Started
            </Link>
          </Button>
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
