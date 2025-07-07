import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-background text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-hover",
        outline: "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-card",
        ghost: "text-primary hover:bg-primary/5 hover:border-b-2 hover:border-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-muted border-2 border-transparent hover:border-border",
        minimal: "bg-background text-foreground border-2 border-border hover:border-primary hover:shadow-card",
        link: "text-primary underline-offset-4 hover:underline border-b border-transparent hover:border-primary",
      },
      size: {
        default: "h-12 px-8 py-3 text-sm",
        sm: "h-10 px-6 text-sm",
        lg: "h-14 px-12 text-base",
        xl: "h-16 px-16 text-lg tracking-wide",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
