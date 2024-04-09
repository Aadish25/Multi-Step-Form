

export default function LearningPath({heading,subHeading,img,popular}) {
  return (
    <div className="border-2 md:w-96 p-2 border-gray-200 rounded-sm flex gap-5">
        <h1><span className="font-bold" >{heading}</span> <span>{subHeading}</span></h1>
        <img className="h-20 w-20 md:h-32 md:w-32" src={img} alt="" />

      
    </div>
  )
}
