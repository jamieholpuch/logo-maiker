//create shape class with parameters that the shapes can inherit
class Shape {
    constructor(height, width, fill){
    this.height = height
    this.width = width
    this.fill = fill
}
}

class Circle extends Shape {
    constructor(height, width, fill, cx, cy, r)
    super(height, width, fill)
    this.cx = cx
    this.cy = cy
    this.radius = r
}

class Square extends Shape {
    constructor(height, width, fill, x, y)
    super(height, width, fill)
    this.x = x
    this.y = y
}

class Triangle extends Shape {
    constructor(height, width, fill, points)
    super(height, width, fill)
    this.points = points
}

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
}
  
  // TODO: Create a new object using the Comment class constructor.
  
  const newComment = new Comment('Jamie', 'Hello', '5/1/23', 'wow')
  
  // TODO: Create a new object using the BlogPost class constructor.
  
  const newPost = new BlogPost('John', 'This is my post', '5/1/23', 'Post One')
  
  // TODO: Log both newly created BlogPost and Comment to the console.
  console.log(newComment);
  console.log(newPost);

  <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
