const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//const totalBatteries = batteryBatches.reduce(function(total, batches){
   // return batches + total
  //  }
 // )

  
  let sum = 0;

  for( let i =0; i<batteryBatches.length;i++){
      sum += batteryBatches[i]
  }
  