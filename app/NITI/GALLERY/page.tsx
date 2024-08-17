import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div>
      <div className="gallery">
        <a target="_blank" href="/2.jpg">
          <Image src="/2.jpg" alt="Cinque Terre" width="640" height="400"></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/4.jpg">
          <Image src="/4.jpg" alt="Forest" width="640" height="400"></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/3.jpg">
          <Image src="/3.jpg" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/7.jpg">
          <Image src="/7.jpg" alt="Northern Lights" width="640" height="400"></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/8.jpg">
          <Image src="/8.jpg" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/9.jpg">
          <Image src="/9.jpg" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/11.jpg">
          <Image src="/11.jpg" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/12.jpg">
          <Image src="/12.jpg" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/17.jpg">
          <Image src="/17.jpg" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/18.jpg">
          <Image src="/18.jpg" alt="Mountains" width="640" height="400"></Image>
        </a>
      </div>

    </div>
  )
}