function makeCounter(initialCount, increment) {
    var initial = +initialCount;
    var increm = +increment;
  
    console.log('initial: ', initial);
    console.log('increm', increm);
  
    var count = isNaN(initial) ? 0: initial;
    var countIncrem = isNaN(increm) ? 0 : increm;
    console.log('count: ', count);
  
    return function () {
        if (countIncrem === 0) {
            count++;
            console.log('count: ', count);
        } else {
  
            countIncrem += count;
            console.log('increment = ',increm);
            console.log('count = ', countIncrem);
        }
    };
}
module.exports = {
    makeCounter
};