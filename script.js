/* ==========================================================================
   YuvaConnect - Main Application Script
   A Community Engagement Project (CEP) by SNJB COE Students
   Chandwad, Nashik District, Maharashtra, India
   ========================================================================== */

/* ==========================================================================
   SECTION 1: CONSTANTS AND SETTINGS
   ========================================================================== */

// Note on Security & Simulated Architecture:
// This application runs entirely on the client side for demonstration purposes.
// Sign-in, employer listings, and admin approvals are SIMULATED in localStorage.
// Frontend role checks are for the demo only; real admin rights and data
// authorization MUST be enforced by a secure backend server with session tokens,
// never by a front-end check or a user-editable client value.
// We strictly adhere to transparency: no fake placement statistics, no user
// counts, and no "verified" claims because there is no external verification process.

const APP_SETTINGS = {
  appName: "YuvaConnect",
  storagePrefix: "yc_",
  defaultLanguage: "en",
  defaultRole: "guest",
  contact: {
    email: "shindeatharv01@gmail.com",
    phone: "9049569406",
    whatsappUrl: "https://wa.me/919049569406",
    address: "Nashik",
    college: "SNJB COE"
  }
};

const JOB_CATEGORIES = [
  "IT",
  "Office/Admin",
  "Retail/Sales",
  "Manufacturing/Factory",
  "Agriculture",
  "Construction",
  "Driving/Logistics",
  "Skilled trades",
  "Hospitality/Food",
  "Healthcare support",
  "Education/Tutoring",
  "Apprenticeships",
  "Entry-level/General",
  "Other"
];

const JOB_TYPES = [
  "full-time",
  "part-time",
  "temporary",
  "apprenticeship",
  "remote"
];

const WORK_MODES = [
  "on-site",
  "remote",
  "hybrid"
];

const EDUCATION_OPTIONS = [
  "Any",
  "Below 10th",
  "10th pass",
  "12th pass",
  "ITI",
  "Diploma",
  "Graduate",
  "Postgraduate"
];

const EXPERIENCE_OPTIONS = [
  "Fresher",
  "0-1 year",
  "1-3 years",
  "3+ years"
];

const GUIDANCE_CATEGORIES = [
  "Interview preparation",
  "Common interview questions",
  "Communication tips",
  "Workplace readiness",
  "Job applications",
  "Email examples",
  "Your first job",
  "Changing career",
  "Returning after a break",
  "Career planning"
];

/* ==========================================================================
   SECTION 2: TRANSLATIONS (English and Marathi)
   Comment: Marathi text needs review by a native speaker.
   ========================================================================== */

const TRANSLATIONS = {
  en: {
    skip_to_main: "Skip to main content",
    tagline: "Connecting People to Opportunities",
    top_bar_project: "Nashik District Community Engagement Project (CEP)",
    demo_badge: "SIMULATED",
    demo_banner_text: "Demo version: sign-in, employer and admin features are simulated in this browser. No data is sent anywhere.",
    
    // Navigation
    nav_home: "Home",
    nav_jobs: "Find Jobs",
    nav_guidance: "Career Guidance",
    nav_employer: "Employer Portal",
    nav_dashboard: "My Dashboard",
    nav_admin: "Admin Console",
    nav_about: "About YuvaConnect",
    nav_contact: "Contact Us",
    nav_privacy: "Privacy Policy",
    nav_terms: "Terms of Service",
    
    // Hero & Home (4.2 specs)
    hero_pill: "Community Engagement Project by SNJB COE",
    hero_headline: "Dignified Work and Career Guidance for Everyone",
    hero_paragraph: "Connecting job seekers across Nashik district, from MIDC industrial areas to rural talukas, with local job listings and simple career guidance. YuvaConnect does not guarantee jobs.",
    hero_btn_find: "Find Jobs →",
    hero_btn_guidance: "Career Guidance",
    hero_btn_post: "Post a Job",
    search_keyword_placeholder: "Job title, skill, or trade...",
    search_location_placeholder: "Town or village (e.g. Chandwad)",
    btn_search: "Search Jobs",
    
    // Safety Notice
    safety_notice_label: "Safety Notice / सुरक्षा इशारा:",
    safety_notice_body: "Never pay any money to anyone for application fees, interview appointments or job security deposits.",
    
    // Four Info Cards
    info_card_1_title: "Marathi + English",
    info_card_1_caption: "Switch language at any time",
    info_card_2_title: "Nashik District",
    info_card_2_caption: "Focus on local towns and talukas",
    info_card_3_title: "Clear Labels",
    info_card_3_caption: "Sample jobs are marked SAMPLE",
    info_card_4_title: "No Fee Rule",
    info_card_4_caption: "Never pay anyone to get a job",

    // Headings
    services_heading: "What YuvaConnect Offers",
    how_it_works_heading: "How It Works for Job Seekers",
    featured_jobs_heading: "Featured Opportunities",
    guidance_highlights_heading: "Career Guidance Highlights",
    community_impact_heading: "Community Impact & Testing",
    trust_safety_heading: "Trust & Safety Notes",

    // Common Actions & Badges
    badge_sample: "SAMPLE",
    badge_approved: "Approved",
    badge_pending: "Pending",
    badge_rejected: "Rejected",
    badge_expired: "Expired",
    badge_closed: "Closed",
    btn_view_details: "View Details",
    btn_save_job: "Save job",
    btn_saved: "Saved ✓",
    btn_report_job: "Report this job",
    btn_back: "Back",
    btn_clear_filters: "Clear filters",
    btn_apply: "How to Apply",
    salary_undisclosed: "Salary not disclosed",
    unverified: "Unverified",
    reviewed_on: "Reviewed by admin on",
    review_warning: "Admin review does not guarantee that a job is genuine.",
    fee_warning: "Important: Never pay any fee or deposit to get a job. YuvaConnect does not charge any fees.",

    // Footer
    footer_cep_note: "A Community Engagement Project by SNJB COE students, Nashik district, Maharashtra, India.",
    footer_disclaimer: "YuvaConnect never claims to guarantee employment. It only improves access to opportunities and job readiness.",
    footer_quick_links: "Quick Links",
    footer_information: "Information",
    footer_contact_info: "Contact & College",
    footer_copyright: "© 2026 YuvaConnect | SNJB COE Students Community Engagement Project.",

    // Access messages
    access_title: "Access Notice",
    access_jobseeker_msg: "This page is for Job Seekers. In this demo, change the Role at the top. In the real version you will sign in.",
    access_employer_msg: "This page is for Employers. In this demo, change the Role at the top. In the real version you will sign in.",
    access_admin_msg: "This page is for Administrators. In this demo, change the Role at the top. In the real version you will sign in. Note: In real life, Administrator is never assigned through public registration.",
    save_job_guest_msg: "To save jobs, please switch your demo Role to Seeker at the top."
  },
  mr: {
    skip_to_main: "मुख्य मजकुराकडे जा",
    tagline: "लोकांना संधींशी जोडत आहोत",
    top_bar_project: "नाशिक जिल्हा समाज उपयोगी प्रकल्प (CEP)",
    demo_badge: "सिम्युलेटेड",
    demo_banner_text: "डेमो आवृत्ती: साइन-इन, नियोक्ता आणि ॲडमिन वैशिष्ट्ये या ब्राउझरमध्ये सिम्युलेट केलेली आहेत. कोणताही डेटा कुठेही पाठवला जात नाही.",

    // Navigation
    nav_home: "मुख्यपृष्ठ",
    nav_jobs: "नोकऱ्या शोधा",
    nav_guidance: "कारकीर्द मार्गदर्शन",
    nav_employer: "नियोक्ता पोर्टल",
    nav_dashboard: "माझे डॅशबोर्ड",
    nav_admin: "ॲडमिन कन्सोल",
    nav_about: "युवाकनेक्ट बद्दल",
    nav_contact: "संपर्क साधा",
    nav_privacy: "गोपनीयता धोरण",
    nav_terms: "नियम व अटी",

    // Hero & Home
    hero_pill: "एसएनजेबी अभियांत्रिकी महाविद्यालय (SNJB COE) विद्यार्थी प्रकल्प",
    hero_headline: "सर्वांसाठी सन्मानपूर्वक काम आणि कारकीर्द मार्गदर्शन",
    hero_paragraph: "एमआयडीसी औद्योगिक क्षेत्रापासून ग्रामीण तालुक्यांपर्यंत नाशिक जिल्ह्यातील नोकरी शोधणाऱ्यांना स्थानिक नोकऱ्या आणि सोपे मार्गदर्शन मिळवून देणे. युवाकनेक्ट नोकरीची हमी देत नाही.",
    hero_btn_find: "नोकऱ्या शोधा →",
    hero_btn_guidance: "कारकीर्द मार्गदर्शन",
    hero_btn_post: "नोकरी नोंदवा",
    search_keyword_placeholder: "नोकरी, पद किंवा कौशल्य...",
    search_location_placeholder: "गाव किंवा शहर (उदा. चांदवड)",
    btn_search: "नोकऱ्या शोधा",

    // Safety Notice
    safety_notice_label: "Safety Notice / सुरक्षा इशारा:",
    safety_notice_body: "अर्ज शुल्क, मुलाखत किंवा अनामत रकमेच्या नावाखाली कोणालाही कधीही पैसे देऊ नका.",

    // Four Info Cards
    info_card_1_title: "मराठी + English",
    info_card_1_caption: "कोणत्याही वेळी भाषा बदला",
    info_card_2_title: "नाशिक जिल्हा",
    info_card_2_caption: "स्थानिक शहरे आणि तालुक्यांवर भर",
    info_card_3_title: "स्पष्ट लेबल्स",
    info_card_3_caption: "नमुना नोकऱ्यांवर SAMPLE खूण आहे",
    info_card_4_title: "विनामूल्य नियम",
    info_card_4_caption: "नोकरीसाठी कोणालाही पैसे देऊ नका",

    // Headings
    services_heading: "युवाकनेक्टच्या मुख्य सेवा",
    how_it_works_heading: "नोकरी शोधणाऱ्यांसाठी सोप्या पायऱ्या",
    featured_jobs_heading: "निवडक उपलब्ध संधी",
    guidance_highlights_heading: "मार्गदर्शन लेख",
    community_impact_heading: "आमची बांधिलकी आणि चाचणी",
    trust_safety_heading: "सुरक्षितता आणि विश्वास सूचना",

    // Common Actions & Badges
    badge_sample: "SAMPLE",
    badge_approved: "मंजूर",
    badge_pending: "पेंडिंग",
    badge_rejected: "नाकारले",
    badge_expired: "मुदत संपली",
    badge_closed: "बंद केले",
    btn_view_details: "तपशील पहा",
    btn_save_job: "नोकरी जतन करा",
    btn_saved: "जतन केले ✓",
    btn_report_job: "तक्रार नोंदवा",
    btn_back: "मागे जा",
    btn_clear_filters: "फिल्टर काढा",
    btn_apply: "अर्ज कसा करावा",
    salary_undisclosed: "वेतन नमूद नाही",
    unverified: "Unverified",
    reviewed_on: "ॲडमिनने तपासले:",
    review_warning: "ॲडमिन तपासणी म्हणजे नोकरी खरी असण्याची हमी नाही.",
    fee_warning: "महत्वाचे: नोकरीसाठी कोणालाही पैसे देऊ नका. युवाकनेक्ट कोणतेही शुल्क आकारत नाही.",

    // Footer
    footer_cep_note: "एसएनजेबी अभियांत्रिकी महाविद्यालयाच्या (SNJB COE) विद्यार्थ्यांचा एक समाज उपयोगी प्रकल्प, नाशिक जिल्हा, महाराष्ट्र.",
    footer_disclaimer: "युवाकनेक्ट कधीही नोकरीची हमी देत नाही. हे केवळ रोजगाराच्या संधी व पूर्वतयारी सुलभ करते.",
    footer_quick_links: "महत्वाच्या लिंक्स",
    footer_information: "माहिती",
    footer_contact_info: "संपर्क व महाविद्यालय",
    footer_copyright: "© २०२६ युवाकनेक्ट | एसएनजेबी अभियांत्रिकी महाविद्यालय विद्यार्थी प्रकल्प.",

    // Access messages
    access_title: "प्रवेश मर्यादा",
    access_jobseeker_msg: "हे पृष्ठ नोकरी शोधणाऱ्यांसाठी आहे. या डेमोमध्ये वरील 'Role' बदला. प्रत्यक्ष प्रणालीमध्ये आपण साइन इन कराल.",
    access_employer_msg: "हे पृष्ठ नियोक्त्यांसाठी आहे. या डेमोमध्ये वरील 'Role' बदला. प्रत्यक्ष प्रणालीमध्ये आपण साइन इन कराल.",
    access_admin_msg: "हे पृष्ठ ॲडमिनिस्ट्रेटरसाठी आहे. या डेमोमध्ये वरील 'Role' बदला. प्रत्यक्ष प्रणालीमध्ये आपण साइन इन कराल. सूचना: प्रत्यक्ष प्रणालीमध्ये ॲडमिन अधिकार सार्वजनिक नोंदणीने कधीही मिळत नाहीत.",
    save_job_guest_msg: "नोकरी जतन करण्यासाठी कृपया वरील Role पर्यायातून Seeker निवडा."
  }
};

function t(key) {
  const lang = AppState.language || "en";
  if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
    return TRANSLATIONS[lang][key];
  }
  if (TRANSLATIONS["en"] && TRANSLATIONS["en"][key]) {
    return TRANSLATIONS["en"][key];
  }
  return key;
}

/* ==========================================================================
   SECTION 3: SAMPLE DATA (12 jobs across Nashik district & 10 guidance articles)
   All sample jobs have isSample: true, fictional employer names,
   and contact note: 'Sample job: no real contact'.
   Zero 'verified' claims.
   ========================================================================== */

const INITIAL_SAMPLE_JOBS = [
  {
    id: "job-001",
    isSample: true,
    title: "Junior Accounts Assistant",
    employerName: "Sample Agro Traders",
    category: "Office/Admin",
    jobType: "full-time",
    workMode: "on-site",
    description: "Support daily book-keeping, entry of agricultural produce invoices, and billing in Chandwad mandi market office.",
    responsibilities: "Maintain physical ledgers, enter bills into Tally or computer sheets, assist senior accountant during monthly tally.",
    qualifications: "Basic knowledge of commerce or accounts. 12th commerce or B.Com preferred.",
    skills: "Basic Tally, Excel, Marathi & Hindi communication",
    education: "12th pass",
    experience: "Fresher",
    salaryMin: 10000,
    salaryMax: 13000,
    salaryUndisclosed: false,
    locationTown: "Chandwad",
    locationDistrict: "Nashik",
    locationVillage: "Near APMC Market",
    applyMethod: "walk-in",
    applyInstructions: "Sample job: no real contact. For demo only. Walk-in between 10am to 1pm.",
    source: "Sample listing by SNJB CEP Team",
    datePosted: "2026-10-15",
    lastUpdated: "2026-10-18",
    verificationStatus: "Reviewed by admin on 2026-10-19",
    status: "approved",
    deadline: "2026-12-31"
  },
  {
    id: "job-002",
    isSample: true,
    title: "CNC Machine Operator Trainee",
    employerName: "Sample Engineering Works",
    category: "Manufacturing/Factory",
    jobType: "apprenticeship",
    workMode: "on-site",
    description: "Apprenticeship opening for mechanical trainees to learn operating lathe and milling machinery.",
    responsibilities: "Load workpieces, check component dimensions with vernier calipers, report cutting tool wear.",
    qualifications: "ITI in Machinist, Fitter or Turner.",
    skills: "Blueprint reading, Vernier calliper usage, Machine safety",
    education: "ITI",
    experience: "Fresher",
    salaryMin: 9500,
    salaryMax: 11000,
    salaryUndisclosed: false,
    locationTown: "Manmad",
    locationDistrict: "Nashik",
    locationVillage: "MIDC Area",
    applyMethod: "call",
    applyInstructions: "Sample job: no real contact. In real listing, call would be provided.",
    source: "Sample listing by SNJB CEP Team",
    datePosted: "2026-10-10",
    lastUpdated: "2026-10-12",
    verificationStatus: "Reviewed by admin on 2026-10-14",
    status: "approved",
    deadline: "2026-12-25"
  },
  {
    id: "job-003",
    isSample: true,
    title: "Remote Tele-Caller (Marathi/Hindi)",
    employerName: "Sample Customer Care Hub",
    category: "Retail/Sales",
    jobType: "remote",
    workMode: "remote",
    description: "Work from home answering customer enquiries regarding order status and product delivery.",
    responsibilities: "Handle 40-50 calls per day, log complaints into simple web portal, maintain polite tone.",
    qualifications: "12th Pass or any graduate. Clear voice and good listening skills.",
    skills: "Polite speech, Marathi and Hindi fluency, basic smartphone use",
    education: "12th pass",
    experience: "0-1 year",
    salaryMin: 12000,
    salaryMax: 15000,
    salaryUndisclosed: false,
    locationTown: "Nashik",
    locationDistrict: "Nashik",
    locationVillage: "Remote (Home-based)",
    applyMethod: "whatsapp",
    applyInstructions: "Sample job: no real contact. In real listing, a WhatsApp link will be shown.",
    source: "Sample listing by SNJB CEP Team",
    datePosted: "2026-10-20",
    lastUpdated: "2026-10-20",
    verificationStatus: "Reviewed by admin on 2026-10-21",
    status: "approved",
    deadline: "2026-12-30"
  },
  {
    id: "job-004",
    isSample: true,
    title: "Store Assistant & Shelf Stocker",
    employerName: "Sample Provision Store",
    category: "Retail/Sales",
    jobType: "part-time",
    workMode: "on-site",
    description: "Evening part-time helper needed to arrange grocery shelves, verify packet weights, and assist customers.",
    responsibilities: "Stock shelves, assist customers with bags, keep aisles tidy.",
    qualifications: "Basic reading skills. Friendly attitude.",
    skills: "Basic counting, physical stamina, punctuality",
    education: "Below 10th",
    experience: "Fresher",
    salaryMin: 5000,
    salaryMax: 6500,
    salaryUndisclosed: false,
    locationTown: "Chandwad",
    locationDistrict: "Nashik",
    locationVillage: "Station Road",
    applyMethod: "walk-in",
    applyInstructions: "Sample job: no real contact. Walk-in between 4pm and 6pm.",
    source: "Sample listing by SNJB CEP Team",
    datePosted: "2026-10-18",
    lastUpdated: "2026-10-18",
    verificationStatus: "Unverified",
    status: "approved",
    deadline: "2026-12-20"
  },
  {
    id: "job-005",
    isSample: true,
    title: "Tractor & Farm Equipment Mechanic",
    employerName: "Sample Tractor Repairs",
    category: "Skilled trades",
    jobType: "full-time",
    workMode: "on-site",
    description: "Repair and routine servicing of diesel engines, hydraulics, and attachments for agricultural tractors.",
    responsibilities: "Disassemble diesel pumps, change engine oils, inspect brake pads and clutch plates.",
    qualifications: "ITI Diesel Mechanic or 1 year hands-on experience under master mechanic.",
    skills: "Diesel engine overhaul, hydraulic checks, problem solving",
    education: "ITI",
    experience: "1-3 years",
    salaryMin: 0,
    salaryMax: 0,
    salaryUndisclosed: true,
    locationTown: "Lasalgaon",
    locationDistrict: "Nashik",
    locationVillage: "Vinchur Phata",
    applyMethod: "call",
    applyInstructions: "Sample job: no real contact. Call between 9am to 6pm.",
    source: "Sample listing by SNJB CEP Team",
    datePosted: "2026-10-16",
    lastUpdated: "2026-10-17",
    verificationStatus: "Reviewed by admin on 2026-10-19",
    status: "approved",
    deadline: "2026-12-31"
  },
  {
    id: "job-006",
    isSample: true,
    title: "Junior Web Assistant (HTML/CSS)",
    employerName: "Sample Digital Solutions",
    category: "IT",
    jobType: "full-time",
    workMode: "hybrid",
    description: "Update static web pages, enter catalog items, and verify mobile responsiveness for local businesses.",
    responsibilities: "Write simple HTML templates, upload images, test forms across mobile phones.",
    qualifications: "Diploma or Degree in Computer/IT or equivalent certification.",
    skills: "HTML5, CSS3, basic JavaScript, Git basics",
    education: "Diploma",
    experience: "Fresher",
    salaryMin: 14000,
    salaryMax: 18000,
    salaryUndisclosed: false,
    locationTown: "Nashik",
    locationDistrict: "Nashik",
    locationVillage: "College Road / Hybrid",
    applyMethod: "email",
    applyInstructions: "Sample job: no real contact. In real listing, email address would be provided.",
    source: "Sample listing by SNJB CEP Team",
    datePosted: "2026-10-22",
    lastUpdated: "2026-10-22",
    verificationStatus: "Reviewed by admin on 2026-10-23",
    status: "approved",
    deadline: "2026-12-31"
  },
  {
    id: "job-007",
    isSample: true,
    title: "Solar Water Pump Technician Helper",
    employerName: "Sample Solar Power",
    category: "Skilled trades",
    jobType: "temporary",
    workMode: "on-site",
    description: "Assist master electrician in mounting solar panels and connecting agricultural submersible pump inverters.",
    responsibilities: "Carry mounting rails, assist with cable routing, verify earth pit resistance.",
    qualifications: "10th pass or ITI Wireman / Electrician.",
    skills: "Basic wiring, safety harness use, outdoor physical work",
    education: "10th pass",
    experience: "Fresher",
    salaryMin: 9000,
    salaryMax: 12000,
    salaryUndisclosed: false,
    locationTown: "Yeola",
    locationDistrict: "Nashik",
    locationVillage: "Rural Yeola Cluster",
    applyMethod: "walk-in",
    applyInstructions: "Sample job: no real contact. Demo only.",
    source: "Sample listing by SNJB CEP Team",
    datePosted: "2026-10-12",
    lastUpdated: "2026-10-14",
    verificationStatus: "Reviewed by admin on 2026-10-15",
    status: "approved",
    deadline: "2026-12-15"
  },
  {
    id: "job-008",
    isSample: true,
    title: "Textile Powerloom Maintenance Worker",
    employerName: "Sample Weaving Mills",
    category: "Manufacturing/Factory",
    jobType: "full-time",
    workMode: "on-site",
    description: "Maintenance helper for cotton and silk powerlooms. Periodic oiling, shuttle checks, and yarn knotting.",
    responsibilities: "Oil loom bearings, inspect broken threads, adjust warp beam tension.",
    qualifications: "Any education. Familiarity with local textile machinery is an advantage.",
    skills: "Hand-eye coordination, physical agility, mechanical inclination",
    education: "Below 10th",
    experience: "0-1 year",
    salaryMin: 11000,
    salaryMax: 13500,
    salaryUndisclosed: false,
    locationTown: "Malegaon",
    locationDistrict: "Nashik",
    locationVillage: "Powerloom Cluster",
    applyMethod: "call",
    applyInstructions: "Sample job: no real contact. For demo purposes.",
    source: "Sample listing by SNJB CEP Team",
    datePosted: "2026-10-11",
    lastUpdated: "2026-10-11",
    verificationStatus: "Unverified",
    status: "approved",
    deadline: "2026-12-28"
  },
  {
    id: "job-009",
    isSample: true,
    title: "Delivery Driver (Mini Commercial Vehicle)",
    employerName: "Sample Cold Storage & Logistics",
    category: "Driving/Logistics",
    jobType: "full-time",
    workMode: "on-site",
    description: "Daily transportation of fresh vegetables, onions, and crates between rural collection hubs and Nashik market.",
    responsibilities: "Safe vehicle driving, loading verification, fuel log maintenance.",
    qualifications: "Valid Commercial Light Motor Vehicle (LMV-TR) driving license.",
    skills: "Defensive driving, road knowledge of Nashik district, vehicle inspection",
    education: "10th pass",
    experience: "1-3 years",
    salaryMin: 13000,
    salaryMax: 16000,
    salaryUndisclosed: false,
    locationTown: "Chandwad",
    locationDistrict: "Nashik",
    locationVillage: "Chandwad Highway Junction",
    applyMethod: "walk-in",
    applyInstructions: "Sample job: no real contact. Carry license copy.",
    source: "Sample listing by SNJB CEP Team",
    datePosted: "2026-10-21",
    lastUpdated: "2026-10-21",
    verificationStatus: "Reviewed by admin on 2026-10-22",
    status: "approved",
    deadline: "2026-12-31"
  },
  {
    id: "job-010",
    isSample: true,
    title: "Primary School Math & English Tutor",
    employerName: "Sample Study Circle",
    category: "Education/Tutoring",
    jobType: "part-time",
    workMode: "on-site",
    description: "Teach basic mathematics, Marathi reading, and conversational English to 1st to 5th standard students.",
    responsibilities: "Conduct 2-hour daily evening classes, check homework, encourage slow learners.",
    qualifications: "12th Pass or D.El.Ed / B.Ed student. Patient and kind demeanor.",
    skills: "Simple math explanations, clear pronunciation, classroom discipline",
    education: "12th pass",
    experience: "Fresher",
    salaryMin: 4500,
    salaryMax: 6000,
    salaryUndisclosed: false,
    locationTown: "Yeola",
    locationDistrict: "Nashik",
    locationVillage: "Teachers Colony",
    applyMethod: "call",
    applyInstructions: "Sample job: no real contact. Evening calls only.",
    source: "Sample listing by SNJB CEP Team",
    datePosted: "2026-10-14",
    lastUpdated: "2026-10-15",
    verificationStatus: "Reviewed by admin on 2026-10-16",
    status: "approved",
    deadline: "2026-12-20"
  },
  {
    id: "job-011",
    isSample: true,
    title: "Hospital General Duty Attendant (Ward Helper)",
    employerName: "Sample Community Hospital",
    category: "Healthcare support",
    jobType: "full-time",
    workMode: "on-site",
    description: "Support nursing staff with patient movement, changing clean linen, and fetching medicines from dispensary.",
    responsibilities: "Wheelchair assistance, ward cleanliness supervision, food tray delivery.",
    qualifications: "10th pass. Respectful and helpful attitude towards patients.",
    skills: "Hygiene awareness, patient handling, compassionate speech",
    education: "10th pass",
    experience: "Fresher",
    salaryMin: 9500,
    salaryMax: 11500,
    salaryUndisclosed: false,
    locationTown: "Malegaon",
    locationDistrict: "Nashik",
    locationVillage: "Civil Hospital Road",
    applyMethod: "walk-in",
    applyInstructions: "Sample job: no real contact. Walk-in between 11am and 2pm.",
    source: "Sample listing by SNJB CEP Team",
    datePosted: "2026-10-19",
    lastUpdated: "2026-10-19",
    verificationStatus: "Reviewed by admin on 2026-10-20",
    status: "approved",
    deadline: "2026-12-31"
  },
  {
    id: "job-012",
    isSample: true,
    title: "Agricultural Polyhouse Caretaker",
    employerName: "Sample Floriculture Farm",
    category: "Agriculture",
    jobType: "full-time",
    workMode: "on-site",
    description: "Care for capsicum and gerbera flowers inside polyhouse. Monitor drip irrigation and ventilation nets.",
    responsibilities: "Operate drip valves, monitor temperature dials, report pest spots on leaves.",
    qualifications: "Below 10th or 10th pass. Interest in farming.",
    skills: "Plant observation, drip line flushing, punctuality",
    education: "Below 10th",
    experience: "Fresher",
    salaryMin: 8500,
    salaryMax: 10500,
    salaryUndisclosed: false,
    locationTown: "Chandwad",
    locationDistrict: "Nashik",
    locationVillage: "Rahud Ghat Area",
    applyMethod: "call",
    applyInstructions: "Sample job: no real contact. For demo purposes.",
    source: "Sample listing by SNJB CEP Team",
    datePosted: "2026-10-17",
    lastUpdated: "2026-10-17",
    verificationStatus: "Unverified",
    status: "approved",
    deadline: "2026-12-25"
  }
];

