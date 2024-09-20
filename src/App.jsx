import Header from "./components/header/Header"
import RouteController from "./routes"
import "./App.css"

function App() {
  return (
    <>
      <div  className="flex ">
      <Header/>
      <RouteController/>
      </div>
    </>
  )
}

export default App