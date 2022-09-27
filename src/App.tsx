import React, { FC, createContext } from 'react'; //FC = functional Component
import './App.css';
import { Person } from './components/Person'
import { HairColor } from './Enum'

interface AppContextInterface {
  name: string,
  age: number,
  country: string
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Jotham",
    age: 20,
    country: "Frank"
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person name={contextValue.name} age={contextValue.age} email={contextValue.country} hairColor={HairColor.Brown}/>
      </div>
    </AppContext.Provider>
  )
}

export default App;
