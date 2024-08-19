import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu1.jpg">
          <img src="/static/vasu1.jpg" alt="Cinque Terre"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu3.jpg">
          <img src="/static/vasu3.jpg" alt="Mountains" width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu5.jpg">
          <img src="/static/vasu5.jpg" alt="Forest" width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/vasu6.jpg">
          <img src="/static/vasu6.jpg" alt="Northern Lights"  width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/vasu14.jpg">
          <img src="/static/vasu14.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/vasu10.jpg">
          <img src="/static/vasu10.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/vasu13.jpg">
          <img src="/static/vasu13.jpg" alt="Mountains" width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu15.jpg">
          <img src="/static/vasu15.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu16.jpg">
          <img src="/static/vasu16.jpg" alt="Mountains" width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu19.jpg">
          <img src="/static/vasu19.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>
    </div>
  )
}