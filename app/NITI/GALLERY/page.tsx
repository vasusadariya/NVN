import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
   <div>
    <div className="gallery">
  <a target="_blank" href="1.jpg">
    <Image src="/1.jpg" alt="Cinque Terre" width="640" height="400"></Image>
  </a>
</div>
<div className="gallery">
  <a target="_blank" href="4.jpg">
    <Image src="/3.jpg" alt="Mountains" width="640" height="400"></Image>
  </a>
</div>
<div className="gallery">
  <a target="_blank" href="2.jpg">
    <Image src="/2.jpg" alt="Forest" width="640" height="400"></Image>
  </a>
</div>

<div className="gallery">
  <a target="_blank" href="5.jpg">
    <Image src="/5.jpg" alt="Northern Lights" width="640" height="400"></Image>
  </a>
</div>

<div className="gallery">
  <a target="_blank" href="4.jpg">
    <Image src="/4.jpg" alt="Mountains" width="640" height="400"></Image>
  </a>
</div>

   </div> 
  )
}