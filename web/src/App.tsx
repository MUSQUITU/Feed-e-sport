import './styles/main.css';

import logoImg from './assets/logo-esports.svg';

function App() {
  return (
   <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
    <img src={logoImg} alt="lolo" />

    <h1 className='text-6xl text-white font-black mt-20'>
      Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>
        duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-6'>
  
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">League of Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">Dota</strong>
            <span className="text-zinc-300 text-sm block mt-1">2 anuncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">Counter-Strike</strong>
            <span className="text-zinc-300 text-sm block mt-1">2 anuncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">Apex</strong>
            <span className="text-zinc-300 text-sm block mt-1">1 anuncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">Fortnite</strong>
            <span className="text-zinc-300 text-sm block mt-1">6 anuncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">World of WarCraft</strong>
            <span className="text-zinc-300 text-sm block mt-1">2 anuncios</span>
          </div>
        </a>
      
      </div>

      <div className="bg-[#2A2634] px-8 py-6 mt-8 self-stretch rounded-lg">

      </div>
   </div>
  )
}

export default App
