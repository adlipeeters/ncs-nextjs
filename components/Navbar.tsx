"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi"
import ThemeSwitcher from "./ThemeSwitcher";
import { cn } from "@/lib/utils";

export function Navbar2() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
            {/* <p className="text-black dark:text-white">
                The Navbar will show on top of the page
            </p> */}
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 px-4 hidden lg:block", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Acasa">
                    {/* <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/branding">Branding</HoveredLink>
                    </div> */}
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Caracteristici">
                    <div className=" text-sm grid grid-cols-1 lg:grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Algochurn"
                            href="https://algochurn.com"
                            src="/hero-dashboard-light.webp"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Tailwind Master Kit"
                            href="https://tailwindmasterkit.com"
                            src="/hero-dashboard-light.webp"
                            description="Production ready Tailwind css components for your next project"
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Prețuri"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Pricing">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="De ce leelo ?"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Despre noi"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
                <ThemeSwitcher />
            </Menu>

        </div>
    );
}
