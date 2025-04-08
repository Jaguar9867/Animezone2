import { useState } from 'react'
import { Play, Home, Search, Menu, User } from 'lucide-react'
import { Button } from "/components/ui/button"
import { Card, CardContent, CardFooter } from "/components/ui/card"

type Anime = {
  id: number
  title: string
  rating: number
  isNew: boolean
}

export default function AnimeHomepage() {
  const [activeSection, setActiveSection] = useState('home')

  // Sample anime data
  const latestReleases: Anime[] = [
    { id: 1, title: 'Jujutsu Kaisen Season 2', rating: 4.9, isNew: true },
    { id: 2, title: 'Attack on Titan Final Season', rating: 4.8, isNew: true },
    { id: 3, title: 'Demon Slayer: Entertainment District Arc', rating: 4.7, isNew: true },
    { id: 4, title: 'Chainsaw Man', rating: 4.6, isNew: true }
  ]

  const trendingNow: Anime[] = [
    { id: 5, title: 'One Piece: Wano Country', rating: 4.8, isNew: false },
    { id: 6, title: 'My Hero Academia Season 6', rating: 4.7, isNew: false },
    { id: 7, title: 'Spy x Family', rating: 4.9, isNew: false },
    { id: 8, title: 'Vinland Saga Season 2', rating: 4.8, isNew: false }
  ]

  const topRated: Anime[] = [
    { id: 9, title: 'Fullmetal Alchemist: Brotherhood', rating: 5.0, isNew: false },
    { id: 10, title: 'Steins;Gate', rating: 4.9, isNew: false },
    { id: 11, title: 'Hunter x Hunter (2011)', rating: 4.9, isNew: false },
    { id: 12, title: 'Death Note', rating: 4.8, isNew: false }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-400">AnimeFlix</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => setActiveSection('home')} 
              className={`flex items-center ${activeSection === 'home' ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
            >
              <Home className="mr-2 h-4 w-4" /> Home
            </button>
            <button 
              onClick={() => setActiveSection('latest')} 
              className={`flex items-center ${activeSection === 'latest' ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
            >
              Latest
            </button>
            <button 
              onClick={() => setActiveSection('trending')} 
              className={`flex items-center ${activeSection === 'trending' ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
            >
              Trending
            </button>
            <button 
              onClick={() => setActiveSection('genres')} 
              className={`flex items-center ${activeSection === 'genres' ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
            >
              Genres
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Search and User Profile (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 relative rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-900 to-transparent absolute inset-0 z-10"></div>
          <div className="bg-gray-800 h-64 md:h-96 w-full flex items-center">
            <div className="relative z-20 p-8 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Jujutsu Kaisen Season 2</h2>
              <p className="text-gray-300 mb-6">The battle against the cursed spirits continues as Yuji and his friends face their greatest challenge yet.</p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Play className="mr-2 h-4 w-4" /> Watch Now
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Releases Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Latest Releases</h2>
            <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-900/50">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {latestReleases.map(anime => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </section>

        {/* Trending Now Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-900/50">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {trendingNow.map(anime => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </section>

        {/* Top Rated Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Top Rated</h2>
            <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-900/50">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {topRated.map(anime => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-purple-400">AnimeFlix</h2>
              <p className="text-gray-400 mt-2">Your ultimate anime streaming destination</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Help</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2023 AnimeFlix. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-200">
      <div className="relative">
        <div className="bg-gray-700 border-2 border-dashed rounded-t-xl w-full h-48" />
        {anime.isNew && (
          <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute bottom-2 right-2 bg-purple-600/80 hover:bg-purple-700/90 rounded-full w-10 h-10"
        >
          <Play className="h-5 w-5" />
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{anime.title}</h3>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-yellow-400 mr-1">★</span>
          <span>{anime.rating}</span>
        </div>
        <Button variant="outline" size="sm" className="text-purple-400 border-purple-400 hover:bg-purple-900/50">
          Details
        </Button>
      </CardFooter>
    </Card>
  )
}