const INITIAL_GUIDANCE_ARTICLES = [
  {
    id: "art-001",
    category: "Interview preparation",
    lastUpdated: "2026-10-20",
    titleEn: "How to Prepare for Your Very First In-Person Interview",
    summaryEn: "Simple steps to get your documents ready, plan your travel, and introduce yourself calmly.",
    bodyEn: `
      <h3>1. Getting Ready the Day Before</h3>
      <p>Print two copies of your bio-data or simple resume. Keep your original educational marksheets in a clean file folder along with photocopies. Ensure your clothes are clean, neatly pressed, and comfortable.</p>
      
      <h3>2. Plan Your Travel Time</h3>
      <p>Bus and auto timings can vary. If your interview is at 10:30 AM in Chandwad or Nashik, aim to reach the location by 10:00 AM. Arriving early gives you time to drink water, wash your face, and calm your nervousness.</p>
      
      <h3>3. The Simple Introduction</h3>
      <p>When the interviewer asks "Tell me about yourself", do not panic. Speak in whatever language you are most comfortable with (Marathi or Hindi or English). Say: your name, where you live, your highest education, and any skills or tools you know.</p>
    `,
    titleMr: "तुमच्या पहिल्या प्रत्यक्ष मुलाखतीची पूर्वतयारी कशी करावी",
    summaryMr: "कागदपत्रे व्यवस्थित ठेवणे, वेळेवर पोहोचणे आणि आत्मविश्वासाने स्वतःची ओळख करून देण्याच्या सोप्या टिप्स.",
    bodyMr: `
      <h3>१. आदल्या दिवशीची तयारी</h3>
      <p>तुमच्या बायोडाटाच्या दोन प्रती तयार ठेवा. मूळ शैक्षणिक गुणपत्रिका आणि त्यांच्या झेरॉक्स प्रती एका स्वच्छ फाइलमध्ये ठेवा. साधे आणि स्वच्छ कपडे परिधान करा.</p>
      
      <h3>२. प्रवासाचे नियोजन</h3>
      <p>बस किंवा रिक्षाची वेळ लक्षात घेऊन मुलाखतीच्या वेळेच्या किमान ३० मिनिटे आधी पोहोचा. लवकर पोहोचल्याने मन शांत राहते आणि धावपळ होत नाही.</p>
      
      <h3>३. सोपी ओळख</h3>
      <p>"तुमची माहिती सांगा" असे विचारल्यास घाबरू नका. तुम्हाला ज्या भाषेत (मराठी, हिंदी किंवा इंग्रजी) सोपे वाटते त्यात बोला: तुमचे नाव, गाव, शिक्षण आणि तुम्हाला येणारे काम सांगा.</p>
    `
  },
  {
    id: "art-002",
    category: "Common interview questions",
    lastUpdated: "2026-10-18",
    titleEn: "5 Common Questions Asked in Small Business & Factory Jobs",
    summaryEn: "Practical answers for questions about shift timings, physical work, and staying long term.",
    bodyEn: `
      <h3>Question 1: "Why do you want to work here?"</h3>
      <p><strong>Good Answer:</strong> "I live nearby and I want to learn this trade practically. I am looking for steady work where I can be responsible and reliable."</p>

      <h3>Question 2: "Can you work in shifts or over weekends?"</h3>
      <p><strong>Good Answer:</strong> Be honest. If you have transport for evening shifts, say: "Yes, I have a bicycle/moped and I can do rotational shifts as required."</p>

      <h3>Question 3: "Have you operated this tool/software before?"</h3>
      <p><strong>Good Answer:</strong> Never lie. If you haven't, say: "I have not worked on this exact machine, but I have used similar hand tools and I learn quickly when guided."</p>
    `,
    titleMr: "लहान व्यवसाय आणि कारखान्यातील नोकऱ्यांसाठी ५ नेहमी विचारले जाणारे प्रश्न",
    summaryMr: "कामाच्या वेळा, मेहनत आणि दीर्घकाळ काम करण्याबद्दल विचारल्या जाणाऱ्या प्रश्नांची प्रामाणिक उत्तरे.",
    bodyMr: `
      <h3>प्रश्न १: "तुम्हाला आमच्याकडे काम का करायचे आहे?"</h3>
      <p><strong>योग्य उत्तर:</strong> "मी जवळच राहतो आणि मला हे काम प्रत्यक्ष शिकायचे आहे. मला नियमित व जबाबदारीने काम करायचे आहे."</p>

      <h3>प्रश्न २: "तुम्ही शिफ्टमध्ये काम करू शकता का?"</h3>
      <p><strong>योग्य उत्तर:</strong> प्रामाणिकपणे सांगा. जर तुमच्याकडे येण्या-जाण्याची सोय असेल, तर "होय, माझी तयारी आहे" असे सांगा.</p>

      <h3>प्रश्न ३: "तुम्ही हे यंत्र आधी चालवले आहे का?"</h3>
      <p><strong>योग्य उत्तर:</strong> खोटे बोलू नका. जर चालवले नसेल तर सांगा: "मी या आधी यावर काम केले नाही, पण मला शिकण्याची आवड आहे आणि दाखवले तर मी पटकन शिकेन."</p>
    `
  },
  {
    id: "art-003",
    category: "Communication tips",
    lastUpdated: "2026-10-15",
    titleEn: "How to Speak Professionally with Customers and Supervisors",
    summaryEn: "Polite words, active listening, and how to handle confusion calmly at work.",
    bodyEn: `
      <h3>1. Listen Fully Before Replying</h3>
      <p>When a supervisor or customer is speaking, do not interrupt. Listen carefully to what they need. If you did not understand, politely say: "Excuse me, could you please repeat the last step?"</p>
      
      <h3>2. Use Respectful Words</h3>
      <p>Simple respectful greetings like "Namaskar Sir/Madam" and "Thank you" create a trustworthy environment. Always address co-workers with respect.</p>
      
      <h3>3. Avoid Aggressive Arguments</h3>
      <p>If a customer is upset about a delayed parcel or wrong bill, stay calm. Say: "I understand the inconvenience. Let me check the record and help solve this right away."</p>
    `,
    titleMr: "ग्राहक आणि वरिष्ठांशी नम्रपणे व स्पष्ट कसे बोलावे",
    summaryMr: "कामाच्या ठिकाणी आदरयुक्त भाषा, पूर्ण ऐकून घेणे आणि गोंधळ शांतपणे सोडवण्याचे मार्ग.",
    bodyMr: `
      <h3>१. पूर्ण ऐकून मगच बोला</h3>
      <p>वरिष्ठ किंवा ग्राहक बोलत असताना मध्येच बोलू नका. त्यांना काय हवे आहे ते नीट ऐका. न समजल्यास नम्रपणे पुन्हा विचारा: "माफ करा, मी हे पुन्हा समजू शकतो का?"</p>
      
      <h3>२. आदराची भाषा वापरा</h3>
      <p>"नमस्कार", "धन्यवाद" आणि "होय सर/मॅडम" या शब्दांमुळे कामाच्या ठिकाणी चांगला प्रभाव पडतो.</p>
      
      <h3>३. वाद घालणे टाळा</h3>
      <p>एखादा ग्राहक रागावला असेल तर शांत राहा. "मी समजतो, मी लगेच तपासतो आणि अडचण दूर करतो" असे शांतपणे सांगा.</p>
    `
  },
  {
    id: "art-004",
    category: "Workplace readiness",
    lastUpdated: "2026-10-12",
    titleEn: "Punctuality, Safety and Daily Habits for Work Success",
    summaryEn: "Three fundamental habits that make employers trust you from the very first week.",
    bodyEn: `
      <h3>1. Be on Time Every Day</h3>
      <p>Punctuality is the number one trait local employers value. Reaching 10 minutes early shows commitment. If you are sick or running late due to an emergency, inform your supervisor by call or message before the shift starts.</p>

      <h3>2. Follow Safety Rules Strictly</h3>
      <p>If you work in a workshop, warehouse, or construction site, always wear safety shoes, helmet, or goggles as required. Never bypass machine safety guards.</p>

      <h3>3. Keep Your Workplace Clean</h3>
      <p>Clean your tools and work table before leaving each evening. A tidy workstation prevents accidents and saves time the next morning.</p>
    `,
    titleMr: "कामाच्या ठिकाणी वक्तशीरपणा, सुरक्षितता आणि चांगल्या सवयी",
    summaryMr: "पहिल्याच आठवड्यापासून मालकाचा विश्वास संपादन करण्यासाठी तीन अत्यंत महत्त्वाच्या सवयी.",
    bodyMr: `
      <h3>१. रोज वेळेवर हजर राहा</h3>
      <p>स्थानिक कामात वक्तशीरपणाला खूप महत्त्व असते. १० मिनिटे आधी पोहोचणे उत्तम. जर काही अडचण असेल तर कामाची वेळ सुरू होण्यापूर्वी फोन करून कळवा.</p>

      <h3>२. सुरक्षेचे नियम पाळा</h3>
      <p>कारखाना किंवा बांधकामावर काम करताना हेल्मेट, सेफ्टी शूज आणि चष्मा वापरा. सुरक्षेकडे कधीही दुर्लक्ष करू नका.</p>

      <h3>३. कामाची जागा स्वच्छ ठेवा</h3>
      <p>संध्याकाळी काम संपताना अवजारे व टेबल स्वच्छ करून ठेवा. यामुळे दुसऱ्या दिवशी काम करणे सोपे होते.</p>
    `
  },
  {
    id: "art-005",
    category: "Job applications",
    lastUpdated: "2026-10-16",
    titleEn: "How to Apply for Local Jobs via WhatsApp or Phone Call",
    summaryEn: "What to write in your message and how to talk clearly when a vacancy asks for a call.",
    bodyEn: `
      <h3>1. What to Write on WhatsApp</h3>
      <p>Never send just "Hi" or "Job please". Send a polite 4-line message:</p>
      <blockquote>
        "Namaskar Sir/Madam, My name is [Your Name] from Chandwad. I saw your posting for [Job Title]. I have completed [12th / ITI / B.Com] and have basic knowledge of this work. I am attaching my bio-data. Thank you."
      </blockquote>

      <h3>2. When Calling the Employer</h3>
      <p>Call only during business hours (10:00 AM to 5:00 PM). Ensure you are in a quiet room with good network reception. State your name and the job title immediately.</p>
    `,
    titleMr: "व्हॉट्सॲप किंवा फोनवरून स्थानिक नोकरीसाठी अर्ज कसा करावा",
    summaryMr: "मेसेजमध्ये काय लिहावे आणि मालकाला फोन करताना स्पष्टपणे कसे बोलावे याचे नमुने.",
    bodyMr: `
      <h3>१. व्हॉट्सॲपवर काय लिहावे?</h3>
      <p>फक्त "Hi" किंवा "नोकरी हवी आहे" असा मेसेज करू नका. खालीलप्रमाणे ४ ओळींचा स्पष्ट मेसेज पाठवा:</p>
      <blockquote>
        "नमस्कार सर/मॅडम, माझे नाव [तुमचे नाव] आहे, मी चांदवड येथे राहतो. मी [पदाचे नाव] या जागेसाठी मेसेज करत आहे. माझे शिक्षण [१२ वी / आयटीआय / पदवी] झाले आहे. माझा बायोडाटा सोबत जोडला आहे. धन्यवाद."
      </blockquote>

      <h3>२. फोन करताना काय काळजी घ्यावी?</h3>
      <p>सकाळी १० ते संध्याकाळी ५ या वेळेतच फोन करा. शांत ठिकाणी उभे राहून बोला जेणेकरून आवाज स्पष्ट ऐकू येईल.</p>
    `
  },
  {
    id: "art-006",
    category: "Email examples",
    lastUpdated: "2026-10-14",
    titleEn: "Simple Email Template to Send Your Resume for Office Jobs",
    summaryEn: "A clean subject line and body text you can copy and customize easily.",
    bodyEn: `
      <h3>Email Subject Line</h3>
      <p>Always write: <code>Application for [Job Title] - [Your Full Name]</code></p>
      
      <h3>Email Body Template</h3>
      <pre>
Respected Hiring Manager,

I am writing to express my interest in the [Job Title] vacancy at your organization in Nashik.

I have completed my [Degree / Diploma] in [Year]. I have practical skills in computer typing, MS Office, and record keeping.

I have attached my resume for your kind review. I would welcome an opportunity for an in-person interview.

Thank you.
Sincerely,
[Your Name]
[Your Phone Number]
[Your Town]
      </pre>
    `,
    titleMr: "कार्यालयीन नोकऱ्यांसाठी ईमेलचा सोपा नमुना",
    summaryMr: "ईमेलचा विषय आणि मजकूर कसा लिहावा याचा सहज वापरता येण्याजोगा नमुना.",
    bodyMr: `
      <h3>ईमेलचा विषय (Subject Line)</h3>
      <p>नेहमी असा लिहा: <code>Application for [पदाचे नाव] - [तुमचे पूर्ण नाव]</code></p>
      
      <h3>ईमेल मजकूर नमुना</h3>
      <pre>
आदरणीय व्यवस्थापक,

मी आपल्या संस्थेतील [पदाचे नाव] या जागेसाठी अर्ज करत आहे.

माझे शिक्षण [वर्ष] मध्ये [शिक्षण] पूर्ण झाले आहे. मला संगणक, एमएस ऑफिस आणि हिशेब नोंदवण्याचे मूलभूत ज्ञान आहे.

माझा बायोडाटा सोबत जोडला आहे. कृपया तपासून मुलाखतीची संधी द्यावी ही नम्र विनंती.

आपला नम्र,
[तुमचे नाव]
[फोन नंबर]
[गाव / शहर]
      </pre>
    `
  },
  {
    id: "art-007",
    category: "Your first job",
    lastUpdated: "2026-10-10",
    titleEn: "What to Expect in Your Very First Week of Employment",
    summaryEn: "Navigating your new environment, asking questions, and avoiding common early mistakes.",
    bodyEn: `
      <h3>1. Everything Will Feel New</h3>
      <p>It is normal to feel nervous or tired during the first few days. Don't worry if you don't know everyone's name right away.</p>

      <h3>2. Carry a Small Pocket Notebook</h3>
      <p>Whenever your supervisor explains a task, write down the key steps and numbers in a small pocket diary. Writing things down shows professionalism and avoids repeating mistakes.</p>

      <h3>3. Ask Before Doing Uncertain Steps</h3>
      <p>If you are not 100% sure about a machine switch, a customer discount, or a filing box, stop and ask a colleague. It is always better to ask than to damage equipment or records.</p>
    `,
    titleMr: "नोकरीच्या पहिल्या आठवड्यात काय अपेक्षा ठेवावी?",
    summaryMr: "नवीन वातावरणाशी जुळवून घेणे, प्रश्न विचारणे आणि सुरुवातीच्या चुका टाळणे.",
    bodyMr: `
      <h3>१. सुरुवातीला सर्व नवीन वाटणे स्वाभाविक आहे</h3>
      <p>पहिल्या २-३ दिवसांत भीती वाटणे किंवा थकवा जाणवणे सामान्य आहे. हळूहळू सवय होईल.</p>

      <h3>२. लहान वही आणि पेन सोबत ठेवा</h3>
      <p>वरिष्ठ जेव्हा काही सूचना किंवा कामाची पद्धत समजावून सांगतील, तेव्हा ती वहीत टिपून घ्या. यामुळे गोष्टी विसरत नाहीत.</p>

      <h3>३. शंका असल्यास विचारून घ्या</h3>
      <p>एखाद्या यंत्राबद्दल किंवा कामाबद्दल खात्री नसेल तर चुकीचे करण्यापेक्षा सहकाऱ्यांना विचारून घेणे नेहमी चांगले असते.</p>
    `
  },
  {
    id: "art-008",
    category: "Changing career",
    lastUpdated: "2026-10-11",
    titleEn: "How to Move from Manual Labour to a Technician or Office Role",
    summaryEn: "Highlighting transferable skills like punctuality, stamina, and basic digital familiarity.",
    bodyEn: `
      <h3>1. Recognize Your Real Skills</h3>
      <p>If you worked on farms, construction, or transport, you already have teamwork, discipline, physical stamina, and problem solving. These are valuable in machine maintenance, logistics supervision, and warehouse management.</p>

      <h3>2. Build One Practical Digital Skill</h3>
      <p>Spend 30 minutes a day learning how to type in Marathi and English, or use a basic spreadsheet on a smartphone. Basic computer awareness opens doors to billing and store assistant roles.</p>
    `,
    titleMr: "श्रमजीवी कामावरून तंत्रज्ञ किंवा ऑफिसच्या कामाकडे कसे वळावे?",
    summaryMr: "तुमच्या अनुभवाचा उपयोग करून नवीन तांत्रिक किंवा कार्यालयीन क्षेत्रात संधी शोधणे.",
    bodyMr: `
      <h3>१. तुमच्या कौशल्यांचे महत्त्व ओळखा</h3>
      <p>शेती, बांधकाम किंवा वाहतुकीच्या कामामुळे तुम्हाला मेहनत, वेळेचे भान आणि कठीण प्रसंगात काम करण्याचा अनुभव असतो. वेअरहाऊस किंवा मशिन देखभालीमध्ये याला मोठी मागणी असते.</p>

      <h3>२. एक संगणकीय कौशल्य शिका</h3>
      <p>मोबाईल किंवा स्थानिक केंद्रात दररोज थोडे टायपिंग किंवा एक्सेल शिकल्यास बिलिंग किंवा स्टोअर असिस्टंटच्या नोकऱ्या मिळवणे सोपे होते.</p>
    `
  },
  {
    id: "art-009",
    category: "Returning after a break",
    lastUpdated: "2026-10-09",
    titleEn: "Returning to Work After a Family Break (For Women and Caregivers)",
    summaryEn: "How to explain career gaps with dignity and build confidence for local re-entry.",
    bodyEn: `
      <h3>1. Speak About Your Break with Dignity</h3>
      <p>Taking time off for child care or caring for elderly parents is an honorable responsibility. When an employer asks about the gap, state it simply: "I took a break to support my family. Now my domestic responsibilities are settled, and I am ready to dedicate my full focus to work."</p>

      <h3>2. Look for Flexible or Nearby Roles</h3>
      <p>Start with half-day tutoring, local clinic reception, school support, or nearby retail stores so your daily travel is short and manageable.</p>
    `,
    titleMr: "कौटुंबिक कारणानंतर पुन्हा नोकरी कशी सुरू करावी (महिला व पालकांसाठी)",
    summaryMr: "गॅपबद्दल आत्मविश्वासाने बोलणे आणि स्थानिक पातळीवर पुन्हा काम सुरू करण्याचे मार्ग.",
    bodyMr: `
      <h3>१. गॅपबद्दल सन्मानाने बोला</h3>
      <p>कुटुंबाची किंवा मुलांची काळजी घेण्यासाठी ब्रेक घेणे ही सन्मानाची बाब आहे. मुलाखतीत स्पष्ट सांगा: "मी कौटुंबिक जबाबदारीसाठी वेळ दिला होता. आता मी पूर्ण एकाग्रतेने कामासाठी तयार आहे."</p>

      <h3>२. जवळच्या नोकऱ्या निवडा</h3>
      <p>सुरुवातीला घराच्या जवळच्या शाळा, दवाखाना, स्थानिक स्टोअर किंवा पार्ट-टाइम नोकऱ्यांचा विचार करा जेणेकरून प्रवासाचा त्रास होणार नाही.</p>
    `
  },
  {
    id: "art-010",
    category: "Career planning",
    lastUpdated: "2026-10-22",
    titleEn: "Step-by-Step Career Growth in Rural and Semi-Urban Nashik",
    summaryEn: "Setting realistic 1-year and 3-year goals without falling for fake quick-money schemes.",
    bodyEn: `
      <h3>1. Focus on Practical Trades</h3>
      <p>In towns like Chandwad, Yeola, and Manmad, strong local demand exists for electrical wiring, agricultural cold storage technicians, agro-retail managers, and commercial drivers. These trades provide steady local income.</p>

      <h3>2. Avoid "Guaranteed Wealth" Traps</h3>
      <p>Never join any network or agency that asks you to deposit Rs. 2,000 or Rs. 5,000 promising quick returns from home. Genuine careers are built on real services, honest skills, and patient effort.</p>
    `,
    titleMr: "ग्रामीण व निमशहरी भागात टप्प्याटप्प्याने कारकीर्द कशी घडवावी?",
    summaryMr: "खोट्या योजनांना बळी न पडता १ ते ३ वर्षांचे वास्तववादी नियोजन कसे करावे.",
    bodyMr: `
      <h3>१. उपयुक्त स्थानिक व्यवसायांवर भर द्या</h3>
      <p>चांदवड, येवला, मनमाड या भागात इलेक्ट्रिकल, कृषी मालाची साठवणूक, ट्रॅक्टर दुरुस्ती आणि वाहन चालवण्याच्या कौशल्यांना कायम मागणी असते. यातून शाश्वत उत्पन्न मिळते.</p>

      <h3>२. झटपट पैशांच्या फसवणुकीपासून सावध राहा</h3>
      <p>"घरी बसून कमवा" किंवा "पैसे भरा आणि नोकरी मिळवा" अशा खोट्या जाहिरातींपासून सावध राहा. खरी प्रगती कष्ट आणि कौशल्यावरच होते.</p>
    `
  }
];

