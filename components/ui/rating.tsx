import { cn } from "@/lib/utils"
import { Star } from 'lucide-react'

interface RatingProps {
  value: number
  outOf?: number
  showText?: boolean
  className?: string
}

export function Rating({ 
  value, 
  outOf = 5, 
  showText = true,
  className 
}: RatingProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex">
        {[...Array(outOf)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-5 w-5",
              i < Math.floor(value) 
                ? "fill-yellow-400 text-yellow-400" 
                : "fill-gray-200 text-gray-200"
            )}
          />
        ))}
      </div>
      {showText && (
        <span className="text-sm text-gray-600">
          {value} out of {outOf}
        </span>
      )}
    </div>
  )
}

