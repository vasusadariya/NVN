import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div>  
   <video height ="400px" width ="640px" controls>
     <source src="/NVN.mp4" type="video/mp4"></source>
   </video>
    </div>
  )
}