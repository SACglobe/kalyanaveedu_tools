export interface LocalizedString {
  en: string;
  ta: string;
}

export interface DocumentCategory {
  category: LocalizedString;
  items: LocalizedString[];
}

export interface ProcessStep {
  step: number;
  title: LocalizedString;
  description: LocalizedString;
}

export interface FeeItem {
  description: LocalizedString;
  amount: string;
}

export interface RegionalGuide {
  id: string;
  slug: string;
  name: LocalizedString;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  laws: LocalizedString[];
  documents: DocumentCategory[];
  process: ProcessStep[];
  fees: FeeItem[];
  processingTime: LocalizedString;
  officialPortal: string;
  importantNotes: LocalizedString[];
}

export const regionalGuides: RegionalGuide[] = [
  {
    id: 'tamil-nadu',
    slug: 'tamil-nadu',
    name: {
      en: 'Tamil Nadu',
      ta: 'தமிழ்நாடு',
    },
    meta: {
      title: 'Marriage Registration in Tamil Nadu 2026: Complete Legal Guide & Procedure',
      description: 'Comprehensive guide to marriage registration in Tamil Nadu (2026). Check eligibility, required documents, fee structures, and the official Hindu Marriage Act procedures.',
      keywords: ['marriage registration tamil nadu', 'how to register marriage in tamil nadu', 'தமிழ்நாடு திருமண பதிவு', 'tnreginet marriage registration'],
    },
    laws: [
      {
        en: 'The Hindu Marriage Act, 1955: Applicable for Hindus, Buddhists, Jains, or Sikhs. Both parties must not have a living spouse.',
        ta: 'இந்து திருமண சட்டம், 1955: இந்துக்கள், பௌத்தர்கள், சமணர்கள் அல்லது சீக்கியர்களுக்குப் பொருந்தும். இரு தரப்பினருக்கும் வாழும் துணை இருக்கக்கூடாது.',
      },
      {
        en: 'The Tamil Nadu Hindu Marriage (Registration) Rules, 1967: Mandatory registration of all Hindu marriages solemnized in the state.',
        ta: 'தமிழ்நாடு இந்து திருமண (பதிவு) விதிகள், 1967: மாநிலத்தில் நடைபெறும் அனைத்து இந்து திருமணங்களையும் பதிவு செய்வது கட்டாயமாக்கப்பட்டுள்ளது.',
      },
      {
        en: 'The Special Marriage Act, 1954: Applicable for inter-faith marriages or marriages solemnized without religious rituals.',
        ta: 'சிறப்பு திருமணச் சட்டம், 1954: மதம் விட்டு மதம் நடக்கும் திருமணங்கள் அல்லது மதச் சடங்குகள் இன்றி நடக்கும் திருமணங்களுக்குப் பொருந்தும்.',
      }
    ],
    documents: [
      {
        category: { en: 'Proof of Age (Any One)', ta: 'வயதுச் சான்று (ஏதேனும் ஒன்று)' },
        items: [
          { en: 'Birth Certificate issued by competent authority', ta: 'தகுதிவாய்ந்த அதிகாரியால் வழங்கப்பட்ட பிறப்புச் சான்றிதழ்' },
          { en: 'School Leaving Certificate / 10th Mark Sheet', ta: 'பள்ளி மாற்றுச் சான்றிதழ் (TC) / 10ம் வகுப்பு மதிப்பெண் சான்றிதழ்' },
          { en: 'Passport or PAN Card', ta: 'கடவுச்சீட்டு (Passport) அல்லது பான் அட்டை (PAN Card)' }
        ]
      },
      {
        category: { en: 'Proof of Residence (Any One)', ta: 'முகவரிச் சான்று (ஏதேனும் ஒன்று)' },
        items: [
          { en: 'Aadhaar Card with full address', ta: 'முழுமையான முகவரியுடன் கூடிய ஆதார் அட்டை' },
          { en: 'Voter ID Card / Ration Card', ta: 'வாக்காளர் அடையாள அட்டை / குடும்ப அட்டை (Ration Card)' },
          { en: 'Driving License', ta: 'ஓட்டுநர் உரிமம் (Driving License)' }
        ]
      },
      {
        category: { en: 'Marriage Proof & Witnesses', ta: 'திருமணச் சான்று மற்றும் சாட்சிகள்' },
        items: [
          { en: 'Marriage Invitation Card in original', ta: 'அசல் திருமண அழைப்பிதழ்' },
          { en: 'Certificate from the Priest/Temple (if married in a religious institution)', ta: 'பூசாரி/கோயிலிலிருந்து பெறப்பட்ட சான்றிதழ் (மத நிறுவனங்களில் திருமணம் நடந்திருந்தால்)' },
          { en: 'Three witnesses with their ID and Address proofs (Aadhaar/Voter ID)', ta: 'மூன்று சாட்சிகள் மற்றும் அவர்களின் அடையாள/முகவரிச் சான்றுகள் (ஆதார்/வாக்காளர் அட்டை)' }
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: { en: 'Online Application (TNREGINET)', ta: 'ஆன்லைன் விண்ணப்பம் (TNREGINET)' },
        description: { 
          en: 'Visit the official Inspector General of Registration (TNREGINET) portal. Create a user account and fill out the marriage registration application form under the Hindu Marriage Act or Special Marriage Act.',
          ta: 'பதிவுத்துறை தலைவரின் அதிகாரப்பூர்வ இணையதளத்திற்கு (TNREGINET) செல்லவும். பயனர் கணக்கை உருவாக்கி, இந்து திருமணச் சட்டம் அல்லது சிறப்புத் திருமணச் சட்டத்தின் கீழ் திருமணப் பதிவு விண்ணப்பப் படிவத்தைப் பூர்த்தி செய்யவும்.'
        }
      },
      {
        step: 2,
        title: { en: 'Document Upload & Token Generation', ta: 'ஆவணப் பதிவேற்றம் மற்றும் டோக்கன் பெறுதல்' },
        description: {
          en: 'Scan and upload all mandated documents (Proof of Age, Address, and Marriage Invitation). Select a convenient date and time slot for physical verification at the respective Sub-Registrar Office.',
          ta: 'தேவையான அனைத்து ஆவணங்களையும் (வயதுச் சான்று, முகவரி மற்றும் திருமண அழைப்பிதழ்) ஸ்கேன் செய்து பதிவேற்றவும். சம்பந்தப்பட்ட சார் பதிவாளர் அலுவலகத்தில் நேரில் சரிபார்ப்பதற்கு வசதியான தேதியையும் நேரத்தையும் தேர்ந்தெடுக்கவும்.'
        }
      },
      {
        step: 3,
        title: { en: 'Physical Verification at SRO', ta: 'சார் பதிவாளர் அலுவலகத்தில் நேரடி சரிபார்ப்பு' },
        description: {
          en: 'Both husband and wife must appear in person before the Sub-Registrar along with three valid witnesses. Present all original documents for verification.',
          ta: 'கணவன் மற்றும் மனைவி இருவரும் மூன்று தகுதியான சாட்சிகளுடன் சார் பதிவாளர் முன் நேரில் ஆஜராக வேண்டும். சரிபார்ப்புக்காக அனைத்து அசல் ஆவணங்களையும் சமர்ப்பிக்கவும்.'
        }
      },
      {
        step: 4,
        title: { en: 'Issuance of Certificate', ta: 'சான்றிதழ் வழங்குதல்' },
        description: {
          en: 'Upon successful verification, signatures are captured, and the digitally signed Marriage Certificate is issued. It can also be downloaded later from the portal.',
          ta: 'வெற்றிகரமான சரிபார்ப்பிற்குப் பிறகு, கையொப்பங்கள் பெறப்பட்டு, டிஜிட்டல் கையொப்பமிடப்பட்ட திருமணச் சான்றிதழ் வழங்கப்படுகிறது. பின்னர் இணையதளத்திலிருந்தும் இதனை பதிவிறக்கம் செய்யலாம்.'
        }
      }
    ],
    fees: [
      {
        description: { en: 'Registration under Hindu Marriage Act', ta: 'இந்து திருமணச் சட்டத்தின் கீழ் பதிவு செய்தல்' },
        amount: '₹100.00'
      },
      {
        description: { en: 'Registration under Special Marriage Act', ta: 'சிறப்புத் திருமணச் சட்டத்தின் கீழ் பதிவு செய்தல்' },
        amount: '₹150.00'
      },
      {
        description: { en: 'Search Fee / Certified Copy Extraction', ta: 'தேடல் கட்டணம் / சான்றளிக்கப்பட்ட நகல் பெறுதல்' },
        amount: '₹50.00'
      }
    ],
    processingTime: {
      en: 'Same day (upon successful physical verification of all original documents and witnesses).',
      ta: 'அன்றே வழங்கப்படும் (அனைத்து அசல் ஆவணங்கள் மற்றும் சாட்சிகளின் நேரடி சரிபார்ப்பிற்குப் பிறகு).'
    },
    officialPortal: 'https://tnreginet.gov.in',
    importantNotes: [
      {
        en: 'Registration is mandatory within 90 days of the solemnization of the marriage to avoid late penalties.',
        ta: 'திருமணம் நடைபெற்ற 90 நாட்களுக்குள் பதிவு செய்வது கட்டாயமாகும். தாமதத்திற்கு அபராதம் விதிக்கப்படும்.'
      },
      {
        en: 'If either party is a divorcee or widow/widower, the divorce decree or death certificate of the former spouse is strictly required.',
        ta: 'இரு தரப்பினரில் எவரேனும் விவாகரத்து பெற்றவராகவோ அல்லது விதவையாகவோ இருந்தால், முந்தைய துணையின் விவாகரத்து தீர்ப்பாணை அல்லது இறப்புச் சான்றிதழ் கண்டிப்பாகத் தேவை.'
      }
    ]
  },
  {
    id: 'delhi',
    slug: 'delhi',
    name: {
      en: 'Delhi (NCT)',
      ta: 'டெல்லி (NCT)',
    },
    meta: {
      title: 'Marriage Registration in Delhi 2026: Procedure, Fees & Documents required',
      description: 'Official guide to registering your marriage in Delhi under the Hindu Marriage Act and Special Marriage Act. Check online portal links and latest procedures.',
      keywords: ['marriage registration delhi', 'e-district delhi marriage', 'how to register marriage in delhi', 'டெல்லி திருமண பதிவு'],
    },
    laws: [
      {
        en: 'The Delhi (Compulsory Registration of Marriage) Order, 2014: Mandates the compulsory registration of all marriages solemnized in Delhi.',
        ta: 'டெல்லி (திருமணங்களை கட்டாயமாகப் பதிவு செய்தல்) ஆணை, 2014: டெல்லியில் நடைபெறும் அனைத்து திருமணங்களையும் கட்டாயமாகப் பதிவு செய்ய வேண்டும்.'
      },
      {
        en: 'The Hindu Marriage Act, 1955: For marriages where both parties belong to Hindu, Buddhist, Jain, or Sikh religions.',
        ta: 'இந்து திருமணச் சட்டம், 1955: இந்து, பௌத்தம், சமணம் அல்லது சீக்கிய மதங்களைச் சேர்ந்த இரு தரப்பினருக்கும் இடையே நடைபெறும் திருமணங்களுக்கு.'
      }
    ],
    documents: [
      {
        category: { en: 'Identity & Age Proof', ta: 'அடையாளம் மற்றும் வயதுச் சான்று' },
        items: [
          { en: 'Aadhaar Card, Passport, or PAN Card', ta: 'ஆதார் அட்டை, கடவுச்சீட்டு அல்லது பான் அட்டை' },
          { en: 'Matriculation (10th) Certificate showing Date of Birth', ta: 'பிறந்த தேதியைக் காட்டும் 10ம் வகுப்பு சான்றிதழ்' }
        ]
      },
      {
        category: { en: 'Affidavits & Photographs', ta: 'பிரமாணப் பத்திரங்கள் மற்றும் புகைப்படங்கள்' },
        items: [
          { en: 'Separate affidavits in prescribed format from husband and wife', ta: 'கணவன் மற்றும் மனைவியிடமிருந்து நிர்ணயிக்கப்பட்ட வடிவத்தில் தனித்தனி பிரமாணப் பத்திரங்கள் (Affidavits)' },
          { en: 'Two passport size photographs of both parties', ta: 'இரு தரப்பினரின் பாஸ்போர்ட் அளவு புகைப்படங்கள் இரண்டு' },
          { en: 'One joint photograph in wedding attire', ta: 'திருமண உடையில் இருவரின் கூட்டுப் புகைப்படம் ஒன்று' }
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: { en: 'e-District Portal Registration', ta: 'இ-டிஸ்ட்ரிக்ட் இணையதளப் பதிவு' },
        description: {
          en: 'Register on the e-District Delhi portal using Aadhaar or Voter ID. Select "Registration of Marriage" under the Revenue Department services.',
          ta: 'ஆதார் அல்லது வாக்காளர் அட்டையைப் பயன்படுத்தி இ-டிஸ்ட்ரிக்ட் டெல்லி இணையதளத்தில் பதிவு செய்யவும். வருவாய்த் துறை சேவைகளின் கீழ் "திருமணப் பதிவு" என்பதைத் தேர்ந்தெடுக்கவும்.'
        }
      },
      {
        step: 2,
        title: { en: 'Application and Appointment', ta: 'விண்ணப்பம் மற்றும் சந்திப்பு' },
        description: {
          en: 'Fill in the details of the bride, groom, and witnesses. Upload scanned copies of the required documents and select an appointment date with the local Sub-Divisional Magistrate (SDM).',
          ta: 'மணமகன், மணமகள் மற்றும் சாட்சிகளின் விவரங்களை நிரப்பவும். தேவையான ஆவணங்களின் நகல்களைப் பதிவேற்றி, உள்ளூர் துணைப் கோட்ட நீதிபதியிடம் (SDM) சந்திப்பு தேதியைத் தேர்ந்தெடுக்கவும்.'
        }
      },
      {
        step: 3,
        title: { en: 'Verification at SDM Office', ta: 'SDM அலுவலகத்தில் சரிபார்ப்பு' },
        description: {
          en: 'Visit the SDM office on the appointed date with the spouse, witnesses, and all original documents. The SDM validates the documents and the affidavits.',
          ta: 'குறிப்பிடப்பட்ட தேதியில் துணைவி, சாட்சிகள் மற்றும் அனைத்து அசல் ஆவணங்களுடன் SDM அலுவலகத்திற்குச் செல்லவும். SDM ஆவணங்கள் மற்றும் பிரமாணப் பத்திரங்களை சரிபார்ப்பார்.'
        }
      }
    ],
    fees: [
      {
        description: { en: 'Hindu Marriage Act Application Fee', ta: 'இந்து திருமணச் சட்ட விண்ணப்பக் கட்டணம்' },
        amount: '₹100.00'
      },
      {
        description: { en: 'Special Marriage Act Application Fee', ta: 'சிறப்புத் திருமணச் சட்ட விண்ணப்பக் கட்டணம்' },
        amount: '₹150.00'
      },
      {
        description: { en: 'Tatkal Service (Expedited processing)', ta: 'தட்கல் சேவை (விரைவான செயலாக்கம்)' },
        amount: '₹10,000.00'
      }
    ],
    processingTime: {
      en: 'Standard: 15-30 Days. Tatkal Service allows registration within a few days.',
      ta: 'சாதாரண நடைமுறை: 15-30 நாட்கள். தட்கல் சேவையின் மூலம் சில நாட்களிலேயே பதிவு செய்ய முடியும்.'
    },
    officialPortal: 'https://edistrict.delhigovt.nic.in',
    importantNotes: [
      {
        en: 'At least one party must have resided in the jurisdiction of the SDM for more than 30 days prior to the application.',
        ta: 'விண்ணப்பிப்பதற்கு முன் குறைந்தது 30 நாட்களாவது SDM-ன் அதிகார வரம்பிற்குள் இருவரில் ஒருவர் வசித்திருக்க வேண்டும்.'
      }
    ]
  },
  {
    id: 'maharashtra',
    slug: 'maharashtra',
    name: {
      en: 'Maharashtra',
      ta: 'மகாராஷ்டிரா',
    },
    meta: {
      title: 'Marriage Registration Process in Maharashtra | Legal Requirements 2026',
      description: 'Step-by-step procedure to register a marriage in Maharashtra. Includes details on BMC guidelines, Aaple Sarkar portal, and mandatory document lists.',
      keywords: ['maharashtra marriage registration', 'bmc marriage certificate', 'aaple sarkar marriage', 'மகாராஷ்டிரா திருமண பதிவு'],
    },
    laws: [
      {
        en: 'The Maharashtra Regulation of Marriage Bureaus and Registration of Marriages Act, 1998: Requires all marriages solemnized in the state to be officially registered.',
        ta: 'மகாராஷ்டிரா திருமண பணியகங்கள் ஒழுங்குமுறை மற்றும் திருமணங்கள் பதிவுச் சட்டம், 1998: மாநிலத்தில் நடைபெறும் அனைத்து திருமணங்களும் அதிகாரப்பூர்வமாகப் பதிவு செய்யப்பட வேண்டும்.'
      }
    ],
    documents: [
      {
        category: { en: 'Primary Documents', ta: 'முக்கிய ஆவணங்கள்' },
        items: [
          { en: 'Form D (Application Form) correctly filled and signed', ta: 'சரியாக நிரப்பப்பட்டு கையொப்பமிடப்பட்ட படிவம் D (விண்ணப்பப் படிவம்)' },
          { en: 'Proof of Age & Address (Aadhaar/Passport/Electricity Bill)', ta: 'வயது மற்றும் முகவரிச் சான்று (ஆதார்/கடவுச்சீட்டு/மின்கட்டண ரசீது)' }
        ]
      },
      {
        category: { en: 'Marriage Evidence', ta: 'திருமணத்திற்கான சான்று' },
        items: [
          { en: 'Wedding card / Marriage Invitation', ta: 'திருமண அழைப்பிதழ்' },
          { en: 'Declaration from the Priest (Bhatji) solemnizing the marriage', ta: 'திருமணத்தை நடத்தி வைத்த அர்ச்சகரின் (Bhatji) உறுதிமொழிப் பத்திரம்' }
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: { en: 'Aaple Sarkar / BMC Portal', ta: 'ஆப்லே சர்க்கார் / BMC இணையதளம்' },
        description: {
          en: 'Apply online through the Aaple Sarkar portal or the respective municipal corporation portal (e.g., BMC for Mumbai). Fill Form D details online.',
          ta: 'ஆப்லே சர்க்கார் இணையதளம் அல்லது அந்தந்த மாநகராட்சி இணையதளம் (உதாரணமாக, மும்பைக்கு BMC) மூலம் ஆன்லைனில் விண்ணப்பிக்கவும். படிவம் D விவரங்களை ஆன்லைனில் நிரப்பவும்.'
        }
      },
      {
        step: 2,
        title: { en: 'Notarization of Affidavits', ta: 'பிரமாணப் பத்திரங்களை நோட்டரி செய்தல்' },
        description: {
          en: 'Prepare affidavits stating the age, marital status at the time of marriage, and mutual consent, and get them notarized.',
          ta: 'திருமணத்தின் போது வயது, திருமண நிலை மற்றும் பரஸ்பர சம்மதம் ஆகியவற்றைக் கூறும் பிரமாணப் பத்திரங்களைத் தயாரித்து, அவற்றை நோட்டரி மூலம் சான்றொப்பம் பெறவும்.'
        }
      },
      {
        step: 3,
        title: { en: 'Submission at the Ward Office', ta: 'வார்டு அலுவலகத்தில் சமர்ப்பித்தல்' },
        description: {
          en: 'Submit the application along with original documents, photographs, and witnesses to the Marriage Officer at the local ward office.',
          ta: 'விண்ணப்பத்துடன் அசல் ஆவணங்கள், புகைப்படங்கள் மற்றும் சாட்சிகளை உள்ளூர் வார்டு அலுவலகத்தில் உள்ள திருமண அதிகாரியிடம் சமர்ப்பிக்கவும்.'
        }
      }
    ],
    fees: [
      {
        description: { en: 'Standard Registration Fee', ta: 'வழக்கமான பதிவுக் கட்டணம்' },
        amount: '₹150.00'
      },
      {
        description: { en: 'Late Fee (if registered after 90 days)', ta: 'தாமதக் கட்டணம் (90 நாட்களுக்குப் பிறகு பதிவு செய்தால்)' },
        amount: '₹200.00 to ₹500.00'
      }
    ],
    processingTime: {
      en: 'Typically 10-15 working days after the physical submission and verification of documents.',
      ta: 'பொதுவாக ஆவணங்களை நேரில் சமர்ப்பித்து சரிபார்க்கப்பட்ட பிறகு 10-15 வேலை நாட்களில் கிடைக்கும்.'
    },
    officialPortal: 'https://aaplesarkar.mahaonline.gov.in',
    importantNotes: [
      {
        en: 'The priest (Bhatji) who solemnized the marriage must also provide his ID proof and signature on the application form in many municipal jurisdictions.',
        ta: 'பல மாநகராட்சி வரம்புகளில், திருமணத்தை நடத்தி வைத்த அர்ச்சகரும் தனது அடையாளச் சான்றை வழங்குவதோடு விண்ணப்பப் படிவத்தில் கையொப்பமிட வேண்டும்.'
      }
    ]
  }
];
