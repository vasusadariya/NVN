import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div>
      <div className="gallery">
        <a target="_blank" href="/1.jpg">
          <Image src="/1.jpg" alt="Cinque Terre" width="640" height="400"></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/3.jpg">
          <Image src="/3.jpg" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/5.jpg">
          <Image src="/5.jpg" alt="Forest" width="640" height="400"></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/6.jpg">
          <Image src="/6.jpg" alt="Northern Lights" width="640" height="400"></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/14.jpg">
          <Image src="/14.JPG" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/10.jpg">
          <Image src="/10.JPG" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/13.jpg">
          <Image src="/13.JPG" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/15.jpg">
          <Image src="/15.JPG" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/16.jpg">
          <Image src="/16.JPG" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/19.jpg">
          <Image src="/19.JPG" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>
    </div>
  )
}