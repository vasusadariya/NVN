import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div id="main">
      <div>
        <h1>Hii there welcome to your website Ben...😊</h1>
        <p>Hope kee tamne gamsee aa badhuu😊</p>
        <div><div><span id="NIDHI"><a className="main" href="/NIDHI">NIDHI</a></span><br></br></div>
          <div><span id="NITI"><a className="main" href="/NITI">NITI</a></span></div></div>
      </div><br></br>
      <div className="flip-card-1">
        <div className="flip-card-inner-1">
          <div className="flip-card-front-1"><img id="image1"
            src="/static/Constants.png"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt="Loveliess"></img>
          </div>
          <div className="flip-card-back-1">
            <img id="image1"
              src="/static/vasu3.jpg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              alt="Loveliess"></img>
          </div>
        </div>
      </div>

    </div>
  )
}