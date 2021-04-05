
// const tabelElement = document.getElementById('table');
// tabelElement.addEventListener('click', removeItemFromCart);



// const section = document.getElementById('formSection');
// const articleElement = document.createElement('article');
// section.appendChild(articleElement);





// Experiance.all =[]; //to set values to local storage
// // console.log(Experiance.all);
// function Experiance (tiJob,orgName,orgdetails,starAt,finishAt)
// {
//   this.tiJob = tiJob;
//   this.orgName= orgName;
//   this.starAt= starAt;
//   this.finishAt= finishAt;
//   this.orgdetails= orgdetails;

//   Experiance.all.push(this); //to set values to local storage
//   sittingItems();
// }

// // Experiance.prototype.getProparites = function(){
// //   return this.tiJob;
// // }

// Experiance.prototype.headerRander = function()
// {



//   const tableRow2 = document.createElement('tr');
//   tabelElement.appendChild(tableRow2);
//   const tableData = document.createElement('td');
//   tableRow2.appendChild(tableData);

//   let buttonEl = document.createElement('button');


//   let expDetails =[this.tiJob,this.orgName,this.orgdetails,this.starAt,this.finishAt];
//   tableData.appendChild(buttonEl);
//   buttonEl.textContent = 'X';

//   for (let i = 0; i < expDetails.length; i++){
//     // buttonEl.setAttribute('type', 'submit');
//     // buttonEl.setAttribute('name', 0);

//     const tableData1 = document.createElement('td');
//     tableRow2.appendChild(tableData1);



//     tableData1.textContent=expDetails[i];
//     // console.log(Experiance.all);
//     // console.log(Experiance.all[i]);
//     // console.log(expDetails[i]);

//   }

// };




// function removeItemFromCart(event)
// {
//   tabelElement.deleteRow(1);
// }




// function table()
// {


//   articleElement.appendChild(tabelElement);
//   const tableHeaderRow1 = document.createElement('tr');
//   tabelElement.appendChild(tableHeaderRow1);
//   const tableHeader5 = document.createElement('th');
//   tableHeaderRow1.appendChild(tableHeader5);
//   tableHeader5.textContent='Remove';
//   const tableHeader = document.createElement('th');
//   tableHeaderRow1.appendChild(tableHeader);
//   tableHeader.textContent='Title Name';

//   const tableHeader2 = document.createElement('th');
//   tableHeaderRow1.appendChild(tableHeader2);
//   tableHeader2.textContent='Organaization Name';
//   const tableHeader3 = document.createElement('th');
//   tableHeaderRow1.appendChild(tableHeader3);
//   tableHeader3.textContent='Start At';
//   const tableHeader4 = document.createElement('th');
//   tableHeaderRow1.appendChild(tableHeader4);
//   tableHeader4.textContent='Finish At';
// }

// let myForm = document.getElementById('expForm');
// // let formSection = document.getElementById('formSection');
// let counterClick = 0;
// myForm.addEventListener('submit',addNewExperiance);



// function addNewExperiance(event)
// {

//   event.preventDefault();
//   counterClick++;
//   if(counterClick<=1){
//     table();
//   }
//   let tiJob = event.target.tiJob.value;
//   let orgName = event.target.orgName.value;
//   let orgdetails= event.target.orgdetails.value;
//   let starAt = event.target.starAt.value;
//   let finishAt = event.target.finishAt.value;


//   const newExperiance = new Experiance (tiJob,orgName,orgdetails, starAt,finishAt);

//   newExperiance.headerRander();

//   //   newEducation.render();


// }


// ///////////////


// //to set values to local storage
// function sittingItems(){
//   let data = JSON.stringify(Experiance.all);
//   localStorage.setItem('Experiance', data);
// }

// let anotherExp;
// // to get values from local storage
// function gettingItem() {
//   // let stringObj = localStorage.getItem('Experiance');
//   let normalObj = JSON.parse(localStorage.getItem('Experiance')) || [];


//   // if (normalObj !== null) {

//   // Experiance.all = normalObj;
//   // }
//   // anotherExp = new Experiance(tiJob,orgName,orgdetails, starAt,finishAt);
//   // console.log(normalObj);
//   console.log(Experiance.all);

// }

