import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen items-center justify-center bg-slate-800">
        <h1 className="text-5xl text-yellow-300">
          Light Touch
        </h1>

        <div className="mt-10 border-4 border-yellow-300 rounded-full w-80 h-80 hover:shadow-yellow-200 hover:shadow-2xl hover:bg-yellow-200 transition-all"></div>
      </div>
    </>
  )
}

export default Home
