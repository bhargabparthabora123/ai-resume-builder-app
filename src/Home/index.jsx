// import React from 'react'
// import { UserButton } from '@clerk/clerk-react'
// import Header from '@/components/ui/custom/Header'

// function Home() {
//   return (
//     <div>
     
//       <Header/> 
//     Landing screen

//     </div>
//   )
// }

// export default Home
// import React from 'react'
// import Header from '@/components/ui/custom/Header'
// import { motion } from 'framer-motion'

// function Home() {
//   return (
//     <div>
//       <Header />

//       {/* Landing screen content with animation */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className="flex flex-col items-center justify-center mt-20 px-4"
//       >
//         <motion.h1
//           className="text-3xl font-bold text-violet-600"
//           initial={{ scale: 0.95 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.2, duration: 0.4 }}
//         >
//           Welcome to ResumeBuilder
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-violet-600 text-center max-w-xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//         >
//           Craft your professional resume effortlessly. Get started by signing in and accessing your dashboard to begin building a standout resume today.
//         </motion.p>
//       </motion.div>
//     </div>
//   )
// }

// export default Home

// import React, { useEffect, useRef, useState } from 'react'
// import Header from '@/components/ui/custom/Header'
// import { motion } from 'framer-motion'

// function Home() {
//   const audioRef = useRef(null)
//   const [isPlaying, setIsPlaying] = useState(true)

//   useEffect(() => {
//     const audio = audioRef.current
//     if (audio) {
//       audio.volume = 0.5
//       audio.loop = true
//       audio.play().catch((e) => {
//         console.warn('Autoplay blocked:', e)
//       })
//     }

//     const handleClick = (e) => {
//       const isInsideHeader = e.target.closest('header')
//       if (!isInsideHeader) {
//         if (audio.paused) {
//           audio.play()
//           setIsPlaying(true)
//         } else {
//           audio.pause()
//           setIsPlaying(false)
//         }
//       }
//     }

//     document.addEventListener('click', handleClick)

//     return () => {
//       document.removeEventListener('click', handleClick)
//     }
//   }, [])

//   return (
//     <div>
//       {/* Audio element */}
//       <audio ref={audioRef} src="music.mp3" />

//       {/* Header (excluded from click toggle) */}
//       <Header />

//       {/* Landing screen content with animation */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className="flex flex-col items-center justify-center mt-20 px-4"
//       >
//         <motion.h1
//           className="text-3xl font-bold text-violet-600"
//           initial={{ scale: 0.95 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.2, duration: 0.4 }}
//         >
//           Welcome to ResumeBuilder
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-violet-600 text-center max-w-xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//         >
//           Craft your professional resume effortlessly. Get started by signing in and accessing your dashboard to begin building a standout resume today.
//         </motion.p>

//         {/* Optional: visual feedback for music status */}
//         <p className="mt-4 text-sm text-gray-500">
//           Music is {isPlaying ? 'playing 🎵' : 'paused 🔇'}
//         </p>
//       </motion.div>
//     </div>
//   )
// }

// export default Home
// import React, { useEffect, useRef, useState } from 'react'
// import Header from '@/components/ui/custom/Header'
// import { motion } from 'framer-motion'
// import Typed from 'typed.js'

// function Home() {
//   const audioRef = useRef(null)
//   const [isPlaying, setIsPlaying] = useState(true)
//   const [trackIndex, setTrackIndex] = useState(0)
//   const typingEl = useRef(null)

//   const musicList = [
//     'music1.mp3',
//     'music2.mp3',
//     'music3.mp3'
//   ]

//   // Setup music player
//   useEffect(() => {
//     const audio = audioRef.current
//     if (!audio) return

//     audio.src = musicList[trackIndex]
//     audio.volume = 0.5
//     audio.loop = false
//     audio.play().catch((e) => console.warn('Autoplay blocked:', e))

