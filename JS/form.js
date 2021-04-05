






// function Personality (firstName,lastName,bDate,telephonePersonal,eMail,locAddress)
// {
//   this.firstName=firstName;
//   this.lastName=lastName;
//   this.bDate=bDate;
//   this.telephonePersonal=telephonePersonal;
//   this.eMail=eMail;
//   this.locAddress=locAddress;

//   Personality.all.push(this);
//   this.getname = function()
//   {
//     return this.firstName;
//   };


// }
// Personality.all=[];




let newInformation ;

let myForm = document.getElementById('perForm');

let formSection = document.getElementById('formInfoSection');

myForm.addEventListener('submit', holdInformation);

function holdInformation(event)
{

  event.preventDefault();
  //   console.log(event.target.fName.value);
  //

  let firstName = event.target.fName.value;
  let lastName = event.target.lName.value;
  let bDate = event.target.bDate.value;
  let telephonePersonal = event.target.tPhone.value;
  let eMail = event.target.eMail.value;
  let locAddress = event.target.adress.value;

  newInformation=new Personality (firstName,lastName,bDate,telephonePersonal,eMail,locAddress);








}

// formSection.removeEventListener('submit', holdInformation);
// function settingInfo(key,item)
// {
//   let data= JSON.stringify(key ,item);
//   localStorage.setItem(key,data);
// }

// settingInfo();
let confirmWarning = document.getElementById('connfirmInfo');
let connnfirm = document.getElementById('connnfirmInfo');
confirmWarning.addEventListener('submit',warningConfirm);
function warningConfirm()
{

  let confirmm = confirm('Are You Sure ?');
  if (confirmm === true) {


    // settingInfo('firstName',firstName);
    // settingInfo('lastName',lastName);
    // settingInfo('bDate',bDate);
    // settingInfo('telephonePersonal',telephonePersonal);
    // settingInfo('eMail',eMail);
    // settingInfo('locAddress',locAddress);


    let data= JSON.stringify(newInformation);
    localStorage.setItem('personality',data);
    formSection.removeEventListener('submit', holdInformation);
  }
  else {
    alert('please reconsidering your inputs');
  }
}




