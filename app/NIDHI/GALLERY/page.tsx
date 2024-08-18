import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div>
      <div className="gallery">
        <a target="_blank" href="/static/1.jpg">
          <Image src="/static/1.jpg" alt="Cinque Terre"  width={640} height={400}></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/3.jpg">
          <Image src="/static/3.jpg" alt="Mountains" width={640} height={400}></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/5.jpg">
          <Image src="/static/5.jpg" alt="Forest" width={640} height={400}></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/6.jpg">
          <Image src="/static/6.jpg" alt="Northern Lights"  width={640} height={400}></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/14.jpg">
          <Image src="/static/14.JPG" alt="Mountains"  width={640} height={400}></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/10.jpg">
          <Image src="/static/10.JPG" alt="Mountains"  width={640} height={400}></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/13.jpg">
          <Image src="/static/13.JPG" alt="Mountains" width={640} height={400}></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/15.jpg">
          <Image src="/static/15.JPG" alt="Mountains"  width={640} height={400}></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/16.jpg">
          <Image src="/static/16.JPG" alt="Mountains" width={640} height={400}></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/19.jpg">
          <Image src="/static/19.JPG" alt="Mountains"  width={640} height={400}></Image>
        </a>
      </div>
    </div>
  )
}