import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'
import { MusicPlayer } from './MusicPlayer'

export function Layout() {
  return (
    <div 
      className="min-h-screen flex flex-col bg-black text-red-500 font-serif"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apocalypsebeans%20bg%20-0CXd6tHJj9LLQMmPvqU92AqOdJYjM5.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="flex-1 flex overflow-hidden pb-[4.5rem] md:pb-0">
        <main className="flex-1 relative">
          <Navigation />
          <div className="h-full overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
      <MusicPlayer />
    </div>
  )
}