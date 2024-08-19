import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu2.jpg">
          <img src="/static/vasu2.jpg" alt="Cinque Terre" width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu4.jpg">
          <img src="/static/vasu4.jpg" alt="Forest"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu3.jpg">
          <img src="/static/vasu3.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu7.jpg">
          <img src="/static/vasu7.jpg" alt="Northern Lights"  width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/vasu8.jpg">
          <img src="/static/vasu8.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu9.jpg">
          <img src="/static/vasu9.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/vasu11.jpg">
          <img src="/static/vasu11.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/vasu12.jpg">
          <img src="/static/vasu12.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu17.jpg">
          <img src="/static/vasu17.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/vasu18.jpg">
          <img src="/static/vasu18.jpg" alt="Mountains"  width={640} height={400}></img>
        </a>
      </div>

    </div>
  )
}