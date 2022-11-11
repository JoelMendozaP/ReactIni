import './App.css'
import './asset/style/style.css'
import { Footer, Header, Main, Sidebar } from './template'

const App = () => {
  return (
    <div className="App">
      <div className="App__Header">
        <Header />
      </div>
      <div className="App__Sidebar">
        <Sidebar />
      </div>
      <div className="App__Main">
        <Main />
      </div>
      <div className="App__Footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
