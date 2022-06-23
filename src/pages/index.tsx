import type { NextPage } from 'next'
import Ring from '../components/Ring';

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen items-center justify-center bg-slate-800">
        <h1 className="text-5xl text-yellow-300">Light Touch</h1>

        <Ring />

        <h1 className="text-3xl text-yellow-300">Room Code</h1>
        <h1 className="text-4xl text-yellow-300">1234</h1>

      </div>
    </>
  )
}

export default Home
