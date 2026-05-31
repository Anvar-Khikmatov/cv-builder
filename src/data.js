import mclovin from './assets/mclovin.jpg'
export { initialUser, initialWorkEntries, initialSchoolEntries, initialSkills, initialLangauges } 

const initialUser = {
    name: "McLovin",
    surname: "Fogell",
    email: "mclovin@hawaii.gov",
    phone: "(555) 555-1783",
    address: "Hawaii, HI",
    occupation: "Procurement Specialist",
    about: "Highly motivated and results-oriented procurement specialist with 1 year of experience in age-restricted retail environments. Proven ability to operate under pressure and maintain composure during law enforcement interactions.",
    avatar: mclovin
}

const initialWorkEntries = [
  {
    id: crypto.randomUUID(),
    role: "Procurement Specialist",
    company: "Fogell Independent Services",
    from: "2007-06",
    to: "Present",
    address: "Los Angeles, CA",
    description: "Designed and executed procurement strategies for age-restricted products. Demonstrated exceptional crisis management skills during high pressure civilian and law enforcement encounters.",
  },
  {
    id: crypto.randomUUID(),
    role: "Underage ID Consultant",
    company: "Self Employed",
    from: "2006-09",
    to: "2007-06",
    address: "San Diego, CA",
    description: "Provided strategic identity consulting for minors navigating restricted access environments. Maintained a 100% memorable client satisfaction rate.",
  },
]

const initialSchoolEntries = [
  {
    id: crypto.randomUUID(),
    school: "Abraham Lincoln High School",
    degree: "High School Diploma",
    from: "2004-09",
    to: "2007-06",
    address: "Los Angeles, CA",
    description: "Successfully completed core curriculum while managing an extensive social portfolio. Recognized for a landmark contribution to peer reputation management during senior year."
  }
]

const initialSkills = [
    {
      id: crypto.randomUUID(),
      category: "Programming Languages",
      skill: "Fake ID Forgery, Persuasion Scripting"
    },
    {
      id: crypto.randomUUID(),
      category: "Cloud Services",
      skill: "Hawaii DMV Database"
    },
    {
      id: crypto.randomUUID(),
      category: "Web Technologies",
      skill: "MySpace, AskJeeves"
    },
    {
      id: crypto.randomUUID(),
      category: "Databases",
      skill: "Local Liquor Store Inventory"
    },
  ]  

const initialLangauges = [
  {
    id: crypto.randomUUID(),
    lang: "Hawaiian"
  },
  {
    id: crypto.randomUUID(),
    lang: "Gibberish"
  },
  {
    id: crypto.randomUUID(),
    lang: "Silence"
  },
]  