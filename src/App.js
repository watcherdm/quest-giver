import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div className="m-10 flex flex-row">
      <div className="basis-1/5"></div>
      <div className='basis-3/5'>
        <Router>
          <Header/>
          <div className="flex-row flex">
            <div className="basis-1/2">
              <div className="border-2 totvg-container m-12 totvg bg-center bg-cover h-96 rounded-3xl text-center">
               <h1 className="relative p-2 pb-0 top-4 bg-black text-3xl">Tomb of the Vampire General</h1>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="border-2 bbbb-container m-12 bbbb bg-center bg-cover h-96 rounded-3xl text-center">
                <h1 className='relative p-2 pb-0 top-4 bg-black text-3xl'>Bloody Bellboots Boogie</h1>
              </div>
            </div>
          </div>
          <div className="flex-row flex">
            <div className="basis-1/2">
              <div className="border-2 totvg-container m-12 totvg bg-center bg-cover h-96 rounded-3xl text-center">
               <h1 className="relative p-2 pb-0 top-4 bg-black text-3xl">The Black Knight Prestige Class</h1>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="border-2 bbbb-container m-12 bbbb bg-center bg-cover h-96 rounded-3xl text-center">
                <h1 className='relative p-2 pb-0 top-4 bg-black text-3xl'>5e Module Collection</h1>
              </div>
            </div>
          </div>
        </Router>
      </div>
      <div className="basis-1/5"></div>
    </div>
  )
}

export default App