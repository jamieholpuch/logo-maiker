// // WHEN I open the `logo.svg` file in a browser
// // THEN I am shown a 300x200 pixel image that matches the criteria I entered

function createSvg(data) {
    if (data.shape === "circle") {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <${data.shape} cx="100" cy="100" r="80" fill="${data.shapeColor}" />
        <text x="100" y="118" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`
    } else if (`${data.shape}` === "square") {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="" width="150" height="150" fill="${data.shapeColor}" />
                <text x="126" y="100" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
            </svg>`
    } else if (`${data.shape}` === "triangle") {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="250,100 100,400 400,400" class="${data.shape}" fill="${data.shapeColor}" />
            <text x="250" y="175" font-size="30" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </svg>`
    } else {
    return "Could not define shape"
}};

module.exports = createSvg;











// const shapes = require("./lib/shapes.js")

// newCircle = new Circle("300", "200", "${data.shapeColor}", "200", "200", "100")

// function createSvg(data) {
//     return Circle.render(data)
// };

// // const newComment = new Comment('Jamie', 'Hello', '5/1/23', 'wow')
  
// // // TODO: Create a new object using the BlogPost class constructor.

// // const newPost = new BlogPost('John', 'This is my post', '5/1/23', 'Post One')

// // // TODO: Log both newly created BlogPost and Comment to the console.
// // console.log(newComment);
// // console.log(newPost);

// // <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

// // <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
// // <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

// // <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
// // <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

// // <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
// // <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
// //     stroke="orange" fill="transparent" stroke-width="5"/>

// // <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
// //     stroke="green" fill="transparent" stroke-width="5"/>

// // <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
// // </svg> 

// module.exports = createSvg;