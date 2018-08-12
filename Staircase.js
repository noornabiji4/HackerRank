function staircase(n) {
            var str=" ";
       for (var i=1; i<=6 ; i++){
           for (var k=1; k<=6-i; k++){
               str += "\ ";
         }
            for (var j=1 ; j<=i ; j++){
                str += "#";
            }
            console.log(str);
               str =" ";
        }
}
