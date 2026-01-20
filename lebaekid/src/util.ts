export const generateLinks = (baseName: string, count: number, startFrom: number = 1, ext: string = '.jpg'): string[] => {
  return Array.from({ length: count }, (_, i) => `${'https://lebaek.id/images/gallery/'}${baseName}${startFrom + i}${ext}`);
};

const SCRIPT_URL= 'https://script.google.com/macros/s/AKfycbxU7SIROCYme26H_7O4umlvO8IaKo47Inn-4esJifa3zVIVL2Dz8583XmPzrY9e43Pl/exec';
const DB_URL = 'https://script.google.com/macros/s/AKfycbx6sUiKhsgbwcWZ-W5j3iNCUxKGYjAgMnZIffJHeROdoLI__T6l9lCAkt7klumm2RleuQ/exec';

interface SheetResponse {
  data:any[];
  error?: string;
}

export const fetchSheetData = async (
  sheetName: string = 'Sheet1',
  link: number = 0,
  range: string = 'A1:Z1000'
): Promise<any[]> => {
  try {
    var url = '';
    if (link == 0) {
      url = `${SCRIPT_URL}?sheet=${sheetName}&range=${range}`;
    }
    else if (link > 0)
    {
      url = `${DB_URL}?sheet=${sheetName}&range=${range}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const result: SheetResponse = await response.json();
    
    if (result.error) {
      throw new Error(result.error);
    }
    
    return result.data;
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    throw error;
  }
};

// Fetch all data from a specific sheet
export const fetchAllData = async (sheet: number = 0, sheetName: string = 'Sheet1') => {
  return fetchSheetData(sheetName, sheet );
};

// Fetch specific range
export const fetchRange = async (range: string, sheetName: string = 'Sheet1', sheet: number = 0) => {
  return fetchSheetData(sheetName, sheet, range);
};
