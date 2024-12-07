function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// Solution 1: Using Readonly<T>
function printCoordReadonly(pt: Readonly<{ x: number; y: number }>) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// Solution 2: Using strictNullChecks
function printCoordStrict(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

//Solution 3: Using interface
interface Coordinate {
  x: number;
  y: number;
}

function printCoordInterface(pt:Coordinate){
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7, z: 9 });
printCoordReadonly({ x: 3, y: 7, z: 9 }); // Throws error in strict mode
printCoordStrict({ x: 3, y: 7, z: 9 }); //Throws error in strict mode
printCoordInterface({ x: 3, y: 7, z: 9}); //Throws error in strict mode
