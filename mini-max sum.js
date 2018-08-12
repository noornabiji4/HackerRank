function miniMaxSum(arr) {
    var max=0;
    var min=0;
    arr.sort();
    for (var i=0;i<arr.length-1;i++){
         min += arr[i];
        max += arr[i+1];
    }
console.log(min,max);
}
