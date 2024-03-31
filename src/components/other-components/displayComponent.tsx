import './displayComponent.scss';
export function PersonalDisplaySection({ personalInfo }) {
  /*
   * structuring display-section?
   */

  return (
    <div className="personal-display-section">
      <p className="name-p">{personalInfo.name}</p>
      <p className="email-p">{personalInfo.email}</p>
      <p className="number-phone-p">{personalInfo.phoneNumber}</p>
    </div>
  );
}
export function EducationalDisplaySection({ practicalInfo }) {
  /*
   * style it
   */
  return (
    <div className="educational-display-section">
      <p className="school-p">{practicalInfo.school}</p>
      <p className="titleOfStudy-p">{practicalInfo.titleOfStudy}</p>
      <p className="startDate-p">{practicalInfo.startDate}</p>
      <p className="endDate-p">{practicalInfo.endDate}</p>
    </div>
  );
}

export function ExperienceDisplaySection({ experienceInfo }) {
  /*
   * style it
   */

  return (
    <div className="experience-display-section">
      <p className="company-p">{experienceInfo.company}</p>
      <p className="position-p">{experienceInfo.position}</p>
      <p className="jobDescription-p">{experienceInfo.jobDescription}</p>
    </div>
  );
}

// function PersonalInputs() {
//   return;
// }