//     const handleEnded = () => {
//       const nextTrack = (trackIndex + 1) % musicList.length
//       setTrackIndex(nextTrack)
//     }

//     audio.addEventListener('ended', handleEnded)

//     const handleClick = (e) => {
//       const isInsideHeader = e.target.closest('header')
//       if (!isInsideHeader) {
//         if (audio.paused) {
//           audio.play()
//           setIsPlaying(true)
//         } else {
//           audio.pause()
//           setIsPlaying(false)
//         }
//       }
//     }

//     document.addEventListener('click', handleClick)
//     return () => {
//       audio.removeEventListener('ended', handleEnded)
//       document.removeEventListener('click', handleClick)
//     }
//   }, [trackIndex])

//   // Setup typing effect
//   useEffect(() => {
//     const options = {
//       strings: [
//         `ResumeBuilder uses the power of artificial intelligence to help you stand out in the job market. Our system intelligently analyzes the job titles and roles you input and generates polished, professional summaries tailored to industry standards. Whether you're a software engineer, digital marketer, or data analyst, the platform suggests content that highlights your strengths. These AI-crafted summaries align with recruiter expectations and ATS filters, giving you a competitive edge in landing your next opportunity.`,
//       ],
//       typeSpeed: 20,
//       showCursor: true,
//     }

//     const typed = new Typed(typingEl.current, options)
//     return () => {
//       typed.destroy()
//     }
//   }, [])

//   return (
//     <div>
//       {/* 🎵 Music */}
//       <audio ref={audioRef} autoPlay />

//       {/* Header */}
//       <Header />

//       {/* Landing Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: 'easeOut' }}
//         className="flex flex-col items-center justify-center mt-20 px-4"
//       >
//         {/* Title */}
//         <motion.h1
//           className="text-3xl font-bold text-violet-600"
//           initial={{ scale: 0.95 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.4 }}
//         >
//           Welcome to ResumeBuilder
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           className="mt-4 text-violet-600 text-center max-w-xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.7 }}
//         >
//           Craft your professional resume effortlessly. Get started by signing in and accessing your dashboard to begin building a standout resume today.
//         </motion.p>

//         {/* Music status */}
//         <p className="mt-4 text-sm text-gray-500">
//           Music is {isPlaying ? 'playing 🎵' : 'paused 🔇'} — Track {trackIndex + 1} of {musicList.length}
//         </p>

//         {/* Top Features */}
//         <motion.ul
//           className="mt-8 space-y-3 text-left max-w-2xl text-base text-gray-800"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.7 }}
//         >
//           <li className="bg-violet-100 p-4 rounded-xl shadow">
//             <span className="font-bold text-violet-700">🔍 AI-Powered Summary Generator:</span>{' '}
//             Automatically crafts powerful job summaries tailored to your position title using smart context-aware AI.
//           </li>
//           <li className="bg-violet-100 p-4 rounded-xl shadow">
//             <span className="font-bold text-violet-700">📝 Smart Resume Editing:</span>{' '}
//             Real-time field editing, WYSIWYG input, and section-wise organization let you build resumes faster and better.
//           </li>
//         </motion.ul>

//         {/* Typing animation paragraph */}
//         <motion.div
//           className="mt-10 max-w-4xl text-justify text-gray-700 text-sm leading-7 px-4 min-h-[180px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.9, duration: 1.2 }}
//         >
//           <span ref={typingEl}></span>
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }

// export default Home
// import React, { useEffect, useRef, useState } from 'react'
// import Header from '@/components/ui/custom/Header'
// import { motion } from 'framer-motion'
// import Typed from 'typed.js'

// function Home() {
//   const audioRef = useRef(null)
//   const [isPlaying, setIsPlaying] = useState(true)
//   const [trackIndex, setTrackIndex] = useState(0)
//   const typingEl = useRef(null)

//   const musicList = [
//     'music1.mp3',
//     'music2.mp3',
//     'music3.mp3'
//   ]

