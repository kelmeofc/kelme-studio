"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gradientButtonVariants = cva(
  [
    "gradient-button",
    "inline-flex items-center justify-center",
    "rounded-full min-w-[132px] px-9 py-4", // Made all buttons rounded-full as requested
    "text-base leading-[19px] font-[500] text-white",
    "font-satoshi font-bold uppercase", // Using Satoshi font and uppercase for brand consistency
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "drop-shadow-sm", // Adding text shadow for better readability on gradient backgrounds
  ],
  {
    variants: {
      variant: {
        default: "",
        secondary: "gradient-button-secondary",
      },
      size: {
        default: "px-9 py-4",
        sm: "px-6 py-3 text-sm",
        lg: "px-12 py-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(gradientButtonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }
