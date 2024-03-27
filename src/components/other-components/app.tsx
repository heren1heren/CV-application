import './style.scss';

export function PersonalDisplaySection({ isReset, personalInfo }) {
  /*
   * structuring display-section?
   */
  console.log(personalInfo);

  return (
    <div className="personal-display-section">
      <p className="name-p">{personalInfo.name}</p>
      <p className="email-p">{personalInfo.email}</p>
      <p className="number-phone-p">{personalInfo.phoneNumber}</p>
    </div>
  );
}
export function EducationalDisplaySection({ isReset }) {
  /*
   * please give me instruction to complete me
   */
  return <div className="educational-display-section"></div>;
}

export function ExperienceDisplaySection({ isReset }) {
  /*
   * please give me instruction to complete me
   */

  return <div className="experience-display-section"></div>;
}

// function PersonalInputs() {
//   return;
// }
