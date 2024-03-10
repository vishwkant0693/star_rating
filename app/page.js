"use client"
import React, { useState } from 'react'

const page = () => {
  const [srating, setSRating] = useState(0)
  const [crating, setCRating] = useState(0)
  const [yes, setYes] = useState("none")
  const [no, setNo] = useState("none")

  const handleNo =()=>{
    let a = document.getElementById("no")
    a.setAttribute('fill','red')
    let b = document.getElementById("yes")
    b.setAttribute('fill','none')
  }
  const handleYes =()=>{
    let a = document.getElementById("yes")
    a.setAttribute('fill','green')
    let b = document.getElementById("no")
    b.setAttribute('fill','none')
  }

  return (
    <>
      <div className="grid self-center h-screen">
        <div className="flex flex-col gap-10 my-6 mx-6">
          <div className="">
            <h1 className='text-4xl font-semibold max-sm:text-2xl'>Leave a Review</h1>
          </div>
          <div className="">
            <h1 className='text-2xl font-semibold max-sm:text-xl'>Safety</h1>
            <p>How much you liked the Trausti?</p>
            <div className="text-7xl max-sm:text-5xl">
              {[...Array(5)].map((_, index) => {
                return <span key={index} className={`${index + 1 <= srating ? 'selected' : ''} cursor-pointer`} onClick={() => {
                  setSRating(index + 1)
                }}>&#9733;</span>
              })}
            </div>
          </div>
          <div className="">
            <h1 className='text-2xl font-semibold max-sm:text-xl'>Communication</h1>
            <p>How much you communicate with the Trausti ?</p>
            <div className="text-7xl max-sm:text-5xl">
              {[...Array(5)].map((_, index) => {
                return <span key={index} className={`${index + 1 <= crating ? 'selected' : ''} cursor-pointer`} onClick={() => {
                  setCRating(index + 1)
                }}>&#9733;</span>
              })}
            </div>
          </div>
          <div className="">
            <h1 className='text-2xl font-semibold max-sm:text-xl'>Would you recommend Trausti?</h1>
            <p>Your opinion will be appreciated</p>
            <div className="flex gap-10 text-3xl max-sm:text-xl">
              {/* <input type="radio" name="recommend" id="no" className='hover:text-red-800'  />No
              <input type="radio" name="recommend" id="yes"  className='hover:text-green-800' />Yes */}
              <div className="recommend inline-flex items-center gap-2" onClick={handleNo}>
                <svg xmlns="http://www.w3.org/2000/svg" id='no' fill='none' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                </svg>
                <h1 id='no_text'>No</h1>
              </div>
              <div className="inline-flex items-center gap-2" onClick={handleYes}>
                <svg xmlns="http://www.w3.org/2000/svg" id='yes' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
                <h1 id='yes_text'>Yes</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page