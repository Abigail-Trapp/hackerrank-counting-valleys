
function countingValleys(steps, path) {
    let seaLevel = 0
    valleys = 0
    for (let i=0;i<path.length;i++) {
      if (path[i] === 'U') {
        seaLevel += 1
      } else if(seaLevel === 0){
        valleys ++
        seaLevel--
      }
    return valleys
  }
  }
  console.log(countingValleys(8, 'DDDUDUU'))