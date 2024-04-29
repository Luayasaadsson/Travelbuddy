import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "h-9 w-9 shrink-0 rounded-md border border-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      color: {
        primary: "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        destructive: "data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground",
        neutral: "data-[state=checked]:bg-neutral data-[state=checked]:text-neutral-foreground",
      },
      shape: {
        circle: "border-none",
        square: "rounded-sm",
      },
    },
    defaultVariants: {
      color: "primary",
      shape: "circle",
    },
  }
);

export interface CheckboxProps
    extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
        VariantProps<typeof checkboxVariants> {
    color?: 'primary' | 'destructive' | 'neutral';
    shape?: 'circle' | 'square';
    children?: React.ReactNode;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, children, color, shape, ...props }, ref) => (
  <label className={cn("flex items-center justify-between flex-row-reverse", className)}> 
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(checkboxVariants({ color, shape }), "flex-none")}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="flex items-center justify-center text-current"
      >
        <Check className="h-5 w-5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {children && <span className="select-none cursor-pointer">{children}</span>} 
  </label>
));

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
