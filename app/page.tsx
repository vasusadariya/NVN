import Image from "next/image";
import { text } from "stream/consumers";



export default function Home() {
  return (
  <div id="main">
    <h1>Hii there welcome to my website..</h1>
   <span id="NIDHI"><a href="/NIDHI">NIDHI</a></span>
   <span id="NITI"><a href ="/NITI">NITI</a></span>

  
  <div id="image"><Image
      src="/Constants.png"
      width={2000}
      height={1000}
      alt="Loveliess"/></div>
  </div>

  );
}


