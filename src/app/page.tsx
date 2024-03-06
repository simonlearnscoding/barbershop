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
import { AnimatedPin } from "./_components/AnimatedPin";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default function Home() {
  const user = useUser();
  console.log(user);
  return (
    <div className="dark px-8">
      <HeroSection />
<button className="btn absolute  bottom-6 left-1/2 transform -translate-x-1/2 w-10/12  py-5 btn-font ">
 Book Appointment
        
       </button>
    </div>
  );
}


      // <AboutUs />
      // <HoverEffect items={projects} columns={6} />
      // <OurTeam />
      // <AnimatedPin />


/* 
 * User login logic
 * */
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
