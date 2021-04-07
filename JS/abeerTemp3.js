'use strict';





let newwinfo = JSON.parse(localStorage.getItem('personality'));
let newedu = JSON.parse(localStorage.getItem('Education'));
let newexp = JSON.parse(localStorage.getItem('Experiance'));
let newskill = JSON.parse(localStorage.getItem('Skills'));
let newlang = JSON.parse(localStorage.getItem('Language'));



////////////////////////////////////




document.getElementById('name').innerHTML= newwinfo.firstName + ' '+ newwinfo.lastName;
document.getElementById('name1').innerHTML= newwinfo.firstName + ' '+ newwinfo.lastName;
// document.getElementById('name2').innerHTML= newwinfo.firstName + ' '+ newwinfo.lastName;
document.getElementById('name3').innerHTML= newwinfo.firstName + ' '+ newwinfo.lastName;

document.getElementById('email').innerHTML= newwinfo.eMail;
document.getElementById('bod').innerHTML= newwinfo.bDate;
document.getElementById('location').innerHTML= newwinfo.locAddress;
document.getElementById('phone').innerHTML= newwinfo.telephonePersonal;
document.getElementById('bio').innerHTML= newwinfo.bioInfo;











document.getElementById('unName').innerHTML= newedu.unName;
document.getElementById('unMajor').innerHTML= newedu.unMajor;


document.getElementById('yearOfGraduate').innerHTML= newedu.yearOfGraduate;
// document.getElementById('unDegree').innerHTML= newedu.unDegree;




document.getElementById('langSelected').innerHTML= newlang.langSelected;
document.getElementById('rateLanguage').innerHTML= newlang.rateLanguage;



document.getElementById('skillName').innerHTML= newskill.skillName;
document.getElementById('placeOfLearning').innerHTML= newskill.placeOfLearning;
document.getElementById('starAt').innerHTML= newskill.starAt + ' to ' + newskill.finishAt;
// document.getElementById('finishAt').innerHTML= newskill.finishAt;



// document.getElementById('tiJob').innerHTML= newexp.tiJob;
document.getElementById('tiJob1').innerHTML= newexp.tiJob;
document.getElementById('tiJob2').innerHTML= newexp.tiJob;

document.getElementById('orgName').innerHTML= newexp.orgName;
document.getElementById('starAtt').innerHTML= newexp.starAt + ' to ' + newexp.finishAt;


// for(let i=0; i< Skills.skillName.length; i++){
//   if (i=>3)
//     break;
//   const skillId = `skill${i+1}`;
//   const skillplaceId =`skillPlace${i+1}`;
//   const smilldateId = `skillDate${i+1}`;
//   document.getElementById('skillId').innerHTML= skills.skillName[i];
//   document.getElementById('skillplaceId').innerHTML= skills.placeOfLearning[i];
//   document.getElementById('smilldateId').innerHTML= skills.starAt[i] + ' to ' + skills.finishAt[i];


// }


// //////to upload an image
// document.getElementsByClassName('imagePart')[0].addEventListener('mouseover', function(){
//     document.getElementById('imageLabel').style.display='inline';
//     document.getElementById('userImg').style.display = 'inline';
//   });
  
//   document.getElementsByClassName('imagePart')[0].addEventListener('mouseout', function(){
//     document.getElementById('imageLabel').style.display='none';
//     document.getElementById('userImg').style.display = 'block';
//   });
  
  let loadFile = function(event) {
    let image = document.getElementById('userImg');
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  
//   ////////////////////////