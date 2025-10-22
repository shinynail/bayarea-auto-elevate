import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-wide ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 hover:shadow-2xl active:scale-[0.97] rounded-full backdrop-blur-sm duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg rounded-full active:scale-[0.97] duration-300",
        outline: "border-2 border-border/40 bg-background/40 hover:bg-secondary/60 hover:border-primary/50 backdrop-blur-md active:scale-[0.97] rounded-full duration-300 shadow-lg",
        secondary: "bg-secondary/80 text-secondary-foreground hover:bg-secondary backdrop-blur-sm active:scale-[0.97] rounded-full duration-300 shadow-lg",
        ghost: "hover:bg-secondary/60 active:scale-[0.97] rounded-full duration-300 backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline duration-300",
        hero: "bg-gradient-to-r from-primary via-primary-glow to-accent text-primary-foreground hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.97] rounded-full backdrop-blur-sm duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        gradient: "bg-gradient-to-br from-primary via-primary-glow to-accent text-primary-foreground hover:shadow-2xl hover:shadow-accent/30 active:scale-[0.97] rounded-full backdrop-blur-sm duration-300 shadow-xl",
      },
      size: {
        default: "h-11 px-8 py-2.5",
        sm: "h-9 rounded-full px-5 text-xs",
        lg: "h-14 rounded-full px-10 text-base",
        icon: "h-11 w-11 rounded-full",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
