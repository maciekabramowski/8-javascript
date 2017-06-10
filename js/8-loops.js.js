'use strict';

for ( var i=0; i<4; i++){
    console.log(i);
}

for ( var i=4; i>=0; i--){
    console.log(i);
}


//while
var it = 0;
while (it<10){
       console.log("Pętla while [it = " + it + "]");
    
        it++;
       }

//do while
var iter = 20;
do {
    console.log(iter);
    iter++;
} while (iter < 10)
 

//break
    
//var a = 0;
//while (a < 5) {
//    console.log(++a);
//    
//    if (a == 3) {
//        break;
//    }
//}
    
//post- i preinkrementacja
    
//for (var i=1; i<4; ){
//    console.log(++i);
////    i = i + 1;
////    console.log(i);
//}
//console.log('------------');
//for (var i=1; i<4; ){
//    console.log(i++);
////    console.log(i);
////    i = i + 1;
//}
    

    /*continue*/
    
for (var b = 0; b < 6; ++b){
    
    if (b == 3) {
        continue;
    } else {
        console.log(b);
    }
    console.log("--");
}

for( var i = 1 ; i <= 20 ; i++ ) {
if ( i % 2 != 0 ) { continue };
/* jeśli wartość zmiennej i nie jest podzielna przez dwa to przejdź do kolejnej iteracji
jeśli jest podzielna przez dwa to wypisz tą iterację */
console.log ( i + " " );
}



