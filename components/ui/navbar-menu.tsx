"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer font-medium"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {/* {active === item && children != null && ( */}
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="navbar-background backdrop-blur-sm rounded-2xl overflow-hidden border border-white dark:border-gray-700 shadow-xl"
              >
                {children != null ?
                  <motion.div
                    layout // layout ensures smooth animation
                    className={`w-max h-full p-4`}
                  >
                    {children}
                  </motion.div>
                  : ''}
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const { resolvedTheme } = useTheme()
  const [isTop, setIsTop] = useState(true);
  const [logoUrl, setLogoUrl] = useState<string>('/logo.png');
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLogoUrl(resolvedTheme === 'light' ? '/logo.png' : '/logo_white.png');
  }, [resolvedTheme]);

  const handleMouseLeave = () => {
    setActive(null);
    if (window.scrollY < 50) setIsTop(true);
  }
  return (
    <nav
      onMouseEnter={() => setIsTop(false)}
      onMouseLeave={handleMouseLeave} // resets the state
      // className={`relative rounded-lg shadow-input flex justify-center space-x-6 px-8 py-4 border border-white dark:border-gray-700 shadow-md default-background transition-all ${isTop ? 'opacity-75 duration-500' : ''}`}
      className={`relative rounded-lg shadow-input flex justify-center space-x-6 px-8 py-4 border border-white dark:border-gray-700 shadow-md navbar-background transition-all ${isTop ? 'duration-500' : ''}`}
    >
      <div className="flex justify-between w-full items-center">
        <Link href="/">
          <Image
            className=""
            width={150}
            height={40}
            // loading="eager"
            alt="logo"
            // src="/logo.png"
            src={logoUrl}
          />
        </Link>
        {children}
      </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1">
          {title}
        </h4>
        <p className="text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className=""
    >
      {children}
    </Link>
  );
};
