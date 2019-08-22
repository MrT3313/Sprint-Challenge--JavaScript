// 1. Copy and paste your prototype in here and refactor into class syntax.

// -- Prototypal -- //
// function CuboidMaker(cuboid_attrs) {
    // this.length = cuboid_attrs.length;
    // this.width = cuboid_attrs.width;
    // this.height = cuboid_attrs.height;
// } 

// -- *** -- //
// -- *** -- //
    class Class_CuboidMaker {
        constructor(cuboid_attrs) {
            this.length = cuboid_attrs.length;
            this.width = cuboid_attrs.width;
            this.height = cuboid_attrs.height;
        }

        class_getVolumn() {
            return this.length * this.height * this.width
        }
        class_getSurfaceArea() {
            return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
        }
    }

    const classCuboid = new Class_CuboidMaker({
        length: 4,
        width: 5,
        height: 5
    })

// -- *** -- //
// -- *** -- //

// Test your volume and surfaceArea methods by uncommenting the logs below:
    console.log(classCuboid.class_getVolumn()); // 100
    console.log(classCuboid.class_getSurfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.