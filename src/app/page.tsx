"use client";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import HeroSection from "./_components/hero-section";
import AboutUs from "./_components/about-us";
import { CreatePost } from "@/app/_components/create-post";
import { api } from "@/trpc/server";
import { useUser } from "@clerk/clerk-react";
import { HoverEffect } from "@/components/hover-cards";
import { projects, projects2 } from "./data";
import OurTeam from "./_components/our-team";
import { PinContainer } from "@/components/animated-pin";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import GetInTouch from "./_components/get-in-touch";
export function AnimatedPinDemo() {
  return (
    <div className="flex w-full flex-col lg:flex-row ">
      <div className=" flex-1   ">
        <GetInTouch />{" "}
      </div>
      <div className="flex  w-full flex-1  items-center justify-center  ">
        <PinContainer
          title="/ui.aceternity.com"
          href="https://www.google.com/maps/dir/Current+Location/1600+Amphitheatre+Parkway,+Mountain+View,+CA"
        >
          <div className="flex h-[20rem] w-[20rem] basis-full flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 ">
            <div className=" flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
export default function Home() {
  const user = useUser();
  console.log(user);
  return (
    <div className="dark">
      <HeroSection />
      <AboutUs />
      <HoverEffect items={projects} columns={6} />
      <OurTeam />
      <AnimatedPinDemo />
    </div>
  );
}

// { !user.isSignedIn && <SignInButton /> }
//  { !!user.isSignedIn && <SignOutButton /> }
//
// <div>
//   <SignedOut>
//     <p>This content is public. Only signed out users can see this.</p>
//   </SignedOut>
//   <SignedIn>
//     <p>This content is private. Only signed in users can see this.</p>
//   </SignedIn>
// </div>
// <div className="ml-auto grid self-end    justify-self-center p-8   ">
// </div>