/* ==========================================================================
   SECTION 4: LOCALSTORAGE HELPERS
   All keys are prefixed with 'yc_'. Robust error handling with in-memory fallback.
   ========================================================================== */

let inMemoryStorageFallback = {};
let isStorageAvailable = true;

try {
  const testKey = APP_SETTINGS.storagePrefix + "test";
  window.localStorage.setItem(testKey, "1");
  window.localStorage.removeItem(testKey);
} catch (e) {
  isStorageAvailable = false;
  console.warn("localStorage is not accessible. Using in-memory fallback.");
}

const Storage = {
  get: function(key, defaultValue) {
    const fullKey = APP_SETTINGS.storagePrefix + key;
    try {
      if (isStorageAvailable) {
        const item = window.localStorage.getItem(fullKey);
        return item !== null ? JSON.parse(item) : defaultValue;
      }
      return inMemoryStorageFallback[fullKey] !== undefined ? inMemoryStorageFallback[fullKey] : defaultValue;
    } catch (err) {
      console.error("Storage read error on " + fullKey, err);
      return defaultValue;
    }
  },
  set: function(key, value) {
    const fullKey = APP_SETTINGS.storagePrefix + key;
    try {
      if (isStorageAvailable) {
        window.localStorage.setItem(fullKey, JSON.stringify(value));
      } else {
        inMemoryStorageFallback[fullKey] = value;
      }
    } catch (err) {
      console.error("Storage write error on " + fullKey, err);
    }
  },
  remove: function(key) {
    const fullKey = APP_SETTINGS.storagePrefix + key;
    try {
      if (isStorageAvailable) {
        window.localStorage.removeItem(fullKey);
      } else {
        delete inMemoryStorageFallback[fullKey];
      }
    } catch (err) {
      console.error("Storage remove error on " + fullKey, err);
    }
  }
};

/* ==========================================================================
   SECTION 5: APP STATE
   ========================================================================== */

const AppState = {
  language: Storage.get("lang", APP_SETTINGS.defaultLanguage),
  role: Storage.get("role", APP_SETTINGS.defaultRole), // "guest" | "jobseeker" | "employer" | "admin"
  currentRoute: "home",
  routeParams: {},
  jobs: [],
  guidance: [],
  savedJobIds: [],
  jobSeekerProfile: {
    fullName: "",
    phone: "",
    town: "",
    education: "12th pass",
    skills: "",
    langPref: "en",
    preferredCategories: [],
    preferredTown: "",
    preferredJobTypes: []
  },
  jobSeekerExternalApps: [],
  employerProfile: {
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    town: "",
    businessType: "",
    description: ""
  },
  reports: [],
  auditLogs: [],
  filters: {
    keyword: "",
    location: "",
    education: "Any",
    skills: "",
    experience: "Any",
    minSalary: 0,
    salaryOnly: false,
    category: "All",
    jobType: "All",
    sortBy: "newest"
  }
};

/* ==========================================================================
   SECTION 6: UTILITY FUNCTIONS (escape HTML, dates, validation)
   ========================================================================== */

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  } catch (e) {
    return dateStr;
  }
}

function isDateExpired(dateStr) {
  if (!dateStr) return false;
  const today = new Date().toISOString().split("T")[0];
  return dateStr < today;
}

