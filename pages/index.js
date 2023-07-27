import React from 'react'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
    <NavBar />
    </div>
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 md:justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to my Pokédex App!</h1>
      <p className="text-lg text-center">
        Please use the navigation bar at the top to either search for Pokémon or view all Pokémon.
      </p>
    </div>
    </>
  )
}