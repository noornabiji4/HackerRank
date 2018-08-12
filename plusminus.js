function plusMinus(arr) {
    var n=arr.length;
    var positive = 0;
    var negative = 0;
    var zero = 0;
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] > 0)
        {
            positive++;
        }
        else if(arr[i] < 0)
        {
            negative++;
        }
        else
        {
            zero++;
        }
    }
    console.log(positive/n) ;
    console.log(negative/n);
    console.log(zero/n);
}
