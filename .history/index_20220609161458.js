const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function reducer(previous, current, index, batteryBatches) {
    const sum = previous + current;
    console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
    return sum;
  }
  
  batteryBatches.reduce(reducer);

  