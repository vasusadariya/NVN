import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div>
      <video id="player" height="400px" width="640px" controls>
        <source src="/static/NVN.mp4" type="video/mp4"></source>
      </video>
    </div>
  )
}