import Image from "next/image";

export default function ConceptsCard({ title, src, text, onClick, theme }) {
  return (
    <div
      className={`${
        theme == "DARK" ? "bg-slate-950" : "bg-gray-600"
      } max-w-md aspect-square rounded-xl my-10 transform transition-all hover:scale-105`}
    >
      <Image src={src} alt={title} className="w-full rounded-3xl p-2" />
      <div className={`flex justify-center text-2xl my-5 ${theme=="DARK"?"text-white":"text-gray-200"}`}>{title}</div>
      <div className="w-full h-0.5 bg-gray-300 my-5"></div>
      <div className={`mx-5 ${theme=="DARK"?"text-white":"text-gray-200"} text-lg`}>{text}</div>
      <div className="flex justify-center">
        <button
          className={`bg-blue-600 w-full mx-5 text-lg my-5 rounded-xl transform transition-all hover:scale-105 ${theme=="DARK"?"hover:bg-gray-600":"hover:bg-slate-900"}`}
          onClick={onClick}
        >
         <span>Learn More</span>
        </button>
      </div>
    </div>
  );
}
