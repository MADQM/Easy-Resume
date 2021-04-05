let edu;
// let eddu=[];
function loadCart() {
  const person = JSON.parse(localStorage.getItem('personality')) || [];
  edu = new Personality(person);
  console.log(edu);
}

loadCart();
console.log(edu.getname().firstName);
console.log(edu.getname().lastName);
console.log(edu.getname().bDate);
console.log(edu.getname().telephonePersonal);
console.log(edu.getname().eMail);
console.log(edu.getname().locAddress);

// Personality.all=edu;
 
// console.log(Personality.all[firstName]);