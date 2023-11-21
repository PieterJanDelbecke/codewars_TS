const student = {
	name: "John",
	course: "none",
};

const genTechStudent = {
	course: "GenTech",
	start: "October",
};

const caStudent = {
	languages: ["Ruby", "Javascript"],
	speak: () => {
		console.log("I can do it");
	},
};

let John = Object.assign(student, genTechStudent, caStudent);
// console.log(John);
console.log(John.speak());
console.log(John.start);
// console.log(John);
// console.log(John);
