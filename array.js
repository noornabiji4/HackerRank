function getSecondLargest(nums) {
    // Complete the function
    var sArray = nums.sort(function (a,b) {return a - b;});
    var uArray = sArray.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })

    return uArray[uArray.length - 2];
}
