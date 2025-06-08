document.addEventListener('DOMContentLoaded', () => {
  const downloadCvBtn = document.getElementById('downloadCvBtn');

  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', () => {
      const input = document.querySelector('.max-w-4xl.mx-auto'); // Seleciona o div principal do seu currículo

      html2canvas(input, { scale: 2 }).then((canvas) => { // Aumenta a escala para melhor qualidade
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4'); // 'p' para retrato, 'mm' para milímetros, 'a4' para tamanho de página

        const imgWidth = 210; // Largura A4 em mm
        const pageHeight = 297; // Altura A4 em mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('curriculo_gelzieny_martins.pdf');
      });
    });
  } else {
    console.error('Botão de download não encontrado. Verifique se o ID "downloadCvBtn" está correto.');
  }
});