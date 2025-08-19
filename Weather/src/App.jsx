import './App.scss';
import Header from './components/Header/Header.jsx';

function App() {

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Today />
        <Graphs />
        <Days />
     </main>
    </div>
  )
}

export default App
