const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function reducer(previous, current, index, array) {
    const returns = previous + current;
    console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
    return returns;
  }
  
  c.reduce(reducer);

  