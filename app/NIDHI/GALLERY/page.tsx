import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
   <div>
    <div className="gallery">
  <a target="_blank" href="/1.jpg">
    <img src="/1.jpg" alt="Cinque Terre" width="640" height="400"></img>
  </a>
</div>
<div className="gallery">
  <a target="_blank" href="/3.jpg">
    <img src="/3.jpg" alt="Mountains" width="640" height="400"></img>
  </a>
</div>
<div className="gallery">
  <a target="_blank" href="/5.jpg">
    <img src="/5.jpg" alt="Forest" width="640" height="400"></img>
  </a>
</div>

<div className="gallery">
  <a target="_blank" href="/6.jpg">
    <img src="/6.jpg" alt="Northern Lights" width="640" height="400"></img>
  </a>
</div>

<div className="gallery">
  <a target="_blank" href="/14.jpg">
    <img src="/14.JPG" alt="Mountains" width="640" height="400"></img>
  </a>
</div>

<div className="gallery">
  <a target="_blank" href="/10.jpg">
    <img src="/10.JPG" alt="Mountains" width="640" height="400"></img>
  </a>
</div>

<div className="gallery">
  <a target="_blank" href="/13.jpg">
    <img src="/13.JPG" alt="Mountains" width="640" height="400"></img>
  </a>
</div>
   </div> 
  )
}