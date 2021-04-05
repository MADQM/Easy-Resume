function Education (unName,unMajor,yearOfGraduate,unDegree)
{
  this.unName = unName;
  this.unMajor= unMajor;
  this.yearOfGraduate=yearOfGraduate;
  this.unDegree=unDegree;
  this.getEduname = function()
  {
    return this.unName;
  };
  this.headerRander = function()
  {




    let tableRow2 = document.createElement('tr');
    tabelElement.appendChild(tableRow2);
    const tableData = document.createElement('td');
    tableRow2.appendChild(tableData);
    //  tableData.textContent=;
    let buttonEl = document.createElement('button');
    let eduDetails =[this.unName,this.unMajor,this.yearOfGraduate,this.unDegree];
    tableData.appendChild(buttonEl);
    buttonEl.textContent = 'X';


    for (let i = 0; i < eduDetails.length; i++){
      buttonEl.setAttribute('type', 'submit');
      buttonEl.setAttribute('name', 0);

      const tableData1 = document.createElement('td');




      // if (eduDetails[i].length === 1)

      tableRow2.appendChild(tableData1);
      tableData1.textContent=eduDetails[i];
      console.log(eduDetails[i]);






    }



  };
}
///////////////////////////////////////////

function Personality (firstName,lastName,bDate,telephonePersonal,eMail,locAddress)
{
  this.firstName=firstName;
  this.lastName=lastName;
  this.bDate=bDate;
  this.telephonePersonal=telephonePersonal;
  this.eMail=eMail;
  this.locAddress=locAddress;


  //   this.settingInfo = function (key , item)
  //   {
  //     let data= JSON.stringify(key ,item);
  //     localStorage.setItem(key,data);
  //   };
  //   Personality.settingInfo('firstName',this.firstName);
  //   Personality.settingInfo('lastName',this.lastName);
  //   Personality.settingInfo('bDate',this.bDate);
  //   Personality.settingInfo('telephonePersonal',this.telephonePersonal);
  //   Personality.settingInfo('eMail',this.eMail);
  //   Personality.settingInfo('locAddress',this.locAddress);
  // Personality.all.push(this);
  this.getname = function()
  {
    return this.firstName;
  };
  //   this.getlastName = function ()
  //   {
  //       return this.lastName;
  //   }

  // this.all.push(this);
}
// Personality.all=[];
//////////////////////////////////////////////////
function Experiance (tiJob,orgName,starAt,finishAt)
{
  this.tiJob = tiJob;
  this.orgName= orgName;
  this.starAt=starAt;
  this.finishAt=finishAt;
  this.getExpname = function()
  {
    return this.tiJob;
  };
  this.headerRander = function()
  {



    const tableRow2 = document.createElement('tr');
    tabelElement.appendChild(tableRow2);
    const tableData = document.createElement('td');
    tableRow2.appendChild(tableData);

    let buttonEl = document.createElement('button');
    let expDetails =[this.tiJob,this.orgName,this.starAt,this.finishAt];
    tableData.appendChild(buttonEl);
    buttonEl.textContent = 'X';

    for (let i = 0; i < expDetails.length; i++){
      buttonEl.setAttribute('type', 'submit');
      buttonEl.setAttribute('name', 0);
      const tableData1 = document.createElement('td');

      tableRow2.appendChild(tableData1);



      tableData1.textContent=expDetails[i];

    }



  };
}
//////////////////////////////////////////////////////////
function Skills (skillName,placeOfLearning,starAt,finishAt)
{
  this.skillName = skillName;
  this.placeOfLearning= placeOfLearning;
  this.starAt=starAt;
  this.finishAt=finishAt;
  this.getSkillname = function()
  {
    return this.skillName;
  };
  this.headerRander = function()
  {



    const tableRow2 = document.createElement('tr');
    tabelElement.appendChild(tableRow2);
    const tableData = document.createElement('td');
    tableRow2.appendChild(tableData);

    let buttonEl = document.createElement('button');
    let expDetails =[this.skillName,this.placeOfLearning,this.starAt,this.finishAt];
    tableData.appendChild(buttonEl);
    buttonEl.textContent = 'X';

    for (let i = 0; i < expDetails.length; i++){
      buttonEl.setAttribute('type', 'submit');
      buttonEl.setAttribute('name', 0);
      const tableData1 = document.createElement('td');

      tableRow2.appendChild(tableData1);



      tableData1.textContent=expDetails[i];

    }



  };
}

/////////////////////////////////////////////
function Language (langSelected,rateLanguage)
{
  this.langSelected = langSelected;
  this.rateLanguage= rateLanguage;
  this.getLangname = function()
  {
    return this.langSelected;
  };
  this.headerRander = function()
  {



    const tableRow2 = document.createElement('tr');
    tabelElement.appendChild(tableRow2);
    const tableData = document.createElement('td');
    tableRow2.appendChild(tableData);

    let buttonEl = document.createElement('button');
    let expDetails =[this.langSelected,this.rateLanguage];
    tableData.appendChild(buttonEl);
    buttonEl.textContent = 'X';

    for (let i = 0; i < expDetails.length; i++){
      buttonEl.setAttribute('type', 'submit');
      buttonEl.setAttribute('name', 0);
      const tableData1 = document.createElement('td');

      tableRow2.appendChild(tableData1);



      tableData1.textContent=expDetails[i];

    }



  };
}

