document.addEventListener('DOMContentLoaded', () => {
  const downloadCvBtn = document.getElementById('downloadCvBtn');

  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', () => {
      const htmlContent = document.documentElement.outerHTML;

      const blob = new Blob([htmlContent], { type: 'text/html' });

      const url = URL.createObjectURL(blob); 
      const a = document.createElement('a');
      a.href = url; 
      a.download = 'curriculo_gelzieny_martins.pdf'; 

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  } else {
    console.error('Botão de download não encontrado. Verifique se o ID "downloadCvBtn" está correto.');
  }
});

