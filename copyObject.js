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
  
  const newStudent = Object.assign({}, student);
  newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
  newStudent.skills.frontEnd.push({ skill: "SQL", level: 8 });
  newStudent.skills.backEnd.push({ skill: "SQL", level: 9 });
  newStudent.skills.dataScience.push({ skill: "SQL"});
  console.log(newStudent);
  console.table(newStudent.skills.frontEnd)
  //console.table(student);