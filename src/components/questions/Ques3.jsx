import Quotes from "../quotes/Quotes";
import Quote1Img from "../../assets/quote1.png";


export default function Ques3() {
  return (
    <Quotes
      value={60}
      heading="You're in the right place"
      subHeading="Brilliant gets you hands-on to help improve your professional skills and knowledge.You'll interact with concepts and solve fun problems in maths,science,and computer science."
      img={Quote1Img}
      star=""
      italic={false}
      author=""
      next={4}
    />
  );
}
