// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
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
import mraLogo1 from './assets/project_logo/mra1.png';
import mraLogo2 from './assets/project_logo/mra2.png';
import chatifyLogo1 from './assets/project_logo/chatify1.png';
import chatifyLogo2 from './assets/project_logo/chatify2.png';
import resumeBuilderLogo from './assets/project_logo/resumebuilder.png';

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
      school: "Jogesh chandra chaudhuri College, Kolkata",
      date: "2021 - 2024",
      grade: "9.107 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from Jogesh Chandra Chaudhuri College, Kolkata. Throughout the B.Sc. course, I was immersed in a variety of subjects from exploring Data Structures and Algorithms to diving into Web Development, Machine learning.",
      degree: "B.Sc Honours in Computer Science",
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
    result:"https://drive.google.com/file/d/1748qvQk8NKPiesBrwRLyVTVmA0sxRGqq/view?usp=drive_link"
  }
  
];  


 export const projects = [
    {
      id: 0,
      title: "Movie review Analyzer",
      description:
        "A powerful movie review analyzer that utilizes NLTK for sentiment analysis and MongoDB for data storage. Built with Flask, this application allows users to analyze movie reviews and gain insights into audience sentiments.",
      image: mraLogo2,
      tags: ["NLTK","Python","Flask","MongoDB","HTML", "CSS"],
      github: "https://github.com/SattikBhowmick25/Movie-Review-Analyzer",
      webapp: "https://drive.google.com/file/d/1z3pZwk1seVztYvb9cIL9jriQv6-XOQhX/view?usp=drive_link",
    },
    {
      id: 1,
      title: "Resume Builder",
      description:
        "A user-friendly resume builder that allows users to create and download professional resumes. Built with HTML, CSS, and JavaScript, it features a clean design and easy-to-use interface. Offers several resume templates and customization options.",
      image: resumeBuilderLogo,
      tags: ["HTML", "CSS", "JavaScript","Cropper.js"],
      github: "https://github.com/SattikBhowmick25/resume-builder",
      webapp: "https://sattikbhowmick25.github.io/resume-builder/",
    },
    {
      id: 2,
      title: "Chatify Chatbot",
      description:
        "A chatbot application that utilizes the OpenAI API to provide users with a conversational AI experience. Built with HTML, CSS, and JavaScript, it features a user-friendly interface and real-time chat capabilities.",
      image: chatifyLogo1,
      tags: ["API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/SattikBhowmick25/Chatify-Chatbot",
      webapp: "https://sattikbhowmick25.github.io/Chatify-Chatbot/",
    }
];  