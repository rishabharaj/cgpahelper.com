/**
 * University directory data for CGPA Helper.
 * Sorted in order of country priority: India first, then popular international countries (US, UK, Canada),
 * and finally Bangladesh and Pakistan.
 */
export const universities = [
  // India
  {
    slug: 'iit-delhi-gpa-calculator',
    abbreviation: 'IIT Delhi',
    name: 'Indian Institute of Technology Delhi',
    location: 'New Delhi, India',
    country: 'India',
    description: 'IIT Delhi is a premier public engineering and research institute in India, recognized globally for academic excellence and top-tier technical training.',
    est: '1961',
    system: 'standard-10-point',
    website: 'https://home.iitd.ac.in'
  },
  {
    slug: 'icse-board-gpa-calculator',
    abbreviation: 'ICSE Board',
    name: 'Indian Certificate of Secondary Education (ICSE)',
    location: 'New Delhi, India (National Board)',
    country: 'India',
    description: 'The Indian Certificate of Secondary Education (ICSE) is an examination conducted by the Council for the Indian School Certificate Examinations (CISCE) for Class 10 in India, using a standard 9-point grading scale.',
    est: '1958',
    system: 'icse-board',
    website: 'https://cisce.org',
    isBoard: true
  },
  {
    slug: 'cbse-board-cgpa-calculator',
    abbreviation: 'CBSE Board',
    name: 'Central Board of Secondary Education (CBSE)',
    location: 'New Delhi, India (National Board)',
    country: 'India',
    description: 'The Central Board of Secondary Education (CBSE) is a national level board of education in India for public and private schools, controlled and managed by the Government of India.',
    est: '1929',
    system: 'cbse-ugc-india',
    website: 'https://www.cbse.gov.in',
    isBoard: true
  },
  {
    slug: 'state-board-cgpa-calculator',
    abbreviation: 'State Boards',
    name: 'Indian State Boards of Education',
    location: 'India (Various States)',
    country: 'India',
    description: 'State Boards of Education are governing authorities of school education in different states of India. They design curriculum, conduct exams, and award marksheets for classes 10 and 12.',
    est: '1950',
    system: 'standard-10-point',
    website: '',
    isBoard: true
  },
  {
    slug: 'igcse-board-gpa-calculator',
    abbreviation: 'IGCSE',
    name: 'International General Certificate of Secondary Education (IGCSE)',
    location: 'Cambridge, United Kingdom (International)',
    country: 'United Kingdom',
    description: 'The International General Certificate of Secondary Education (IGCSE) is an internationally recognized English language curriculum for school pupils, designed by Cambridge Assessment International Education.',
    est: '1988',
    system: 'icse-board',
    website: 'https://www.cambridgeinternational.org',
    isBoard: true
  },
  {
    slug: 'iit-bombay-gpa-calculator',
    abbreviation: 'IIT Bombay',
    name: 'Indian Institute of Technology Bombay',
    location: 'Mumbai, India',
    country: 'India',
    description: 'IIT Bombay is one of India\'s leading research and engineering universities, known for its innovation hub, entrepreneurship, and technical breakthroughs.',
    est: '1958',
    system: 'standard-10-point',
    website: 'https://www.iitb.ac.in'
  },
  {
    slug: 'vit-cgpa-calculator',
    abbreviation: 'VIT',
    name: 'Vellore Institute of Technology',
    location: 'Vellore, India',
    country: 'India',
    description: 'VIT is a highly ranked private research university in India, popular for its flexible credit system, diverse student body, and modern infrastructure.',
    est: '1984',
    system: 'standard-10-point',
    website: 'https://vit.ac.in'
  },
  {
    slug: 'srm-cgpa-calculator',
    abbreviation: 'SRM',
    name: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    country: 'India',
    description: 'SRM Institute is a prominent private higher education institute in India, offering state-of-the-art engineering, medical, and management courses.',
    est: '1985',
    system: 'standard-10-point',
    website: 'https://www.srmist.edu.in'
  },
  {
    slug: 'mumbai-university-cgpa-calculator',
    abbreviation: 'Mumbai University',
    name: 'University of Mumbai',
    location: 'Mumbai, India',
    country: 'India',
    description: 'University of Mumbai is one of the oldest and largest public state universities in India, offering diverse academic streams and professional degrees.',
    est: '1857',
    system: 'mumbai-university',
    website: 'https://mu.ac.in'
  },
  {
    slug: 'iet-davv-gpa-calculator',
    abbreviation: 'IET DAVV',
    name: 'Institute of Engineering & Technology, DAVV',
    location: 'Indore, Madhya Pradesh, India',
    country: 'India',
    description: 'IET DAVV is a premier engineering college in Indore, affiliated with Devi Ahilya Vishwavidyalaya (DAVV), renowned for technical education and robust placements.',
    est: '1996',
    system: 'iet-davv',
    website: 'https://www.ietdavv.edu.in'
  },
  {
    slug: 'rgpv-cgpa-calculator',
    abbreviation: 'RGPV',
    name: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
    location: 'Bhopal, Madhya Pradesh, India',
    country: 'India',
    description: 'RGPV is the state technological university of Madhya Pradesh, coordinating and regulating technical education across hundreds of affiliated engineering and pharmacy colleges.',
    est: '1998',
    system: 'rgpv',
    website: 'https://www.rgpv.ac.in'
  },
  {
    slug: 'sgsits-cgpa-calculator',
    abbreviation: 'SGSITS',
    name: 'Shri Govindram Seksaria Institute of Technology and Science',
    location: 'Indore, Madhya Pradesh, India',
    country: 'India',
    description: 'SGSITS Indore is a premier autonomous engineering college in MP, established in 1952, highly recognized for its academic standards, research, and excellent alumni network.',
    est: '1952',
    system: 'rgpv',
    website: 'https://www.sgsits.ac.in'
  },
  {
    slug: 'manit-cgpa-calculator',
    abbreviation: 'MANIT',
    name: 'Maulana Azad National Institute of Technology',
    location: 'Bhopal, Madhya Pradesh, India',
    country: 'India',
    description: 'MANIT Bhopal (NIT Bhopal) is a premier technological institute of national importance, offering top-tier engineering education and excellent research opportunities.',
    est: '1960',
    system: 'standard-10-point',
    website: 'https://www.manit.ac.in'
  },
  {
    slug: 'dtu-cgpa-calculator',
    abbreviation: 'DTU',
    name: 'Delhi Technological University',
    location: 'New Delhi, India',
    country: 'India',
    description: 'Delhi Technological University (formerly Delhi College of Engineering) is a premier collegiate public university, highly ranked for engineering and computer science programs.',
    est: '1941',
    system: 'standard-10-point',
    website: 'https://www.dtu.ac.in'
  },
  {
    slug: 'manipal-cgpa-calculator',
    abbreviation: 'MAHE',
    name: 'Manipal Academy of Higher Education',
    location: 'Manipal, Karnataka, India',
    country: 'India',
    description: 'MAHE Manipal is a leading private research university of eminence, offering world-class education in engineering, medicine, sciences, and humanities.',
    est: '1953',
    system: 'standard-10-point',
    website: 'https://manipal.edu'
  },
  {
    slug: 'jadavpur-university-cgpa-calculator',
    abbreviation: 'JU India',
    name: 'Jadavpur University',
    location: 'Kolkata, West Bengal, India',
    country: 'India',
    description: 'Jadavpur University is a premier public state research university in Kolkata, famous for its rigorous engineering courses and academic heritage.',
    est: '1955',
    system: 'standard-10-point',
    website: 'http://www.jaduniv.edu.in'
  },
  {
    slug: 'bits-pilani-gpa-calculator',
    abbreviation: 'BITS Pilani',
    name: 'Birla Institute of Technology and Science, Pilani',
    location: 'Pilani, Rajasthan, India',
    country: 'India',
    description: 'BITS Pilani is one of India\'s top private science and engineering institutes, recognized as an Institute of Eminence with a strong culture of research and start-ups.',
    est: '1964',
    system: 'standard-10-point',
    website: 'https://www.bits-pilani.ac.in'
  },
  {
    slug: 'aktu-cgpa-calculator',
    abbreviation: 'AKTU',
    name: 'Dr. A.P.J. Abdul Kalam Technical University',
    location: 'Lucknow, Uttar Pradesh, India',
    country: 'India',
    description: 'AKTU is a public state technological university in UP, affiliating numerous engineering, architecture, management, and pharmacy institutions across the state.',
    est: '2000',
    system: 'standard-10-point',
    website: 'https://aktu.ac.in'
  },
  {
    slug: 'sppu-cgpa-calculator',
    abbreviation: 'SPPU',
    name: 'Savitribai Phule Pune University',
    location: 'Pune, Maharashtra, India',
    country: 'India',
    description: 'SPPU (formerly University of Pune) is a premier state research university in Maharashtra, often referred to as the \'Oxford of the East\' for its academic heritage.',
    est: '1949',
    system: 'standard-10-point',
    website: 'http://www.unipune.ac.in'
  },
  {
    slug: 'lpu-cgpa-calculator',
    abbreviation: 'LPU',
    name: 'Lovely Professional University',
    location: 'Phagwara, Punjab, India',
    country: 'India',
    description: 'LPU is a giant private university in Punjab, India, hosting students from all over the country and internationally with state-of-the-art modern infrastructure.',
    est: '2005',
    system: 'standard-10-point',
    website: 'https://www.lpu.in'
  },
  {
    slug: 'amity-university-cgpa-calculator',
    abbreviation: 'Amity',
    name: 'Amity University',
    location: 'Noida, Uttar Pradesh, India',
    country: 'India',
    description: 'Amity University is a leading private research university system in India with campuses across Noida, Gurugram, Jaipur, and multiple international locations.',
    est: '2005',
    system: 'standard-10-point',
    website: 'https://www.amity.edu'
  },
  {
    slug: 'anna-university-cgpa-calculator',
    abbreviation: 'Anna University',
    name: 'Anna University',
    location: 'Chennai, India',
    country: 'India',
    description: 'Anna University is a leading public state university in Tamil Nadu, India, coordinating technical and engineering education across the state.',
    est: '1978',
    system: 'standard-10-point',
    website: 'https://www.annauniv.edu'
  },
  {
    slug: 'ktu-cgpa-calculator',
    abbreviation: 'KTU',
    name: 'APJ Abdul Kalam Technological University',
    location: 'Trivandrum, Kerala, India',
    country: 'India',
    description: 'KTU is a state technological university in Kerala, coordinating engineering colleges, technical education, and curriculum development.',
    est: '2014',
    system: 'standard-10-point',
    website: 'https://ktu.edu.in'
  },
  {
    slug: 'delhi-university-cgpa-calculator',
    abbreviation: 'DU India',
    name: 'University of Delhi',
    location: 'New Delhi, India',
    country: 'India',
    description: 'University of Delhi is a premier collegiate public central university in India, famous for high academic standards and rich student culture.',
    est: '1922',
    system: 'cbse-ugc-india',
    website: 'http://www.du.ac.in'
  },

  // United States (Popular)
  {
    slug: 'harvard-gpa-calculator',
    abbreviation: 'Harvard',
    name: 'Harvard University',
    location: 'Cambridge, MA, United States',
    country: 'United States',
    description: 'Harvard is an Ivy League research university in Massachusetts, the oldest higher education institution in the United States, globally renowned.',
    est: '1636',
    system: 'us-4-0',
    website: 'https://www.harvard.edu'
  },
  {
    slug: 'stanford-gpa-calculator',
    abbreviation: 'Stanford',
    name: 'Stanford University',
    location: 'Stanford, CA, United States',
    country: 'United States',
    description: 'Stanford is a world-renowned research university near Silicon Valley, known for entrepreneurship, scientific breakthroughs, and selective admissions.',
    est: '1891',
    system: 'us-4-0',
    website: 'https://www.stanford.edu'
  },
  {
    slug: 'mit-gpa-calculator',
    abbreviation: 'MIT',
    name: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA, United States',
    country: 'United States',
    description: 'MIT is a world-class technological research university in Massachusetts, renowned for pioneering research in AI, computer science, and engineering.',
    est: '1861',
    system: 'five-point',
    website: 'https://www.mit.edu'
  },
  {
    slug: 'berkeley-gpa-calculator',
    abbreviation: 'UC Berkeley',
    name: 'University of California, Berkeley',
    location: 'Berkeley, CA, United States',
    country: 'United States',
    description: 'UC Berkeley is a premier public research university in California, globally leading in sciences, engineering, and humanities.',
    est: '1868',
    system: 'us-4-0',
    website: 'https://www.berkeley.edu'
  },
  {
    slug: 'caltech-gpa-calculator',
    abbreviation: 'Caltech',
    name: 'California Institute of Technology',
    location: 'Pasadena, CA, United States',
    country: 'United States',
    description: 'Caltech is a world-renowned science and engineering institute in California, managing NASA\'s Jet Propulsion Laboratory.',
    est: '1891',
    system: 'us-4-0',
    website: 'https://www.caltech.edu'
  },
  {
    slug: 'columbia-gpa-calculator',
    abbreviation: 'Columbia',
    name: 'Columbia University',
    location: 'New York, NY, United States',
    country: 'United States',
    description: 'Columbia is a prestigious Ivy League university in New York City, recognized for its historic core curriculum and research excellence.',
    est: '1754',
    system: 'us-4-0',
    website: 'https://www.columbia.edu'
  },
  {
    slug: 'yale-gpa-calculator',
    abbreviation: 'Yale',
    name: 'Yale University',
    location: 'New Haven, CT, United States',
    country: 'United States',
    description: 'Yale is a leading Ivy League university in Connecticut, known for its residential college system, arts, and prestigious humanities programs.',
    est: '1701',
    system: 'us-4-0',
    website: 'https://www.yale.edu'
  },

  // United Kingdom (Popular)
  {
    slug: 'oxford-gpa-calculator',
    abbreviation: 'Oxford',
    name: 'University of Oxford',
    location: 'Oxford, United Kingdom',
    country: 'United Kingdom',
    description: 'Oxford is the oldest university in the English-speaking world, recognized for academic prestige, tutorials, and historic research.',
    est: '1096',
    system: 'standard-10-point',
    website: 'https://www.ox.ac.uk'
  },
  {
    slug: 'cambridge-gpa-calculator',
    abbreviation: 'Cambridge',
    name: 'University of Cambridge',
    location: 'Cambridge, United Kingdom',
    country: 'United Kingdom',
    description: 'Cambridge is the second-oldest university in the English-speaking world, offering historic academic excellence and collegiate learning.',
    est: '1209',
    system: 'standard-10-point',
    website: 'https://www.cam.ac.uk'
  },
  {
    slug: 'imperial-gpa-calculator',
    abbreviation: 'Imperial',
    name: 'Imperial College London',
    location: 'London, United Kingdom',
    country: 'United Kingdom',
    description: 'Imperial College London is a world top-ten university specializing in science, engineering, medicine, and business.',
    est: '1907',
    system: 'standard-10-point',
    website: 'https://www.imperial.ac.uk'
  },
  {
    slug: 'ucl-gpa-calculator',
    abbreviation: 'UCL',
    name: 'University College London',
    location: 'London, United Kingdom',
    country: 'United Kingdom',
    description: 'UCL is a premier public research university in London, recognized for its global impact, diverse streams, and history of innovation.',
    est: '1826',
    system: 'standard-10-point',
    website: 'https://www.ucl.ac.uk'
  },

  // Canada (Popular)
  {
    slug: 'toronto-gpa-calculator',
    abbreviation: 'U of T',
    name: 'University of Toronto',
    location: 'Toronto, Canada',
    country: 'Canada',
    description: 'The University of Toronto is a leading public research university in Canada, renowned for research in medicine, engineering, and artificial intelligence.',
    est: '1827',
    system: 'us-4-0',
    website: 'https://www.utoronto.ca'
  },
  {
    slug: 'ubc-gpa-calculator',
    abbreviation: 'UBC',
    name: 'University of British Columbia',
    location: 'Vancouver, Canada',
    country: 'Canada',
    description: 'UBC is a top public research university in British Columbia, Canada, famous for its scenic coast campus and high academic ranking.',
    est: '1908',
    system: 'can-4-33',
    website: 'https://www.ubc.ca'
  },
  {
    slug: 'mcgill-gpa-calculator',
    abbreviation: 'McGill',
    name: 'McGill University',
    location: 'Montreal, Quebec, Canada',
    country: 'Canada',
    description: 'McGill is a leading public research university in Montreal, Canada, known for medical sciences, humanities, and high entry requirements.',
    est: '1821',
    system: 'us-4-0',
    website: 'https://www.mcgill.ca'
  },
  {
    slug: 'waterloo-gpa-calculator',
    abbreviation: 'Waterloo',
    name: 'University of Waterloo',
    location: 'Waterloo, Ontario, Canada',
    country: 'Canada',
    description: 'Waterloo is a top Canadian technological university, globally recognized for its co-op education program, mathematics, and engineering.',
    est: '1957',
    system: 'can-4-33',
    website: 'https://uwaterloo.ca'
  },

  // Bangladesh
  {
    slug: 'du-cgpa-calculator',
    abbreviation: 'DU',
    name: 'University of Dhaka',
    location: 'Dhaka, Bangladesh',
    country: 'Bangladesh',
    description: 'The University of Dhaka, established in 1921, is the oldest and most prestigious public university in Bangladesh, famous for its contributions to science and arts.',
    est: '1921',
    system: 'us-4-0',
    website: 'https://www.du.ac.bd'
  },
  {
    slug: 'bracu-cgpa-calculator',
    abbreviation: 'BRACU',
    name: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    country: 'Bangladesh',
    description: 'BRAC University is a leading private university in Bangladesh, known for its high-quality education, modern campus, and focus on sustainable development.',
    est: '2001',
    system: 'us-4-0',
    website: 'https://www.bracu.ac.bd'
  },
  {
    slug: 'nsu-cgpa-calculator',
    abbreviation: 'NSU',
    name: 'North South University',
    location: 'Dhaka, Bangladesh',
    country: 'Bangladesh',
    description: 'North South University (NSU) is the first private university in Bangladesh, established in 1992, widely recognized for its business and computer science schools.',
    est: '1992',
    system: 'us-4-0',
    website: 'http://www.northsouth.edu'
  },
  {
    slug: 'buet-cgpa-calculator',
    abbreviation: 'BUET',
    name: 'Bangladesh University of Engineering and Technology',
    location: 'Dhaka, Bangladesh',
    country: 'Bangladesh',
    description: 'BUET is the premier public engineering university in Bangladesh, established in 1962, producing top engineering talent globally through highly competitive programs.',
    est: '1962',
    system: 'us-4-0',
    website: 'https://www.buet.ac.bd'
  },
  {
    slug: 'ruet-cgpa-calculator',
    abbreviation: 'RUET',
    name: 'Rajshahi University of Engineering & Technology',
    location: 'Rajshahi, Bangladesh',
    country: 'Bangladesh',
    description: 'RUET is a leading public engineering university in Rajshahi, Bangladesh, offering undergraduate and graduate programs across engineering, planning, and sciences.',
    est: '1964',
    system: 'us-4-0',
    website: 'http://www.ruet.ac.bd'
  },
  {
    slug: 'kuet-cgpa-calculator',
    abbreviation: 'KUET',
    name: 'Khulna University of Engineering & Technology',
    location: 'Khulna, Bangladesh',
    country: 'Bangladesh',
    description: 'KUET is a public engineering university in Khulna, Bangladesh, offering programs in engineering, computer science, and technology with a strong focus on research.',
    est: '1974',
    system: 'us-4-0',
    website: 'http://www.kuet.ac.bd'
  },
  {
    slug: 'cuet-cgpa-calculator',
    abbreviation: 'CUET',
    name: 'Chittagong University of Engineering & Technology',
    location: 'Chittagong, Bangladesh',
    country: 'Bangladesh',
    description: 'CUET is a prominent public engineering university in Chittagong, Bangladesh, known for engineering research, computing facilities, and academic excellence.',
    est: '1968',
    system: 'us-4-0',
    website: 'https://www.cuet.ac.bd'
  },
  {
    slug: 'sust-cgpa-calculator',
    abbreviation: 'SUST',
    name: 'Shahjalal University of Science and Technology',
    location: 'Sylhet, Bangladesh',
    country: 'Bangladesh',
    description: 'SUST is a pioneering public research university in Sylhet, Bangladesh, renowned for its computer science programs, scientific research, and scenic campus.',
    est: '1986',
    system: 'us-4-0',
    website: 'https://www.sust.edu'
  },
  {
    slug: 'iut-cgpa-calculator',
    abbreviation: 'IUT',
    name: 'Islamic University of Technology',
    location: 'Gazipur, Bangladesh',
    country: 'Bangladesh',
    description: 'IUT is an international university located in Bangladesh, run by the Organization of Islamic Cooperation (OIC), offering top-tier engineering programs.',
    est: '1978',
    system: 'us-4-0',
    website: 'https://www.iutoic-dhaka.edu'
  },
  {
    slug: 'ju-cgpa-calculator',
    abbreviation: 'JU',
    name: 'Jahangirnagar University',
    location: 'Savar, Dhaka, Bangladesh',
    country: 'Bangladesh',
    description: 'Jahangirnagar University is a premier public university in Bangladesh, famous for its scenic beauty, migratory birds, and research in sciences and arts.',
    est: '1970',
    system: 'us-4-0',
    website: 'https://ju.ac.bd'
  },
  {
    slug: 'ru-cgpa-calculator',
    abbreviation: 'RU',
    name: 'University of Rajshahi',
    location: 'Rajshahi, Bangladesh',
    country: 'Bangladesh',
    description: 'University of Rajshahi is one of the largest and oldest public research universities in Bangladesh, boasting a beautiful campus and rich history.',
    est: '1953',
    system: 'us-4-0',
    website: 'http://www.ru.ac.bd'
  },
  {
    slug: 'cu-cgpa-calculator',
    abbreviation: 'CU',
    name: 'University of Chittagong',
    location: 'Chittagong, Bangladesh',
    country: 'Bangladesh',
    description: 'University of Chittagong is a leading public research university located in the hilly areas of Chittagong, offering diverse academic courses.',
    est: '1966',
    system: 'us-4-0',
    website: 'https://cu.ac.bd'
  },

  // Pakistan
  {
    slug: 'nust-cgpa-calculator',
    abbreviation: 'NUST',
    name: 'National University of Sciences and Technology',
    location: 'Islamabad, Pakistan',
    country: 'Pakistan',
    description: 'NUST is a leading public research university in Pakistan, renowned for its engineering, computer science, and business schools.',
    est: '1991',
    system: 'us-4-0',
    website: 'https://nust.edu.pk'
  },
  {
    slug: 'lums-gpa-calculator',
    abbreviation: 'LUMS',
    name: 'Lahore University of Management Sciences',
    location: 'Lahore, Pakistan',
    country: 'Pakistan',
    description: 'LUMS is a top-ranked private research university in Lahore, Pakistan, known for business, humanities, law, and engineering schools.',
    est: '1984',
    system: 'us-4-0',
    website: 'https://lums.edu.pk'
  },
  {
    slug: 'comsats-cgpa-calculator',
    abbreviation: 'COMSATS',
    name: 'COMSATS University Islamabad',
    location: 'Islamabad, Pakistan',
    country: 'Pakistan',
    description: 'COMSATS is a prominent public research university in Pakistan, highly specialized in information technology, computer science, and engineering.',
    est: '1998',
    system: 'us-4-0',
    website: 'https://www.comsats.edu.pk'
  },
  {
    slug: 'fast-cgpa-calculator',
    abbreviation: 'FAST',
    name: 'National University of Computer and Emerging Sciences',
    location: 'Islamabad, Pakistan',
    country: 'Pakistan',
    description: 'FAST-NUCES is a leading multi-campus private university in Pakistan, widely regarded as the top national institution for computer science education.',
    est: '2000',
    system: 'us-4-0',
    website: 'http://nu.edu.pk'
  },
  {
    slug: 'uet-cgpa-calculator',
    abbreviation: 'UET Lahore',
    name: 'University of Engineering and Technology, Lahore',
    location: 'Lahore, Pakistan',
    country: 'Pakistan',
    description: 'UET Lahore is one of the oldest and most prestigious engineering universities in Pakistan, known for producing top class engineering graduates.',
    est: '1921',
    system: 'us-4-0',
    website: 'https://uet.edu.pk'
  }
];
