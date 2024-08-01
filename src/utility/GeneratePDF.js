import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const generatePDF = (calendarRef, setPdfWindow) => {
  setPdfWindow(true);
  setTimeout(() => {
    const input = calendarRef.current;
    html2canvas(input, {
      imageTimeout: 10,
      scale: 2,
      useCORS: true
    }
    ).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait', // Puedes cambiar a 'landscape' si prefieres
        unit: 'pt', // Unidad de medida, aquí puntos
        format: 'letter' // Cambia a 'a4' si lo prefieres
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // Calcula la altura de la imagen en el PDF manteniendo la relación de aspecto
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgScaledWidth = imgWidth * ratio;
      const imgScaledHeight = imgHeight * ratio;

      pdf.addImage(imgData, 'PNG', 0, 0, imgScaledWidth, imgScaledHeight);
      pdf.save('horario.pdf');
      setPdfWindow(false);
    });
  }, 100);
};

export default generatePDF;