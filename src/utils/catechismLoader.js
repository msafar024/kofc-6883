import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';

let catechismText = null;

export const loadCatechism = async () => {
  if (catechismText) return catechismText;
  
  try {
    const dataBuffer = fs.readFileSync(
      path.join(process.cwd(), 'src/assets/documents/catechism.pdf')
    );
    
    const data = await pdfParse(dataBuffer);
    catechismText = data.text;
    return catechismText;
  } catch (error) {
    console.error('Error loading Catechism:', error);
    return '';
  }
};
