class Rectangle {
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width * this.height;
        return area;

    }
    paint(){
        console.log(`painting with color ${this.color}`);
    }
}
const rect = new Rectangle(2,4,"red");
// console.log(rect.width);
const area = rect.area();
rect.paint();
console.log(area)