import { ChatInterface } from "./component/ChatInterface/ChatInterface"
import { Desk } from "./component/Desk/Desk"
import { Header } from "./component/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
 
  return (
    <div className="min-h-screen bg-[#F6F7F8]">
      <Router>
        
            <div>
              <Header/>
              <Routes>
                <Route path="/" element={<Desk/>} />
                <Route path="/chat" element={<ChatInterface/>}/>

              </Routes>
            </div>
      </Router>
    </div>
  )
}

export default App
