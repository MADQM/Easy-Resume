'use strict';







const tabelElement = document.getElementById('tableEdu');
tabelElement.addEventListener('click', removeItemFromCart);



function removeItemFromCart(event)
{
  tabelElement.deleteRow(1);
}

// function removeItem(item) {

// this.splice(item,1);


// }

// Education.prototype.render()
// {


// };



// this.tabelElement.splice(event.target.id,1);
// functio removeItem(event)
// {

// }



const section = document.getElementById('formEduSection');
const articleElement = document.createElement('article');
section.appendChild(articleElement);



function table()
{


  articleElement.appendChild(tabelElement);
  const tableHeaderRow1 = document.createElement('tr');
  tabelElement.appendChild(tableHeaderRow1);
  const tableHeader5 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader5);
  tableHeader5.textContent='Remove';
  const tableHeader = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader);
  tableHeader.textContent='University Name';

  const tableHeader2 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader2);
  tableHeader2.textContent='Major';
  const tableHeader3 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader3);
  tableHeader3.textContent='Year Of Graduate';
  const tableHeader4 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader4);
  tableHeader4.textContent='Degree';
}
let myEduForm = document.getElementById('eduForm');
let formEduSection = document.getElementById('formEduSection');
let counterClick = 0;
let unName = [];
let unMajor = [];
let yearOfGraduate = [];
let unDegree = [];

myEduForm.addEventListener('submit',addNewEducation);


function addNewEducation(event)
{


  event.preventDefault();
  counterClick++;
  if(counterClick<=1){
    table();
  }
  unName.push( event.target.unvName.value);
  unMajor.push( event.target.unMajor.value);
  yearOfGraduate.push( event.target.yearOfGraduate.value);
  unDegree.push( event.target.unDegree.value);


  const newEducation = new Education (unName,unMajor,yearOfGraduate,unDegree);
  newEducation.headerRander();

  //   newEducation.render();
  let confirmEduWarning = document.getElementById('connfirmEdu');
  let connnfirmEdu = document.getElementById('connnfirmEdu');
  confirmEduWarning.addEventListener('submit',warningEduConfirm);
  function warningEduConfirm()
  {

    let confirmm = confirm('Are You Sure ?');
    if (confirmm === true) {
      { let data= JSON.stringify(newEducation);
        localStorage.setItem('Education',data);}
    } else {
      alert('please reconsidering your inputs');
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
