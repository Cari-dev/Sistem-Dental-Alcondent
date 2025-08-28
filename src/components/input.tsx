import * as React from "react"

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={
          "flex h-12 w-full rounded-md border bg-transparent px-3  text-base text-gray-400 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-secondary "
        }
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"


