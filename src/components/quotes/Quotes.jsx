import { Link } from "react-router-dom";
export default function Quotes({
  value,
  heading,
  subHeading,
  img,
  star,
  italic,
  author,
  next,
}) {
  return (
    <div className="py-8 px-12 md:px-24 h-full w-full flex flex-col gap-5 ">
      <div className="flex items-center gap-5">
       <Link to={next > 5 ? `/ques-${next-2}` : `/ques-${next-2}`}> <i
          className="fa-solid fa-chevron-left cursor-pointer"
        ></i></Link>
        <progress
          className="progress progress-success h-1 w-full"
          value={value}
          max="100"
        ></progress>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 items-center mt-5  w-full">
        <img className="sm:h-96 md:w-96" src={img} alt="" />
        <div className="flex flex-col  justify-center md:w-1/2 gap-5">
          <h3 className="text-3xl font-bold">{heading}</h3>
          {star.length == 0 ? (
            ""
          ) : (
            <img className="md:h-20 w-1/2" src={star} alt="" />
          )}
          <p className={`${italic ? " italic font-semibold" : ""}`}>
            "{subHeading}"
          </p>
          {author.length == 0 ? "" : <p className="font-bold">-{author}</p>}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link to={next > 5 ? "/results" : `/ques-${next}`}>
          <button
            className="btn max-w-max px-8 bg-black text-white hover:bg-green-400"
            onClick={() => dispatch(increment())}
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
