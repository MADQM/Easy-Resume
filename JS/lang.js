function Language (langSelected,rateLanguage)
{
    this.langSelected = langSelected;
    this.rateLanguage= rateLanguage;
  
    this.headerRander = function()
    {
      
               
            
               const tableRow2 = document.createElement('tr');
               tabelElement.appendChild(tableRow2);
               const tableData = document.createElement('td');
               tableRow2.appendChild(tableData);
               tableData.textContent=this.langSelected;
               let expDetails =[this.rateLanguage]
               for (let i = 0; i < expDetails.length; i++){
                const tableData1 = document.createElement('td');
            
                tableRow2.appendChild(tableData1);
            
            
            
                tableData1.textContent=expDetails[i];
                
               }
           
            
              
    };
}



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
              tableHeader.textContent='Language';
             
                const tableHeader2 = document.createElement('th');
                tableHeaderRow1.appendChild(tableHeader2);
                tableHeader2.textContent='Rate';
               
     }
     let myForm = document.getElementById('langForm');
     let formSection = document.getElementById('formSection');
     let counterClick = 0;
     myForm.addEventListener('submit',addNewLanguage);
     
     function addNewLanguage(event)
     {
         
      
       event.preventDefault();
       console.log(event.target.langSelected.value);
     counterClick++;
     if(counterClick<=1){
       table();
     }
       let langSelected = event.target.langSelected.value;
       let rateLanguage = event.target.rateLanguage.value;
      
       
      
       const newLanguage = new Language (langSelected,rateLanguage);
       newLanguage.headerRander();
     //   newEducation.render();
     
     }
     
     