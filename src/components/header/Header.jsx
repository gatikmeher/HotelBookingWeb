
import { faBed, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { DateRange } from 'react-date-range'
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from "react-router-dom"

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false) 
    const [destination, setDestination] = useState("")    
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        child: 0,
        room: 1
        }
    );
    const navigation = useNavigate()

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, 
                [name]: operation === "i" ? options[name] + 1: options[name] - 1,
            };        
        });
    };

    const handleSearch = () => {
        console.log(destination, date, options);
        navigation("/hotels", {state: {destination, date, options}});
    }

  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />     
                    <span>Stays</span>        
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />     
                    <span>Flights</span>        
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />     
                    <span>Rental Cars</span>        
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />     
                    <span>Taxi</span>        
                </div>
            </div>
            {type !== "list" && <> <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
            <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
            <button className="headerBtn">Sign In / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input 
                    type="text" 
                    placeholder="Where are you going ?" 
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "yyyy-MM-dd")} to ${format(date[0].endDate, "yyyy-MM-dd")}`}</span>
                { openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
                />}
                </div>
                <div className="headerSearchItem">                    
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>                       
                    <span 
                    className="headerSearchText"
                    onClick={() => {setOpenOptions(!openOptions)}}
                    >
                        {`${options.adult} adult | ${options.child} child | ${options.room} room`}
                    </span>
                    { openOptions && <> <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <button 
                            disabled={options.adult <= 1}
                            className="optionCounterButton" 
                            onClick={() => handleOption("adult", "d")}>-</button>
                            <span className="optionCounterNUmber">{options.adult}</span>
                            <button 
                            className="optionCounterButton" 
                            onClick={() => handleOption("adult", "i")}>+</button>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Child</span>
                            <button 
                            disabled={options.child <= 0}
                            className="optionCounterButton" 
                            onClick={() => handleOption("child", "d")}>-</button>
                            <span className="optionCounterNUmber">{options.child}</span>
                            <button 
                            className="optionCounterButton" 
                            onClick={() => handleOption("child", "i")}>+</button>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <button 
                            disabled={options.room <= 1}
                            className="optionCounterButton" 
                            onClick={() => handleOption("room", "d")}>-</button>
                            <span className="optionCounterNUmber">{options.room}</span>
                            <button 
                            className="optionCounterButton" 
                            onClick={() => handleOption("room", "i")}>+</button>
                        </div>
                    </div></>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
            </div></>}
        </div>       
    </div>
  )
}

export default Header