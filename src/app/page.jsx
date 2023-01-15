"use client"

import { useEffect, useState } from "react"

export default function Home() {

  const [years, setYears] = useState(1)
  const [months, setMonths] = useState(1)
  const [speed, setSpeed] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setTimeout(() => {
      months !== 12 ? setMonths(months + 1) : setMonths(1)

      if (months == 12) {
        setYears(years => years + 1)
      }

    }, 2000)

  }, [months])

  useEffect(() => {
    setInterval(() => {
      setSpeed(speed => speed - 10)
    }, 250)
  }, [])


  function start() {
    let music = document.querySelector(".music")

    music.play()
    music.volume = 1
    music.currentTime = 70

    setLoading("ready")
  }


  return (
    <main className={loading}>
      <audio className="music" src="/resources/effects/music.mp3" autoPlay />
      <div className="loading" style={{ display: (loading == false ? "block" : 'none') }}>
        <div className="center">
          <img className="crown" src="/resources/img/crown.png" />
          <p>Solar System by <a href="">@Baalberith</a></p>
          <button className="start" onClick={start}>Comenzar</button>
        </div>
      </div>

      <div className="comet1"></div>

      <div className="target-information">
        <p className="title">Tiempo  transcurridos</p>

        <span>{years} Años y {months} meses</span>


      </div>

      <div className="exterior" style={{ top: speed }}>

      </div>
      <div className="system">

        <div className="line new2">
          <div className="saturne"></div>
        </div>

        <div className="line new1">
          <div className="jupiter"></div>
        </div>

        <div className="line one">
          <div className="asteroide-1"></div>
          <div className="mars"></div>
        </div>
        <div className="line two">
          <div className="moon"></div>
          <div className="earth"></div>
        </div>
        <div className="line tree">
          <div className="venus"></div>
        </div>
        <div className="line four">
          <div className="mercury"></div>
        </div>

        <div className="sun"></div>
      </div>
    </main>
  )
}
