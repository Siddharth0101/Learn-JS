import Image from "next/image"
import HomeImage from "../../../public/HomePageImage.webp"
import HomeMaster from "../../../public/HomeMaster.webp"

export default function HomePage() {
    return <div>
       <Image src={HomeImage} alt="Learn JavaScript" width={500} className="rounded-full"/>
       <span className="text-4xl">Start your JavaScript journey! Learn the fundamentals, explore the DOM, and build dynamic web applications with hands-on examples. Perfect for beginners and aspiring developers.</span>
       <Image src={HomeMaster} alt="Master JavaScript" width={500} className="rounded-full"/>
       <span className="text-4xl">Take your JavaScript skills to the next level! Dive into advanced concepts like async programming, OOP, and performance optimization to become a pro developer.</span>
    </div>
}