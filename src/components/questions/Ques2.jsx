import graph from "../../assets/graph.svg";
import earth from "../../assets/earth.svg";
import arrow from "../../assets/archery-arrows.svg";
import archery from "../../assets/archery.svg";
import eye from "../../assets/eye.svg";
import Format1 from "../quesFormats/Format1";
const ques2Options = [
  { heading: "Learning specific skills to advance my career", icon: graph },
  { heading: "Exploring new topics I'm interested in", icon: earth },
  { heading: "Refreshing my fath foundations", icon: arrow },
  { heading: "Exercising my brain to stay sharp", icon: archery },
  { heading: "Something else", icon: eye },
];
export default function Ques2() {
  return (
    <Format1
      value={40}
      optionsArr={ques2Options}
      heading="Which are you most interested in?"
      subHeading="Choose just one.This will help us get you started(but won't limit your experience)."
      next={3}
    />
  );
}
