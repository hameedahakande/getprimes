var checkPrimes = function(num){
 if (num < 2 ){
   return false;
 }
 for(var i=2; i<num; i++) {
   if (num%i === 0 ){
     return false
   }
 }
 return true
}

var getPrimes = function(number){
 var primes = [];
 for(var i=1; i<=number; i++){
   if(checkPrimes(i)){
     primes.push(i);
   }
 }
 return primes;
};

module.exports = getPrimes