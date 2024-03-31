import './displayComponent.scss';
export function PersonalDisplaySection({ personalInfo }) {
  /*
   * structuring display-section?
   */

  return (
    <div className="personal-display-section">
      <p className="name-p">{personalInfo.name}</p>
      <p className="email-p">Email:{personalInfo.email}</p>
      <p className="number-phone-p">Phone:{personalInfo.phoneNumber}</p>
    </div>
  );
}
export function EducationalDisplaySection({ practicalInfo }) {
  /*
   * style it
   */
  return (
    <div className="educational-display-section">
      <h2>Education:</h2>
      <p className="titleOfStudy-p">program: {practicalInfo.titleOfStudy}</p>
      <p className="school-p">school: {practicalInfo.school}</p>
      <p className="startDate-p">startDate: {practicalInfo.startDate}</p>
      <p className="endDate-p">endDate: {practicalInfo.endDate}</p>
    </div>
  );
}

export function ExperienceDisplaySection({ experienceInfo }) {
  /*
   * style it
   */

  return (
    <div className="experience-display-section">
      <h2>Experience:</h2>
      <p className="company-p">Company: {experienceInfo.company}</p>
      <p className="position-p">
        Position with Date: {experienceInfo.position}
      </p>
      <p className="jobDescription-p">
        Description: {experienceInfo.jobDescription}
      </p>
    </div>
  );
}

// function PersonalInputs() {
//   return;
// }
