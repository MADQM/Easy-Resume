window.onload = function () {
  document.getElementById('download')
    .addEventListener('click', () => {
      const downloadPdf = this.document.getElementById('downloadPdf');
      console.log(downloadPdf);
      console.log(window);
      let opt = {
        margin:.2,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().from(downloadPdf).set(opt).save();
    });
};