// gettingItem();
// // console.log(anotherExp.Experiance().tiJob);


// ////////////////////////////////////////

// // the function of the portfolio html


// // let experianceDiv =document.getElementById('experience');

// function theExpName(){

//   for(let i=0; i<Experiance.all.length; i++){
//     // let expName = document.getElementById('tiJob');
//     let exp1position = document.getElementById('exp1position');
//     exp1position.textContent = Experiance.all[i].tiJob;
//   }
// }
// theExpName();




/////////////////////////////////////////////



const tabelElement = document.getElementById('table');
tabelElement.addEventListener('click', removeItemFromCart);
// function Experiance (tiJob,orgName,starAt,finishAt)
// {
//   this.tiJob = tiJob;
//   this.orgName= orgName;
//   this.starAt=starAt;
//   this.finishAt=finishAt;
//   this.headerRander = function()
//   {



//     const tableRow2 = document.createElement('tr');
//     tabelElement.appendChild(tableRow2);
//     const tableData = document.createElement('td');
//     tableRow2.appendChild(tableData);

//     let buttonEl = document.createElement('button');
//     let expDetails =[this.tiJob,this.orgName,this.starAt,this.finishAt];
//     tableData.appendChild(buttonEl);
//     buttonEl.textContent = 'X';

//     for (let i = 0; i < expDetails.length; i++){
//       buttonEl.setAttribute('type', 'submit');
//       buttonEl.setAttribute('name', 0);
//       const tableData1 = document.createElement('td');

//       tableRow2.appendChild(tableData1);



//       tableData1.textContent=expDetails[i];

//     }



//   };
// }


const tabelElement = document.getElementById('table');
tabelElement.addEventListener('click', removeItemFromCart);
// function Experiance (tiJob,orgName,starAt,finishAt)
// {
//   this.tiJob = tiJob;
//   this.orgName= orgName;
//   this.starAt=starAt;
//   this.finishAt=finishAt;
//   this.headerRander = function()
//   {



//     const tableRow2 = document.createElement('tr');
//     tabelElement.appendChild(tableRow2);
//     const tableData = document.createElement('td');
//     tableRow2.appendChild(tableData);

//     let buttonEl = document.createElement('button');
//     let expDetails =[this.tiJob,this.orgName,this.starAt,this.finishAt];
//     tableData.appendChild(buttonEl);
//     buttonEl.textContent = 'X';

//     for (let i = 0; i < expDetails.length; i++){
//       buttonEl.setAttribute('type', 'submit');
//       buttonEl.setAttribute('name', 0);
//       const tableData1 = document.createElement('td');

//       tableRow2.appendChild(tableData1);



//       tableData1.textContent=expDetails[i];

//     }



//   };
// }


function removeItemFromCart(event)
{
  tabelElement.deleteRow(1);
}
const section = document.getElementById('formSection');
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
  tableHeader.textContent='Title Name';

  const tableHeader2 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader2);
  tableHeader2.textContent='Organaization Name';
  const tableHeader3 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader3);
  tableHeader3.textContent='Start At';
  const tableHeader4 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader4);
  tableHeader4.textContent='Finish At';
}
let myForm = document.getElementById('expForm');
let formSection = document.getElementById('formSection');
let counterClick = 0;
myForm.addEventListener('submit',addNewExperiance);

function addNewExperiance(event)
{


  event.preventDefault();
  counterClick++;
  if(counterClick<=1){
    table();
  }
  let tiJob = event.target.tiJob.value;
  let orgName = event.target.orgName.value;
  let starAt = event.target.starAt.value;
  let finishAt = event.target.finishAt.value;


  const newExperiance = new Experiance (tiJob,orgName,starAt,finishAt);
  newExperiance.headerRander();
  //   newEducation.render();

  let confirmWarning = document.getElementById('connfirm');
  let connnfirm = document.getElementById('connnfirm');
  confirmWarning.addEventListener('submit',warningConfirm);
  function warningConfirm()
  {

    let confirmm = confirm('Are You Sure ?');
    if (confirmm === true) {
      { let data= JSON.stringify(newExperiance);
        localStorage.setItem('Experiance',data);}
    } else {
      alert('please reconsidering your inputs');
    }
  }
}

