;
class Distance {
    // minVal:number;
    // maxVal:number;
    // getDistance = (points: Points): number=>{
    //     return points.maxVal - points.minVal;
    // };
    // constructor(points: Points){
    //     this.minVal=points.minVal;
    //     this.maxVal=points.maxVal;
    // }
    constructor(_minVal, maxVal) {
        this._minVal = _minVal;
        this.maxVal = maxVal;
    }
    set minVal(val) {
        // some security/authorization
        this._minVal = val;
    }
    get minVal() {
        return this._minVal;
    }
    getDistance() {
        return this.maxVal - this._minVal;
    }
    ;
    get distance() {
        return this.maxVal - this._minVal;
    }
    ;
}
let points = {
    maxVal: 54,
    minVal: 35
};
// const obj1 = new Distance(points);
const obj1 = new Distance(points.minVal, points.maxVal);
obj1.minVal = 24;
// obj1.setMInVal(24);
// obj1.getMinVal();
// obj1.maxVal=56;
let result = obj1.getDistance();
console.log(result);
result = obj1.distance;
console.log(result);
// const obj2 = new Distance();
// points = {
//     maxVal: 59,
//     minVal: 35
// }; 
// obj2.minVal=34;
// obj2.maxVal=56;
// result = obj2.getDistance();
// console.log(result);
