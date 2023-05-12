// // WHEN I open the `logo.svg` file in a browser
// // THEN I am shown a 300x200 pixel image that matches the criteria I entered

function createSvg(data) {
    if (`${data.shape}` === "circle") {
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

module.exports = createSvg