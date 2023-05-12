// const { Square, Triangle, Circle } = require("./shapes");

const createSvg = require("./createSvg");
const init = require("../index");

describe('createSvg', () => {
    // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
    // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
    describe('circle', () => {
      it('should render a green circle logo with white text', () => {
        const expectedSvg = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <circle cx="100" cy="100" r="80" fill="green" /> <text x="100" y="118" font-size="60" text-anchor="middle" fill="white">jch</text> </svg>;'
        const logo = new createSvg();
        expect(logo.render()).toEqual(expectedSvg);
      });
    });
  });

  describe('createSvg', () => {
    // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
    // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
    describe('square', () => {
      it('should render a green square logo with white text', () => {
        const expectedSvg = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="" width="150" height="150" fill="green" /><text x="126" y="100" font-size="60" text-anchor="middle" fill="white">jch</text></svg>'
        const logo = new createSvg();
        expect(logo.render()).toEqual(expectedSvg);
      });
    });
  });

  describe('createSvg', () => {
    // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
    // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
    describe('triangle', () => {
      it('should render a green triangle logo with white text', () => {
        const expectedSvg = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="250,100 100,400 400,400" class="triangle" fill="green" /><text x="250" y="175" font-size="30" text-anchor="middle" fill="white">jch</text></svg>'
        const logo = new createSvg();
        expect(logo.render()).toEqual(expectedSvg);
      });
    });
  });


// describe("Logo", () => {
//     describe('circle', () => {
//         it('should render svg for green circle', () = {
//             const expectedSvg = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="100" cy="100" r="80" fill="green" />
//             <text x="100" y="118" font-size="60" text-anchor="middle" fill="white">jch</text>
//         </svg>;'
//             const circle = new createSvg()
//             const actualSvg = circle.render();
//             expect(circle.circle(green)).toEqual(expectedSvg);
//     });
//     test()
// }

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');