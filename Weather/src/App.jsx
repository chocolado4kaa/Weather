import './App.scss';
import Header from './components/Header/Header.jsx';
import Today from './components/Today/Today.jsx';
import Graphs from './components/Graph/Graph.jsx';
import Days from './components/Days/Days.jsx';

function App() {

  return (
    <div className="App">
      <Header />
      <main className="main-content mt-10">
        <Today />
        <Graphs />
        <Days />
     </main>
    </div>
  )
}

export default App
