import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="justify-between flex items-center w-full py-3 px-4 bg-primary-700 text-white">
        <div className="flex items-center gap-4 md:gap-6">
          {/* logo */}
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-300"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Real Estate"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-xl font-bold">
                REAL
                <span className="text-secondary-500 font-light hover:!text-primary-300">
                  ESTATE
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* tagline */}
        <p className="text-primary-200 hidden md:block">
          Live availability status
        </p>

        {/* login auth */}
        <div className="flex items-center gap-5">
          <Link href="/signin">
            <Button
              className="text-white border-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg"
              variant="outline"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              className="text-white bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg"
              variant="secondary"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
