/*
Write a JavaScript program that computes the average marks of the following students. Then, 
this average is used to determine the corresponding grade.

Student Name	Marks
David	        80
Vinoth	        77
Divya	        88
Ishitha     	95
Thomas	        68
The grades are computed as follows :

Range	Grade
<60  	F
<70 	D
<80 	C
<90 	B
<100    A
*/
// function averageOfMarks(marks) {
function averageOfMarks(marks) {
    

if (marks<=60) {
    console.log(`grade is F`)
}
  else if (marks<=70) {
    console.log(`grade id D`)
    } 
   else if (marks<=80){
    console.log(`grade is C`)
    }
   else if (marks<=90){
    console.log(`grade is B`)
    }
   else if (marks<=100){
    console.log(`grade is A`)
    }

}
averageOfMarks(65)


