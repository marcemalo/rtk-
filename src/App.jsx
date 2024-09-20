import Header from "./components/header/Header"
import RouteController from "./routes"

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