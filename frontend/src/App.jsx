import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Video from "./pages/Video"
import Shorts from "./pages/Shorts"
import Subscription from "./pages/Subscription"
import History from "./pages/History"
import MyProfile from "./pages/MyProfile"
import WatchLater from "./pages/WatchLater"
import Likes from "./pages/Likes"
import Upload from "./pages/Upload"
import PhoneProfile from "./pages/PhoneProfile"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/video" element={<Video/>}/>
      <Route path="/shorts" element={<Shorts/>}/>
      <Route path="/subscribes" element={<Subscription/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/profile" element={<MyProfile/>}/>
      <Route path="/Phoneprofile" element={<PhoneProfile/>}/>
      <Route path="/watch-later" element={<WatchLater/>}/>
      <Route path="/liked" element={<Likes/>}/>
      <Route path="/upload" element={<Upload/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
