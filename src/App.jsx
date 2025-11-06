import './App.css'
export default function App() {
  return (
    <>
      <header className="bg-gray-300
        w-screen h-[100px] text-center content-center">
        <p className="text-4xl font-bold text-stone-700">MyCalculator</p>
      </header>

      <main className="flex-grow flex justify-center items-center  min-h-[calc(100dvh-100px)]">
        <div className="calculator">
          <form className="space-y-2">
            <div>
              <input type="text" name="display" readOnly
                className='w-full h-16 my-2'/>
            </div>
            <div>
              <input type="button" value="AC" className='text-red-500'/>
              <input type="button" value="DE" className='text-orange-400'/>
              <input type="button" value="."/>
              <input type="button" value="/"/>
              <input type="button" value="*"/>
            </div>
            <div>
              <input type="button" value="7"/>
              <input type="button" value="8"/>
              <input type="button" value="9"/>
              <input type="button" value="-"/>
              <input type="button" value="+"/>
            </div>
            <div>
              <input type="button" value="4"/>
              <input type="button" value="5"/>
              <input type="button" value="6"/>
              <input type="button" value="0"/>
              <input type="button" value="00"/>
            </div>
            <div>
              <input type="button" value="1"/>
              <input type="button" value="2"/>
              <input type="button" value="3"/>
              <input type="button" value="=" className='equal'/>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
