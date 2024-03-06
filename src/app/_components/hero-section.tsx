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

export default function Example ()
{
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState( false );

  return (
    <>
      <div className="flex   flex-col h-[626px] space-between justify-center  items-center my-4 pt-8">
        <div className="flex flex-col  items-center justify-center gap-6 py-6">
          <h2 className="h2 text-center">Heading One</h2>
          <p className="btn-font  text-center ">blable aoshd paiojs pljalg knaa asdoifnalknes lran asf</p>
        </div>
      </div>
    </>
  );
}
