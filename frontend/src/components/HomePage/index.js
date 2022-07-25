import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import "./HomePage.css"
import { getAllRooms, listAllRooms } from "../../store/rooms";

const HomePage = () => {
  const dispatch = useDispatch()

  const allRooms = useSelector(getAllRooms)

  // for (let room of allRooms) console.log(room.previewImage[0].url)
  // console.log(allRooms[0].previewImage[0])

  console.log(allRooms)

  useEffect(() => {
    dispatch(listAllRooms())
  }, [dispatch])

  return (
    <>
      <div className="all-rooms-div">
        {allRooms?.map((room, i) => {
          return (
            <div className={`room-div${i}`}>
              <div className="img-div">
                <img className="room-img" src={`${room.previewImage[0]?.url}`}></img>
              </div>
              <div className="room-info">
                <p className="room-city-state">{`${room.city}, ${room.state}`}</p>
                <p className="room-price">{`$${room.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} night`}</p>
              </div>
            </div>
          )
        })
        }
      </div>
    </>
  )
}
export default HomePage
