#!/usr/bin/env node
var fibbonic = function(n){
	if(n<1){
		 return0;
	}
	if(n==1 || n==2){
		return 1;
	}
	else{
	 return fibbonic(n-1)+fibbonic(n-2);
	}
};

var firstk =function(k){
 var i = 1;
 var arr=[];
 for(i=1;i<k+1;i++){
    arr.push(fibbonic(i));
  }
  return arr;
};
var fmt = function(arr){
  return arr.join(" ");
}
var primeNum = function(k){
   var i = 1;
   var arr = [];
   var count = 2;
   arr.push(count);
   count++;
   while(i<k){
      var flag = 0;
      for( j=2;j<count;j++){
     	 if(count%j==0){
        	 flag = 1;
        	 break;
       	}
      }
      if(flag==0){
     	 i++;
         console.log(i);
         arr.push(count);
	}
     count++;
   }
   return arr.join(" ");
};
var k = 20;
console.log("firstk("+k+")");
console.log(fmt(firstk(k)));
console.log(primeNum(13));
