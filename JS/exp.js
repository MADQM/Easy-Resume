
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
let tiJob =[];
let orgName = [];
let starAt =[];
let finishAt =[];

myForm.addEventListener('submit',addNewExperiance);

function addNewExperiance(event)
{


  event.preventDefault();
  counterClick++;
  if(counterClick<=1){
    table();
  }
  tiJob.push(event.target.tiJob.value);
  orgName.push(event.target.orgName.value);
  starAt.push(event.target.starAt.value);
  finishAt.push(event.target.finishAt.value);


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

