function removeSmallest(numbers) {
  let smallest = numbers[0];
  for (let i in numbers){
    if (numbers[i] < smallest) {
      smallest = numbers[i]
      }
  }
  numbers.splice(numbers.indexOf(smallest), 1);
  return numbers;
}


//2. declare smallest as first index
//3. for loop defining i in numbers array
//4. if the numbers index is less than the first index
//5. then smallest is the new smaller number
//9. splice (remove) from the array of numbers at index of smallest