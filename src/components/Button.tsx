import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-regular ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-stone-700 to-stone-900 border border-stone-900 text-stone-50 hover:from-stone-900 hover:to-stone-900",
        destructive: "bg-red-600 text-red-950 hover:bg-red-700",
        outline: "text-stone-1200 border bg-transparent hover:bg-stone-100",
        secondary:
          "bg-primary-300-light dark:bg-primary-300-dark border border-color-primary-600-light dark:border-color-primary-600-dark text-primary-1200-light dark:text-primary-1200-dark hover:bg-primary-400-light hover:bg-primary-400-dark",
        ghost: "text-stone-600 hover:bg-stone-200/50 hover:text-stone-800",
        link: "text-stone-700 underline-offset-4 hover:underline hover:text-stone-950",
      },
      size: {
        default: "h-8 px-3",
        sm: "h-6 rounded-md px-2",
        lg: "h-9 rounded-md px-4",
        icon: "min-h-8 min-w-8 max-h-8 max-w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
