import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

import CreateAdventure from './components/CreateAdventure'
import ShowAdventureList from './components/ShowAdventureList'
import ShowAdventureDetails from './components/ShowAdventureDetails'
import UpdateAdventureInfo from './components/UpdateAdventureInfo'
import CreateScene from './components/CreateScene'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={ShowAdventureList} />
        <Route path='/create-adventure' component={CreateAdventure} />
        <Route path='/edit-adventure/:id' component={UpdateAdventureInfo} />
        <Route path='/show-adventure/:id' component={ShowAdventureDetails} />
        <Route path='/create-scene-for-adventure/:id' component={CreateScene} />
      </div>
    </Router>
  )
}

export default App