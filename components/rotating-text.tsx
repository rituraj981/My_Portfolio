"use client"

import { useEffect, useState } from "react"

const professions = [
  "Full Stack Developer",
  "Backend Engineer",
  "Data Analyst",
]

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentProfession = professions[currentIndex]
    const typingSpeed = isDeleting ? 30 : 120
    const delay = isDeleting ? 0 : 180

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing forward
          if (displayText.length < currentProfession.length) {
            setDisplayText(currentProfession.slice(0, displayText.length + 1))
          } else {
            // Finished typing, start deleting after delay
            setIsDeleting(true)
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(currentProfession.slice(0, displayText.length - 1))
          } else {
            // Finished deleting, move to next profession
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % professions.length)
          }
        }
      },
      isDeleting || displayText === currentProfession ? typingSpeed : delay,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex])

  return (
    <div className="min-h-12 flex items-center">
      <span className="text-accent text-lg md:text-xl font-semibold">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  )
}
