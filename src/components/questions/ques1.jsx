import Format1 from "../quesFormats/Format1";
import aunty from "../../assets/aunty.svg";
import dad from "../../assets/dad.svg";
import doctor from "../../assets/doctor.svg";
import student from "../../assets/student-girl.svg";
import teacher from "../../assets/teacher.svg";
import thinking from "../../assets/thinking.svg";
const ques1Options = [
  { heading: "Student", subHeading: "or soon to be enrolled", icon: student },
  { heading: "Professional", subHeading: "pursing a career", icon: doctor },
  { heading: "Parent", subHeading: "of a school-age child", icon: dad },
  { heading: "Lifelong learner", icon: aunty },
  { heading: "Teacher", icon: teacher },
  { heading: "Other", icon: thinking },
];

export default function Ques1() {
  return (
    <Format1
      value={20}
      optionsArr={ques1Options}
      heading="Which describes you best?"
      subHeading="This will help us to personalize your experience."
      next={2}
    />
  );
}
