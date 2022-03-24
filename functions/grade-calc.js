// obtMarks, totalMarks
// A 90-100, B 80-89, C 70-79, D 60-69, F less than 60
// You got C [75%]

let gradeCalculator = function(totalMarks = 100 , obtMarks = 90) {


 const grade = obtMarks/totalMarks * 100;

 
 if(grade >=90 && grade <=100){
     

console.log('You have scored an "A" grade and your marks are ' +grade+'%')
 }

 else{
     console.log('You scored an "F" grade and your marks are less than 60')
 }

}

const myMarks = gradeCalculator(100, 55)
