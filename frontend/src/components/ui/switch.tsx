import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"
import { useTheme } from "@/Theme/ThemeContext"

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
    const { theme, toggleTheme } = useTheme()
    const isDarkMode = theme === "dark"

    const handleToggle = () => {
        toggleTheme()
    }

    return (
        <div
            className={cn(
                "inline-flex h-11 w-24 items-center gap-2 rounded-full border border-secondary",
                {
                    "justify-end": isDarkMode,
                    "justify-start": !isDarkMode,
                    "bg-neutral-900 ": isDarkMode,
                    "bg-white ": !isDarkMode,
                },
                className
            )}
            onClick={handleToggle}
            role="button" // Add role="button" to make it accessible
            tabIndex={0} // Add tabIndex={0} to make it focusable
            aria-label="Toggle dark mode"
        >
            {isDarkMode ? (
                <SwitchPrimitives.Root
                    className={cn("h-8 w-8 rounded-full", {
                        "bg-emerald-300": isDarkMode,
                        "bg-neutral-200": !isDarkMode,
                    })}
                    style={{ transform: "translateX(-0%)" }}
                    {...props}
                    ref={ref}
                    aria-label="Dark mode switch"
                >
                    <SwitchPrimitives.Thumb
                        className={cn(
                            "pointer-events-none block h-full w-full rounded-full bg-primary shadow-lg ring-0",
                        )}
                    />
                </SwitchPrimitives.Root>
            ) : null}
            <div
                className={cn(
                    "w-12 text-center text-xs font-bold leading-tight",
                    {
                        "text-black": !isDarkMode,
                        "text-secondary": isDarkMode,
                    },
                )}
            >
                {isDarkMode ? "Dark" : "Light"}
            </div>
            {!isDarkMode ? (
                <SwitchPrimitives.Root
                    className={cn("h-9 w-9 rounded-full", {
                        "bg-neutral-200": !isDarkMode,
                        "bg-emerald-300": isDarkMode,
                    })}
                    style={{ transform: "translateX(0%)" }}
                    {...props}
                    ref={ref}
                    onClick={handleToggle}
                >
                    <SwitchPrimitives.Thumb
                        className={cn(
                            "pointer-events-none block h-full w-full rounded-full bg-primary shadow-lg ring-0",
                        )}
                    />
                </SwitchPrimitives.Root>
            ) : null}
        </div>
    )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

//--------------------------------

/* 
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"
import { useTheme } from "@/Theme/ThemeContext"

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
    const { theme, toggleTheme } = useTheme()
    const isDarkMode = theme === "dark"

    const handleToggle = () => {
        toggleTheme()
    }

    return (
        <button
            className={cn(
                "inline-flex h-10 w-20 items-center gap-1 rounded-full",
                {
                    "justify-end": isDarkMode,
                    "justify-start": !isDarkMode,
                    "bg-neutral-900 ": !isDarkMode,
                    "bg-white ": isDarkMode,
                },
            )}
            onClick={handleToggle}
        >
            {isDarkMode ? (
                <SwitchPrimitives.Root
                    className={cn("h-8 w-8 rounded-full", {
                        "bg-emerald-300": isDarkMode,
                        "bg-neutral-200": !isDarkMode,
                    })}
                    style={{ transform: "translateX(-0%)" }}
                    {...props}
                    ref={ref}
                >
                    <SwitchPrimitives.Thumb
                        className={cn(
                            "pointer-events-none block h-full w-full rounded-full bg-primary shadow-lg ring-0",
                        )}
                    />
                </SwitchPrimitives.Root>
            ) : null}
            <div
                className={cn(
                    "w-10 text-center text-xs font-bold leading-tight",
                    {
                        "text-black": isDarkMode,
                        "text-white": !isDarkMode,
                    },
                )}
            >
                {isDarkMode ? "Light" : "Dark"}
            </div>
            {!isDarkMode ? (
                <SwitchPrimitives.Root
                    className={cn("h-8 w-8 rounded-full", {
                        "bg-neutral-200": !isDarkMode,
                        "bg-emerald-300": isDarkMode,
                    })}
                    style={{ transform: "translateX(0%)" }}
                    {...props}
                    ref={ref}
                    onClick={handleToggle}
                >
                    <SwitchPrimitives.Thumb
                        className={cn(
                            "pointer-events-none block h-full w-full rounded-full bg-primary shadow-lg ring-0",
                        )}
                    />
                </SwitchPrimitives.Root>
            ) : null}
        </button>
    )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
*/

//--------------------------------

/* import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"
import { useTheme } from "@/Theme/ThemeContext"

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
    const { theme, toggleTheme } = useTheme()
    const isDarkMode = theme === "dark"

    return (
        <SwitchPrimitives.Root
            className={cn(
                "peer inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
                className,
                {
                    "bg-primary": isDarkMode,
                    "bg-input": !isDarkMode,
                }
            )}
            onClick={toggleTheme}
            {...props}
            ref={ref}
        >
            
            <SwitchPrimitives.Thumb
                className={cn(
                    "pointer-events-none block h-7 w-7 rounded-full bg-black shadow-lg ring-0 transition-transform",
                    {
                        "translate-x-8": isDarkMode,
                        "translate-x-0": !isDarkMode,
                    }
                )}
            />
            
        </SwitchPrimitives.Root>
    )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch } */
