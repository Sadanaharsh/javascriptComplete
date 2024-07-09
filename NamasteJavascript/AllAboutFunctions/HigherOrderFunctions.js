
// A function which takes another function as an argument or return the other function is known as the higher order function.

// suppose we want to calculate diameter, circumference and the Area of the circle, we will make just one function which will calculate in the optimized way.

const radius = [3,1,2,4];

const area = function (radius){
    return MATH.PI * radius * radius;
}

const circumference = function (radius){
    return 2*MATH.PI*radius;
}

const diameter = function (radius) {
    return 2*radius;
}

const calculate = function (radius, logic){

    const ans = [];

    for(let i = 0; i<radius.length; i++){
        ans.push(logic(radius[i]));
    }

    return ans;
}

console.log(calculate(radius, area));

// Our calculate function is working as the same way as the map.

console.log(radius.map(area));  // same output as calculating the area.
