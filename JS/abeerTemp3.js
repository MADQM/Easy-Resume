'use strict';





let newinfo = JSON.parse(localStorage.getItem('personality'));
let newedu = JSON.parse(localStorage.getItem('Education'));
let newexp = JSON.parse(localStorage.getItem('Experiance'));
let newskill = JSON.parse(localStorage.getItem('Skills'));
let newlang = JSON.parse(localStorage.getItem('Language'));



////////////////////////////////////




document.getElementsb('name').innerHTML= newinfo.firstName + ' '+ newinfo.lastName;
document.getElementsb('name1').innerHTML= newinfo.firstName + ' '+ newinfo.lastName;
document.getElementsb('name2').innerHTML= newinfo.firstName + ' '+ newinfo.lastName;
document.getElementsb('name3').innerHTML= newinfo.firstName + ' '+ newinfo.lastName;

document.getElementById('email').innerHTML= newinfo.eMail;
document.getElementById('bod').innerHTML= newinfo.bDate;
document.getElementById('location').innerHTML= newinfo.locAddress;
document.getElementById('phone').innerHTML= newinfo.telephonePersonal;










document.getElementsb('unName').innerHTML= newedu.unName;
document.getElementById('unMajor').innerHTML= newedu.unMajor;


document.getElementById('yearOfGraduate').innerHTML= newedu.yearOfGraduate;
// document.getElementById('unDegree').innerHTML= newedu.unDegree;




document.getElementById('langSelected').innerHTML= newlang.langSelected;
document.getElementById('rateLanguage').innerHTML= newlang.rateLanguage;



document.getElementById('skillName').innerHTML= newskill.skillName;
document.getElementById('placeOfLearning').innerHTML= newskill.placeOfLearning;
document.getElementById('starAt').innerHTML= newskill.starAt + ' to ' + newskill.finishAt;
// document.getElementById('finishAt').innerHTML= newskill.finishAt;



document.getElementById('tiJob').innerHTML= newexp.tiJob;
document.getElementById('tiJob1').innerHTML= newexp.tiJob;
document.getElementById('tiJob2').innerHTML= newexp.tiJob;

document.getElementById('orgName').innerHTML= newexp.orgName;
document.getElementById('starAtt').innerHTML= newexp.starAt + ' to ' + newexp.finishAt;

