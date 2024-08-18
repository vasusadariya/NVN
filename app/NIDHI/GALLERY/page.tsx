import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div>
      <div className="gallery">
        <a target="_blank" href="/static/1.jpg">
          <img src="/static/1.jpg" alt="Cinque Terre"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/3.jpg">
          <img src="/static/3.jpg" alt="Mountains" width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/5.jpg">
          <img src="/static/5.jpg" alt="Forest" width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/6.jpg">
          <img src="/static/6.jpg" alt="Northern Lights"  width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/14.jpg">
          <img src="/static/14.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/10.jpg">
          <img src="/static/10.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/13.jpg">
          <img src="/static/13.jpg" alt="Mountains" width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/15.jpg">
          <img src="/static/15.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/16.jpg">
          <img src="/static/16.jpg" alt="Mountains" width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/19.jpg">
          <img src="/static/19.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>
    </div>
  )
}