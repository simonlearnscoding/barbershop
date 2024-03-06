import { PinContainer } from "@/components/animated-pin";
import GetInTouch from "./../_components/get-in-touch";
  export function AnimatedPin() {
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


