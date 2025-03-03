/*

The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. The three medians of a triangle intersect at the same point, called the barycenter or the centroid. Given a triangle, defined by the cartesian coordinates of its vertices, we need to localize its barycenter or centroid.

Your function receives the coordinates of the three vertices A, B and C  as three different arguments and outputs the coordinates of the barycenter O, rounded to 4 decimals, in an array [xO, yO].

You know that the coordinates of the barycenter are given by the following formulas:

x
O
=
x
A
+
x
B
+
x
C
3
y
O
=
y
A
+
y
B
+
y
C
3
x 
O
​
 = 
3
x 
A
​
 +x 
B
​
 +x 
C
​
 
​
 
y 
O
​
 = 
3
y 
A
​
 +y 
B
​
 +y 
C
​
 
​
 
The given points form a real or a degenerate triangle but in each case the above formulas can be used.

For additional information about this important point of a triangle see at: (https://en.wikipedia.org/wiki/Centroid)

Let's see some cases:

([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]

([4, 2], [12, 2], [6, 10]) ------> [7.3333, 4.6667]
Enjoy it and happy coding!!


*/


function barTriang(p1, p2, p3){
    //your code here
  //   let x0,y0,xA,xB,xC,yA,yB,yC
   let   x0 = (p1[0]+p2[0]+p3[0])/3
   let  y0 = (p1[1]+p2[1]+p3[1])/3
   return [parseFloat(x0.toFixed(4)),parseFloat(y0.toFixed(4))]
  }
  console.log(barTriang( [4, 6], [12, 4], [10, 10]))