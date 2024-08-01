import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
  <div id="main">
  <div>
  <h1>Hii there welcome to my website..</h1>
 <span id="NIDHI"><a href="/NIDHI">NIDHI</a></span><br></br>
 <span id="NITI"><a href ="/NITI">NITI</a></span>
  </div>
<div id="image"><Image
    src="/Constants.png"
    width="0"
    height="0"
    sizes="100vw"
    className="w-full h-auto"
    alt="Loveliess"/>
  </div>
</div>
);
}