function validatePhone(phoneStr) {
  if (!phoneStr) return false;
  const cleaned = phoneStr.replace(/\D/g, "");
  return cleaned.length === 10;
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-region");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.setAttribute("role", "status");
  toast.innerHTML = `<span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 250);
  }, 3500);
}

function announceToScreenReader(message) {
  const el = document.getElementById("sr-announcements");
  if (el) el.textContent = message;
}

function logAuditAction(action, target) {
  const entry = {
    id: "log-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
    timestamp: new Date().toISOString().replace("T", " ").substring(0, 19),
    role: AppState.role,
    action: action,
    target: target
  };
  AppState.auditLogs.unshift(entry);
  Storage.set("auditLogs", AppState.auditLogs);
}

function showAccessibleDialog({ title, contentHtml, onConfirm, confirmText = "Confirm", confirmClass = "btn-primary", showCancel = true }) {
  const dialog = document.getElementById("app-dialog");
  const dialogContent = document.getElementById("dialog-content");
  if (!dialog || !dialogContent) return;

  dialogContent.innerHTML = `
    <div class="dialog-header">
      <h2 id="dialog-title" class="dialog-title">${escapeHtml(title)}</h2>
    </div>
    <div class="dialog-body">
      ${contentHtml}
    </div>
    <div class="dialog-actions">
      ${showCancel ? `<button type="button" class="btn btn-outline" id="dialog-cancel-btn">Cancel</button>` : ""}
      <button type="button" class="btn ${confirmClass}" id="dialog-confirm-btn">${escapeHtml(confirmText)}</button>
    </div>
  `;

  const cancelBtn = document.getElementById("dialog-cancel-btn");
  const confirmBtn = document.getElementById("dialog-confirm-btn");

  if (cancelBtn) {
    cancelBtn.onclick = () => dialog.close();
  }

  confirmBtn.onclick = () => {
    if (typeof onConfirm === "function") {
      const keepOpen = onConfirm();
      if (!keepOpen) dialog.close();
    } else {
      dialog.close();
    }
  };

  dialog.showModal();
  confirmBtn.focus();
}

/* ==========================================================================
   SECTION 7: ROUTER & NAVIGATION
   Hash-based routing with keyboard accessibility and focus management.
   ========================================================================== */

const ROUTES = {
  "home": renderHomeView,
  "jobs": renderJobsView,
  "jobs/:id": renderJobDetailsView,
  "guidance": renderGuidanceView,
  "guidance/:id": renderGuidanceDetailsView,
  "dashboard": renderDashboardView,
  "employer": renderEmployerView,
  "admin": renderAdminView,
  "about": renderAboutView,
  "contact": renderContactView,
  "privacy": renderPrivacyView,
  "terms": renderTermsView,
  "access-denied": renderAccessDeniedView
};

function parseHash(hash) {
  if (!hash || hash === "#" || hash === "#/") {
    return { name: "home", params: {} };
  }
  const clean = hash.replace(/^#\/?/, "");
  const parts = clean.split("/").filter(Boolean);

  if (parts.length === 1) {
    return { name: parts[0], params: {} };
  }
  if (parts.length === 2) {
    if (parts[0] === "jobs") {
      return { name: "jobs/:id", params: { id: parts[1] } };
    }
    if (parts[0] === "guidance") {
      return { name: "guidance/:id", params: { id: parts[1] } };
    }
  }
  return { name: parts[0] || "home", params: {} };
}

function navigateTo(hash) {
  window.location.hash = hash;
}

function handleRoute() {
  const { name, params } = parseHash(window.location.hash);
  AppState.currentRoute = name;
  AppState.routeParams = params;

  updateHeaderNavState();

  // Role Gatekeeper (Simulated for demo)
  if (name === "dashboard" && AppState.role !== "jobseeker") {
    renderAccessDeniedView("jobseeker");
    focusMainHeading();
    return;
  }
  if (name === "employer" && AppState.role !== "employer") {
    renderAccessDeniedView("employer");
    focusMainHeading();
    return;
  }
  if (name === "admin" && AppState.role !== "admin") {
    renderAccessDeniedView("admin");
    focusMainHeading();
    return;
  }

  const handler = ROUTES[name];
  const root = document.getElementById("app-root");
  if (handler && root) {
    handler(root, params);
  } else if (root) {
    renderHomeView(root);
  }

  focusMainHeading();
}

function focusMainHeading() {
  setTimeout(() => {
    const mainContent = document.getElementById("main-content");
    const heading = mainContent ? mainContent.querySelector("h1, h2, .view-title, .hero-headline") : null;
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus();
    } else if (mainContent) {
      mainContent.focus();
    }
  }, 40);
}

function updateHeaderNavState() {
  const currentBase = AppState.currentRoute.split("/")[0];
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const linkRoute = link.getAttribute("data-route");
    if (linkRoute === currentBase) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    }
  });

  // Conditional Menu visibility based on role
  const dashboardItem = document.getElementById("nav-item-dashboard");
  const adminItem = document.getElementById("nav-item-admin");

  if (dashboardItem) {
    dashboardItem.style.display = AppState.role === "jobseeker" ? "block" : "none";
  }
  if (adminItem) {
    adminItem.style.display = AppState.role === "admin" ? "block" : "none";
  }
}

/* ==========================================================================
   SECTION 8: RENDER FUNCTIONS (One per view)
   ========================================================================== */

/* --------------------------------------------------------------------------
   8.1 Access Denied / Friendly Role Switcher View
   -------------------------------------------------------------------------- */
function renderAccessDeniedView(requiredRole) {
  const root = document.getElementById("app-root");
  if (!root) return;

  let msg = t("access_jobseeker_msg");
  let roleDisplayName = "Seeker";
  if (requiredRole === "employer") {
    msg = t("access_employer_msg");
    roleDisplayName = "Employer";
  } else if (requiredRole === "admin") {
    msg = t("access_admin_msg");
    roleDisplayName = "Admin";
  }

  root.innerHTML = `
    <section class="card" style="max-width: 680px; margin: 3rem auto; text-align: center; padding: 2.5rem;">
      <h1 class="view-title" style="color: var(--color-notice-text);">${escapeHtml(t("access_title"))}</h1>
      <div class="alert alert-warning" style="text-align: left; margin: 1.5rem 0;">
        <p>${escapeHtml(msg)}</p>
      </div>
      <p style="margin-bottom: 2rem; color: var(--color-text-muted);">
        No private data is shown here. Switch the Role at the top to access this simulated section.
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <button type="button" class="btn btn-primary" onclick="switchToRoleAndReload('${requiredRole}')">
          Switch Role to '${escapeHtml(roleDisplayName)}'
        </button>
        <a href="#/home" class="btn btn-outline">Back to Home</a>
      </div>
    </section>
  `;
}

function switchToRoleAndReload(newRole) {
  AppState.role = newRole;
  Storage.set("role", newRole);
  const select = document.getElementById("demo-role-select");
  if (select) select.value = newRole;
  updateHeaderNavState();
  handleRoute();
  showToast(`Switched Role to ${newRole}`, "info");
}

/* --------------------------------------------------------------------------
   8.2 Home View (Matches visual reference 4.2 top-to-bottom)
   -------------------------------------------------------------------------- */
function renderHomeView(container) {
  const isMr = AppState.language === "mr";
  const approvedJobs = AppState.jobs.filter(j => j.status === "approved" && !isDateExpired(j.deadline)).slice(0, 4);
  const featuredGuidance = AppState.guidance.slice(0, 3);

  container.innerHTML = `
    <!-- 4.2 Item 4: HERO CARD (radius ~28px, dark navy-blue gradient, headline, buttons, search) -->
    <section class="hero-card" aria-labelledby="hero-headline">
      <!-- Top Pill Badge -->
      <div class="hero-pill-badge">
        <span class="hero-pill-dot" aria-hidden="true"></span>
        <span>${escapeHtml(t("hero_pill"))}</span>
      </div>

      <!-- Large Bold Headline with tight line-height -->
      <h1 id="hero-headline" class="hero-headline">${escapeHtml(t("hero_headline"))}</h1>

      <!-- Light Paragraph -->
      <p class="hero-paragraph">${escapeHtml(t("hero_paragraph"))}</p>

      <!-- Three Buttons in a Row -->
      <div class="hero-button-row">
        <a href="#/jobs" class="btn btn-primary">${escapeHtml(t("hero_btn_find"))}</a>
        <a href="#/guidance" class="btn btn-translucent">${escapeHtml(t("hero_btn_guidance"))}</a>
        <a href="#/employer" class="btn btn-navy">${escapeHtml(t("hero_btn_post"))}</a>
      </div>

      <!-- White Rounded Search Bar -->
      <div class="hero-search-bar">
        <form id="hero-search-form" class="hero-search-form" role="search" aria-label="Quick search">
          <div class="search-field-group">
            <label for="hero-keyword" class="search-field-label">${isMr ? "शोध शब्द / कौशल्य" : "Job title or skill"}</label>
            <input type="text" id="hero-keyword" class="search-field-input" placeholder="${escapeHtml(t("search_keyword_placeholder"))}">
          </div>
          <div class="search-field-group">
            <label for="hero-location" class="search-field-label">${isMr ? "स्थान (गाव/शहर)" : "Location"}</label>
            <input type="text" id="hero-location" class="search-field-input" placeholder="${escapeHtml(t("search_location_placeholder"))}">
          </div>
          <button type="submit" class="btn btn-primary" style="height: var(--tap-target-min);">
            <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-search"></use></svg>
            <span>${escapeHtml(t("btn_search"))}</span>
          </button>
        </form>
      </div>
    </section>

    <!-- 4.2 Item 5: SAFETY NOTICE BANNER (Light yellow rounded box, amber border, warning icon) -->
    <section class="safety-notice-banner" role="region" aria-label="Safety notice">
      <svg class="icon safety-notice-icon" aria-hidden="true"><use href="#icon-alert-triangle"></use></svg>
      <div>
        <strong class="safety-notice-label">${escapeHtml(t("safety_notice_label"))}</strong>
        <p class="safety-notice-text">${escapeHtml(t("safety_notice_body"))}</p>
      </div>
    </section>

    <!-- 4.2 Item 6: FOUR INFORMATION CARDS (Row of 4 white cards, pastel tiles, NO numbers) -->
    <section class="info-cards-grid" aria-label="Key platform features">
      <div class="info-card">
        <div class="info-card-tile tile-blue" aria-hidden="true">
          <svg class="icon"><use href="#icon-languages"></use></svg>
        </div>
        <div>
          <div class="info-card-title">${escapeHtml(t("info_card_1_title"))}</div>
          <div class="info-card-caption">${escapeHtml(t("info_card_1_caption"))}</div>
        </div>
      </div>

      <div class="info-card">
        <div class="info-card-tile tile-green" aria-hidden="true">
          <svg class="icon"><use href="#icon-map-pin"></use></svg>
        </div>
        <div>
          <div class="info-card-title">${escapeHtml(t("info_card_2_title"))}</div>
          <div class="info-card-caption">${escapeHtml(t("info_card_2_caption"))}</div>
        </div>
      </div>

      <div class="info-card">
        <div class="info-card-tile tile-amber" aria-hidden="true">
          <svg class="icon"><use href="#icon-tag"></use></svg>
        </div>
        <div>
          <div class="info-card-title">${escapeHtml(t("info_card_3_title"))}</div>
          <div class="info-card-caption">${escapeHtml(t("info_card_3_caption"))}</div>
        </div>
      </div>

      <div class="info-card">
        <div class="info-card-tile tile-purple" aria-hidden="true">
          <svg class="icon"><use href="#icon-ban"></use></svg>
        </div>
        <div>
          <div class="info-card-title">${escapeHtml(t("info_card_4_title"))}</div>
          <div class="info-card-caption">${escapeHtml(t("info_card_4_caption"))}</div>
        </div>
      </div>
    </section>

    <!-- 4.2 Item 7: SERVICE CARDS (Find Jobs, Career Guidance, Employer Portal, My Dashboard) -->
    <section class="home-section" aria-labelledby="services-heading">
      <h2 id="services-heading" class="section-title">${escapeHtml(t("services_heading"))}</h2>
      <div class="service-cards-grid">
        <div class="card service-card">
          <div>
            <div class="service-card-icon" aria-hidden="true">
              <svg class="icon"><use href="#icon-briefcase"></use></svg>
            </div>
            <h3 class="service-card-title">${escapeHtml(t("nav_jobs"))}</h3>
            <p class="service-card-desc">
              ${isMr ? "स्थानिक उपलब्ध संधी शोधा. शिक्षण आणि अनुभवानुसार सहज फिल्टर करा." : "Browse local job listings across Chandwad and Nashik with direct contact details."}
            </p>
          </div>
          <a href="#/jobs" class="btn btn-outline btn-sm">${escapeHtml(t("nav_jobs"))} →</a>
        </div>

        <div class="card service-card">
          <div>
            <div class="service-card-icon" aria-hidden="true">
              <svg class="icon"><use href="#icon-book-open"></use></svg>
            </div>
            <h3 class="service-card-title">${escapeHtml(t("nav_guidance"))}</h3>
            <p class="service-card-desc">
              ${isMr ? "मुलाखत पूर्वतयारी, संवाद कौशल्य आणि कामाच्या सवयींबद्दल सोपे लेख वाचा." : "Plain practical guidance on interview preparation, communication, and first jobs."}
            </p>
          </div>
          <a href="#/guidance" class="btn btn-outline btn-sm">${escapeHtml(t("nav_guidance"))} →</a>
        </div>

        <div class="card service-card">
          <div>
            <div class="service-card-icon" aria-hidden="true">
              <svg class="icon"><use href="#icon-building"></use></svg>
            </div>
            <h3 class="service-card-title">${escapeHtml(t("nav_employer"))}</h3>
            <p class="service-card-desc">
              ${isMr ? "स्थानिक व्यावसायिक व कारखाने विनामूल्य नोकरीच्या संधी नोंदवू शकतात." : "Post genuine local vacancies directly for Chandwad and nearby talukas with admin review."}
            </p>
          </div>
          <a href="#/employer" class="btn btn-outline btn-sm">${escapeHtml(t("nav_employer"))} →</a>
        </div>

        <div class="card service-card">
          <div>
            <div class="service-card-icon" aria-hidden="true">
              <svg class="icon"><use href="#icon-layout-dashboard"></use></svg>
            </div>
            <h3 class="service-card-title">${escapeHtml(t("nav_dashboard"))}</h3>
            <p class="service-card-desc">
              ${isMr ? "तुमच्या जतन केलेल्या नोकऱ्या आणि प्रत्यक्ष केलेल्या अर्जांची स्वतः नोंद ठेवा." : "Track saved listings and self-recorded applications in your private browser space."}
            </p>
          </div>
          <a href="#/dashboard" class="btn btn-outline btn-sm">${escapeHtml(t("nav_dashboard"))} →</a>
        </div>
      </div>
    </section>

    <!-- 4.2 Item 8: HOW IT WORKS (3 or 4 simple steps for job seekers) -->
    <section class="home-section" aria-labelledby="how-heading">
      <h2 id="how-heading" class="section-title">${escapeHtml(t("how_it_works_heading"))}</h2>
      <div class="how-steps-grid">
        <div class="how-step-card">
          <div class="how-step-badge" aria-hidden="true">1</div>
          <h3 class="how-step-title">${isMr ? "संधी शोधा" : "Find an Opportunity"}</h3>
          <p class="how-step-desc">
            ${isMr ? "तुमचे शिक्षण, गाव आणि कामाच्या स्वरूपानुसार योग्य नोकरी निवडा." : "Search by town, trade, minimum education, or skills with no registration needed."}
          </p>
        </div>
        <div class="how-step-card">
          <div class="how-step-badge" aria-hidden="true">2</div>
          <h3 class="how-step-title">${isMr ? "तपशील तपासा" : "Review Employer Details"}</h3>
          <p class="how-step-desc">
            ${isMr ? "कामाचे स्वरूप, वेळ आणि वेतन तपासा. नोकरीसाठी कधीही पैसे देऊ नका." : "Check duties, salary, location, and apply directly via call, WhatsApp, or walk-in."}
          </p>
        </div>
        <div class="how-step-card">
          <div class="how-step-badge" aria-hidden="true">3</div>
          <h3 class="how-step-title">${isMr ? "मार्गदर्शन घ्या" : "Prepare with Guidance"}</h3>
          <p class="how-step-desc">
            ${isMr ? "मुलाखतीची तयारी कशी करावी आणि बोलताना काय काळजी घ्यावी ते वाचा." : "Read practical articles to speak politely, prepare papers, and excel in interviews."}
          </p>
        </div>
      </div>
    </section>

    <!-- 4.2 Item 9: FEATURED JOBS (3 to 6 approved jobs, SAMPLE badge if isSample) -->
    <section class="home-section" aria-labelledby="featured-heading">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <h2 id="featured-heading" class="section-title" style="margin-bottom: 0; text-align: left;">
          ${escapeHtml(t("featured_jobs_heading"))}
        </h2>
        <a href="#/jobs" class="btn btn-outline btn-sm">${escapeHtml(t("nav_jobs"))} (${AppState.jobs.length}) →</a>
      </div>
      <div class="job-card-list">
        ${approvedJobs.map(job => renderJobCardHtml(job)).join("")}
      </div>
    </section>

    <!-- 4.2 Item 10: CAREER GUIDANCE HIGHLIGHTS (3 articles) -->
    <section class="home-section" aria-labelledby="guidance-heading">
      <h2 id="guidance-heading" class="section-title">${escapeHtml(t("guidance_highlights_heading"))}</h2>
      <div class="guidance-grid">
        ${featuredGuidance.map(art => renderGuidanceCardHtml(art)).join("")}
      </div>
      <div style="text-align: center; margin-top: 2rem;">
        <a href="#/guidance" class="btn btn-primary">${isMr ? "सर्व मार्गदर्शन लेख पहा" : "View All Career Articles"} →</a>
      </div>
    </section>

    <!-- 4.2 Item 11: COMMUNITY IMPACT (Honest text, NO NUMBERS) -->
    <section class="home-section" aria-labelledby="impact-heading">
      <div class="impact-card">
        <h2 id="impact-heading" class="impact-title">${escapeHtml(t("community_impact_heading"))}</h2>
        <p class="impact-text">
          ${isMr 
            ? "युवाकनेक्ट हा एसएनजेबी अभियांत्रिकी महाविद्यालयाच्या विद्यार्थ्यांचा एक समाज उपयोगी प्रकल्प आहे. आम्ही कोणतीही खोटी आकडेवारी, बनावट मुलाखती किंवा नोकरीची खोटी हमी देत नाही. स्थानिक नोकरी शोधणाऱ्या आणि लहान व्यावसायिकांसोबत प्रत्यक्ष क्षेत्रीय चाचणी पूर्ण झाल्यानंतरच निकालांची आकडेवारी येथे प्रसिद्ध केली जाईल."
            : "YuvaConnect is an honest Community Engagement Project built by SNJB COE students. We strictly do not publish invented placement statistics, fake user counts, or testimonials. Real feedback, job counts reviewed, and community outcomes will be shared only after extensive ground testing with local job seekers and employers in Chandwad and Nashik district."}
        </p>
      </div>
    </section>

    <!-- 4.2 Item 12: TRUST AND SAFETY NOTES -->
    <section class="home-section" aria-labelledby="safety-notes-heading">
      <div class="card" style="border-left: 5px solid var(--color-orange-600);">
        <h2 id="safety-notes-heading" class="service-card-title">${escapeHtml(t("trust_safety_heading"))}</h2>
        <ul style="padding-left: 1.5rem; line-height: 1.8; color: var(--color-text);">
          <li><strong>Never pay any fee:</strong> Legitimate employers do not charge money for interviews, applications, or uniform deposits.</li>
          <li><strong>Check employer details:</strong> Review workplace premises and job responsibilities yourself before visiting or sharing documents.</li>
          <li><strong>Report suspicious jobs:</strong> Use the "Report this job" button on any listing that appears questionable.</li>
          <li><strong>No employment guarantee:</strong> YuvaConnect connects people to opportunities and job readiness, but never claims to guarantee hiring.</li>
        </ul>
      </div>
    </section>
  `;

  // Attach search form submit listener
  const searchForm = document.getElementById("hero-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const kw = document.getElementById("hero-keyword").value.trim();
      const loc = document.getElementById("hero-location").value.trim();
      AppState.filters.keyword = kw;
      AppState.filters.location = loc;
      navigateTo("#/jobs");
    });
  }
}

/* --------------------------------------------------------------------------
   8.3 Job Card Component HTML Helper
   -------------------------------------------------------------------------- */
function renderJobCardHtml(job) {
  const isMr = AppState.language === "mr";
  const salaryText = job.salaryUndisclosed
    ? t("salary_undisclosed")
    : `₹${job.salaryMin.toLocaleString()} - ₹${job.salaryMax.toLocaleString()} / mo`;

  const isSaved = AppState.savedJobIds.includes(job.id);
  const saveBtnText = isSaved ? t("btn_saved") : t("btn_save_job");

  return `
    <article class="job-card" aria-labelledby="job-title-${job.id}">
      <div class="job-card-header">
        <div>
          <h3 id="job-title-${job.id}">
            <a href="#/jobs/${job.id}" class="job-card-title">${escapeHtml(job.title)}</a>
          </h3>
          <div class="job-employer-name">${escapeHtml(job.employerName)}</div>
        </div>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${job.isSample ? `<span class="badge badge-sample">${t("badge_sample")}</span>` : ""}
          <span class="badge badge-${job.status}">${escapeHtml(job.status)}</span>
        </div>
      </div>

      <div class="job-meta-grid">
        <div class="job-meta-item">
          <strong>${isMr ? "स्थान:" : "Location:"}</strong> ${escapeHtml(job.locationTown)}, ${escapeHtml(job.locationDistrict)}
        </div>
        <div class="job-meta-item">
          <strong>${isMr ? "वेतन:" : "Salary:"}</strong> ${escapeHtml(salaryText)}
        </div>
        <div class="job-meta-item">
          <strong>${isMr ? "प्रकार:" : "Type:"}</strong> ${escapeHtml(job.jobType)} (${escapeHtml(job.workMode)})
        </div>
        <div class="job-meta-item">
          <strong>${isMr ? "शिक्षण:" : "Education:"}</strong> ${escapeHtml(job.education)}
        </div>
      </div>

      <p class="job-card-desc">${escapeHtml(job.description)}</p>

      <div class="job-card-actions">
        <a href="#/jobs/${job.id}" class="btn btn-primary btn-sm">${escapeHtml(t("btn_view_details"))}</a>
        <button type="button" class="btn btn-outline btn-sm" onclick="toggleSaveJob('${job.id}')" aria-pressed="${isSaved}">
          ${escapeHtml(saveBtnText)}
        </button>
        <span style="font-size: 0.85rem; color: var(--color-text-muted); margin-left: auto;">
          ${isMr ? "शेवटची तारीख:" : "Deadline:"} ${formatDate(job.deadline)}
        </span>
      </div>
    </article>
  `;
}

/* --------------------------------------------------------------------------
   8.4 Job Finder (Search & Filters View)
   -------------------------------------------------------------------------- */
function renderJobsView(container) {
  const isMr = AppState.language === "mr";

  let filtered = AppState.jobs.filter(job => {
    if (job.status !== "approved") return false;
    if (isDateExpired(job.deadline)) return false;

    if (AppState.filters.keyword) {
      const q = AppState.filters.keyword.toLowerCase();
      const matchTitle = job.title.toLowerCase().includes(q);
      const matchDesc = job.description.toLowerCase().includes(q);
      const matchSkills = (job.skills || "").toLowerCase().includes(q);
      const matchEmp = job.employerName.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchSkills && !matchEmp) return false;
    }

    if (AppState.filters.location) {
      const loc = AppState.filters.location.toLowerCase();
      const matchTown = (job.locationTown || "").toLowerCase().includes(loc);
      const matchDist = (job.locationDistrict || "").toLowerCase().includes(loc);
      const matchVill = (job.locationVillage || "").toLowerCase().includes(loc);
      if (!matchTown && !matchDist && !matchVill) return false;
    }

    if (AppState.filters.category && AppState.filters.category !== "All") {
      if (job.category !== AppState.filters.category) return false;
    }

    if (AppState.filters.jobType && AppState.filters.jobType !== "All") {
      if (job.jobType !== AppState.filters.jobType) return false;
    }

    if (AppState.filters.education && AppState.filters.education !== "Any") {
      if (job.education !== AppState.filters.education && job.education !== "Any") return false;
    }

    if (AppState.filters.experience && AppState.filters.experience !== "Any") {
      if (job.experience !== AppState.filters.experience) return false;
    }

    if (AppState.filters.salaryOnly && job.salaryUndisclosed) {
      return false;
    }
    if (AppState.filters.minSalary > 0) {
      if (!job.salaryUndisclosed && job.salaryMax < AppState.filters.minSalary) {
        return false;
      }
    }

    return true;
  });

  if (AppState.filters.sortBy === "newest") {
    filtered.sort((a, b) => (b.datePosted || "").localeCompare(a.datePosted || ""));
  } else if (AppState.filters.sortBy === "salaryHigh") {
    filtered.sort((a, b) => (b.salaryMax || 0) - (a.salaryMax || 0));
  }

  container.innerHTML = `
    <div class="view-header">
      <h1 class="view-title">${escapeHtml(t("nav_jobs"))}</h1>
      <p class="view-lead">
        ${isMr 
          ? "चांदवड आणि नाशिक जिल्ह्यातील स्थानिक नोकऱ्या. कोणत्याही नोकरीसाठी कधीही पैसे देऊ नका." 
          : "Local opportunities across Chandwad and Nashik district. Never pay any fee to apply."}
      </p>
    </div>

    <div class="jobs-layout">
      <!-- Filter Sidebar -->
      <aside class="filters-panel" aria-label="Job filters">
        <div class="filters-header">
          <h2 class="filters-title">${isMr ? "फिल्टर" : "Filters"}</h2>
          <button type="button" class="btn btn-outline btn-sm" id="btn-reset-filters">
            ${escapeHtml(t("btn_clear_filters"))}
          </button>
        </div>

        <form id="jobs-filter-form">
          <div class="form-group">
            <label for="filter-keyword" class="form-label">${isMr ? "शोध शब्द / पद" : "Keyword"}</label>
            <input type="text" id="filter-keyword" class="form-input" value="${escapeHtml(AppState.filters.keyword)}" placeholder="e.g. Accounts, Turner">
          </div>

          <div class="form-group">
            <label for="filter-location" class="form-label">${isMr ? "स्थान (गाव/तालुका)" : "Location"}</label>
            <input type="text" id="filter-location" class="form-input" value="${escapeHtml(AppState.filters.location)}" placeholder="e.g. Chandwad, Manmad">
          </div>

          <div class="form-group">
            <label for="filter-category" class="form-label">${isMr ? "क्षेत्र" : "Category"}</label>
            <select id="filter-category" class="form-select">
              <option value="All">${isMr ? "सर्व क्षेत्रे" : "All Categories"}</option>
              ${JOB_CATEGORIES.map(c => `<option value="${escapeHtml(c)}" ${AppState.filters.category === c ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}
            </select>
          </div>

          <div class="form-group">
            <label for="filter-jobtype" class="form-label">${isMr ? "कामाचा प्रकार" : "Job Type"}</label>
            <select id="filter-jobtype" class="form-select">
              <option value="All">${isMr ? "सर्व प्रकार" : "All Job Types"}</option>
              ${JOB_TYPES.map(jt => `<option value="${escapeHtml(jt)}" ${AppState.filters.jobType === jt ? "selected" : ""}>${escapeHtml(jt)}</option>`).join("")}
            </select>
          </div>

          <div class="form-group">
            <label for="filter-education" class="form-label">${isMr ? "किमान शिक्षण" : "Education"}</label>
            <select id="filter-education" class="form-select">
              ${EDUCATION_OPTIONS.map(edu => `<option value="${escapeHtml(edu)}" ${AppState.filters.education === edu ? "selected" : ""}>${escapeHtml(edu)}</option>`).join("")}
            </select>
          </div>

          <div class="form-group">
            <label for="filter-experience" class="form-label">${isMr ? "अनुभव" : "Experience"}</label>
            <select id="filter-experience" class="form-select">
              <option value="Any">${isMr ? "कोणताही" : "Any Experience"}</option>
              ${EXPERIENCE_OPTIONS.map(exp => `<option value="${escapeHtml(exp)}" ${AppState.filters.experience === exp ? "selected" : ""}>${escapeHtml(exp)}</option>`).join("")}
            </select>
          </div>

          <div class="form-group">
            <label for="filter-salary" class="form-label">${isMr ? "किमान मासिक वेतन (₹)" : "Min Monthly Salary (₹)"}</label>
            <input type="number" id="filter-salary" class="form-input" min="0" step="1000" value="${AppState.filters.minSalary || ""}" placeholder="e.g. 8000">
          </div>

          <div class="form-group">
            <label class="form-checkbox-label">
              <input type="checkbox" id="filter-salary-only" class="form-checkbox" ${AppState.filters.salaryOnly ? "checked" : ""}>
              <span>${isMr ? "फक्त वेतन दर्शवलेल्या नोकऱ्या दाखवा" : "Show only jobs with salary shown"}</span>
            </label>
          </div>
        </form>
      </aside>

      <!-- Results List -->
      <section aria-label="Job results">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div style="font-size: 1.15rem; font-weight: 700;" aria-live="polite">
            ${filtered.length} ${filtered.length === 1 ? (isMr ? "नोकरी उपलब्ध" : "opportunity found") : (isMr ? "नोकऱ्या उपलब्ध" : "opportunities found")}
          </div>
          <div>
            <select id="filter-sort" class="form-select" style="min-width: 180px;">
              <option value="newest" ${AppState.filters.sortBy === "newest" ? "selected" : ""}>${isMr ? "नवीनतम प्रथम" : "Newest first"}</option>
              <option value="salaryHigh" ${AppState.filters.sortBy === "salaryHigh" ? "selected" : ""}>${isMr ? "जास्त वेतन प्रथम" : "Highest salary"}</option>
            </select>
          </div>
        </div>

        ${filtered.length === 0 ? `
          <div class="state-box">
            <h3 class="state-title">${isMr ? "कोणतीही नोकरी आढळली नाही" : "No jobs match your filters"}</h3>
            <p class="state-desc">${isMr ? "कृपया कमी किंवा वेगळे फिल्टर वापरून पुन्हा प्रयत्न करा." : "Try clearing filters, searching a broader location, or lowering the minimum salary."}</p>
            <button type="button" class="btn btn-primary" onclick="resetFiltersAndReload()">${escapeHtml(t("btn_clear_filters"))}</button>
          </div>
        ` : `
          <div class="job-card-list">
            ${filtered.map(job => renderJobCardHtml(job)).join("")}
          </div>
        `}
      </section>
    </div>
  `;

  // Bind filter events
  const bindInput = (id, prop, isCheckbox = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("change", () => {
      AppState.filters[prop] = isCheckbox ? el.checked : (id === "filter-salary" ? Number(el.value) || 0 : el.value);
      renderJobsView(container);
    });
    if (!isCheckbox && el.tagName === "INPUT" && el.type === "text") {
      el.addEventListener("input", () => {
        AppState.filters[prop] = el.value;
      });
      el.addEventListener("keyup", (e) => {
        if (e.key === "Enter") renderJobsView(container);
      });
    }
  };

  bindInput("filter-keyword", "keyword");
  bindInput("filter-location", "location");
  bindInput("filter-category", "category");
  bindInput("filter-jobtype", "jobType");
  bindInput("filter-education", "education");
  bindInput("filter-experience", "experience");
  bindInput("filter-salary", "minSalary");
  bindInput("filter-salary-only", "salaryOnly", true);

  const sortSelect = document.getElementById("filter-sort");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.filters.sortBy = e.target.value;
      renderJobsView(container);
    });
  }

  const resetBtn = document.getElementById("btn-reset-filters");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => resetFiltersAndReload());
  }
}

function resetFiltersAndReload() {
  AppState.filters = {
    keyword: "",
    location: "",
    education: "Any",
    skills: "",
    experience: "Any",
    minSalary: 0,
    salaryOnly: false,
    category: "All",
    jobType: "All",
    sortBy: "newest"
  };
  const root = document.getElementById("app-root");
  if (root) renderJobsView(root);
}

/* --------------------------------------------------------------------------
   8.5 Job Details View
   -------------------------------------------------------------------------- */
function renderJobDetailsView(container, params) {
  const isMr = AppState.language === "mr";
  const job = AppState.jobs.find(j => j.id === params.id);

  if (!job) {
    container.innerHTML = `
      <div class="state-box">
        <h1 class="state-title">${isMr ? "नोकरी आढळली नाही" : "Job Listing Not Found"}</h1>
        <p class="state-desc">${isMr ? "ही नोकरी कदाचित काढली गेली असावी किंवा कालबाह्य झाली आहे." : "This job post might have expired or been removed."}</p>
        <a href="#/jobs" class="btn btn-primary">${isMr ? "सर्व नोकऱ्या पहा" : "Back to Jobs"}</a>
      </div>
    `;
    return;
  }

  const isSaved = AppState.savedJobIds.includes(job.id);
  const salaryText = job.salaryUndisclosed
    ? t("salary_undisclosed")
    : `₹${job.salaryMin.toLocaleString()} - ₹${job.salaryMax.toLocaleString()} / month`;

  container.innerHTML = `
    <div style="max-width: 880px; margin: 0 auto;">
      <div style="margin-bottom: 1.5rem;">
        <a href="#/jobs" class="btn btn-outline btn-sm">← ${escapeHtml(t("btn_back"))} ${isMr ? "सर्व नोकऱ्यांकडे" : "to Results"}</a>
      </div>

      <!-- Trust Warning -->
      <div class="alert alert-warning" role="alert">
        <strong>⚠️ ${escapeHtml(t("safety_notice_label"))}</strong>
        ${escapeHtml(t("fee_warning"))}
      </div>

      <article class="card" aria-labelledby="details-title" style="padding: 2.25rem 2rem;">
        <header style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--color-border);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap;">
            <div>
              <h1 id="details-title" class="view-title">${escapeHtml(job.title)}</h1>
              <div style="font-size: 1.25rem; font-weight: 600; color: var(--color-text-muted); margin-top: 4px;">
                ${escapeHtml(job.employerName)}
              </div>
            </div>
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              ${job.isSample ? `<span class="badge badge-sample">${t("badge_sample")}</span>` : ""}
              <span class="badge badge-${job.status}">${escapeHtml(job.status)}</span>
            </div>
          </div>

          <div class="job-meta-grid" style="margin-top: 1.25rem;">
            <div class="job-meta-item">
              <strong>${isMr ? "स्थान:" : "Location:"}</strong> ${escapeHtml(job.locationTown)}, ${escapeHtml(job.locationDistrict)} (${escapeHtml(job.locationVillage || "")})
            </div>
            <div class="job-meta-item">
              <strong>${isMr ? "वेतन:" : "Salary:"}</strong> ${escapeHtml(salaryText)}
            </div>
            <div class="job-meta-item">
              <strong>${isMr ? "प्रकार:" : "Job Type:"}</strong> ${escapeHtml(job.jobType)}
            </div>
            <div class="job-meta-item">
              <strong>${isMr ? "कामाचे स्वरूप:" : "Work Mode:"}</strong> ${escapeHtml(job.workMode)}
            </div>
            <div class="job-meta-item">
              <strong>${isMr ? "किमान शिक्षण:" : "Min Education:"}</strong> ${escapeHtml(job.education)}
            </div>
            <div class="job-meta-item">
              <strong>${isMr ? "अनुभव:" : "Experience:"}</strong> ${escapeHtml(job.experience)}
            </div>
            <div class="job-meta-item">
              <strong>${isMr ? "नोंदवले:" : "Posted:"}</strong> ${formatDate(job.datePosted)}
            </div>
            <div class="job-meta-item">
              <strong>${isMr ? "शेवटची तारीख:" : "Deadline:"}</strong> ${formatDate(job.deadline)}
            </div>
          </div>

          <!-- Verification Notice without fake verified claims -->
          <div style="margin-top: 1rem; font-size: 0.9rem; color: var(--color-text-muted); background: var(--color-border-subtle); padding: 8px 12px; border-radius: var(--radius-sm);">
            <strong>${isMr ? "तपासणी स्थिती:" : "Review Status:"}</strong> ${escapeHtml(job.verificationStatus || t("unverified"))}. 
            <em>${escapeHtml(t("review_warning"))}</em>
          </div>
        </header>

        <section style="margin-bottom: 2rem;">
          <h2 style="font-size: 1.2rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
            ${isMr ? "कामाचे वर्णन" : "Job Description"}
          </h2>
          <p style="white-space: pre-line; line-height: 1.6;">${escapeHtml(job.description)}</p>
        </section>

        ${job.responsibilities ? `
          <section style="margin-bottom: 2rem;">
            <h2 style="font-size: 1.2rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
              ${isMr ? "मुख्य जबाबदाऱ्या" : "Responsibilities"}
            </h2>
            <p style="white-space: pre-line; line-height: 1.6;">${escapeHtml(job.responsibilities)}</p>
          </section>
        ` : ""}

        <section style="margin-bottom: 2rem;">
          <h2 style="font-size: 1.2rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
            ${isMr ? "पात्रता आणि आवश्यक कौशल्ये" : "Qualifications & Skills Required"}
          </h2>
          <p><strong>${isMr ? "पात्रता:" : "Qualifications:"}</strong> ${escapeHtml(job.qualifications || "Not specified")}</p>
          <p style="margin-top: 6px;"><strong>${isMr ? "कौशल्ये:" : "Skills:"}</strong> ${escapeHtml(job.skills || "Not specified")}</p>
        </section>

        <!-- How to apply box -->
        <section style="background: var(--color-blue-light); border: 2px solid var(--color-blue-600); border-radius: var(--radius-card); padding: 1.5rem; margin: 2rem 0;">
          <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--color-navy-900); margin-bottom: 0.5rem;">
            ${escapeHtml(t("btn_apply"))}
          </h2>
          <p style="font-size: 0.95rem; margin-bottom: 0.75rem;">
            <strong>${isMr ? "पद्धत:" : "Method:"}</strong> ${escapeHtml(job.applyMethod)}
          </p>

          <div style="background: #FFFFFF; padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border); margin: 0.75rem 0;">
            <p style="font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">
              ${escapeHtml(job.applyInstructions)}
            </p>
            ${renderApplyDirectLinks(job)}
          </div>

          <p style="font-size: 0.85rem; color: var(--color-navy-900); margin-top: 0.5rem;">
            ${isMr 
              ? "नोंद: युवाकनेक्ट कोणत्याही अर्जांवर मध्यस्थी करत नाही. थेट नियोक्त्याशी संपर्क साधा." 
              : "Note: YuvaConnect does not take in-app applications. Follow the instructions above to reach the employer directly."}
          </p>
        </section>

        <!-- Actions -->
        <div style="display: flex; gap: 1rem; align-items: center; justify-content: space-between; flex-wrap: wrap; border-top: 1px solid var(--color-border); padding-top: 1.5rem;">
          <button type="button" class="btn ${isSaved ? "btn-outline" : "btn-primary"}" onclick="toggleSaveJob('${job.id}')" aria-pressed="${isSaved}">
            ${isSaved ? `✓ ${escapeHtml(t("btn_saved"))}` : `${escapeHtml(t("btn_save_job"))}`}
          </button>

          <button type="button" class="btn btn-outline btn-sm btn-danger" onclick="openReportDialog('${job.id}')">
            🚩 ${escapeHtml(t("btn_report_job"))}
          </button>
        </div>
      </article>
    </div>
  `;
}

