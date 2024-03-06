import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { Button } from "@/components/ui/button";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className=" z-20 grid h-screen grid-cols-1 grid-rows-12 gap-x-4 gap-y-4 overflow-hidden     px-8  lg:grid-cols-12">
        <div className="row-span-13 relative right-8 z-[-10] w-screen opacity-30 ">
          <div className="overlay bg-red-300 "> </div>
          <div className="image-container opacity-60   ">
            <Image
              layout="fill"
              className="image"
              src="/barber-4.jpg"
              alt="barber"
            />
          </div>
        </div>
        <div className="stone-800 container  row-start-2 mx-0 w-screen  max-w-2xl  p-0 lg:col-span-5  lg:col-start-2 lg:row-start-3 ">
          <div className="flex flex-col justify-start  ">
            <h1 className="h1  w-10/12 text-start  text-stone-100">
              Barber Name
            </h1>
          </div>
          <p className=" w-11/12 text-xl justify-self-start  pr-16 pt-6 text-start">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui asd
            barber mediterrr prodotto marco do not push
          </p>
        </div>
        <div className="relative  row-start-11 lg:col-span-3 lg:col-start-2 xl:col-span-2   xl:col-start-2">
          <div className="absolute inset-0 flex  min-w-fit cursor-pointer items-center justify-center border-2 border-white px-4 py-3 font-bold transition-colors hover:border-stone-400 hover:bg-stone-600">
            Prendi un appuntamento
          </div>
        </div>
        <div className="col-span-2 row-span-4 row-start-6 flex  flex-col items-center justify-start pt-6 opacity-60  md:col-span-3  lg:col-start-9 lg:row-start-8 lg:border-2 lg:border-white lg:opacity-90 xl:col-span-2 xl:col-start-10  ">
          <p className="mb-2 font-bold ">Opening hours:</p>
          <p className="pb-1">Mo: 10:00 - 22:00</p>
          <p className="pb-1">Mo: 10:00 - 22:00</p>
          <p className="pb-1">Mo: 10:00 - 22:00</p>
          <p className="pb-1">Mo: 10:00 - 22:00</p>
          <p className="pb-1">Mo: 10:00 - 22:00</p>
          <p className="pb-1">Mo: 10:00 - 22:00</p>
          <p className="pb-1">Mo: 10:00 - 22:00</p>
        </div>
      </div>
    </>
  );
}
