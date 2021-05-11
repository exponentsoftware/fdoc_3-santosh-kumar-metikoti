const student = {
    name: "David",
    age: 25,
    skills: {
      frontEnd: [
        { skill: "HTML", level: 10 },
        { skill: "CSS", level: 8 },
        { skill: "JS", level: 8 },
        { skill: "React", level: 9 },
      ],
      backEnd: [
        { skill: "Node", level: 7 },
        { skill: "GraphQL", level: 8 },
      ],
      dataBase: [{ skill: "MongoDB", level: 7.5 }],
      dataScience: ["Python", "R", "D3.js"],
    },
  };
  
  let student_keys_length = Object.keys(newStudent);
  let student_values_length = Object.values(newStudent);  
  let student_skills_keys_length = Object.keys(newStudent.skills);


  console.log( ` student keys length : ${student_keys_length.length}`);
  console.log( `student values length : ${student_values_length.length}`);
  console.log(`student skills length : ${student_skills_keys_length.length}`);


  if (Object.keys(newStudent) !== "graphicDesign") 
    {
        console.log("Nope");
    } 
  else {
    console.log("property exists");
    }
  


  console.log(Object.keys(newStudent));