function renderApplyDirectLinks(job) {
  if (job.isSample) {
    return `<div style="font-size: 0.9rem; color: var(--color-text-muted);"><em>(Sample job: no real contact numbers are dialed)</em></div>`;
  }
  if (job.applyMethod === "call" && job.employerPhone) {
    return `<a href="tel:${escapeHtml(job.employerPhone)}" class="btn btn-primary btn-sm">📞 Call ${escapeHtml(job.employerPhone)}</a>`;
  }
  if (job.applyMethod === "whatsapp" && job.employerPhone) {
    const cleanPhone = job.employerPhone.replace(/\D/g, "");
    return `<a href="https://wa.me/91${escapeHtml(cleanPhone)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">💬 Open WhatsApp Chat</a>`;
  }
  if (job.applyMethod === "email" && job.employerEmail) {
    return `<a href="mailto:${escapeHtml(job.employerEmail)}" class="btn btn-primary btn-sm">✉️ Email ${escapeHtml(job.employerEmail)}</a>`;
  }
  return "";
}

function toggleSaveJob(jobId) {
  if (AppState.role !== "jobseeker") {
    showToast(t("save_job_guest_msg"), "error");
    return;
  }
  const idx = AppState.savedJobIds.indexOf(jobId);
  if (idx > -1) {
    AppState.savedJobIds.splice(idx, 1);
    showToast("Job removed from saved list", "info");
  } else {
    AppState.savedJobIds.push(jobId);
    showToast("Job saved to your dashboard", "success");
  }
  Storage.set("savedJobs", AppState.savedJobIds);
  handleRoute();
}

function openReportDialog(jobId) {
  const isMr = AppState.language === "mr";
  const job = AppState.jobs.find(j => j.id === jobId);
  const title = isMr ? "नोकरीची तक्रार नोंदवा" : "Report this job";

  const contentHtml = `
    <p style="margin-bottom: 1rem; color: var(--color-text-muted);">
      ${isMr ? "जर या नोकरीत पैसे मागितले गेले असतील किंवा ही संशयास्पद वाटत असेल तर कळवा." : "If this listing asks for money or contains suspicious details, let our student team know."}
    </p>
    <div class="form-group">
      <label for="report-reason" class="form-label">${isMr ? "तक्रारीचे कारण" : "Reason"}</label>
      <select id="report-reason" class="form-select">
        <option value="Fee requested">Demanded money or registration fee</option>
        <option value="Suspicious contact">Fake or unreachable phone/address</option>
        <option value="Inaccurate details">Incorrect job description or salary</option>
        <option value="Discrimination">Offensive or discriminatory wording</option>
        <option value="Other">Other issue</option>
      </select>
    </div>
    <div class="form-group">
      <label for="report-note" class="form-label">${isMr ? "अधिक माहिती (ऐच्छिक)" : "Additional Notes (Optional)"}</label>
      <textarea id="report-note" class="form-textarea" rows="3" placeholder="Provide any details..."></textarea>
    </div>
  `;

  showAccessibleDialog({
    title: title,
    contentHtml: contentHtml,
    confirmText: isMr ? "तक्रार पाठवा" : "Submit Report",
    confirmClass: "btn-danger",
    onConfirm: () => {
      const reasonEl = document.getElementById("report-reason");
      const noteEl = document.getElementById("report-note");
      const report = {
        id: "rep-" + Date.now(),
        jobId: jobId,
        jobTitle: job ? job.title : "Unknown Job",
        employerName: job ? job.employerName : "Unknown",
        reason: reasonEl ? reasonEl.value : "Reported",
        notes: noteEl ? noteEl.value.trim() : "",
        date: new Date().toISOString().split("T")[0],
        status: "pending"
      };
      AppState.reports.unshift(report);
      Storage.set("reports", AppState.reports);
      logAuditAction("report_submitted", `Job: ${report.jobTitle} (${reasonEl ? reasonEl.value : ""})`);
      showToast(isMr ? "तक्रार यशस्वीरित्या नोंदवली गेली." : "Thank you. Your report has been submitted for admin review.", "success");
      return false;
    }
  });
}

/* --------------------------------------------------------------------------
   8.6 Career Guidance View (List & Details)
   -------------------------------------------------------------------------- */
function renderGuidanceView(container) {
  const isMr = AppState.language === "mr";
  const selectedCat = AppState.guidanceFilterCategory || "All";
  const searchKw = (AppState.guidanceSearchKeyword || "").toLowerCase();

  let filtered = AppState.guidance.filter(art => {
    if (selectedCat !== "All" && art.category !== selectedCat) return false;
    if (searchKw) {
      const title = (isMr ? art.titleMr : art.titleEn) || art.titleEn || "";
      const sum = (isMr ? art.summaryMr : art.summaryEn) || art.summaryEn || "";
      if (!title.toLowerCase().includes(searchKw) && !sum.toLowerCase().includes(searchKw)) {
        return false;
      }
    }
    return true;
  });

  container.innerHTML = `
    <div class="view-header">
      <h1 class="view-title">${escapeHtml(t("nav_guidance"))}</h1>
      <p class="view-lead">
        ${isMr 
          ? "ग्रामीण आणि स्थानिक नोकऱ्यांसाठी व्यावहारिक आणि सोपे मार्गदर्शन. कोणतीही खोटी आकडेवारी नाही." 
          : "Practical career advice in plain language with real examples. Free from hype and fake statistics."}
      </p>
    </div>

    <!-- Filters -->
    <div style="background: #FFFFFF; padding: 1.5rem; border: 1px solid var(--color-border); border-radius: var(--radius-card); margin-bottom: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <div style="flex: 2; min-width: 240px;">
        <label for="guidance-search" class="form-label">${isMr ? "लेख शोधा" : "Search articles"}</label>
        <input type="text" id="guidance-search" class="form-input" value="${escapeHtml(AppState.guidanceSearchKeyword || "")}" placeholder="e.g. Interview, WhatsApp, Punctuality">
      </div>
      <div style="flex: 1; min-width: 200px;">
        <label for="guidance-category-select" class="form-label">${isMr ? "वर्गवारी" : "Category"}</label>
        <select id="guidance-category-select" class="form-select">
          <option value="All">${isMr ? "सर्व वर्गवारी" : "All Categories"}</option>
          ${GUIDANCE_CATEGORIES.map(c => `<option value="${escapeHtml(c)}" ${selectedCat === c ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}
        </select>
      </div>
    </div>

    <!-- Grid -->
    ${filtered.length === 0 ? `
      <div class="state-box">
        <h3 class="state-title">${isMr ? "कोणतेही लेख आढळले नाहीत" : "No guidance articles match"}</h3>
        <p class="state-desc">${isMr ? "कृपया वेगळा शोध शब्द वापरा." : "Try a different search keyword or select All Categories."}</p>
      </div>
    ` : `
      <div class="guidance-grid">
        ${filtered.map(art => renderGuidanceCardHtml(art)).join("")}
      </div>
    `}
  `;

  const kwInput = document.getElementById("guidance-search");
  if (kwInput) {
    kwInput.addEventListener("input", (e) => {
      AppState.guidanceSearchKeyword = e.target.value;
      renderGuidanceView(container);
    });
  }
  const catSelect = document.getElementById("guidance-category-select");
  if (catSelect) {
    catSelect.addEventListener("change", (e) => {
      AppState.guidanceFilterCategory = e.target.value;
      renderGuidanceView(container);
    });
  }
}

function renderGuidanceCardHtml(art) {
  const isMr = AppState.language === "mr";
  let title = isMr && art.titleMr ? art.titleMr : art.titleEn;
  let summary = isMr && art.summaryMr ? art.summaryMr : art.summaryEn;
  const isFallback = isMr && !art.titleMr;

  return `
    <article class="article-card" aria-labelledby="art-title-${art.id}">
      <span class="article-category">${escapeHtml(art.category)}</span>
      <h3 id="art-title-${art.id}" class="article-title">
        <a href="#/guidance/${art.id}" style="color: inherit; text-decoration: none;">${escapeHtml(title)}</a>
      </h3>
      ${isFallback ? `<div style="font-size: 0.75rem; color: #92400E; margin-bottom: 4px;">(मराठी अनुवाद उपलब्ध नाही - इंग्रजीत दाखवले आहे)</div>` : ""}
      <p class="article-summary">${escapeHtml(summary)}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--color-border-subtle);">
        <span style="font-size: 0.85rem; color: var(--color-text-muted);">
          ${isMr ? "अपडेट:" : "Updated:"} ${formatDate(art.lastUpdated)}
        </span>
        <a href="#/guidance/${art.id}" class="btn btn-outline btn-sm">${isMr ? "वाचा" : "Read"} →</a>
      </div>
    </article>
  `;
}

function renderGuidanceDetailsView(container, params) {
  const isMr = AppState.language === "mr";
  const art = AppState.guidance.find(a => a.id === params.id);

  if (!art) {
    container.innerHTML = `
      <div class="state-box">
        <h1 class="state-title">${isMr ? "लेख आढळला नाही" : "Article Not Found"}</h1>
        <a href="#/guidance" class="btn btn-primary">${isMr ? "सर्व लेख पहा" : "Back to Career Guidance"}</a>
      </div>
    `;
    return;
  }

  let title = isMr && art.titleMr ? art.titleMr : art.titleEn;
  let summary = isMr && art.summaryMr ? art.summaryMr : art.summaryEn;
  let body = isMr && art.bodyMr ? art.bodyMr : art.bodyEn;
  const isFallback = isMr && !art.bodyMr;

  container.innerHTML = `
    <div style="max-width: 820px; margin: 0 auto;">
      <div style="margin-bottom: 1.5rem;">
        <a href="#/guidance" class="btn btn-outline btn-sm">← ${escapeHtml(t("btn_back"))} ${isMr ? "सर्व लेखांकडे" : "to Articles"}</a>
      </div>

      <article class="card" style="padding: 2.5rem 2rem;">
        <span class="article-category" style="display: block; margin-bottom: 0.5rem;">${escapeHtml(art.category)}</span>
        <h1 class="view-title" style="margin-bottom: 1rem;">${escapeHtml(title)}</h1>

        ${isFallback ? `
          <div class="alert alert-warning" style="margin-bottom: 1.5rem;">
            (या लेखाचा मराठी अनुवाद उपलब्ध नसल्याने इंग्रजी आवृत्ती दर्शवली आहे.)
          </div>
        ` : ""}

        <div style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--color-border-subtle);">
          ${isMr ? "शेवटचे अपडेट:" : "Last Updated:"} ${formatDate(art.lastUpdated)} | SNJB CEP Career Guidance Cell
        </div>

        <div class="article-summary" style="font-size: 1.15rem; font-weight: 500; color: var(--color-text); margin-bottom: 2rem;">
          ${escapeHtml(summary)}
        </div>

        <div class="article-body-content">
          ${body}
        </div>

        <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <a href="#/guidance" class="btn btn-outline btn-sm">← ${isMr ? "इतर लेख पहा" : "Explore More Guides"}</a>
          <a href="#/jobs" class="btn btn-primary btn-sm">${isMr ? "नोकऱ्या शोधा" : "Find Related Jobs"} →</a>
        </div>
      </article>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   8.7 Job Seeker Dashboard (Role: Job Seeker)
   -------------------------------------------------------------------------- */
function renderDashboardView(container) {
  const isMr = AppState.language === "mr";
  const p = AppState.jobSeekerProfile;

  const savedJobs = AppState.savedJobIds.map(id => {
    const job = AppState.jobs.find(j => j.id === id);
    if (!job || job.status !== "approved" || isDateExpired(job.deadline)) {
      return { id: id, isUnavailable: true, title: job ? job.title : "Removed Listing" };
    }
    return job;
  });

  const recommendedArticles = AppState.guidance.slice(0, 3);

  container.innerHTML = `
    <div class="view-header">
      <h1 class="view-title">${escapeHtml(t("nav_dashboard"))}</h1>
      <p class="view-lead">
        ${isMr ? "तुमची वैयक्तिक प्रोफाइल, आवडीच्या नोकऱ्या आणि प्रत्यक्ष केलेल्या अर्जांची नोंद." : "Your personal profile, job preferences, saved jobs, and honest application tracker."}
      </p>
    </div>

    <!-- Tabs -->
    <div class="tabs-nav" role="tablist">
      <button type="button" class="tab-btn is-active" id="tab-btn-profile" role="tab" aria-selected="true" aria-controls="tab-profile">
        1. ${isMr ? "प्रोफाइल व प्राधान्ये" : "Profile & Preferences"}
      </button>
      <button type="button" class="tab-btn" id="tab-btn-saved" role="tab" aria-selected="false" aria-controls="tab-saved">
        2. ${isMr ? "जतन केलेल्या नोकऱ्या" : "Saved Jobs"} (${savedJobs.length})
      </button>
      <button type="button" class="tab-btn" id="tab-btn-applications" role="tab" aria-selected="false" aria-controls="tab-applications">
        3. ${isMr ? "माझे अर्ज" : "My Applications"}
      </button>
      <button type="button" class="tab-btn" id="tab-btn-learning" role="tab" aria-selected="false" aria-controls="tab-learning">
        4. ${isMr ? "शिफारस केलेले मार्गदर्शन" : "Learning Resources"}
      </button>
    </div>

    <!-- Tab 1: Profile & Preferences -->
    <div class="tab-panel is-active" id="tab-profile" role="tabpanel">
      <div class="card" style="max-width: 820px;">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--color-navy-900);">
          ${isMr ? "वैयक्तिक माहिती" : "Personal Information"}
        </h2>
        <form id="jobseeker-profile-form">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            <div class="form-group">
              <label for="js-name" class="form-label">${isMr ? "पूर्ण नाव" : "Full Name"} <span class="required-mark">*</span></label>
              <input type="text" id="js-name" class="form-input" value="${escapeHtml(p.fullName)}" required placeholder="e.g. Ramesh Patil">
            </div>

            <div class="form-group">
              <label for="js-phone" class="form-label">${isMr ? "मोबाईल नंबर (ऐच्छिक)" : "Phone (Optional)"}</label>
              <input type="tel" id="js-phone" class="form-input" value="${escapeHtml(p.phone)}" placeholder="10-digit number">
            </div>

            <div class="form-group">
              <label for="js-town" class="form-label">${isMr ? "गाव किंवा शहर" : "Town or Village"}</label>
              <input type="text" id="js-town" class="form-input" value="${escapeHtml(p.town)}" placeholder="e.g. Chandwad">
            </div>

            <div class="form-group">
              <label for="js-edu" class="form-label">${isMr ? "शिक्षण" : "Highest Education"}</label>
              <select id="js-edu" class="form-select">
                ${EDUCATION_OPTIONS.map(edu => `<option value="${escapeHtml(edu)}" ${p.education === edu ? "selected" : ""}>${escapeHtml(edu)}</option>`).join("")}
              </select>
            </div>

            <div class="form-group" style="grid-column: 1 / -1;">
              <label for="js-skills" class="form-label">${isMr ? "कौशल्ये" : "Skills & Practical Trades"}</label>
              <input type="text" id="js-skills" class="form-input" value="${escapeHtml(p.skills)}" placeholder="e.g. Tally, Tractor repair, Typing, Electrical">
            </div>

            <div class="form-group">
              <label for="js-langpref" class="form-label">${isMr ? "भाषा प्राधान्य" : "Language Preference"}</label>
              <select id="js-langpref" class="form-select">
                <option value="en" ${p.langPref === "en" ? "selected" : ""}>English</option>
                <option value="mr" ${p.langPref === "mr" ? "selected" : ""}>मराठी (Marathi)</option>
              </select>
            </div>
          </div>

          <h3 style="font-size: 1.15rem; font-weight: 700; margin: 1.5rem 0 1rem; color: var(--color-navy-900);">
            ${isMr ? "नोकरीच्या आवडी" : "Job Preferences"}
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            <div class="form-group">
              <label for="js-preftown" class="form-label">${isMr ? "पसंतीचे शहर" : "Preferred Town / Area"}</label>
              <input type="text" id="js-preftown" class="form-input" value="${escapeHtml(p.preferredTown || "")}" placeholder="e.g. Chandwad or Nashik">
            </div>

            <div class="form-group">
              <label for="js-prefcategory" class="form-label">${isMr ? "पसंतीचे क्षेत्र" : "Preferred Category"}</label>
              <select id="js-prefcategory" class="form-select">
                <option value="">${isMr ? "सर्व क्षेत्रे" : "Any Category"}</option>
                ${JOB_CATEGORIES.map(c => `<option value="${escapeHtml(c)}" ${(p.preferredCategories || []).includes(c) ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}
              </select>
            </div>
          </div>

          <button type="submit" class="btn btn-primary" style="margin-top: 1rem;">
            ${isMr ? "प्रोफाइल जतन करा" : "Save Profile & Preferences"}
          </button>
        </form>
      </div>
    </div>

    <!-- Tab 2: Saved Jobs -->
    <div class="tab-panel" id="tab-saved" role="tabpanel">
      <div class="card">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--color-navy-900);">
          ${isMr ? "जतन केलेल्या नोकऱ्या" : "Saved Jobs"}
        </h2>
        ${savedJobs.length === 0 ? `
          <div class="state-box">
            <h3 class="state-title">${isMr ? "कोणतीही नोकरी जतन केलेली नाही" : "No saved jobs yet"}</h3>
            <p class="state-desc">${isMr ? "नोकरीच्या पानावर 'जतन करा' बटण दाबून येथे जोडू शकता." : "Click 'Save job' on any listing in Job Finder to review it here later."}</p>
            <a href="#/jobs" class="btn btn-primary">${escapeHtml(t("nav_jobs"))}</a>
          </div>
        ` : `
          <div class="job-card-list">
            ${savedJobs.map(job => {
              if (job.isUnavailable) {
                return `
                  <div class="job-card" style="opacity: 0.8; border-style: dashed;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <div>
                        <h3 class="job-card-title">${escapeHtml(job.title)}</h3>
                        <span class="badge badge-expired">${isMr ? "यापुढे उपलब्ध नाही" : "No longer available"}</span>
                      </div>
                      <button type="button" class="btn btn-outline btn-sm btn-danger" onclick="toggleSaveJob('${job.id}')">
                        ${isMr ? "काढून टाका" : "Remove"}
                      </button>
                    </div>
                  </div>
                `;
              }
              return renderJobCardHtml(job);
            }).join("")}
          </div>
        `}
      </div>
    </div>

    <!-- Tab 3: Applications in THREE CLEARLY SEPARATE BOXES (4.5 specs) -->
    <div class="tab-panel" id="tab-applications" role="tabpanel">
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <!-- Box (a) -->
        <section class="app-box" aria-labelledby="box-a-heading">
          <h2 id="box-a-heading" class="app-box-title">
            (a) ${isMr ? "युवाकनेक्ट द्वारे केलेले अर्ज" : "Applications through YuvaConnect"}
          </h2>
          <div class="alert alert-info" style="margin-bottom: 0;">
            <p><strong>${isMr ? "या आवृत्तीत उपलब्ध नाही:" : "Not available in this version."}</strong> Each job shows how to apply directly.</p>
          </div>
        </section>

        <!-- Box (b) -->
        <section class="app-box" aria-labelledby="box-b-heading">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 0.75rem;">
            <div>
              <h2 id="box-b-heading" class="app-box-title">
                (b) ${isMr ? "इतर संकेतस्थळांवर किंवा फोन/प्रत्यक्ष केलेले अर्ज" : "Applications you made on other websites or by phone/walk-in"}
              </h2>
              <p style="font-size: 0.85rem; color: var(--color-text-muted);">
                <em>${isMr ? "तुमच्या नोंदीसाठी. युवाकनेक्ट यांची पडताळणी करू शकत नाही." : "Recorded by you. YuvaConnect cannot check these."}</em>
              </p>
            </div>
            <button type="button" class="btn btn-primary btn-sm" onclick="openAddExternalAppDialog()">
              + ${isMr ? "अर्ज नोंदवा" : "Add Record"}
            </button>
          </div>

          ${AppState.jobSeekerExternalApps.length === 0 ? `
            <p style="color: var(--color-text-muted); font-style: italic; padding: 1rem 0;">
              ${isMr ? "अद्याप कोणतीही नोंद केलेली नाही." : "No external applications recorded yet. Use this section to note down employers you contacted."}
            </p>
          ` : `
            <div class="data-table-wrapper">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>${isMr ? "पद / नोकरी" : "Job Title"}</th>
                    <th>${isMr ? "नियोक्ता" : "Employer"}</th>
                    <th>${isMr ? "अर्ज तारीख" : "Date"}</th>
                    <th>${isMr ? "टीप" : "Note"}</th>
                    <th>${isMr ? "कृती" : "Actions"}</th>
                  </tr>
                </thead>
                <tbody>
                  ${AppState.jobSeekerExternalApps.map(item => `
                    <tr>
                      <td><strong>${escapeHtml(item.jobTitle)}</strong></td>
                      <td>${escapeHtml(item.employer)}</td>
                      <td>${formatDate(item.date)}</td>
                      <td>${escapeHtml(item.note || "-")}</td>
                      <td>
                        <button type="button" class="btn btn-outline btn-sm" onclick="editExternalApp('${item.id}')" style="margin-right: 4px;">Edit</button>
                        <button type="button" class="btn btn-outline btn-sm btn-danger" onclick="deleteExternalApp('${item.id}')">Delete</button>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          `}
        </section>

        <!-- Box (c) -->
        <section class="app-box" aria-labelledby="box-c-heading">
          <h2 id="box-c-heading" class="app-box-title">
            (c) ${isMr ? "जतन केलेल्या नोकऱ्या" : "Saved jobs"}
          </h2>
          <p style="margin-bottom: 1rem; color: var(--color-text-muted);">
            ${isMr ? `तुमच्याकडे ${savedJobs.length} नोकऱ्या जतन केलेल्या आहेत.` : `You have ${savedJobs.length} jobs shortlisted.`}
          </p>
          <button type="button" class="btn btn-outline btn-sm" onclick="activateTab('tab-btn-saved', 'tab-saved')">
            ${isMr ? "जतन केलेल्या नोकऱ्या पहा" : "Go to Saved Jobs Section"} →
          </button>
        </section>
      </div>
    </div>

    <!-- Tab 4: Learning Resources -->
    <div class="tab-panel" id="tab-learning" role="tabpanel">
      <div class="card">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--color-navy-900);">
          ${isMr ? "शिफारस केलेले मार्गदर्शन" : "Learning Resources"}
        </h2>
        <div class="guidance-grid">
          ${recommendedArticles.map(art => renderGuidanceCardHtml(art)).join("")}
        </div>
      </div>
    </div>
  `;

  setupTabs();

  const profileForm = document.getElementById("jobseeker-profile-form");
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pName = document.getElementById("js-name").value.trim();
      const pPhone = document.getElementById("js-phone").value.trim();

      if (pPhone && !validatePhone(pPhone)) {
        showToast("Please enter a valid 10-digit mobile number or leave blank", "error");
        return;
      }

      AppState.jobSeekerProfile = {
        fullName: pName,
        phone: pPhone,
        town: document.getElementById("js-town").value.trim(),
        education: document.getElementById("js-edu").value,
        skills: document.getElementById("js-skills").value.trim(),
        langPref: document.getElementById("js-langpref").value,
        preferredTown: document.getElementById("js-preftown").value.trim(),
        preferredCategories: [document.getElementById("js-prefcategory").value].filter(Boolean),
        preferredJobTypes: []
      };

      Storage.set("jobSeekerProfile", AppState.jobSeekerProfile);
      showToast("Profile and preferences saved successfully!", "success");
    });
  }
}

