import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./Header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faCalendar, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import {DateRange} from 'react-date-range'
import {format} from "date-fns"

const Header = ({type}) => {
  const [openDate,setOpenDate]=useState(false)
  const [openOptions,setOpenOptions]=useState(false)
  const [date,setDate]=useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key:'selection'
    }
  ])
  const [options,setOptions]=useState(
    {
      adult:1,
      children:0,
      room:1
    }
  )
  const handleOptionChange = (option, increment) => {
    setOptions((prevOptions) => {
      const updatedValue = prevOptions[option] + increment;
      const newValue = updatedValue >= 0 ? updatedValue : 0;
      return {
        ...prevOptions,
        [option]: newValue
      };
    });
  };

  return (
    <div className={type==="list"?"header listmode" : "header"}>
      <div className="headerContainer">
      <div className="headerList">
        <div className="headerListItem active">
           <FontAwesomeIcon icon={faBed} />
           <span>stays</span>
        </div>
        <div className="headerListItem">
           <FontAwesomeIcon icon={faPlane} />
      <span>Flights</span>
        </div>
        <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
           <span>CarRental</span>
        </div>
        <div className="headerListItem">
         <FontAwesomeIcon icon={faCar} />
      <   span>Attractions</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faTaxi} />
           <span>Airport Taxis</span>
        </div>
      </div>
     { type !=="list" && <> <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
      <p className="headeDesc">
        Get Rewarded for your travels- Unlock instant savings of 10% or more with a free lamabooking account.
      </p>
      <button className="headerButton">Signin/Register</button>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <div className="headerDifferentItems">
            <FontAwesomeIcon icon={faBed} className='headerSearchIcon'/>
            <input type="text" placeholder='Where are you going ?' className='headerSearchInput' />
          </div>
         <div className="headerDifferentItems">
           <FontAwesomeIcon icon={faCalendarDays} className='headerSearchIcon'/>
           <span  onClick={()=>{setOpenDate(!openDate)}} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
          { openDate&& <DateRange editableDateInputs={true} onChange={item=>setDate([item.selection])}
           moveRangeOnFirstSelection={false} ranges={date}
           className='date'
           />}
         </div>
         <div className="headerDifferentItems">
           <FontAwesomeIcon icon={faPerson} className='headerSearchIcon'/>
           <span onClick={()=>{setOpenOptions(!openOptions)}} className="headerSearchText">
            {`${options.adult} adult -  ${options.children} children - ${options.room} room`} </span>
          {openOptions && <div className="options">
            <div className="optionItem">
              <span  className="optionText">Adult</span>
              <button onClick={() => handleOptionChange('adult', -1)} className="optionCounterButton">-</button>
               <span className="optionCounterNumber">1</span>
               <button  onClick={() => handleOptionChange('adult', 1)}className="optionCounterButton">+</button>
            </div>
            <div className="optionItem">
              <span  className="optionTextc">Children</span>
              <button onClick={() => handleOptionChange('children', -1)} className="optionCounterButton">-</button>
               <span className="optionCounterNumber">1</span>
               <button onClick={() => handleOptionChange('children', 1)} className="optionCounterButton">+</button>
            </div>
            <div className="optionItem">
              <span  className="optionText">Rooms</span>
              <button onClick={() => handleOptionChange('room', -1)} className="optionCounterButton">-</button>
               <span className="optionCounterNumber">1</span>
               <button onClick={() => handleOptionChange('room', 1)} className="optionCounterButton">+</button>
            </div>
           </div>}
         </div>
         <div className="headerDifferentItems">
           <button className="headerSearchButton">Search</button>
         </div>
         
      </div>
      </div> </>}
      </div>
    </div>
  )
}

export default Header