const middle = (arr) => {
  const middleArr = [];
  if (arr.length <= 2) {
    return middleArr;
  } else if (arr.length % 2 === 0) { // code block 'if' checks if length of array is even if it is it will find the index of both middle values
    let i = (arr.length / 2) - 1;
    middleArr.push(arr[i]);
    middleArr.push(arr[i + 1]);
  } else if (arr.length !== 0) { // code block 'else if' divides the length of an odd array by 2 then rounds up and subtracts 1 to find the middle index
    let i = Math.ceil((arr.length / 2)) - 1;
    middleArr.push(arr[i]);
  }
  return middleArr;
};

module.exports = middle;