//   // Setup music player + keypress for switching tracks
//   useEffect(() => {
//     const audio = audioRef.current
//     if (!audio) return

//     audio.src = musicList[trackIndex]
//     audio.volume = 0.5
//     audio.loop = false
//     audio.play().catch((e) => console.warn('Autoplay blocked:', e))

//     const handleEnded = () => {
//       const nextTrack = (trackIndex + 1) % musicList.length
//       setTrackIndex(nextTrack)
//     }

//     const handleClick = (e) => {
//       const isInsideHeader = e.target.closest('header')
//       if (!isInsideHeader) {
//         if (audio.paused) {
//           audio.play()
//           setIsPlaying(true)
//         } else {
//           audio.pause()
//           setIsPlaying(false)
//         }
//       }
//     }

//     const handleKeyDown = (e) => {
//       if (e.key.toLowerCase() === 'm') {
//         const nextTrack = (trackIndex + 1) % musicList.length
//         setTrackIndex(nextTrack)
//       }
//     }

//     document.addEventListener('click', handleClick)
//     document.addEventListener('keydown', handleKeyDown)
//     audio.addEventListener('ended', handleEnded)

//     return () => {
//       audio.removeEventListener('ended', handleEnded)
//       document.removeEventListener('click', handleClick)
//       document.removeEventListener('keydown', handleKeyDown)
//     }
//   }, [trackIndex])

//   // Setup typing effect
//   useEffect(() => {
//     const options = {
//       strings: [
//         `ResumeBuilder uses the power of artificial intelligence to help you stand out in the job market. Our system intelligently analyzes the job titles and roles you input and generates polished, professional summaries tailored to industry standards. Whether you're a software engineer, digital marketer, or data analyst, the platform suggests content that highlights your strengths. These AI-crafted summaries align with recruiter expectations and ATS filters, giving you a competitive edge in landing your next opportunity.`,
//       ],
//       typeSpeed: 20,
//       showCursor: true,
//     }

//     const typed = new Typed(typingEl.current, options)
//     return () => {
//       typed.destroy()
//     }
//   }, [])

//   return (
//     <div>
//       {/* 🎵 Music */}
//       <audio ref={audioRef} autoPlay />

//       {/* Header */}
//       <Header />

//       {/* Landing Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: 'easeOut' }}
//         className="flex flex-col items-center justify-center mt-20 px-4"
//       >
//         {/* Title */}
//         <motion.h1
//           className="text-3xl font-bold text-violet-600"
//           initial={{ scale: 0.95 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.4 }}
//         >
//           Welcome to ResumeBuilder
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           className="mt-4 text-violet-600 text-center max-w-xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.7 }}
//         >
//           Craft your professional resume effortlessly. Get started by signing in and accessing your dashboard to begin building a standout resume today.
//         </motion.p>

//         {/* Music status */}
//         <p className="mt-4 text-sm text-gray-500 text-center">
//           Music is {isPlaying ? 'playing 🎵' : 'paused 🔇'} — Track {trackIndex + 1} of {musicList.length}
//           <br />
//           <span className="text-xs text-gray-400">(Press <kbd>M</kbd> to switch music)</span>
//         </p>

//         {/* Top Features */}
//         <motion.ul
//           className="mt-8 space-y-3 text-left max-w-2xl text-base text-gray-800"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.7 }}
//         >
//           <li className="bg-violet-100 p-4 rounded-xl shadow">
//             <span className="font-bold text-violet-700">🔍 AI-Powered Summary Generator:</span>{' '}
//             Automatically crafts powerful job summaries tailored to your position title using smart context-aware AI.
//           </li>
//           <li className="bg-violet-100 p-4 rounded-xl shadow">
//             <span className="font-bold text-violet-700">📝 Smart Resume Editing:</span>{' '}
//             Real-time field editing, WYSIWYG input, and section-wise organization let you build resumes faster and better.
//           </li>
//         </motion.ul>

