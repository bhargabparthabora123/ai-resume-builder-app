import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
    default:
  "bg-violet-600 text-white shadow-xs hover:bg-violet-400",

destructive:
  "bg-red-600 text-white shadow-xs hover:bg-red-700 focus-visible:ring-red-300 dark:focus-visible:ring-red-500 dark:bg-red-500",

outline:
  "border bg-white shadow-xs hover:bg-violet-600 hover:text-white ",
  outline2:"border border-gray-800 bg-white text-gray-900 shadow-xs hover:bg-gray-800 hover:text-white",

secondary:
  "bg-white text-gray-900 shadow-xs hover:bg-gray-300",

ghost:
  "hover:bg-gray-100 hover:text-gray-900 ",

        link: "text-primary underline-offset-4  hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
