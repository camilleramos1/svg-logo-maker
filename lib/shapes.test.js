const {Square, Triangle, Circle} = require('./shapes');

describe('Square', () => {
    it('should render a blue square with yellow text', () => {
        const dummySquare = new Square("blue", "svg", "yellow")
        const renderedShape = `<svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="blue"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="yellow">svg</text>
        </svg>`;
        expect(dummySquare.render()).toBe(renderedShape);
    })
});

describe('Triangle', () => {
    it('should render a blue triangle with yellow text', () => {
        const dummyTriangle = new Triangle("blue", "svg", "yellow")
        const renderedShape = `<svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="yellow">svg</text>
        </svg>`;
        expect(dummyTriangle.render()).toBe(renderedShape);
    })
});

describe('Circle', () => {
    it('should render a blue circle with yellow text', () => {
        const dummyCircle = new Circle("blue", "svg", "yellow")
        const renderedShape = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="blue" />
        <text x="125" y="125" font-size="70" text-anchor="middle" fill="yellow">svg</text>
        </svg>`;
        expect(dummyCircle.render()).toBe(renderedShape);
    })
});