//         {/* Typing animation paragraph */}
//         <motion.div
//           className="mt-10 max-w-4xl text-justify text-gray-700 text-sm leading-7 px-4 min-h-[180px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.9, duration: 1.2 }}
//         >
//           <span ref={typingEl}></span>
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }

// export default Home
import React, { useEffect, useRef, useState } from 'react'
import Header from '@/components/ui/custom/Header'
import { motion } from 'framer-motion'
import Typed from 'typed.js'

function Home() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [trackIndex, setTrackIndex] = useState(0)
  const typingEl = useRef(null)

  const musicList = [
    'music1.mp3',
    'music2.mp3',
    'music3.mp3'
  ]

  // Setup music player + keypress for switching tracks
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.src = musicList[trackIndex]
    audio.volume = 0.5
    audio.loop = false
    audio.play().catch((e) => console.warn('Autoplay blocked:', e))

    const handleEnded = () => {
      const nextTrack = (trackIndex + 1) % musicList.length
      setTrackIndex(nextTrack)
    }

    const handleClick = (e) => {
      const isInsideHeader = e.target.closest('header')
      if (!isInsideHeader) {
        if (audio.paused) {
          audio.play()
          setIsPlaying(true)
        } else {
          audio.pause()
          setIsPlaying(false)
        }
      }
    }

    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'm') {
        setTrackIndex(prevTrackIndex => (prevTrackIndex + 1) % musicList.length)
      }
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKeyDown)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('ended', handleEnded)
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [trackIndex])

  // Setup typing effect
  useEffect(() => {
    const options = {
      strings: [
        `ResumeBuilder uses the power of artificial intelligence to help you stand out in the job market. Our system intelligently analyzes the job titles and roles you input and generates polished, professional summaries tailored to industry standards. Whether you're a software engineer, digital marketer, or data analyst, the platform suggests content that highlights your strengths. These AI-crafted summaries align with recruiter expectations and ATS filters, giving you a competitive edge in landing your next opportunity.`,
      ],
      typeSpeed: 20,
      showCursor: true,
    }

    const typed = new Typed(typingEl.current, options)
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div>
      {/* 🎵 Music */}
      <audio ref={audioRef} autoPlay />

      {/* Header */}
      <Header />

      {/* Landing Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center mt-20 px-4"
      >
        {/* Title */}
        <motion.h1
          className="text-3xl font-bold text-violet-600"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Welcome to ResumeBuilder
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-violet-600 text-center max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          Craft your professional resume effortlessly. Get started by signing in and accessing your dashboard to begin building a standout resume today.
        </motion.p>

        {/* Music status */}
        <p className="mt-4 text-sm text-gray-500 text-center">
          Music is {isPlaying ? 'playing 🎵' : 'paused 🔇'} — Track {trackIndex + 1} of {musicList.length}
          <br />
          <span className="text-xs text-gray-400">(Press <kbd>M</kbd> to switch music)</span>
        </p>

        {/* Top Features */}
        <motion.ul
          className="mt-8 space-y-3 text-left max-w-2xl text-base text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <li className="bg-violet-100 p-4 rounded-xl shadow">
            <span className="font-bold text-violet-700">🔍 AI-Powered Summary Generator:</span>{' '}
            Automatically crafts powerful job summaries tailored to your position title using smart context-aware AI.
          </li>
          <li className="bg-violet-100 p-4 rounded-xl shadow">
            <span className="font-bold text-violet-700">📝 Smart Resume Editing:</span>{' '}
            Real-time field editing, WYSIWYG input, and section-wise organization let you build resumes faster and better.
          </li>
        </motion.ul>

        {/* Typing animation paragraph */}
        <motion.div
          className="mt-10 max-w-4xl text-justify text-gray-700 text-sm leading-7 px-4 min-h-[180px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 2.5 }}
        >
          <span ref={typingEl}></span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
