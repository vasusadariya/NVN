import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (<div>
    <div id="int">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="card">
        <Image className="single" src="/19.jpg" alt="Niti"></Image>
        <h1>Papuu ♡</h1>
        <p className="title">પ્રિયiset બહેન</p>
        <p>રબારી</p>
        <div id="logo">
          <a href="https://www.instagram.com/nidhi_ghetia/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
        </div>

      </div>
      <br></br>
    </div>
    <div className="niti"><p>મારી પ્રિય બહેન (RABARI)...<br></br>
    </p></div><br></br>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>
            Tare to have video jovo j che em heeeeee🤣 kai nai hal joi lee bss mouse rakh ani upr....
          </p>
        </div>
        <div className="flip-card-back">
          <div><span id="NIDHI"><a className="main" href="/VIDEO">Memories</a></span><br></br></div>
          <div><span id="NIDHI"><a className="main" href="/NIDHI/GALLERY">Capture</a></span><br></br></div>
        </div>
      </div>
    </div>

  </div>

  );
}
