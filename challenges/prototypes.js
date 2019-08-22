/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

function CuboidMaker(cuboid_attrs) {
  this.length = cuboid_attrs.length;
  this.width = cuboid_attrs.width;
  this.height = cuboid_attrs.height;
} 

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given 
  cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/

CuboidMaker.prototype.getVolume = function() {
  console.log(this.length * this.width * this.height)
  return this.length * this.width * this.height
}

const newCuboid = new CuboidMaker({
  length: 1,
  width: 2,
  height: 3,
})

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/
  CuboidMaker.prototype.getSurfaceArea = function() {
    console.log(2 * (this.length * this.width + this.length * this.height + this.width * this.height))
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

const testCuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(testCuboid.getVolume()); // 100
console.log(testCuboid.getSurfaceArea()); // 130


