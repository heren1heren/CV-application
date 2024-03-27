import {
  EducationalInputSection,
  PersonalInputSection,
  PracticalInputSection,
} from './components/left-input-components/app';
import './App.scss';
import {
  EducationalDisplaySection,
  ExperienceDisplaySection,
  PersonalDisplaySection,
} from './components/other-components/app';
import { useState } from 'react';

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
  const handleChangePersonalInfo = (info) => {
    setPersonalInfo(...personalInfo, info: '')
  }
  const handleResetClick = () => {
    // may be we don't need to set boolean?
    setIsReset(true);
    // when we start pushing inputs value -> setIsReset(false);
  };

  return (
    <div className="main-wrapper">
      <LeftInputForm handleResetClick={handleResetClick} handleChange={handleChangePersonalInfo} />
      <DisplayForm isReset={isReset} personalInfo={personalInfo} />
    </div>
  );
}
function LeftInputForm({ handleResetClick,handleChange}) {
  return (
    <aside className="input-form">
      <PersonalInputSection  handleChange={handleChange}/>
      <EducationalInputSection />
      <PracticalInputSection />
      <ResetButton handleResetClick={handleResetClick} />
    </aside>
  );
}

function DisplayForm({ isReset, personalInfo, experienceInfo, practicalInfo }) {
  // console.log(isReset);

  if (isReset === true) {
    // reset inputs' values.
    // return <main className="display-form"></main>;
  }
  return (
    <main className="display-form">
      <PersonalDisplaySection personalInfo={personalInfo} />
      <EducationalDisplaySection />
      <ExperienceDisplaySection />
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
