

export default function LearningPath({heading,subHeading,img,popular}) {
  return (
    <div className="border-2 md:w-96 py-6 px-2 border-gray-200 rounded-sm flex gap-5 relative">
      {popular?<div className="bg-orange-400 rounded-lg p-1 absolute -top-4 right-24">
        <h1 className="text-black text-sm font-semibold">Most Popular</h1>
      </div>:""}
        <h1><span className="font-bold" >{heading}</span> <span>{subHeading}</span></h1>
        <img className="h-20 w-20 md:h-32 md:w-32" src={img} alt="" />

      
    </div>
  )
}
