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
  const normalObject = JSON.parse(localStorage.getItem('personality')) || [];
  info = new Education(normalObject);
  console.log(edu);
}
function loadExperiance() {
  const normalObject = JSON.parse(localStorage.getItem('personality')) || [];
  info = new Experiance(normalObject);
  console.log(exp);
}
function loadSkills() {
  const normalObject = JSON.parse(localStorage.getItem('personality')) || [];
  info = new Personality(normalObject);
  console.log(skill);
}
function loadLanguage() {
  const normalObject = JSON.parse(localStorage.getItem('personality')) || [];
  info = new Skills(normalObject);
  console.log(lang);
}

loadPersonality();
loadEducation();
loadExperiance();
loadSkills();
loadLanguage();
console.log(info.getname().firstName);
console.log(info.getname().lastName);
console.log(info.getname().bDate);
console.log(info.getname().telephonePersonal);
console.log(info.getname().eMail);
console.log(info.getname().locAddress);

// Personality.all=info;
 
// console.log(Personality.all[firstName]);
let fname = document.getElementById('fnameAndlname');
fname.textContent=` ${info.getname().firstName} ${info.getname().lastName}`;