function openAddExternalAppDialog(existingItem = null) {
  const isMr = AppState.language === "mr";
  const title = existingItem ? (isMr ? "नोंद संपादित करा" : "Edit Tracked Application") : (isMr ? "नवीन अर्ज नोंदवा" : "Add Tracked Application");

  const contentHtml = `
    <div class="form-group">
      <label for="ext-title" class="form-label">${isMr ? "पदाचे नाव" : "Job Title"} <span class="required-mark">*</span></label>
      <input type="text" id="ext-title" class="form-input" value="${existingItem ? escapeHtml(existingItem.jobTitle) : ""}" required placeholder="e.g. Machine Operator">
    </div>
    <div class="form-group">
      <label for="ext-emp" class="form-label">${isMr ? "कंपनीचे नाव" : "Employer"} <span class="required-mark">*</span></label>
      <input type="text" id="ext-emp" class="form-input" value="${existingItem ? escapeHtml(existingItem.employer) : ""}" required placeholder="e.g. Local Agro Agency">
    </div>
    <div class="form-group">
      <label for="ext-date" class="form-label">${isMr ? "अर्ज तारीख" : "Date Applied"}</label>
      <input type="date" id="ext-date" class="form-input" value="${existingItem ? existingItem.date : new Date().toISOString().split("T")[0]}">
    </div>
    <div class="form-group">
      <label for="ext-note" class="form-label">${isMr ? "टीप" : "Note (phone call, in-person visit, etc.)"}</label>
      <textarea id="ext-note" class="form-textarea" rows="2" placeholder="e.g. Visited shop, met supervisor.">${existingItem ? escapeHtml(existingItem.note) : ""}</textarea>
    </div>
  `;

  showAccessibleDialog({
    title: title,
    contentHtml: contentHtml,
    confirmText: isMr ? "जतन करा" : "Save",
    onConfirm: () => {
      const titleVal = document.getElementById("ext-title").value.trim();
      const empVal = document.getElementById("ext-emp").value.trim();
      const dateVal = document.getElementById("ext-date").value;
      const noteVal = document.getElementById("ext-note").value.trim();

      if (!titleVal || !empVal) {
        showToast("Job title and employer name are required", "error");
        return true;
      }

      if (existingItem) {
        existingItem.jobTitle = titleVal;
        existingItem.employer = empVal;
        existingItem.date = dateVal;
        existingItem.note = noteVal;
        showToast("Record updated", "success");
      } else {
        AppState.jobSeekerExternalApps.unshift({
          id: "ext-" + Date.now(),
          jobTitle: titleVal,
          employer: empVal,
          date: dateVal,
          note: noteVal
        });
        showToast("Application added to self-tracking list", "success");
      }

      Storage.set("externalApps", AppState.jobSeekerExternalApps);
      handleRoute();
      return false;
    }
  });
}

function editExternalApp(id) {
  const item = AppState.jobSeekerExternalApps.find(a => a.id === id);
  if (item) openAddExternalAppDialog(item);
}

function deleteExternalApp(id) {
  const item = AppState.jobSeekerExternalApps.find(a => a.id === id);
  if (!item) return;

  showAccessibleDialog({
    title: "Delete Application Record",
    contentHtml: `<p>Are you sure you want to delete your record for <strong>${escapeHtml(item.jobTitle)}</strong> at <strong>${escapeHtml(item.employer)}</strong>?</p>`,
    confirmText: "Delete",
    confirmClass: "btn-danger",
    onConfirm: () => {
      AppState.jobSeekerExternalApps = AppState.jobSeekerExternalApps.filter(a => a.id !== id);
      Storage.set("externalApps", AppState.jobSeekerExternalApps);
      showToast("Record deleted", "info");
      handleRoute();
      return false;
    }
  });
}

/* --------------------------------------------------------------------------
   8.8 Employer Portal (Role: Employer)
   -------------------------------------------------------------------------- */
function renderEmployerView(container) {
  const isMr = AppState.language === "mr";
  const ep = AppState.employerProfile;
  const myJobs = AppState.jobs.filter(j => !j.isSample && j.employerName === (ep.companyName || "My Company"));

  container.innerHTML = `
    <div class="view-header">
      <h1 class="view-title">${escapeHtml(t("nav_employer"))}</h1>
      <p class="view-lead">
        ${isMr ? "स्थानिक नोकऱ्या नोंदवा. सर्व नोंदी ॲडमिन मंजुरीनंतरच इतर सर्वांना दिसतात." : "Register your business and post local jobs. All listings require admin review before appearing publicly."}
      </p>
    </div>

    <!-- Warning on form -->
    <div class="alert alert-warning">
      <strong>⚠️ ${isMr ? "महत्त्वाची नियमावली:" : "Fee Prohibition:"}</strong>
      ${isMr ? "नोकरीसाठी उमेदवारांकडून कोणत्याही प्रकारचे शुल्क किंवा अनामत रक्कम मागणे सक्त मनाई आहे." : "Employers must never ask job seekers to pay any fee. Jobs asking for fees will be removed."}
    </div>

    <div class="tabs-nav" role="tablist">
      <button type="button" class="tab-btn is-active" id="tab-btn-emp-profile" role="tab" aria-selected="true" aria-controls="tab-emp-profile">
        ${isMr ? "नियोक्ता प्रोफाइल" : "1. Employer Profile"}
      </button>
      <button type="button" class="tab-btn" id="tab-btn-post-job" role="tab" aria-selected="false" aria-controls="tab-post-job">
        ${isMr ? "नवीन नोकरी नोंदवा" : "2. Post a Job"}
      </button>
      <button type="button" class="tab-btn" id="tab-btn-my-jobs" role="tab" aria-selected="false" aria-controls="tab-my-jobs">
        ${isMr ? "माझ्या नोंदी" : "3. My Jobs"} (${myJobs.length})
      </button>
    </div>

    <!-- Panel 1: Profile -->
    <div class="tab-panel is-active" id="tab-emp-profile" role="tabpanel">
      <div class="card" style="max-width: 820px;">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--color-navy-900);">
          ${isMr ? "कंपनी / व्यवसाय तपशील" : "Business Details"}
        </h2>
        <form id="employer-profile-form">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            <div class="form-group">
              <label for="emp-company" class="form-label">${isMr ? "कंपनीचे नाव" : "Company / Shop Name"} <span class="required-mark">*</span></label>
              <input type="text" id="emp-company" class="form-input" value="${escapeHtml(ep.companyName)}" required placeholder="e.g. Patil Agro Services">
            </div>

            <div class="form-group">
              <label for="emp-person" class="form-label">${isMr ? "संपर्क व्यक्ती" : "Contact Person"} <span class="required-mark">*</span></label>
              <input type="text" id="emp-person" class="form-input" value="${escapeHtml(ep.contactPerson)}" required placeholder="e.g. Suresh Patil">
            </div>

            <div class="form-group">
              <label for="emp-phone" class="form-label">${isMr ? "मोबाईल नंबर (१० अंक)" : "Phone (10 digits)"} <span class="required-mark">*</span></label>
              <input type="tel" id="emp-phone" class="form-input" value="${escapeHtml(ep.phone)}" required placeholder="9876543210">
            </div>

            <div class="form-group">
              <label for="emp-email" class="form-label">${isMr ? "ईमेल (ऐच्छिक)" : "Email (Optional)"}</label>
              <input type="email" id="emp-email" class="form-input" value="${escapeHtml(ep.email)}" placeholder="employer@example.com">
            </div>

            <div class="form-group">
              <label for="emp-town" class="form-label">${isMr ? "गाव / तालुका" : "Town / Taluka"} <span class="required-mark">*</span></label>
              <input type="text" id="emp-town" class="form-input" value="${escapeHtml(ep.town)}" required placeholder="e.g. Chandwad">
            </div>

            <div class="form-group">
              <label for="emp-biztype" class="form-label">${isMr ? "व्यवसाय प्रकार" : "Business Type"}</label>
              <input type="text" id="emp-biztype" class="form-input" value="${escapeHtml(ep.businessType)}" placeholder="e.g. Retail, Workshop, Agriculture">
            </div>

            <div class="form-group" style="grid-column: 1 / -1;">
              <label for="emp-desc" class="form-label">${isMr ? "व्यवसायाची थोडक्यात माहिती" : "Short Description"}</label>
              <textarea id="emp-desc" class="form-textarea" rows="2" placeholder="Briefly describe your company or trade...">${escapeHtml(ep.description)}</textarea>
            </div>
          </div>

          <button type="submit" class="btn btn-primary" style="margin-top: 1rem;">
            ${isMr ? "माहिती जतन करा" : "Save Employer Profile"}
          </button>
        </form>
      </div>
    </div>

    <!-- Panel 2: Post Job Form -->
    <div class="tab-panel" id="tab-post-job" role="tabpanel">
      <div class="card" style="max-width: 900px;">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: var(--color-navy-900);">
          ${isMr ? "नवीन नोकरीची जाहिरात नोंदवा" : "Post a New Vacancy"}
        </h2>
        <p style="color: var(--color-text-muted); margin-bottom: 1.5rem; font-size: 0.95rem;">
          Your job will be shown only after admin review.
        </p>

        <form id="post-job-form" novalidate>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
            <div class="form-group" style="grid-column: 1 / -1;">
              <label for="post-title" class="form-label">${isMr ? "पदाचे नाव" : "Job Title"} <span class="required-mark">*</span></label>
              <input type="text" id="post-title" class="form-input" required placeholder="e.g. Billing Assistant">
              <span class="form-error" id="err-post-title" style="display:none;">Job title is required.</span>
            </div>

            <div class="form-group">
              <label for="post-category" class="form-label">${isMr ? "क्षेत्र" : "Category"} <span class="required-mark">*</span></label>
              <select id="post-category" class="form-select" required>
                ${JOB_CATEGORIES.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("")}
              </select>
            </div>

            <div class="form-group">
              <label for="post-workmode" class="form-label">${isMr ? "कामाचे ठिकाण" : "Work Mode"} <span class="required-mark">*</span></label>
              <select id="post-workmode" class="form-select" required>
                ${WORK_MODES.map(wm => `<option value="${escapeHtml(wm)}">${escapeHtml(wm)}</option>`).join("")}
              </select>
            </div>

            <div class="form-group">
              <label for="post-jobtype" class="form-label">${isMr ? "कामाचा प्रकार" : "Job Type"} <span class="required-mark">*</span></label>
              <select id="post-jobtype" class="form-select" required>
                ${JOB_TYPES.map(jt => `<option value="${escapeHtml(jt)}">${escapeHtml(jt)}</option>`).join("")}
              </select>
              <span class="form-error" id="err-post-jobtype" style="display:none;"></span>
            </div>

            <div class="form-group">
              <label for="post-edu" class="form-label">${isMr ? "किमान शिक्षण" : "Minimum Education"} <span class="required-mark">*</span></label>
              <select id="post-edu" class="form-select" required>
                ${EDUCATION_OPTIONS.map(edu => `<option value="${escapeHtml(edu)}">${escapeHtml(edu)}</option>`).join("")}
              </select>
            </div>

            <div class="form-group">
              <label for="post-exp" class="form-label">${isMr ? "अनुभव" : "Experience"} <span class="required-mark">*</span></label>
              <select id="post-exp" class="form-select" required>
                ${EXPERIENCE_OPTIONS.map(exp => `<option value="${escapeHtml(exp)}">${escapeHtml(exp)}</option>`).join("")}
              </select>
            </div>

            <div class="form-group">
              <label for="post-deadline" class="form-label">${isMr ? "शेवटची तारीख" : "Application Deadline"} <span class="required-mark">*</span></label>
              <input type="date" id="post-deadline" class="form-input" required min="${new Date().toISOString().split("T")[0]}">
              <span class="form-error" id="err-post-deadline" style="display:none;">Deadline must be today or later.</span>
            </div>

            <div class="form-group">
              <label for="post-salary-min" class="form-label">${isMr ? "किमान वेतन (₹)" : "Min Monthly Salary (₹)"}</label>
              <input type="number" id="post-salary-min" class="form-input" min="0" step="500" placeholder="e.g. 10000">
            </div>

            <div class="form-group">
              <label for="post-salary-max" class="form-label">${isMr ? "कमाल वेतन (₹)" : "Max Monthly Salary (₹)"}</label>
              <input type="number" id="post-salary-max" class="form-input" min="0" step="500" placeholder="e.g. 14000">
              <span class="form-error" id="err-post-salary" style="display:none;">Min salary cannot be greater than max salary.</span>
            </div>

            <div class="form-group" style="grid-column: 1 / -1;">
              <label class="form-checkbox-label">
                <input type="checkbox" id="post-salary-undisclosed" class="form-checkbox">
                <span>${isMr ? "वेतन मुलाखतीनंतर ठरवले जाईल" : "Salary undisclosed / negotiable"}</span>
              </label>
            </div>

            <div class="form-group">
              <label for="post-town" class="form-label">${isMr ? "शहर / तालुका" : "Town"} <span class="required-mark">*</span></label>
              <input type="text" id="post-town" class="form-input" required value="${escapeHtml(ep.town || "Chandwad")}">
            </div>

            <div class="form-group">
              <label for="post-district" class="form-label">${isMr ? "जिल्हा" : "District"}</label>
              <input type="text" id="post-district" class="form-input" value="Nashik" readonly>
            </div>

            <div class="form-group">
              <label for="post-village" class="form-label">${isMr ? "पत्ता / परिसर" : "Area / Village"}</label>
              <input type="text" id="post-village" class="form-input" placeholder="e.g. Station road, MIDC">
            </div>

            <div class="form-group" style="grid-column: 1 / -1;">
              <label for="post-desc" class="form-label">${isMr ? "कामाचे वर्णन" : "Job Description"} <span class="required-mark">*</span></label>
              <textarea id="post-desc" class="form-textarea" rows="3" required placeholder="Describe duties and role..."></textarea>
            </div>

            <div class="form-group" style="grid-column: 1 / -1;">
              <label for="post-resp" class="form-label">${isMr ? "जबाबदाऱ्या" : "Responsibilities"}</label>
              <textarea id="post-resp" class="form-textarea" rows="2" placeholder="Main daily duties..."></textarea>
            </div>

            <div class="form-group" style="grid-column: 1 / -1;">
              <label for="post-skills" class="form-label">${isMr ? "आवश्यक कौशल्ये" : "Skills"}</label>
              <input type="text" id="post-skills" class="form-input" placeholder="e.g. Computer, Typing, Machine operating">
            </div>

            <div class="form-group">
              <label for="post-applymethod" class="form-label">${isMr ? "अर्ज करण्याची पद्धत" : "How to Apply"} <span class="required-mark">*</span></label>
              <select id="post-applymethod" class="form-select" required>
                <option value="call">Phone Call</option>
                <option value="whatsapp">WhatsApp Message</option>
                <option value="walk-in">Walk-in Interview</option>
                <option value="email">Email</option>
              </select>
            </div>

            <div class="form-group" style="grid-column: 1 / -1;">
              <label for="post-applyinst" class="form-label">${isMr ? "अर्ज सूचना / संपर्क पत्ता" : "Application Instructions / Contact"} <span class="required-mark">*</span></label>
              <textarea id="post-applyinst" class="form-textarea" rows="2" required placeholder="e.g. Call 9876543210 between 10am to 4pm, or visit workshop."></textarea>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="margin-top: 1.5rem;">
            ${isMr ? "मंजुरीसाठी पाठवा" : "Submit Job for Review"}
          </button>
        </form>
      </div>
    </div>

    <!-- Panel 3: My Jobs List -->
    <div class="tab-panel" id="tab-my-jobs" role="tabpanel">
      <div class="card">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--color-navy-900);">
          ${isMr ? "माझ्या नोंदी" : "My Posted Listings"}
        </h2>
        ${myJobs.length === 0 ? `
          <div class="state-box">
            <h3 class="state-title">${isMr ? "अद्याप कोणतीही नोकरी नोंदवलेली नाही" : "No jobs posted yet"}</h3>
            <p class="state-desc">${isMr ? "'नवीन नोकरी नोंदवा' टॅबवर जाऊन पहिली नोकरी नोंदवा." : "Click 'Post a Job' above to submit your first vacancy."}</p>
          </div>
        ` : `
          <div class="job-card-list">
            ${myJobs.map(job => `
              <div class="job-card">
                <div class="job-card-header">
                  <div>
                    <h3 class="job-card-title">${escapeHtml(job.title)}</h3>
                    <div class="job-employer-name">${escapeHtml(job.employerName)} - ${escapeHtml(job.locationTown)}</div>
                  </div>
                  <div>
                    <span class="badge badge-${job.status}">${escapeHtml(job.status)}</span>
                  </div>
                </div>

                ${job.status === "pending" ? `
                  <div class="alert alert-info" style="margin: 0.5rem 0; font-size: 0.9rem;">
                    ⏳ <strong>Your job will be shown only after admin review.</strong>
                  </div>
                ` : ""}

                ${job.status === "rejected" ? `
                  <div class="alert alert-danger" style="margin: 0.5rem 0; font-size: 0.9rem;">
                    ❌ <strong>Rejection Reason:</strong> ${escapeHtml(job.rejectionReason || "Listing did not meet guidelines.")}
                  </div>
                ` : ""}

                <div class="job-meta-grid">
                  <div class="job-meta-item"><strong>Category:</strong> ${escapeHtml(job.category)}</div>
                  <div class="job-meta-item"><strong>Deadline:</strong> ${formatDate(job.deadline)}</div>
                  <div class="job-meta-item"><strong>Status:</strong> ${escapeHtml(job.status)}</div>
                </div>

                <div class="job-card-actions">
                  <button type="button" class="btn btn-outline btn-sm" onclick="editEmployerJob('${job.id}')">
                    Edit Listing
                  </button>
                  ${job.status !== "closed" ? `
                    <button type="button" class="btn btn-outline btn-sm btn-danger" onclick="closeEmployerJob('${job.id}')">
                      Close Job
                    </button>
                  ` : `
                    <span style="font-size: 0.85rem; color: var(--color-text-muted);">Job is closed</span>
                  `}
                </div>
              </div>
            `).join("")}
          </div>
        `}
      </div>
    </div>
  `;

  setupTabs();

  const empProfileForm = document.getElementById("employer-profile-form");
  if (empProfileForm) {
    empProfileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const phoneVal = document.getElementById("emp-phone").value.trim();
      if (!validatePhone(phoneVal)) {
        showToast("Please enter a valid 10-digit phone number", "error");
        return;
      }
      AppState.employerProfile = {
        companyName: document.getElementById("emp-company").value.trim(),
        contactPerson: document.getElementById("emp-person").value.trim(),
        phone: phoneVal,
        email: document.getElementById("emp-email").value.trim(),
        town: document.getElementById("emp-town").value.trim(),
        businessType: document.getElementById("emp-biztype").value.trim(),
        description: document.getElementById("emp-desc").value.trim()
      };
      Storage.set("employerProfile", AppState.employerProfile);
      showToast("Employer profile saved", "success");
    });
  }

  const postForm = document.getElementById("post-job-form");
  if (postForm) {
    postForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("post-title").value.trim();
      const category = document.getElementById("post-category").value;
      const workMode = document.getElementById("post-workmode").value;
      const jobType = document.getElementById("post-jobtype").value;
      const edu = document.getElementById("post-edu").value;
      const exp = document.getElementById("post-exp").value;
      const deadline = document.getElementById("post-deadline").value;
      const minSal = Number(document.getElementById("post-salary-min").value) || 0;
      const maxSal = Number(document.getElementById("post-salary-max").value) || 0;
      const undisclosed = document.getElementById("post-salary-undisclosed").checked;
      const town = document.getElementById("post-town").value.trim();
      const village = document.getElementById("post-village").value.trim();
      const desc = document.getElementById("post-desc").value.trim();
      const resp = document.getElementById("post-resp").value.trim();
      const skills = document.getElementById("post-skills").value.trim();
      const applyMethod = document.getElementById("post-applymethod").value;
      const applyInst = document.getElementById("post-applyinst").value.trim();

      document.getElementById("err-post-title").style.display = "none";
      document.getElementById("err-post-jobtype").style.display = "none";
      document.getElementById("err-post-deadline").style.display = "none";
      document.getElementById("err-post-salary").style.display = "none";

      let hasError = false;

      if (!title) {
        document.getElementById("err-post-title").style.display = "block";
        hasError = true;
      }

      // Hard rule: Remote job is allowed only when work mode is remote
      if (jobType === "remote" && workMode !== "remote") {
        const errEl = document.getElementById("err-post-jobtype");
        errEl.textContent = "Job type 'remote' is only allowed when work mode is remote.";
        errEl.style.display = "block";
        hasError = true;
      }
      if (workMode === "remote" && jobType !== "remote") {
        const errEl = document.getElementById("err-post-jobtype");
        errEl.textContent = "Work mode 'remote' requires job type to be 'remote'.";
        errEl.style.display = "block";
        hasError = true;
      }

      if (!deadline || deadline < new Date().toISOString().split("T")[0]) {
        document.getElementById("err-post-deadline").style.display = "block";
        hasError = true;
      }

      if (!undisclosed && minSal > 0 && maxSal > 0 && minSal > maxSal) {
        document.getElementById("err-post-salary").style.display = "block";
        hasError = true;
      }

      if (!desc || !applyInst || !town) {
        showToast("Please fill in all required fields", "error");
        hasError = true;
      }

      if (hasError) return;

      const newJob = {
        id: "emp-job-" + Date.now(),
        isSample: false,
        title: title,
        employerName: AppState.employerProfile.companyName || "Local Employer",
        employerPhone: AppState.employerProfile.phone || "",
        employerEmail: AppState.employerProfile.email || "",
        category: category,
        jobType: jobType,
        workMode: workMode,
        description: desc,
        responsibilities: resp,
        qualifications: "Specified in description",
        skills: skills,
        education: edu,
        experience: exp,
        salaryMin: minSal,
        salaryMax: maxSal,
        salaryUndisclosed: undisclosed,
        locationTown: town,
        locationDistrict: "Nashik",
        locationVillage: village,
        applyMethod: applyMethod,
        applyInstructions: applyInst,
        source: "Posted by employer through YuvaConnect (demo)",
        datePosted: new Date().toISOString().split("T")[0],
        lastUpdated: new Date().toISOString().split("T")[0],
        verificationStatus: "Unverified",
        status: "pending",
        deadline: deadline
      };

      AppState.jobs.unshift(newJob);
      Storage.set("jobs", AppState.jobs);
      logAuditAction("job_posted", `Job: ${newJob.title} by ${newJob.employerName}`);

      showToast("Job submitted successfully! It is pending admin review.", "success");
      activateTab("tab-btn-my-jobs", "tab-my-jobs");
      renderEmployerView(container);
    });
  }
}

