import Quotes from "../quotes/Quotes";
import Quote2Img from "../../assets/quote2.png";
import Star from "../../assets/star.jpg";

export default function Ques5() {
  return (
    <Quotes
      value={100}
      heading="You're on your way!"
      subHeading="Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."
      img={Quote2Img}
      star={Star}
      italic={true}
      author="Jacob S."
      next="6"
    />
  );
}
