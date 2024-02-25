import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HotelDetails from "./pages/hotelDetails/HotelDetails";
import HotelList from "./pages/hotelList/HotelList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<HotelList/>}/>
        <Route path="/hotels/:id" element={<HotelDetails/>}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
