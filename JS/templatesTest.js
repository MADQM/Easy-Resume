let edu;
// let eddu=[];
function loadCart() {
  const person = JSON.parse(localStorage.getItem('personality')) || [];
  edu = new Personality(person);
  console.log(edu);
}

loadCart();
console.log(edu.getname().eMail);

// Personality.all=edu;
 
// console.log(Personality.all[firstName]);