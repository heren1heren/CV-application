import {
  EducationalInputSection,
  PersonalInputSection,
  PracticalInputSection,
} from './components/left-input-components/leftInput';
import './App.scss';
import {
  EducationalDisplaySection,
  ExperienceDisplaySection,
  PersonalDisplaySection,
} from './components/other-components/displayComponent';
import { useState } from 'react';
import { log } from 'console';

export function PageHeader() {
  return (
    <header className="page-header">
      <p> CV application</p>
    </header>
  );
}
/**
 * * what to do:
 * * lifting and passing state from personal-input-section to main-wrapper
 * * passing that information down to Displayform -> personal-display-section
 */
export function MainWrapper() {
  const [isReset, setIsReset] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Heren',
    email: 'a@gmail.com',
    phoneNumber: '111',
  });
  const [practicalInfo, setPracticalInfo] = useState({
    school: 'my School name',
    titleOfStudy: 'my diploma name',
    startDate: ' date/date/date',
    endDate: ' date/date/date',
  });
  const [experienceInfo, setExperienceInfo] = useState({
    company: 'my company',
    position: ' my position name',
    jobDescription: 'description of the job',
  });

  const handlePersonalInfoChange = (objData) => {
    setPersonalInfo((prevState) => ({ ...prevState, ...objData }));
  };

  const handlePracticalInfoChange = (objData) => {
    setPracticalInfo((prevState) => ({ ...prevState, ...objData }));
  };

  const handleExperienceInfoChange = (objData) => {
    setExperienceInfo((prevState) => ({ ...prevState, ...objData }));
  };
  const handleResetClick = () => {
    setIsReset(true);
    // when we start pushing inputs value -> setIsReset(false);
  };

  return (
    <div className="main-wrapper">
      <LeftInputForm
        handleResetClick={handleResetClick}
        handlePersonalInfoChange={handlePersonalInfoChange}
        handlePracticalInfoChange={handlePracticalInfoChange}
        handleExperienceInfoChange={handleExperienceInfoChange}
      />
      <DisplayForm
        isReset={isReset}
        personalInfo={personalInfo}
        practicalInfo={practicalInfo}
        experienceInfo={experienceInfo}
      />
    </div>
  );
}
function LeftInputForm({
  handleResetClick,
  handlePersonalInfoChange,
  handlePracticalInfoChange,
  handleExperienceInfoChange,
}) {
  return (
    <aside className="input-form">
      <PersonalInputSection handleChange={handlePersonalInfoChange} />
      <EducationalInputSection handleChange={handlePracticalInfoChange} />
      <PracticalInputSection handleChange={handleExperienceInfoChange} />
      <ResetButton handleResetClick={handleResetClick} />
    </aside>
  );
}

function DisplayForm({ isReset, personalInfo, experienceInfo, practicalInfo }) {
  if (isReset === true) {
    // reset inputs' values.
    // return <main className="display-form"></main>;
  }
  console.log(practicalInfo);
  console.log(experienceInfo);
  return (
    <main className="display-form">
      <PersonalDisplaySection personalInfo={personalInfo} />
      <EducationalDisplaySection practicalInfo={practicalInfo} />
      <ExperienceDisplaySection experienceInfo={experienceInfo} />
    </main>
  );
}
function ResetButton({ handleResetClick }) {
  return (
    <button className="reset-button" onClick={handleResetClick}>
      Reset form
    </button>
  );
}
