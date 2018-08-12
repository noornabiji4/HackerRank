function diagonalDifference(arr) {
    var s=0;
    var m=0;
    for (var i=0; i<arr.length;i++){
        s += arr[i][i];
       m += arr[(arr.length-1-i)][i];
    }
    return Math.abs(s-m);


}
