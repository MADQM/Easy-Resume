'use strict';

//////to upload an image
document.getElementsByClassName('imagePart')[0].addEventListener('mouseover', function(){
  document.getElementById('imageLabel').style.display='inline';
  document.getElementById('userImg').style.display = 'inline';
});

document.getElementsByClassName('imagePart')[0].addEventListener('mouseout', function(){
  document.getElementById('imageLabel').style.display='none';
  document.getElementById('userImg').style.display = 'block';
});

let loadFile = function(event) {
  let image = document.getElementById('userImg');
  image.src = URL.createObjectURL(event.target.files[0]);
};

////////////////////////



'use strict';





let newinfo = JSON.parse(localStorage.getItem('personality'));
let newedu = JSON.parse(localStorage.getItem('Education'));
let newexp = JSON.parse(localStorage.getItem('Experiance'));
let newskill = JSON.parse(localStorage.getItem('Skills'));
let newlang = JSON.parse(localStorage.getItem('Language'));






console.log(newinfo.firstName);
document.getElementById('name').innerHTML= newinfo.firstName + ' '+ newinfo.lastName;
document.getElementById('email').innerHTML= newinfo.eMail;
document.getElementById('bod').innerHTML= newinfo.bDate;
document.getElementById('location').innerHTML= newinfo.locAddress;
document.getElementById('phone').innerHTML= newinfo.telephonePersonal;
document.getElementById('bio').innerHTML= newinfo.bioInfo;





////////////////////////////////////

document.getElementById('unName').innerHTML= newedu.unName;
document.getElementById('unMajor').innerHTML= newedu.unMajor;
document.getElementById('unMajor2').innerHTML= newedu.unMajor;
document.getElementById('yearOfGraduate').innerHTML= newedu.yearOfGraduate;
document.getElementById('unDegree').innerHTML= newedu.unDegree;



document.getElementById('langSelected').innerHTML= newlang.langSelected;
document.getElementById('rateLanguage').innerHTML= newlang.rateLanguage;


document.getElementById('skillName').innerHTML= newskill.skillName;
document.getElementById('placeOfLearning').innerHTML= newskill.placeOfLearning;
document.getElementById('starAt').innerHTML= newskill.starAt + ' to ' + newskill.finishAt;
// document.getElementById('finishAt').innerHTML= newskill.finishAt;



document.getElementById('tiJob').innerHTML= newexp.tiJob;
document.getElementById('orgName').innerHTML= newexp.orgName;
document.getElementById('starAtt').innerHTML= newexp.starAt + ' to ' + newexp.finishAt;
