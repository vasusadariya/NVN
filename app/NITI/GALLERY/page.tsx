import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div>
      <div className="gallery">
        <a target="_blank" href="/static/2.jpg">
          <img src="/static/2.jpg" alt="Cinque Terre" width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/4.jpg">
          <img src="/static/4.jpg" alt="Forest"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/3.jpg">
          <img src="/static/3.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/7.jpg">
          <img src="/static/7.jpg" alt="Northern Lights"  width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/8.jpg">
          <img src="/static/8.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/9.jpg">
          <img src="/static/9.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/11.jpg">
          <img src="/static/11.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/12.jpg">
          <img src="/static/12.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/17.jpg">
          <img src="/static/17.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/18.jpg">
          <img src="/static/18.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>

    </div>
  )
}