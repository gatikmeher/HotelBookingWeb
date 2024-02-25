import { useLocation } from "react-router-dom"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./hotellist.css"
import { useState } from "react"
import {format} from "date-fns"
import { DateRange } from "react-date-range"
import HotelSearch from "../../components/hotelSearch/HotelSearch"

const HotelList = () => {

    const location = useLocation()
    console.log("Location: " + location) 
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)

    const [openDate, setOpenDate] = useState(false)

  return (
    <div>
        <Navbar/>
        <Header type="list"/>    
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                        <label>Destination</label>
                        <input type="text" placeholder={destination}/>
                    </div>
                    <div className="lsItem">
                        <label>Check-In Date</label>
                        <span onClick={()=> setOpenDate(!openDate)}>
                            {`${format(date[0].startDate, "yyyy-MM-dd")} to ${format(date[0].endDate, "yyyy-MM-dd")}`}
                        </span>
                        {openDate && <DateRange
                        onChange={item=>setDate([item.selection])}
                        ranges={date}
                        minDate={new Date()}
                        />}
                    </div>
                    <div className="lsItem">
                        <label>Options</label>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Min price <small>per night</small>
                            </span>
                            <input type="number" className="lsOptionInput" />
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Max price <small>per night</small>
                            </span>
                            <input type="number" className="lsOptionInput" />
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Adult
                            </span>
                            <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Children
                            </span>
                            <input type="number" min={0} className="lsOptionInput" placeholder={options.child}/>
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Room
                            </span>
                            <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
                        </div>
                    </div>
                    <button>Search</button>
                </div>       
                <div className="listResult">  
                    <HotelSearch/>
                    <HotelSearch/>
                    <HotelSearch/>
                    <HotelSearch/>
                    <HotelSearch/>
                    <HotelSearch/>
                    <HotelSearch/>
                    <HotelSearch/>
                    <HotelSearch/>
                    <HotelSearch/>
                </div>
            </div>
        </div>    
    </div>
    
  )
}

export default HotelList