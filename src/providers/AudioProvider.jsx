import { useEffect, useRef } from "react"
import { AudioContext } from "./AudioContext"
import { useInvitationStore } from "../store/invitationStore"

export function AudioProvider({ children }) {
  const audioRef = useRef(null)
  const fadeRef = useRef(null)

  const opened = useInvitationStore(s => s.opened)
  const musicEnabled = useInvitationStore(s => s.musicEnabled)

  if (!audioRef.current) {
    audioRef.current = new Audio("/audio/bg-music.mp3")
    audioRef.current.loop = true
    audioRef.current.preload = "auto"
    audioRef.current.volume = 0
  }

  const stopFade = () => {
    if (fadeRef.current) {
      cancelAnimationFrame(fadeRef.current)
      fadeRef.current = null
    }
  }

  const fadeIn = () => {
    stopFade()
    const audio = audioRef.current
    audio.play().catch(() => {})
    const step = () => {
      audio.volume = Math.min(audio.volume + 0.04, 1)
      if (audio.volume < 1) {
        fadeRef.current = requestAnimationFrame(step)
      }
    }
    step()
  }

  const fadeOut = () => {
    stopFade()
    const audio = audioRef.current
    const step = () => {
      audio.volume = Math.max(audio.volume - 0.04, 0)
      if (audio.volume > 0) {
        fadeRef.current = requestAnimationFrame(step)
      } else {
        audio.pause()
      }
    }
    step()
  }

  useEffect(() => {
    if (!opened) return
    musicEnabled ? fadeIn() : fadeOut()
  }, [opened, musicEnabled])

  return (
    <AudioContext.Provider
      value={{
        audioRef,
        fadeIn,
        fadeOut
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}
