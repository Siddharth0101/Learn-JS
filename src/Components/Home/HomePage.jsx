import Image from "next/image"
import HomeImage from "../../../public/HomePageImage.webp"
import HomeMaster from "../../../public/HomeMaster.webp"

export default function HomePage() {
    return <div className="grid-cols-1 md:grid-cols-2">
       <div>
       <Image src={HomeImage} alt="Learn JavaScript" width={500} className="rounded-full"/>
       <span></span>
       </div>
       <div>
       <Image src={HomeMaster} alt="Master JavaScript" width={500} className="rounded-full"/>
       <span></span>
       </div>
    </div>
}