function closeEmployerJob(jobId) {
  showAccessibleDialog({
    title: "Close Job Listing",
    contentHtml: "<p>Are you sure you want to close this job listing? It will no longer appear for job seekers.</p>",
    confirmText: "Close Job",
    confirmClass: "btn-danger",
    onConfirm: () => {
      const job = AppState.jobs.find(j => j.id === jobId);
      if (job) {
        job.status = "closed";
        job.lastUpdated = new Date().toISOString().split("T")[0];
        Storage.set("jobs", AppState.jobs);
        logAuditAction("job_closed", `Job: ${job.title} by employer`);
        showToast("Job marked as closed", "info");
        handleRoute();
      }
      return false;
    }
  });
}

function editEmployerJob(jobId) {
  const job = AppState.jobs.find(j => j.id === jobId);
  if (!job) return;

  const contentHtml = `
    <div class="form-group">
      <label for="edit-emp-title" class="form-label">Job Title</label>
      <input type="text" id="edit-emp-title" class="form-input" value="${escapeHtml(job.title)}" required>
    </div>
    <div class="form-group">
      <label for="edit-emp-desc" class="form-label">Description</label>
      <textarea id="edit-emp-desc" class="form-textarea" rows="3">${escapeHtml(job.description)}</textarea>
    </div>
    <div class="form-group">
      <label for="edit-emp-apply" class="form-label">Application Instructions</label>
      <textarea id="edit-emp-apply" class="form-textarea" rows="2">${escapeHtml(job.applyInstructions)}</textarea>
    </div>
    <p style="font-size: 0.85rem; color: #92400E;">
      ⚠️ Note: Editing an approved job will send it back to <strong>'pending'</strong> for admin review.
    </p>
  `;

  showAccessibleDialog({
    title: "Edit Job Listing",
    contentHtml: contentHtml,
    confirmText: "Save Changes",
    onConfirm: () => {
      const titleVal = document.getElementById("edit-emp-title").value.trim();
      const descVal = document.getElementById("edit-emp-desc").value.trim();
      const applyVal = document.getElementById("edit-emp-apply").value.trim();

      if (!titleVal || !descVal) {
        showToast("Title and description cannot be empty", "error");
        return true;
      }

      job.title = titleVal;
      job.description = descVal;
      job.applyInstructions = applyVal;
      job.status = "pending";
      job.lastUpdated = new Date().toISOString().split("T")[0];

      Storage.set("jobs", AppState.jobs);
      logAuditAction("job_edited_by_employer", `Job: ${job.title} (reset to pending)`);
      showToast("Job updated and returned to pending review", "success");
      handleRoute();
      return false;
    }
  });
}

/* --------------------------------------------------------------------------
   8.9 Admin Dashboard (Role: Administrator, simulated)
   -------------------------------------------------------------------------- */
