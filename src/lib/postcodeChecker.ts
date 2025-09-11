// Postcode coverage areas for Drive Dojo Driving School
export const COVERED_POSTCODES = {
  RM: [
    'RM5 2', 'RM5 3', 'RM6 4', 'RM6 5', 'RM6 6', 'RM7 0', 'RM7 1', 'RM7 7', 
    'RM7 8', 'RM7 9', 'RM8 1', 'RM8 2', 'RM8 3', 'RM9 4', 'RM9 5', 'RM9 6', 'RM9 9'
  ],
  E: [
    'E10 5', 'E10 6', 'E10 7', 'E10 9', 'E11 1', 'E11 2', 'E11 3', 'E11 4', 
    'E11 9', 'E12 5', 'E12 6', 'E12 9', 'E14 0', 'E14 1', 'E14 2', 'E14 3', 
    'E14 4', 'E14 5', 'E14 6', 'E14 7', 'E14 8', 'E14 9', 'E15 1', 'E15 2', 
    'E15 3', 'E15 4', 'E15 9', 'E16 1', 'E16 2', 'E16 3', 'E16 4', 'E16 9'
  ],
  IG: [
    'IG1 1', 'IG1 2', 'IG1 3', 'IG1 4', 'IG1 8', 'IG1 9', 'IG2 6', 'IG2 7', 
    'IG3 8', 'IG3 9', 'IG4 5', 'IG5 0', 'IG6 1', 'IG6 2', 'IG6 3', 'IG11 0', 
    'IG11 1', 'IG11 7', 'IG11 8', 'IG11 9'
  ]
};

export interface PostcodeCheckResult {
  isCovered: boolean;
  area?: string;
  postcode?: string;
  message: string;
}

export interface LessonType {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
  icon: string;
}

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'payg',
    title: 'Pay-as-you-go',
    description: '2 hours lesson - Perfect for trying us out',
    price: '£76',
    duration: '2 hours',
    icon: '🚗'
  },
  {
    id: '6hour',
    title: '6-Hour Package',
    description: 'Save money with our starter package',
    price: '£210',
    duration: '6 hours',
    icon: '⭐'
  },
  {
    id: '10hour',
    title: '10-Hour Package',
    description: 'Most Popular - Best value for money!',
    price: '£340',
    duration: '10 hours',
    popular: true,
    icon: '🔥'
  },
  {
    id: 'intensive',
    title: 'Intensive Lessons',
    description: 'Fast-track your learning - Contact for quote',
    price: 'Contact for Quote',
    duration: 'Tailored to student',
    icon: '⚡'
  },
  {
    id: 'mocktest',
    title: 'Mock Driving Test',
    description: 'Perfect practice before your test',
    price: '£90',
    duration: '45 mins',
    icon: '🎯'
  },
  {
    id: 'testrental',
    title: 'Driving Test Car Rental',
    description: '3 hours: arrive 15min early, practice maneuvers, home drop-off',
    price: '£150',
    duration: '3 hours',
    icon: '🚗'
  }
];

export function validatePostcode(postcode: string): PostcodeCheckResult {
  // Clean and normalize the postcode - remove spaces and convert to uppercase
  const cleanPostcode = postcode.toUpperCase().replace(/\s+/g, '');
  
  // Validate basic postcode format
  if (!/^[A-Z]{1,2}\d[A-Z\d]?\d?[A-Z]{2}$/.test(cleanPostcode)) {
    return {
      isCovered: false,
      message: 'Please enter a valid UK postcode (e.g., E10 5AJ)'
    };
  }
  
  // Extract the sector (outward code) - first part before the space
  // For E10 5AJ, this would be "E10 5"
  // For IG1 1AB, this would be "IG1 1"
  // For E14 5AL, this would be "E14 5"
  
  // The issue is that we need to extract the sector correctly
  // For E14 5AL, we want E14 5, not E1 4
  
  // Let's extract the sector by taking everything except the last 2 characters of the inward code
  // This means we keep the first digit of the inward code (the sector number)
  const sector = cleanPostcode.slice(0, -2); // This gives us "E145" for "E145AL"
  
  // Now format the sector with a space before the last digit
  let formattedSector;
  if (sector.length >= 3) {
    formattedSector = sector.slice(0, -1) + ' ' + sector.slice(-1);
  } else {
    formattedSector = sector;
  }
  
  // Format the full postcode for display
  const formattedPostcode = cleanPostcode.slice(0, -3) + ' ' + cleanPostcode.slice(-3);
  
  // Extract the area code (first part before the space in the sector)
  // For E14 5, we want E14, not E1
  const areaCodeMatch = formattedSector.match(/^([A-Z]{1,2}\d+)/);
  if (!areaCodeMatch) {
    return {
      isCovered: false,
      message: 'Please enter a valid UK postcode (e.g., E10 5AJ)'
    };
  }
  
  const areaCode = areaCodeMatch[1]; // E14, IG1, RM7 etc.
  
  // Extract the area code prefix (just the letters) for checking against COVERED_POSTCODES
  const areaCodePrefix = areaCode.replace(/\d+/g, ''); // E, IG, RM etc.
  
  // Check if the area is covered
  if (areaCodePrefix in COVERED_POSTCODES) {
    // Check if the sector is in our covered list
    const areaPostcodes = COVERED_POSTCODES[areaCodePrefix as keyof typeof COVERED_POSTCODES];
    if (areaPostcodes) {
      const isSectorCovered = areaPostcodes.includes(formattedSector);
      
      if (isSectorCovered) {
        return {
          isCovered: true,
          area: areaCode,
          postcode: formattedPostcode,
          message: 'Congratulations! We cover your postcode 🎉'
        };
      }
    }
  }
  
  return {
    isCovered: false,
    area: areaCode,
    postcode: formattedPostcode,
    message: 'Sorry, we don\'t cover your area yet. Please check your postcode or contact us for more information.'
  };
}

export function getAreaName(areaCode: string): string {
  const areaNames: Record<string, string> = {
    'RM': 'Romford & Havering',
    'E': 'East London',
    'IG': 'Ilford & Redbridge'
  };
  
  return areaNames[areaCode] || 'Your Area';
}

export function formatPostcode(postcode: string): string {
  const clean = postcode.toUpperCase().replace(/\s+/g, '');
  if (clean.length < 5) return postcode.toUpperCase();
  return clean.slice(0, -3) + ' ' + clean.slice(-3);
}
