import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div>
      <div className="gallery">
        <a target="_blank" href="/static/2.jpg">
          <Image src="/static/2.jpg" alt="Cinque Terre" width={640} height={400}></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/4.jpg">
          <Image src="/static/4.jpg" alt="Forest"  width={640} height={400}></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/3.jpg">
          <Image src="/static/3.jpg" alt="Mountains"  width={640} height={400}></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/7.jpg">
          <Image src="/static/7.jpg" alt="Northern Lights"  width={640} height={400}></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/8.jpg">
          <Image src="/static/8.jpg" alt="Mountains"  width={640} height={400}></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/9.jpg">
          <Image src="/static/9.jpg" alt="Mountains"  width={640} height={400}></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/11.jpg">
          <Image src="/static/11.jpg" alt="Mountains"  width={640} height={400}></Image>
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="/static/12.jpg">
          <Image src="/static/12.jpg" alt="Mountains"  width={640} height={400}></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/17.jpg">
          <Image src="/static/17.jpg" alt="Mountains"  width={640} height={400}></Image>
        </a>
      </div>
      <div className="gallery">
        <a target="_blank" href="/static/18.jpg">
          <Image src="/static/18.jpg" alt="Mountains"  width={640} height={400}></Image>
        </a>
      </div>

    </div>
  )
}