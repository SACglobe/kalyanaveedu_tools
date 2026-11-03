import { NAKSHATRAS_LIST, type NakshatraDetail } from '@/lib/astro-core/constants';

// Traditional Tamil naming letters per pada, with sample names. Sample names are illustrative (not exhaustive);
// an empty list means that sound is rare for names and is best chosen with a family astrologer.
export interface PadaNames {
  letterTa: string;
  boys: string[];
  girls: string[];
}

type Row = [string, string, string]; // letter | boys (comma) | girls (comma)
const r = (letter: string, boys = '', girls = ''): Row => [letter, boys, girls];

const DATA: Record<number, Row[]> = {
  1: [r('சு', 'Suresh, Sudhan', 'Suganya, Sumathi'), r('சே', 'Sekar, Sendhil', 'Sevvandhi, Senbagam'), r('சோ', 'Sozhan, Somasundaram', 'Sobana, Sornalatha'), r('லா', 'Lakshman, Lavan', 'Lalitha, Lavanya')],
  2: [r('லீ', 'Leeladharan', 'Leela, Leelavathi'), r('லு', '', ''), r('லே', '', 'Lekha'), r('லோ', 'Lokesh, Lokeshwaran', 'Lokeshwari')],
  3: [r('அ', 'Arun, Arjun', 'Anitha, Abirami'), r('இ', 'Ilango, Inbarasan', 'Ilakkiya, Inbavalli'), r('உ', 'Udhayan, Uthaman', 'Uma, Umayal'), r('எ', 'Ezhilan, Ellalan', 'Ezhilarasi, Ezhil')],
  4: [r('ஓ', 'Omkar, Oviyan', 'Oviya, Omana'), r('வா', 'Vasanth, Vasudevan', 'Vanitha, Vasantha'), r('வி', 'Vignesh, Vijay', 'Vidya, Vimala'), r('வு', '', '')],
  5: [r('வே', 'Velan, Velmurugan', 'Velvizhi, Vedhika'), r('வோ', '', ''), r('கா', 'Karthik, Kaviarasu', 'Kavitha, Kayalvizhi'), r('கி', 'Kishore, Kirubakaran', 'Kiruthika, Kiruba')],
  6: [r('கு', 'Kumar, Kumaran', 'Kumudha, Kuyili'), r('க', 'Kamal, Kannan', 'Kala, Kamakshi'), r('ங', '', ''), r('ச', 'Sakthi, Sathish', 'Saranya, Sandhya')],
  7: [r('கே', 'Kesavan, Ketheeswaran', 'Kethana'), r('கோ', 'Gopal, Gokul', 'Gomathi, Godhai'), r('ஹா', 'Hari, Harish', 'Harini, Haritha'), r('ஹி', '', 'Himavathi')],
  8: [r('ஹு', '', ''), r('ஹே', 'Hemanth', 'Hema, Hemalatha'), r('ஹோ', '', ''), r('டா', '', 'Daksha, Dakshina')],
  9: [r('டீ', 'Deepan, Deenadayalan', 'Deepa, Deepika'), r('டு', 'Durai, Duraisamy', 'Durga, Durgadevi'), r('டே', 'Devan, Devaraj', 'Devi, Devika'), r('டோ', '', '')],
  10: [r('மா', 'Manikandan, Madhavan', 'Mahalakshmi, Malathi'), r('மீ', 'Meenakshisundaram', 'Meena, Meenakshi'), r('மு', 'Murugan, Muthu', 'Muthulakshmi'), r('மே', 'Meghanathan', 'Megha, Mekala')],
  11: [r('மோ', 'Mohan, Mohanraj', 'Mohana, Mohanapriya'), r('டா', 'Dayalan', 'Daya'), r('டீ', 'Deenan', 'Deepthi'), r('டு', 'Durai', 'Durga')],
  12: [r('டே', 'Devan', 'Devi'), r('டோ', '', ''), r('பா', 'Pandian, Parthiban', 'Padmini, Pavithra'), r('பீ', 'Peethambaran', 'Peela')],
  13: [r('பு', 'Pugazhendhi, Purushothaman', 'Pushpa, Pulari'), r('ஷ', 'Shankar, Shanmugam', 'Shanthi, Sharmila'), r('ந', 'Nandhan, Naveen', 'Nandhini, Nalini'), r('டா', 'Dharani', 'Dharini')],
  14: [r('பே', '', ''), r('போ', 'Ponnan, Ponraj', 'Ponni, Ponmani'), r('ரா', 'Raja, Ramesh', 'Rani, Radha'), r('ரீ', '', 'Reena')],
  15: [r('ரு', 'Rudhran', 'Ruthra, Rukmini'), r('ரே', 'Rengarajan', 'Revathi'), r('ரோ', 'Rohit, Rohan', 'Rohini'), r('தா', 'Tamizh, Tharun', 'Thamarai, Tharani')],
  16: [r('தி', 'Thiru, Thirumalai', 'Thilaga, Thivya'), r('து', '', 'Thulasi'), r('தே', 'Thevan', 'Thenmozhi, Thendral'), r('தோ', '', '')],
  17: [r('நா', 'Nagarajan, Narayanan', 'Nagalakshmi, Nandhitha'), r('நீ', 'Neelakandan, Neelan', 'Neela, Neelavathi'), r('நு', '', ''), r('நெ', 'Nedumaran, Nesan', 'Nesamani')],
  18: [r('நோ', '', ''), r('யா', 'Yazhan, Yasodharan', 'Yamini, Yazhini'), r('யி', '', ''), r('யு', 'Yuvaraj, Yugan', 'Yuvasri, Yuga')],
  19: [r('யே', '', ''), r('யோ', 'Yogesh, Yogeshwaran', 'Yogalakshmi'), r('பா', 'Bharath, Bala', 'Bavani, Bagyalakshmi'), r('பீ', 'Bheeman', 'Bhuvana')],
  20: [r('பூ', 'Poovarasan, Poongundran', 'Poongodi, Poorani'), r('தா', 'Dharmaraj, Dhanush', 'Dhanalakshmi, Dharani'), r('பா', 'Bhaskar', 'Bhanumathi'), r('டா', 'Dayanidhi', 'Daya')],
  21: [r('பே', '', ''), r('போ', 'Bhoopathi, Bhogan', 'Bhoomika'), r('ஜா', 'Jagan, Jayakumar', 'Jayanthi, Jaya'), r('ஜீ', 'Jeevan, Jeeva', 'Jeeva, Jeevitha')],
  22: [r('ஜு', '', ''), r('ஜே', 'Jeyaraj, Jegan', 'Jeyashree'), r('ஜோ', 'Jothi, Jothiraman', 'Jothika, Jothimani'), r('கா', 'Kanagaraj, Karunakaran', 'Kanaga, Karthika')],
  23: [r('கா', 'Kavin, Kaaviyan', 'Kavya, Kaviya'), r('கீ', 'Keerthi, Keeran', 'Keerthana, Keerthika'), r('கு', 'Kumaresan', 'Kumari'), r('கே', 'Kesavan', 'Kesavardhini')],
  24: [r('கோ', 'Gopinath, Govindan', 'Gowri, Gomathi'), r('ஸ', 'Sasi, Saravanan', 'Sasikala, Saraswathi'), r('ஸி', 'Sivakumar, Sivam', 'Sivagami, Sivaranjani'), r('ஸு', 'Sundar, Sudhakar', 'Sundari, Suganthi')],
  25: [r('ஸே', 'Selvan, Selvam', 'Selvi, Selvarani'), r('ஸோ', 'Somu, Sozhan', 'Sobika'), r('தா', 'Dhamodharan', 'Dhamayanthi'), r('தி', 'Dhivakar, Thiyagu', 'Dhivya, Dhiya')],
  26: [r('து', 'Duraimurugan', 'Durga'), r('ஞ', 'Gnanam, Gnanasekar', 'Gnanapriya'), r('ஜா', 'Jaganathan', 'Jaganmohini'), r('தா', 'Dhandapani', 'Dhanam')],
  27: [r('தே', 'Devanathan, Devendran', 'Devasena, Devi'), r('தோ', '', ''), r('சா', 'Saravanan, Sathyan', 'Sarala, Sathya'), r('சி', 'Sivan, Siva', 'Sindhu, Sivasri')],
};

export function nakshatraSlug(n: NakshatraDetail) {
  return n.nameEn.toLowerCase();
}

export const NAKSHATRA_SLUGS = NAKSHATRAS_LIST.map(nakshatraSlug);

export function getNakshatraBySlug(slug: string) {
  return NAKSHATRAS_LIST.find((n) => nakshatraSlug(n) === slug);
}

export function padaNames(nakshatraId: number): PadaNames[] {
  return (DATA[nakshatraId] || []).map(([letterTa, boys, girls]) => ({
    letterTa,
    boys: boys ? boys.split(',').map((s) => s.trim()).filter(Boolean) : [],
    girls: girls ? girls.split(',').map((s) => s.trim()).filter(Boolean) : [],
  }));
}
