import React from "react";
import { cn } from "./../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function HoverEffect({
  items,
  className,
  columns,
}: {
  items: {
    title: string;
    description: string;
  }[];
  className?: string;
  columns: number;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleMouseEnter = (idx: number) => {
    if (clickedIndex === null) {
      setHoveredIndex(idx);
    }
  };

  const handleMouseLeave = () => {
    if (clickedIndex === null) {
      setHoveredIndex(null);
    }
  };

  const handleClick = (idx: number) => {
    setClickedIndex(idx);
    setHoveredIndex(null);
  };

  return (
    <div
      className={cn(
        `grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-${columns}`,
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(idx)}
        >
          <AnimatePresence>
            {(hoveredIndex === idx || clickedIndex === idx) && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200 dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black p-4 group-hover:border-slate-700 dark:border-white/[0.2]",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("mt-4 font-bold tracking-wide text-zinc-100", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-sm leading-relaxed tracking-wide text-zinc-400",
        className,
      )}
    >
      {children}
    </p>
  );
};
