import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

interface MainMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'light' | 'dark'
}

export function MainMenuButton({ 
  className, 
  variant = 'primary',
  children, 
  ...props 
}: MainMenuButtonProps) {
  return (
    <Button
      className={cn(
        "flex items-center gap-2 rounded-full font-medium",
        {
          'bg-[#E85D2A] text-white hover:bg-[#D54D1A]': variant === 'primary',
          'bg-white text-[#333333] hover:bg-gray-50': variant === 'light',
          'bg-[#333333] text-white hover:bg-[#222222]': variant === 'dark',
        },
        className
      )}
      {...props}
    >
      <Menu className="h-4 w-4" />
      {children || 'MAIN MENU BUTTON'}
    </Button>
  )
}