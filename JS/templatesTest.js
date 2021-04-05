let info;
let edu;
let exp;
let skill;
let lang;
// let eddu=[];
function loadPersonality() {
  const normalObject = JSON.parse(localStorage.getItem('personality')) || [];
  info = new Personality(normalObject);
  console.log(info);
}
function loadEducation() {
  const normalObject = JSON.parse(localStorage.getItem('Education')) || [];
  edu = new Education(normalObject);
  console.log(edu);
}
function loadExperiance() {
  const normalObject = JSON.parse(localStorage.getItem('Experiance')) || [];
  exp = new Experiance(normalObject);
  console.log(exp);
}
function loadSkills() {
  const normalObject = JSON.parse(localStorage.getItem('Skills')) || [];
  skill = new Skills(normalObject);
  console.log(skill);
}
function loadLanguage() {
  const normalObject = JSON.parse(localStorage.getItem('Language')) || [];
  lang = new Language(normalObject);
  console.log(lang);
}

// loadPersonality();
// loadEducation();
// loadExperiance();
// loadSkills();
// loadLanguage();
// console.log(info.getname());
// console.log(edu.getEduname().unName[0]);
// console.log(exp.getExpname());
// console.log(skill.getSkillname());
// console.log(lang.getLangname());
// console.log(info.getname());



// let major = document.getElementById('currentllyMajor');
// major.textContent=edu.getEduname().unName;
/*
the Id in HTML :
fullName
currentllyMajor
aboutMe
bDate
eMail
telephone
localAddress

eduMajor1
eduUN1
eduGraduate1

*/
function showPersonalityInformation (){
  loadPersonality();

  let fullName = document.getElementById('fullName');
  fullName.textContent=` ${info.getname().firstName} ${info.getname().lastName}`;
  let birthDate = document.getElementById('bDate');
  birthDate.textContent = `${info.getname().bDate}`;
  let emailAddress = document.getElementById('eMail');
  emailAddress.textContent=`${info.getname().eMail}  `;
  let telephone = document.getElementById('telephone');
  telephone.textContent = `${info.getname().telephonePersonal}  `;
  let localAddress = document.getElementById('localAddress');
  localAddress.textContent = `${info.getname().locAddress}  `;
}



function showEducationalInformation()
{

  loadEducation();

  let eduUN1 = document.getElementById('eduUN1');
  eduUN1.textContent=edu.getEduname().unName[0];
  let eduUN2 = document.getElementById('eduUN2');
  eduUN2.textContent=edu.getEduname().unName[1];
  let eduUN3 = document.getElementById('eduUN3');
  eduUN3.textContent=edu.getEduname().unName[2];

  let eduMajor1 = document.getElementById('eduMajor1');
  eduMajor1.textContent=edu.getEduname().unMajor[0];
  let eduMajor2 = document.getElementById('eduMajor2');
  eduMajor2.textContent=edu.getEduname().unMajor[1];
  let eduMajor3 = document.getElementById('eduMajor3');
  eduMajor3.textContent=edu.getEduname().unMajor[2];


  let eduGraduate1 = document.getElementById('eduGraduate1');
  eduGraduate1.textContent=edu.getEduname().yearOfGraduate[0];
  let eduGraduate2 = document.getElementById('eduGraduate2');
  eduGraduate2.textContent=edu.getEduname().yearOfGraduate[1];
  let eduGraduate3 = document.getElementById('eduGraduate3');
  eduGraduate3.textContent=edu.getEduname().yearOfGraduate[2];




}


function showExperianceInformation ()
{
 

  loadExperiance();
 console.log(exp.getExpname().orgName[0]);
  let exp1 = document.getElementById('exp1');
  exp1.textContent=exp.getExpname().tiJob[0];
  let exp2 = document.getElementById('exp2');
  exp2.textContent=exp.getExpname().tiJob[1];
  let exp3 = document.getElementById('exp3');
  exp3.textContent=exp.getExpname().tiJob[2];


  let expOrg1 = document.getElementById('expOrg1');
  expOrg1.textContent=exp.getExpname().orgName[0];
  let expOrg2 = document.getElementById('expOrg2');
  expOrg2.textContent=exp.getExpname().orgName[1];
  let expOrg3 = document.getElementById('expOrg3');
  expOrg3.textContent=exp.getExpname().orgName[2];


  let expStartAndFinish1 = document.getElementById('expStartAndFinish1');
  expStartAndFinish1.textContent= ` ${exp.getExpname().starAt[0]} - ${exp.getExpname().finishAt[0]}`;
  let expStartAndFinish2 = document.getElementById('expStartAndFinish2');
  expStartAndFinish2.textContent=` ${exp.getExpname().starAt[1]} - ${exp.getExpname().finishAt[1]}`;
  let expStartAndFinish3 = document.getElementById('expStartAndFinish3');
  expStartAndFinish3.textContent=` ${exp.getExpname().starAt[2]} - ${exp.getExpname().finishAt[2]}`;


}

function showSkillsInformation ()
{

  loadSkills();

 loadLanguage();
  let skill1 = document.getElementById('skill1');
  skill1.textContent=skill.getSkillname().skillName[0];
  let skill2 = document.getElementById('skill2');
  skill2.textContent=skill.getSkillname().skillName[1];
  let skill3 = document.getElementById('skill3');
  skill3.textContent=skill.getSkillname().skillName[2];

 let skill4 = document.getElementById('skill4');
  skill4.textContent=lang.getLangname().langSelected[0];
  let skill5 = document.getElementById('skill5');
  skill5.textContent=lang.getLangname().langSelected[1];


}


showPersonalityInformation ();
showEducationalInformation();
showExperianceInformation ();
showSkillsInformation ();

