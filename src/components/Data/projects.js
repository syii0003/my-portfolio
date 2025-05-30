import resume from "../../assets/images/projects/resume.svg";
import covid19 from "../../assets/images/projects/covid19.svg";
import burger from "../../assets/images/projects/burger.svg";
import house from "../../assets/images/projects/house.svg";
import search from "../../assets/images/projects/search.svg";

/* Color palettes
 * https://coolors.co/gradient-palette/ff1900-f9bc2c?number=7
 * 
 * Data formate
{
  title: "",
  backgroundStyle: {backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)"},
  image: Object,
  imageTitle: "",
  labels: [{name: "React", color: "#4880EC"}],
  content: ["", "", ""],
  button: [{name: "Demo", link: "", style: {}, color: ""]
}
*/
export default [
  {
  title: "AI exploring",
  backgroundStyle: {backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)"},
  image: house,
  imageTitle: "",
    labels: [
      { name: "n8n ai workflows", color: "#07C8F9" },
      { name: "MCP", color: "#F57F50" },
      { name: "llms", color: "#000000" },
      { name: "cherry studio", color: "#48525E" },
      { name: "AI coding", color: "#D63AFE" },
      { name: "AI products", color: "#254CE2" },
    ],
  content: ["", "", ""],
  button: [{name: "Demo", link: "", style: {}, color: ""}],
},
  {
    title: "Risk Sensing",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #438AEE, #00bbf9)",
    },
    image: search,
    imageTitle: "Frontend",
    labels: [
      { name: "Rag", color: "#07C8F9" },
      { name: "multi agents", color: "#F57F50" },
      { name: "azure openai", color: "#000000" },
      { name: "cross devices", color: "#E44D27" },
      { name: "llm", color: "#48525E" },
    ],
    content: [
      "A risk sensing product based on langgraph and rag",
      // "Responsive design (map/table) to fit the different screen sizes.",
    ],
    button: [
      {
        name: "Demo",
        //link: "https://stevechanvii.github.io/cov-19/",
        style: "btn__effect-left-view",
        color: "#30559D",
      },
      {
        name: "GitHub",
        //link: "https://github.com/stevechanvii/cov-19",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
  {
    title: "ThomasYee Portfolio",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #ff7e5f, #feb47b)",
    },
    image: resume,
    imageTitle: "Frontend",
    labels: [
      { name: "React", color: "#07C8F9" },
      { name: "Three.js", color: "#8055AA" },
      { name: "SCSS", color: "#D77EAB" },
      { name: "Netlify", color: "#E00298" },
      { name: "SVG", color: "#E7A522" },
    ],
    content: [
      "My portfolio developed by React framework with Three.js.",
      "Responsive design by SCSS framework with beautiful animation.",
      "Deployed in Netlify.",
    ],
    button: [
      {
        name: "Demo",
        link: "https://thomasyee.netlify.app/",
        style: "btn__effect-left-view",
        color: "red",
      },
      {
        name: "GitHub",
        link: "https://github.com/syii0003/my-portfolio",
        style: "btn__effect-left-git",
        color: "#FF875F",
      },
    ],
  },
  // {
  //   title: "Burger Builder",
  //   backgroundStyle: {
  //     backgroundImage: "linear-gradient(to right bottom, #4568DC, #B06AB3)",
  //   },
  //   image: burger,
  //   imageTitle: "Frontend",
  //   labels: [
  //     { name: "React", color: "#07C8F9" },
  //     { name: "Redux", color: "#6B46A9" },
  //     { name: "Firebase", color: "#FCCB2E" },
  //     { name: "JEST", color: "#18C212" },
  //     { name: "JWT", color: "#D63AFE" },
  //     { name: "CSS3", color: "#254CE2" },
  //   ],
  //   content: [
  //     "Customize your burger and order! This App is created by React and Redux framework.",
  //     "Firebase is used to Token authentication and save orders.",
  //     "Deployed in Firebase.",
  //   ],
  //   button: [
  //     {
  //       name: "Demo",
  //       //link: "https://myburger-7c866.firebaseapp.com/",
  //       style: "btn__effect-left-view",
  //       color: "#4A56D0",
  //     },
  //     {
  //       name: "GitHub",
  //       style: "btn__effect-left-git",
  //       color: "#6A5CC7",
  //     },
  //   ],
  // },
  // {
  //   title: "Job Seeker",
  //   backgroundStyle: {
  //     backgroundImage: "linear-gradient(to right bottom, #456fe8, #19b0ec)",
  //   },
  //   image: search,
  //   imageTitle: "Full Stack",
  //   labels: [
  //     { name: "JavaEE Web", color: "#217EC3" },
  //     { name: "JSP", color: "#067790" },
  //     { name: "MySQL", color: "#01758F" },
  //     { name: "HTML5", color: "#E44D27" },
  //     { name: "JavaScript", color: "#F1DA1C" },
  //   ],
  //   content: [
  //     "A job-seeking website for both seeker and recruiter.",
  //     "Worked as the primary developer and system architect, and led the completion of the recruitment system by Java Web.",
  //   ],
  //   button: [
  //     {
  //       name: "GitHub",
  //       //link: "https://github.com/stevechanvii/OJSS",
  //       style: "btn__effect-left-git",
  //       color: "#3C6BC5",
  //     },
  //   ],
  // },
  // {
  //   title: "Greenability",
  //   backgroundStyle: {
  //     backgroundImage: "linear-gradient(to right bottom,  #FFBF0F, #FFDA3C)",
  //   },
  //   image: house,
  //   imageTitle: "Web",
  //   labels: [
  //     { name: "HTML5", color: "#E44D27" },
  //     { name: "JavaScript", color: "#D77EAB" },
  //     { name: "SVG", color: "#E7A522" },
  //     { name: "GitHub", color: "#000000" },
  //   ],
  //   content: [
  //     "Programed a learning project with pure HTML5 and advanced CSS(SCSS) to implement beautiful design and animation.",
  //     "Use SVG and Font Awesome to make the graph looking nicer.",
  //   ],
  //   button: [
  //     {
  //       name: "Demo",
  //       //link: "https://stevechanvii.github.io/RealProperty/index.html",
  //       style: "btn__effect-left-view",
  //       color: "#FFA70A",
  //     },
  //     {
  //       name: "GitHub",
  //       // link: "https://github.com/stevechanvii/RealProperty",
  //       style: "btn__effect-left-git",
  //       color: "#FFBC1E",
  //     },
  //   ],
  // },
];
