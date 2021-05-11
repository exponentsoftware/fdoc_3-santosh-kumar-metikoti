const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, scores] = student;

const convertArrayToObject = (a) => {
  a = new Map([["name", name],["skills", skills],["scores", scores],]);
  const obj = Object.fromEntries(a);
  console.log(obj);
};
convertArrayToObject(student);