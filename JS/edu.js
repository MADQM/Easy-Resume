// 'use strict'

// const btnAdd = document.querySelector('#btnAdd');
// const btnRemove = document.querySelector('#btnRemove');
// const sb = document.querySelector('#list');
// const name = document.querySelector('#unvName');
// const major = document.querySelector('#unMajor');
// const yearOfGraduate = document.querySelector('#yearOfGraduate');
// const unDegree = document.querySelector('#unDegree');

// btnAdd.onclick = (e) => {
//     e.preventDefault();

//     // validate the option
//     if (name.value == '' || major.value =='' || yearOfGraduate.value =='' || unDegree.value =='') {
//         alert('Please enter the empty field.');
//         return;
//     }
//     // create a new option
//     const unvName = new Option(name.value, name.value);
//     const unMajor = new Option(major.value, major.value);
//     const year = new Option(yearOfGraduate.value, yearOfGraduate.value);
//     const undegree = new Option(unDegree.value, unDegree.value);


//     // add it to the list
//     sb.add(unvName,undefined);
//     sb.add(unMajor,undefined);
//     sb.add(year,undefined);
//     sb.add(undegree,undefined);
//     innerHTML='gvjychvukgjhybj';

//     // reset the value of the input
//     unvName.value = '';
//     major.value = '';
//     yearOfGraduate.value = '';
//     unDegree.value = '';
//     unvName.focus();
//     major.focus();
//     yearOfGraduate.focus();
//     unDegree.focus();
// };

// // remove selected option
// btnRemove.onclick = (e) => {
//     e.preventDefault();

//     // save the selected option
//     let selected = [];

//     for (let i = 0; i < sb.options.length; i++) {
//         selected[i] = sb.options[i].selected;
//     }

//     // remove all selected option
//     let index = sb.options.length;
//     while (index--) {
//         if (selected[index]) {
//             sb.remove(index);
//         }
//     }
// };
function Education (unName,unMajor,yearOfGraduate,unDegree)
{
    this.unName = unName;
    this.unMajor= unMajor;
    this.yearOfGraduate=yearOfGraduate;
    this.unDegree=unDegree;
    this.headerRander = function()
    {
      
               
            
               const tableRow2 = document.createElement('tr');
               tabelElement.appendChild(tableRow2);
               const tableData = document.createElement('td');
               tableRow2.appendChild(tableData);
               tableData.textContent=this.unName;
               let eduDetails =[this.unMajor,this.yearOfGraduate,this.unDegree]
               for (let i = 0; i < eduDetails.length; i++){
                const tableData1 = document.createElement('td');
            
                tableRow2.appendChild(tableData1);
            
            
            
                tableData1.textContent=eduDetails[i];
                
               }
           
            
              
    };
}



// Education.prototype.render()
// {

  
// };








     const section = document.getElementById('formSection');
const articleElement = document.createElement('article');
section.appendChild(articleElement);
const tabelElement = document.createElement('table');

function table()
{ 


articleElement.appendChild(tabelElement);
     const tableHeaderRow1 = document.createElement('tr');
         tabelElement.appendChild(tableHeaderRow1);
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
let myForm = document.getElementById('eduForm');
let formSection = document.getElementById('formSection');
let counterClick = 0;
myForm.addEventListener('submit',addNewEducation);

function addNewEducation(event)
{
    
 
  event.preventDefault();
counterClick++;
if(counterClick<=1){
  table();
}
  let unName = event.target.unvName.value;
  let unMajor = event.target.unMajor.value;
  let yearOfGraduate = event.target.yearOfGraduate.value;
  let unDegree = event.target.unDegree.value;
  
 
  const newEducation = new Education (unName,unMajor,yearOfGraduate,unDegree);
  newEducation.headerRander();
//   newEducation.render();

}

