const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const init = 0;
const sum = batteryBatches.reduce(
    (prevVal,curVal) => prevVal + curVal, init
);