import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

interface ButtonCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'yellow'
  showArrow?: boolean
}

export function ButtonCTA({ 
  className, 
  variant = 'primary', 
  children, 
  showArrow = true,
  ...props 
}: ButtonCTAProps) {
  return (
    <Button
      className={cn(
        "flex items-center gap-2 rounded-full font-medium",
        {
          'bg-[#E85D2A] text-white hover:bg-[#D54D1A]': variant === 'primary',
          'bg-white text-[#333333] border border-[#E5E5E5] hover:bg-gray-50': variant === 'secondary',
          'bg-[#333333] text-white hover:bg-[#222222]': variant === 'dark',
          'bg-[#FFE169] text-[#333333] hover:bg-[#FFD149]': variant === 'yellow',
        },
        className
      )}
      {...props}
    >
      {children}
      {showArrow && <ChevronRight className="h-4 w-4" />}
    </Button>
  )
}