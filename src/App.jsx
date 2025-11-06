export default function App() {
  return (
    <>
      <header className="bg-gradient-to-r from-violet-300 via-purple-400 to-violet-300
        w-screen h-[100px] text-center content-center">
        <p className="text-4xl font-bold">MyCalculator</p>
      </header>

      <main className="flex-grow flex justify-center items-center  min-h-[calc(100dvh-100px)]">
        <div className="calculator bg-white p-6 rounded-2xl shadow-lg">
          <form className="space-y-4">
            <div>
              <input className="border p-2 w-full rounded" placeholder="Input 1" />
            </div>
            <div>
              <input className="border p-2 w-full rounded" placeholder="Input 2" />
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