function renderAdminView(container) {
  const isMr = AppState.language === "mr";
  const pendingJobs = AppState.jobs.filter(j => j.status === "pending");
  const allJobs = AppState.jobs;
  const reports = AppState.reports;
  const guidanceList = AppState.guidance;

  // Real browser metrics only (no fake counts)
  const approvedCount = AppState.jobs.filter(j => j.status === "approved" && !isDateExpired(j.deadline)).length;
  const pendingCount = pendingJobs.length;
  const rejectedCount = AppState.jobs.filter(j => j.status === "rejected").length;
  const expiredCount = AppState.jobs.filter(j => isDateExpired(j.deadline) || j.status === "expired" || j.status === "closed").length;
  const totalReportsCount = reports.length;
  const totalArticlesCount = guidanceList.length;
  const totalSavedCount = AppState.savedJobIds.length;

  const employersMap = {};
  AppState.jobs.forEach(j => {
    if (!employersMap[j.employerName]) {
      employersMap[j.employerName] = { name: j.employerName, isSample: j.isSample, jobCount: 0 };
    }
    employersMap[j.employerName].jobCount++;
  });
  const employersList = Object.values(employersMap);

  container.innerHTML = `
    <div class="view-header">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h1 class="view-title">${escapeHtml(t("nav_admin"))}</h1>
          <p class="view-lead">
            Manage vacancies, review reports, and audit system actions in this browser.
          </p>
        </div>
        <button type="button" class="btn btn-danger btn-sm" onclick="confirmResetDemoData()">
          ⚠️ Reset Demo Data
        </button>
      </div>
    </div>

    <div class="alert alert-info">
      <strong>Simulated Administration Mode:</strong> In this demo, admin rights are simulated in this browser. 
      In the real design, Administrator is never assigned through public registration.
    </div>

    <!-- Admin Tabs -->
    <div class="tabs-nav" role="tablist">
      <button type="button" class="tab-btn is-active" id="tab-btn-admin-pending" role="tab" aria-selected="true" aria-controls="tab-admin-pending">
        1. Pending Review (${pendingJobs.length})
      </button>
      <button type="button" class="tab-btn" id="tab-btn-admin-alljobs" role="tab" aria-selected="false" aria-controls="tab-admin-alljobs">
        2. All Jobs (${allJobs.length})
      </button>
      <button type="button" class="tab-btn" id="tab-btn-admin-reports" role="tab" aria-selected="false" aria-controls="tab-admin-reports">
        3. Reports (${reports.length})
      </button>
      <button type="button" class="tab-btn" id="tab-btn-admin-articles" role="tab" aria-selected="false" aria-controls="tab-admin-articles">
        4. Guidance Articles (${guidanceList.length})
      </button>
      <button type="button" class="tab-btn" id="tab-btn-admin-employers" role="tab" aria-selected="false" aria-controls="tab-admin-employers">
        5. Employers (${employersList.length})
      </button>
      <button type="button" class="tab-btn" id="tab-btn-admin-metrics" role="tab" aria-selected="false" aria-controls="tab-admin-metrics">
        6. Metrics
      </button>
      <button type="button" class="tab-btn" id="tab-btn-admin-audit" role="tab" aria-selected="false" aria-controls="tab-admin-audit">
        7. Audit Log (${AppState.auditLogs.length})
      </button>
    </div>

    <!-- Tab 1: Pending -->
    <div class="tab-panel is-active" id="tab-admin-pending" role="tabpanel">
      <div class="card">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--color-navy-900);">
          Jobs Pending Review
        </h2>
        ${pendingJobs.length === 0 ? `
          <div class="state-box">
            <h3 class="state-title">No pending jobs</h3>
            <p class="state-desc">All submitted jobs have been reviewed.</p>
          </div>
        ` : `
          <div class="job-card-list">
            ${pendingJobs.map(job => `
              <div class="job-card" style="border-left: 5px solid #F59E0B;">
                <div class="job-card-header">
                  <div>
                    <h3 class="job-card-title">${escapeHtml(job.title)}</h3>
                    <div class="job-employer-name">${escapeHtml(job.employerName)} - ${escapeHtml(job.locationTown)}</div>
                  </div>
                  <span class="badge badge-pending">Pending Review</span>
                </div>
                <p>${escapeHtml(job.description)}</p>
                <div class="job-meta-grid">
                  <div class="job-meta-item"><strong>Category:</strong> ${escapeHtml(job.category)}</div>
                  <div class="job-meta-item"><strong>Apply Method:</strong> ${escapeHtml(job.applyMethod)}</div>
                  <div class="job-meta-item"><strong>Contact:</strong> ${escapeHtml(job.applyInstructions)}</div>
                </div>
                <div class="job-card-actions">
                  <button type="button" class="btn btn-primary btn-sm" onclick="adminApproveJob('${job.id}')">
                    ✓ Approve Listing
                  </button>
                  <button type="button" class="btn btn-outline btn-sm btn-danger" onclick="adminRejectJob('${job.id}')">
                    ✕ Reject (Reason Required)
                  </button>
                  <button type="button" class="btn btn-outline btn-sm" onclick="adminEditJob('${job.id}')">
                    Edit
                  </button>
                </div>
              </div>
            `).join("")}
          </div>
        `}
      </div>
    </div>

    <!-- Tab 2: All Jobs -->
    <div class="tab-panel" id="tab-admin-alljobs" role="tabpanel">
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy-900); margin-bottom:0;">All Jobs</h2>
          <div>
            <select id="admin-status-filter" class="form-select" style="min-width: 160px;" onchange="filterAdminJobs(this.value)">
              <option value="all">All Statuses</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
              <option value="closed">Closed / Expired</option>
            </select>
          </div>
        </div>

        <div class="data-table-wrapper">
          <table class="data-table" id="admin-jobs-table">
            <thead>
              <tr>
                <th>Title & Employer</th>
                <th>Category</th>
                <th>Location</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${allJobs.map(job => {
                const isExp = isDateExpired(job.deadline);
                const displayStatus = isExp ? "expired" : job.status;
                return `
                  <tr data-status="${displayStatus}">
                    <td>
                      <strong>${escapeHtml(job.title)}</strong><br>
                      <span style="font-size: 0.85rem; color: var(--color-text-muted);">
                        ${escapeHtml(job.employerName)} ${job.isSample ? "<em>(Sample)</em>" : ""}
                      </span>
                    </td>
                    <td>${escapeHtml(job.category)}</td>
                    <td>${escapeHtml(job.locationTown)}</td>
                    <td><span class="badge badge-${displayStatus}">${escapeHtml(displayStatus)}</span></td>
                    <td>${formatDate(job.deadline)}</td>
                    <td>
                      <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                        <button type="button" class="btn btn-outline btn-sm" onclick="adminEditJob('${job.id}')">Edit</button>
                        ${displayStatus !== "expired" ? `<button type="button" class="btn btn-outline btn-sm" onclick="adminExpireJob('${job.id}')">Expire</button>` : ""}
                        <button type="button" class="btn btn-outline btn-sm btn-danger" onclick="adminRemoveJob('${job.id}')">Remove</button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Tab 3: Reports -->
    <div class="tab-panel" id="tab-admin-reports" role="tabpanel">
      <div class="card">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--color-navy-900);">
          Reports (${reports.length})
        </h2>
        ${reports.length === 0 ? `
          <div class="state-box">
            <h3 class="state-title">No reports filed</h3>
            <p class="state-desc">Community members have not reported any listings.</p>
          </div>
        ` : `
          <div class="data-table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Job Title</th>
                  <th>Reason</th>
                  <th>Notes</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${reports.map(rep => `
                  <tr>
                    <td>${formatDate(rep.date)}</td>
                    <td><a href="#/jobs/${rep.jobId}"><strong>${escapeHtml(rep.jobTitle)}</strong></a></td>
                    <td><span class="badge badge-rejected">${escapeHtml(rep.reason)}</span></td>
                    <td>${escapeHtml(rep.notes || "-")}</td>
                    <td><span class="badge ${rep.status === "reviewed" ? "badge-approved" : "badge-pending"}">${escapeHtml(rep.status)}</span></td>
                    <td>
                      ${rep.status !== "reviewed" ? `
                        <button type="button" class="btn btn-primary btn-sm" onclick="adminMarkReportReviewed('${rep.id}')">
                          Mark Reviewed
                        </button>
                      ` : `Reviewed ✓`}
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `}
      </div>
    </div>

    <!-- Tab 4: Guidance Articles -->
    <div class="tab-panel" id="tab-admin-articles" role="tabpanel">
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy-900); margin-bottom:0;">Guidance Articles</h2>
          <button type="button" class="btn btn-primary btn-sm" onclick="adminAddArticle()">
            + Add New Article
          </button>
        </div>

        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Title (EN)</th>
                <th>Category</th>
                <th>Marathi Status</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${guidanceList.map(art => `
                <tr>
                  <td><strong>${escapeHtml(art.titleEn)}</strong></td>
                  <td>${escapeHtml(art.category)}</td>
                  <td>${art.titleMr ? "✓ Translated" : "⚠️ English Only"}</td>
                  <td>${formatDate(art.lastUpdated)}</td>
                  <td>
                    <button type="button" class="btn btn-outline btn-sm" onclick="adminEditArticle('${art.id}')" style="margin-right: 4px;">Edit</button>
                    <button type="button" class="btn btn-outline btn-sm btn-danger" onclick="adminDeleteArticle('${art.id}')">Delete</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Tab 5: Employers -->
    <div class="tab-panel" id="tab-admin-employers" role="tabpanel">
      <div class="card">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--color-navy-900);">
          Employers in this Browser
        </h2>
        <div class="alert alert-info">
          Employers do not carry a "verified" label because there is no documented verification process.
        </div>
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Employer Name</th>
                <th>Type</th>
                <th>Job Count</th>
              </tr>
            </thead>
            <tbody>
              ${employersList.map(emp => `
                <tr>
                  <td><strong>${escapeHtml(emp.name)}</strong></td>
                  <td>${emp.isSample ? "Sample Data" : "Demo Registered Employer"}</td>
                  <td>${emp.jobCount} job(s)</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Tab 6: Metrics (REAL COUNTS ONLY) -->
    <div class="tab-panel" id="tab-admin-metrics" role="tabpanel">
      <div class="card">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--color-navy-900);">
          System Metrics
        </h2>
        <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">
          <strong>Counts from this browser only. Not community statistics.</strong>
        </p>

        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-number">${approvedCount}</div>
            <div class="metric-label">Approved Active Jobs</div>
          </div>
          <div class="metric-card">
            <div class="metric-number" style="color: #F59E0B;">${pendingCount}</div>
            <div class="metric-label">Pending Review</div>
          </div>
          <div class="metric-card">
            <div class="metric-number" style="color: #DC2626;">${rejectedCount}</div>
            <div class="metric-label">Rejected Jobs</div>
          </div>
          <div class="metric-card">
            <div class="metric-number" style="color: #6B7280;">${expiredCount}</div>
            <div class="metric-label">Expired / Closed Jobs</div>
          </div>
          <div class="metric-card">
            <div class="metric-number" style="color: #0284C7;">${totalReportsCount}</div>
            <div class="metric-label">Reports Filed</div>
          </div>
          <div class="metric-card">
            <div class="metric-number">${totalArticlesCount}</div>
            <div class="metric-label">Guidance Articles</div>
          </div>
          <div class="metric-card">
            <div class="metric-number">${totalSavedCount}</div>
            <div class="metric-label">Saved by Seeker</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab 7: Read-Only Audit Log -->
    <div class="tab-panel" id="tab-admin-audit" role="tabpanel">
      <div class="card">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--color-navy-900);">
          Audit Log
        </h2>
        <p style="color: var(--color-text-muted); margin-bottom: 1rem;">
          Read-only record of important actions. No delete button is provided.
        </p>
        <div class="data-table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Role</th>
                <th>Action</th>
                <th>Target / Details</th>
              </tr>
            </thead>
            <tbody>
              ${AppState.auditLogs.map(log => `
                <tr>
                  <td><code>${escapeHtml(log.timestamp)}</code></td>
                  <td><span class="badge badge-sample">${escapeHtml(log.role)}</span></td>
                  <td><strong>${escapeHtml(log.action)}</strong></td>
                  <td>${escapeHtml(log.target)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  setupTabs();
}

function filterAdminJobs(status) {
  const rows = document.querySelectorAll("#admin-jobs-table tbody tr");
  rows.forEach(row => {
    const rowStatus = row.getAttribute("data-status");
    if (status === "all" || rowStatus === status || (status === "closed" && (rowStatus === "closed" || rowStatus === "expired"))) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

function adminApproveJob(jobId) {
  const job = AppState.jobs.find(j => j.id === jobId);
  if (!job) return;

  const todayStr = new Date().toISOString().split("T")[0];
  job.status = "approved";
  job.verificationStatus = `Reviewed by admin on ${todayStr}`;
  job.lastUpdated = todayStr;

  Storage.set("jobs", AppState.jobs);
  logAuditAction("job_approved", `Job: ${job.title} (${job.id})`);
  showToast(`Job '${job.title}' approved successfully!`, "success");
  handleRoute();
}

function adminRejectJob(jobId) {
  const job = AppState.jobs.find(j => j.id === jobId);
  if (!job) return;

  const contentHtml = `
    <div class="form-group">
      <label for="reject-reason-input" class="form-label">Rejection Reason <span class="required-mark">*</span></label>
      <textarea id="reject-reason-input" class="form-textarea" rows="3" required placeholder="State why this job does not meet guidelines..."></textarea>
    </div>
  `;

  showAccessibleDialog({
    title: "Reject Job Listing",
    contentHtml: contentHtml,
    confirmText: "Confirm Rejection",
    confirmClass: "btn-danger",
    onConfirm: () => {
      const reasonVal = document.getElementById("reject-reason-input").value.trim();
      if (!reasonVal) {
        showToast("A rejection reason is strictly required.", "error");
        return true;
      }
      job.status = "rejected";
      job.rejectionReason = reasonVal;
      job.lastUpdated = new Date().toISOString().split("T")[0];

      Storage.set("jobs", AppState.jobs);
      logAuditAction("job_rejected", `Job: ${job.title} - Reason: ${reasonVal}`);
      showToast(`Job '${job.title}' rejected with reason.`, "info");
      handleRoute();
      return false;
    }
  });
}

function adminExpireJob(jobId) {
  const job = AppState.jobs.find(j => j.id === jobId);
  if (!job) return;

  showAccessibleDialog({
    title: "Mark Job Expired",
    contentHtml: `<p>Mark <strong>${escapeHtml(job.title)}</strong> as expired?</p>`,
    confirmText: "Mark Expired",
    confirmClass: "btn-danger",
    onConfirm: () => {
      job.status = "expired";
      job.deadline = "2020-01-01";
      job.lastUpdated = new Date().toISOString().split("T")[0];

      Storage.set("jobs", AppState.jobs);
      logAuditAction("job_expired", `Job: ${job.title}`);
      showToast("Job marked as expired", "info");
      handleRoute();
      return false;
    }
  });
}

function adminRemoveJob(jobId) {
  const job = AppState.jobs.find(j => j.id === jobId);
  if (!job) return;

  showAccessibleDialog({
    title: "Permanently Remove Job Listing",
    contentHtml: `<p>Are you sure you want to completely remove <strong>${escapeHtml(job.title)}</strong>? This cannot be undone.</p>`,
    confirmText: "Delete Permanently",
    confirmClass: "btn-danger",
    onConfirm: () => {
      AppState.jobs = AppState.jobs.filter(j => j.id !== jobId);
      Storage.set("jobs", AppState.jobs);
      logAuditAction("job_removed", `Job: ${job.title} (${jobId})`);
      showToast("Job permanently removed", "info");
      handleRoute();
      return false;
    }
  });
}

function adminEditJob(jobId) {
  const job = AppState.jobs.find(j => j.id === jobId);
  if (!job) return;

  const contentHtml = `
    <div class="form-group">
      <label for="admin-edit-title" class="form-label">Title</label>
      <input type="text" id="admin-edit-title" class="form-input" value="${escapeHtml(job.title)}">
    </div>
    <div class="form-group">
      <label for="admin-edit-employer" class="form-label">Employer Name</label>
      <input type="text" id="admin-edit-employer" class="form-input" value="${escapeHtml(job.employerName)}">
    </div>
    <div class="form-group">
      <label for="admin-edit-town" class="form-label">Town</label>
      <input type="text" id="admin-edit-town" class="form-input" value="${escapeHtml(job.locationTown)}">
    </div>
    <div class="form-group">
      <label for="admin-edit-status" class="form-label">Status</label>
      <select id="admin-edit-status" class="form-select">
        <option value="approved" ${job.status === "approved" ? "selected" : ""}>Approved</option>
        <option value="pending" ${job.status === "pending" ? "selected" : ""}>Pending</option>
        <option value="rejected" ${job.status === "rejected" ? "selected" : ""}>Rejected</option>
        <option value="closed" ${job.status === "closed" ? "selected" : ""}>Closed</option>
      </select>
    </div>
  `;

  showAccessibleDialog({
    title: "Admin Edit Job",
    contentHtml: contentHtml,
    confirmText: "Save Changes",
    onConfirm: () => {
      job.title = document.getElementById("admin-edit-title").value.trim() || job.title;
      job.employerName = document.getElementById("admin-edit-employer").value.trim() || job.employerName;
      job.locationTown = document.getElementById("admin-edit-town").value.trim() || job.locationTown;
      job.status = document.getElementById("admin-edit-status").value;
      job.lastUpdated = new Date().toISOString().split("T")[0];

      Storage.set("jobs", AppState.jobs);
      logAuditAction("job_edited_by_admin", `Job: ${job.title}`);
      showToast("Job updated by admin", "success");
      handleRoute();
      return false;
    }
  });
}

function adminMarkReportReviewed(reportId) {
  const rep = AppState.reports.find(r => r.id === reportId);
  if (rep) {
    rep.status = "reviewed";
    Storage.set("reports", AppState.reports);
    logAuditAction("report_reviewed", `Report ID: ${reportId} for ${rep.jobTitle}`);
    showToast("Report marked as reviewed", "success");
    handleRoute();
  }
}

function adminAddArticle() {
  const contentHtml = `
    <div class="form-group">
      <label for="art-add-cat" class="form-label">Category <span class="required-mark">*</span></label>
      <select id="art-add-cat" class="form-select">
        ${GUIDANCE_CATEGORIES.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("")}
      </select>
    </div>
    <div class="form-group">
      <label for="art-add-title-en" class="form-label">Title (English) <span class="required-mark">*</span></label>
      <input type="text" id="art-add-title-en" class="form-input" required placeholder="e.g. How to Speak Confidently">
    </div>
    <div class="form-group">
      <label for="art-add-sum-en" class="form-label">Summary (English) <span class="required-mark">*</span></label>
      <textarea id="art-add-sum-en" class="form-textarea" rows="2" required placeholder="One sentence summary..."></textarea>
    </div>
    <div class="form-group">
      <label for="art-add-body-en" class="form-label">Body HTML/Text (English) <span class="required-mark">*</span></label>
      <textarea id="art-add-body-en" class="form-textarea" rows="4" required placeholder="<p>Practical steps...</p>"></textarea>
    </div>

    <hr style="margin: 1.5rem 0; border: none; border-top: 1px dashed var(--color-border);">
    <h3 style="font-size: 1rem; color: var(--color-blue-600); margin-bottom: 0.5rem;">Marathi Translation (Optional)</h3>
    <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.75rem;">If empty, English content will be shown with a translation note.</p>

    <div class="form-group">
      <label for="art-add-title-mr" class="form-label">Title (Marathi)</label>
      <input type="text" id="art-add-title-mr" class="form-input" placeholder="मराठी शीर्षक...">
    </div>
    <div class="form-group">
      <label for="art-add-sum-mr" class="form-label">Summary (Marathi)</label>
      <textarea id="art-add-sum-mr" class="form-textarea" rows="2" placeholder="मराठी सारांश..."></textarea>
    </div>
    <div class="form-group">
      <label for="art-add-body-mr" class="form-label">Body HTML/Text (Marathi)</label>
      <textarea id="art-add-body-mr" class="form-textarea" rows="3" placeholder="मराठी मजकूर..."></textarea>
    </div>
  `;

  showAccessibleDialog({
    title: "Add Career Guidance Article",
    contentHtml: contentHtml,
    confirmText: "Publish Article",
    onConfirm: () => {
      const cat = document.getElementById("art-add-cat").value;
      const titleEn = document.getElementById("art-add-title-en").value.trim();
      const sumEn = document.getElementById("art-add-sum-en").value.trim();
      const bodyEn = document.getElementById("art-add-body-en").value.trim();
      const titleMr = document.getElementById("art-add-title-mr").value.trim();
      const sumMr = document.getElementById("art-add-sum-mr").value.trim();
      const bodyMr = document.getElementById("art-add-body-mr").value.trim();

      if (!titleEn || !sumEn || !bodyEn) {
        showToast("English title, summary, and body are required.", "error");
        return true;
      }

      const newArt = {
        id: "art-" + Date.now(),
        category: cat,
        lastUpdated: new Date().toISOString().split("T")[0],
        titleEn: titleEn,
        summaryEn: sumEn,
        bodyEn: bodyEn,
        titleMr: titleMr,
        summaryMr: sumMr,
        bodyMr: bodyMr
      };

      AppState.guidance.unshift(newArt);
      Storage.set("guidance", AppState.guidance);
      logAuditAction("article_added", `Article: ${newArt.titleEn}`);
      showToast("Guidance article published!", "success");
      handleRoute();
      return false;
    }
  });
}

function adminEditArticle(id) {
  const art = AppState.guidance.find(a => a.id === id);
  if (!art) return;

  const contentHtml = `
    <div class="form-group">
      <label for="art-edit-title-en" class="form-label">Title (English)</label>
      <input type="text" id="art-edit-title-en" class="form-input" value="${escapeHtml(art.titleEn)}">
    </div>
    <div class="form-group">
      <label for="art-edit-sum-en" class="form-label">Summary (English)</label>
      <textarea id="art-edit-sum-en" class="form-textarea" rows="2">${escapeHtml(art.summaryEn)}</textarea>
    </div>
    <div class="form-group">
      <label for="art-edit-title-mr" class="form-label">Title (Marathi)</label>
      <input type="text" id="art-edit-title-mr" class="form-input" value="${escapeHtml(art.titleMr || "")}">
    </div>
    <div class="form-group">
      <label for="art-edit-sum-mr" class="form-label">Summary (Marathi)</label>
      <textarea id="art-edit-sum-mr" class="form-textarea" rows="2">${escapeHtml(art.summaryMr || "")}</textarea>
    </div>
  `;

  showAccessibleDialog({
    title: "Edit Article",
    contentHtml: contentHtml,
    confirmText: "Save Article",
    onConfirm: () => {
      art.titleEn = document.getElementById("art-edit-title-en").value.trim() || art.titleEn;
      art.summaryEn = document.getElementById("art-edit-sum-en").value.trim() || art.summaryEn;
      art.titleMr = document.getElementById("art-edit-title-mr").value.trim();
      art.summaryMr = document.getElementById("art-edit-sum-mr").value.trim();
      art.lastUpdated = new Date().toISOString().split("T")[0];

      Storage.set("guidance", AppState.guidance);
      logAuditAction("article_edited", `Article: ${art.titleEn}`);
      showToast("Article updated", "success");
      handleRoute();
      return false;
    }
  });
}

function adminDeleteArticle(id) {
  const art = AppState.guidance.find(a => a.id === id);
  if (!art) return;

  showAccessibleDialog({
    title: "Delete Guidance Article",
    contentHtml: `<p>Are you sure you want to delete article <strong>${escapeHtml(art.titleEn)}</strong>?</p>`,
    confirmText: "Delete Article",
    confirmClass: "btn-danger",
    onConfirm: () => {
      AppState.guidance = AppState.guidance.filter(a => a.id !== id);
      Storage.set("guidance", AppState.guidance);
      logAuditAction("article_deleted", `Article: ${art.titleEn}`);
      showToast("Article deleted", "info");
      handleRoute();
      return false;
    }
  });
}

function confirmResetDemoData() {
  showAccessibleDialog({
    title: "Reset Demo Data to Initial Defaults?",
    contentHtml: `
      <div class="alert alert-danger">
        <p><strong>Warning:</strong> This will delete all demo employers, job postings, external application records, reports, and restore the initial 12 sample jobs and 10 guidance articles.</p>
      </div>
      <p>Type <strong>RESET</strong> below to confirm:</p>
      <input type="text" id="reset-confirm-input" class="form-input" placeholder="RESET" style="margin-top: 8px;">
    `,
    confirmText: "Wipe and Restore Defaults",
    confirmClass: "btn-danger",
    onConfirm: () => {
      const input = document.getElementById("reset-confirm-input");
      if (!input || input.value.trim() !== "RESET") {
        showToast("You must type RESET to confirm data wipe.", "error");
        return true;
      }

      AppState.jobs = JSON.parse(JSON.stringify(INITIAL_SAMPLE_JOBS));
      AppState.guidance = JSON.parse(JSON.stringify(INITIAL_GUIDANCE_ARTICLES));
      AppState.savedJobIds = [];
      AppState.jobSeekerExternalApps = [];
      AppState.reports = [];
      AppState.auditLogs = [];

      Storage.set("jobs", AppState.jobs);
      Storage.set("guidance", AppState.guidance);
      Storage.set("savedJobs", []);
      Storage.set("externalApps", []);
      Storage.set("reports", []);
      Storage.set("auditLogs", []);

      logAuditAction("demo_reset", "All demo records reset to initial sample data");
      showToast("Demo data successfully reset to defaults.", "success");
      handleRoute();
      return false;
    }
  });
}

/* --------------------------------------------------------------------------
   8.10 Information Pages (About, Contact, Privacy, Terms)
   -------------------------------------------------------------------------- */
function renderAboutView(container) {
  const isMr = AppState.language === "mr";
  container.innerHTML = `
    <article class="card" style="max-width: 840px; margin: 0 auto; padding: 2.5rem 2rem;">
      <h1 class="view-title">${escapeHtml(t("nav_about"))}</h1>
      <p class="view-lead" style="margin-bottom: 2rem;">${escapeHtml(t("tagline"))}</p>

      <section style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
          ${isMr ? "प्रकल्पाची पार्श्वभूमी" : "Project Background & Mission"}
        </h2>
        <p style="margin-bottom: 1rem; line-height: 1.6;">
          YuvaConnect is a <strong>Community Engagement Project (CEP)</strong> developed by students of 
          <strong>SNJB College of Engineering (SNJB COE)</strong>, Chandwad, Nashik district, Maharashtra.
        </p>
        <p style="margin-bottom: 1rem; line-height: 1.6;">
          Our mission is to help unemployed people in Chandwad and across Nashik district 
          find genuine local job opportunities and gain practical workplace confidence through a simple, accessible website.
        </p>
      </section>

      <section style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
          ${isMr ? "हा प्रकल्प कोणासाठी आहे?" : "Who is YuvaConnect For?"}
        </h2>
        <ul style="padding-left: 1.5rem; line-height: 1.8;">
          <li>First-job college graduates and diploma holders</li>
          <li>School leavers and ITI technicians (machinists, fitters, wiremen)</li>
          <li>Agriculture and dairy farm helpers seeking seasonal or steady work</li>
          <li>Women and caregivers seeking to return to work near home</li>
          <li>Local retail shops, workshops, and small factories seeking trustworthy local workers</li>
        </ul>
      </section>

      <section>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-notice-text); margin-bottom: 0.75rem;">
          ${isMr ? "महत्त्वाची पारदर्शकता" : "Honesty & No-Guarantee Notice"}
        </h2>
        <div class="alert alert-warning">
          <p>
            <strong>YuvaConnect never claims to guarantee employment.</strong> It is an academic and community engagement bridge that connects job seekers to local openings and educational career readiness.
          </p>
          <p style="margin-top: 8px;">
            We strictly prohibit charging fees for jobs. If any employer asks you for money, report the listing immediately.
          </p>
        </div>
      </section>
    </article>
  `;
}

function renderContactView(container) {
  const isMr = AppState.language === "mr";
  const c = APP_SETTINGS.contact;

  container.innerHTML = `
    <div style="max-width: 820px; margin: 0 auto;">
      <div class="card" style="padding: 2.5rem 2rem;">
        <h1 class="view-title">${escapeHtml(t("nav_contact"))}</h1>
        <p class="view-lead" style="margin-bottom: 2rem;">
          ${isMr ? "आमच्या विद्यार्थी टीमशी संपर्क साधा." : "Get in touch with the SNJB COE Student Community Project team."}
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem;">
          <div style="background: var(--color-border-subtle); padding: 1.5rem; border-radius: var(--radius-card); border-left: 4px solid var(--color-blue-600);">
            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;" aria-hidden="true">✉️</div>
            <h2 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem;">Email Us</h2>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 0.5rem;">For feedback and queries</p>
            <a href="mailto:${escapeHtml(c.email)}" class="btn btn-outline btn-sm">${escapeHtml(c.email)}</a>
          </div>

          <div style="background: var(--color-border-subtle); padding: 1.5rem; border-radius: var(--radius-card); border-left: 4px solid var(--color-blue-600);">
            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;" aria-hidden="true">📞</div>
            <h2 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem;">Phone / WhatsApp</h2>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 0.5rem;">Direct contact</p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <a href="tel:${escapeHtml(c.phone)}" class="btn btn-outline btn-sm">📞 Call ${escapeHtml(c.phone)}</a>
              <a href="${escapeHtml(c.whatsappUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">💬 WhatsApp</a>
            </div>
          </div>
        </div>

        <section>
          <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
            Institutional Affiliation
          </h2>
          <p><strong>Organisation:</strong> ${escapeHtml(c.college)}</p>
          <p><strong>Location:</strong> ${escapeHtml(c.address)}</p>
          <p style="margin-top: 8px; color: var(--color-text-muted); font-size: 0.95rem;">
            Project developed by students as part of the Community Engagement course curriculum.
          </p>
        </section>
      </div>
    </div>
  `;
}

function renderPrivacyView(container) {
  container.innerHTML = `
    <article class="card" style="max-width: 840px; margin: 0 auto; padding: 2.5rem 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
        <h1 class="view-title" style="margin-bottom: 0;">Privacy Policy</h1>
        <span class="badge badge-pending">Draft: review before public launch</span>
      </div>
      <p style="color: var(--color-text-muted); margin-bottom: 2rem;">Last Updated: October 2026</p>

      <section style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
          1. Local-Only Demonstration Storage
        </h2>
        <p style="line-height: 1.6;">
          In this prototype version of YuvaConnect, all information entered into forms (including your name, phone number, 
          job preferences, tracked applications, and employer job drafts) is stored <strong>strictly within your own web browser's localStorage</strong>.
        </p>
        <p style="margin-top: 8px; line-height: 1.6;">
          No data is transmitted over the internet, uploaded to any cloud server, or shared with third-party tracking companies.
        </p>
      </section>

      <section style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
          2. No Cookies & No Tracking Analytics
        </h2>
        <p style="line-height: 1.6;">
          YuvaConnect uses plain HTML, CSS, and JavaScript. We do not use advertising trackers, Google Analytics cookies, 
          or commercial marketing scripts.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
          3. Data Clearing
        </h2>
        <p style="line-height: 1.6;">
          You can clear your stored data at any time by clearing your browser cache/cookies, or by visiting the simulated 
          Admin dashboard and clicking "Reset Demo Data".
        </p>
      </section>
    </article>
  `;
}

function renderTermsView(container) {
  container.innerHTML = `
    <article class="card" style="max-width: 840px; margin: 0 auto; padding: 2.5rem 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
        <h1 class="view-title" style="margin-bottom: 0;">Terms of Service</h1>
        <span class="badge badge-pending">Draft: review before public launch</span>
      </div>
      <p style="color: var(--color-text-muted); margin-bottom: 2rem;">Last Updated: October 2026</p>

      <section style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
          1. Academic & Community Non-Profit Nature
        </h2>
        <p style="line-height: 1.6;">
          YuvaConnect is an educational, non-commercial community engagement project created by students of SNJB COE. It is provided "as-is" 
          to assist local youth in discovering job openings.
        </p>
      </section>

      <section style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
          2. Absolute Prohibition of Fees
        </h2>
        <p style="line-height: 1.6;">
          Neither YuvaConnect nor genuine employers registered with us are permitted to demand money, processing charges, or deposits 
          from job seekers. Any party doing so will be blacklisted.
        </p>
      </section>

      <section style="margin-bottom: 2rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
          3. No Guarantee of Employment
        </h2>
        <p style="line-height: 1.6;">
          YuvaConnect cannot and does not guarantee that any applicant will receive an interview, an offer, or employment. 
          Hiring decisions rest solely between the applicant and the independent employer.
        </p>
      </section>

      <section>
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy-900); margin-bottom: 0.75rem;">
          4. Review Limitation
        </h2>
        <p style="line-height: 1.6;">
          Admin reviews verify that job postings comply with format and non-fee policies. An admin review 
          <strong>does not guarantee</strong> that an employer or job post is authentic or financially viable. 
          Job seekers are urged to verify details independently before visiting unfamiliar premises.
        </p>
      </section>
    </article>
  `;
}

/* ==========================================================================
   SECTION 9: EVENT HANDLERS & TAB HELPERS
   ========================================================================== */

function setupTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetPanelId = btn.getAttribute("aria-controls");
      activateTab(btn.id, targetPanelId);
    });
  });
}

function activateTab(btnId, panelId) {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabBtns.forEach(btn => {
    if (btn.id === btnId) {
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
    } else {
      btn.classList.remove("is-active");
      btn.setAttribute("aria-selected", "false");
    }
  });

  tabPanels.forEach(panel => {
    if (panel.id === panelId) {
      panel.classList.add("is-active");
    } else {
      panel.classList.remove("is-active");
    }
  });
}

function bindGlobalHeaderEvents() {
  // 4.2 Language Toggle Button: shows the OTHER language
  const langToggleBtn = document.getElementById("btn-lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const nextLang = AppState.language === "en" ? "mr" : "en";
      setLanguage(nextLang);
    });
  }

  // 4.1 Role Switcher in Top Bar
  const roleSelect = document.getElementById("demo-role-select");
  if (roleSelect) {
    roleSelect.value = AppState.role;
    roleSelect.addEventListener("change", (e) => {
      const newRole = e.target.value;
      AppState.role = newRole;
      Storage.set("role", newRole);
      updateHeaderNavState();
      logAuditAction("role_changed", `Switched to role: ${newRole}`);
      showToast(`Role switched to: ${newRole.toUpperCase()}`, "info");
      handleRoute();
    });
  }

  // Mobile Hamburger Menu Toggle
  const menuBtn = document.getElementById("menu-toggle-btn");
  const siteNav = document.getElementById("primary-navigation");
  if (menuBtn && siteNav) {
    menuBtn.addEventListener("click", () => {
      const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!isExpanded));
      siteNav.classList.toggle("is-open", !isExpanded);

      const openIcon = menuBtn.querySelector(".menu-open-icon");
      const closeIcon = menuBtn.querySelector(".menu-close-icon");
      if (openIcon && closeIcon) {
        openIcon.style.display = isExpanded ? "block" : "none";
        closeIcon.style.display = isExpanded ? "none" : "block";
      }
    });

    siteNav.addEventListener("click", (e) => {
      if (e.target.tagName === "A" || e.target.closest("a")) {
        siteNav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        const openIcon = menuBtn.querySelector(".menu-open-icon");
        const closeIcon = menuBtn.querySelector(".menu-close-icon");
        if (openIcon && closeIcon) {
          openIcon.style.display = "block";
          closeIcon.style.display = "none";
        }
      }
    });
  }

  window.addEventListener("hashchange", handleRoute);
}

function setLanguage(lang) {
  AppState.language = lang;
  Storage.set("lang", lang);
  document.documentElement.lang = lang;

  // Update button label to show OTHER language
  const btnText = document.getElementById("lang-btn-text");
  if (btnText) {
    btnText.textContent = lang === "en" ? "मराठी" : "English";
  }

  // Translate static data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });

  handleRoute();
  announceToScreenReader(lang === "mr" ? "भाषा मराठी केली आहे" : "Language set to English");
}

/* ==========================================================================
   SECTION 10: INIT
   Load data from localStorage or defaults, initialize state, and mount router.
   ========================================================================== */

function initApp() {
  const storedJobs = Storage.get("jobs", null);
  if (storedJobs && Array.isArray(storedJobs)) {
    AppState.jobs = storedJobs;
  } else {
    AppState.jobs = JSON.parse(JSON.stringify(INITIAL_SAMPLE_JOBS));
    Storage.set("jobs", AppState.jobs);
  }

  const storedGuidance = Storage.get("guidance", null);
  if (storedGuidance && Array.isArray(storedGuidance)) {
    AppState.guidance = storedGuidance;
  } else {
    AppState.guidance = JSON.parse(JSON.stringify(INITIAL_GUIDANCE_ARTICLES));
    Storage.set("guidance", AppState.guidance);
  }

  AppState.savedJobIds = Storage.get("savedJobs", []);
  AppState.jobSeekerProfile = Storage.get("jobSeekerProfile", AppState.jobSeekerProfile);
  AppState.jobSeekerExternalApps = Storage.get("externalApps", []);
  AppState.employerProfile = Storage.get("employerProfile", AppState.employerProfile);
  AppState.reports = Storage.get("reports", []);
  AppState.auditLogs = Storage.get("auditLogs", []);

  if (AppState.auditLogs.length === 0) {
    logAuditAction("system_initialized", "YuvaConnect loaded with sample datasets");
  }

  bindGlobalHeaderEvents();
  setLanguage(AppState.language);

  if (!window.location.hash) {
    window.location.hash = "#/home";
  } else {
    handleRoute();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
