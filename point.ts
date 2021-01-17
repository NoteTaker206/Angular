
//created a module to use class externally - **lesson 10
export class Point {
    //access modifiers prevent data to be modifed from outside
    //-encapsulation
    //by default members are public

    //parameters are optional from ?
    // use camal case with _ to use x and y fields instead
    //of capitilizing them
    constructor(private _x?: number, private _y?: number){
        //access modifier in parameter does below automatically
        // this.x = x;
        // this.y = y;
    }
    draw(){
        console.log('X: '+ this.x + 'Y: ' + this.y);
    }
    getDistance(another: Point){

    }
    //this provides access to intellisense now
    get x() {
        return this.x;
    }
    //this provides access to intellisense now
    set x(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this.x = value;
    }

}