import { cn } from "../../lib/utils"
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

interface SocialIconsProps {
  className?: string
  layout?: 'row' | 'grid'
}

export function SocialIcons({ className, layout = 'row' }: SocialIconsProps) {
  const icons = [
    { Icon: Facebook, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Youtube, href: '#' },
  ]

  return (
    <div className={cn(
      "flex gap-4",
      {
        'flex-row': layout === 'row',
        'grid grid-cols-4 gap-4': layout === 'grid'
      },
      className
    )}>
      {icons.map(({ Icon, href }, index) => (
        <a
          key={index}
          href={href}
          className="text-gray-600 hover:text-[#E85D2A] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  )
}

