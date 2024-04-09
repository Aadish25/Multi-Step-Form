import option1 from "../../assets/option1.png";
import option2 from "../../assets/option2.png";
import option3 from "../../assets/option3.png";
import option4 from "../../assets/option4.png";
import Format2 from "../quesFormats/Format2";
const ques4Options = [
    { heading: "Arithmetic", subHeading: "Introductory", icon: option1 },
    { heading: "Basic Algebra", subHeading: "Foundational", icon: option2 },
    { heading: "Intermediate Algebra",subHeading: "Intermediate",icon: option3 },
    { heading: "Calculus", subHeading: "Advanced", icon: option4 },
  ];
export default function Ques4() {
  return (
    <Format2
    value={80}
    optionsArr={ques4Options}
    heading="Which is your math comfort level?"
    subHeading="Choose the highest level you feel confident in - you can always adjust later."
    next={5}
  />
  )
}
