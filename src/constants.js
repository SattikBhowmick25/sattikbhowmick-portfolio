// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';



// Education Section Logo's
import juLogo from './assets/education_logo/ju.jpg';
import jccLogo from './assets/education_logo/jcc.jpeg';
import jhsLogo from './assets/education_logo/jhs.png';

// Project Section Logo's


// Achievements section
import jecaLogo from './assets/achievements_logo/wbjeebLogo.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

  
export const education = [
    {
      id: 0,
      img: juLogo,
      school: "Jadavpur University, Kolkata",
      date: "2024 - 2026",
      grade: "-",
      desc: "I am pursuing Master of Computer Aplication (MCA) from Jadavpur University. I have studied courses such as Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems etc which has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: jccLogo,
      school: "BSA College, Mathura",
      date: "2021 - 2024",
      grade: "9.107 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from Jogesh Chandra Chaudhuri College, Kolkata. Throughout the B.Sc. course, I was immersed in a variety of subjects from exploring Data Structures and Algorithms to diving into Web Development, Machine learning.",
      degree: "Bachelor of Science - B.Sc Honours in Computer Science",
    },
    {
      id: 2,
      img: jhsLogo,
      school: "Jadavpur High School, Kolkata",
      date: "2019 - 2021",
      grade: "90.2%",
      desc: "I completed my higher secondary education from Jadavpur High School, Kolkata, under the WBCHSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "WBCHSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: jhsLogo,
      school: "Jadavpur High School, Kolkata",
      date: "2013 - 2019",
      grade: "89.71%",
      desc: "I completed my secondary education from Jadavpur High School, Kolkata, under the WBBSE board",
      degree: "WBBSE(X) - 10th Grade",
    },
];


export const achievements = [
  {
    id: 0,
    title: "WBJECA'24 GMR-23",
    description:
      "WBJECA is state-level entrance examination for MCA in West Bengal.",
    image: jecaLogo,
    result:""
  }
  
];  