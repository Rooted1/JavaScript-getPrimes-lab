module.exports = {
getPrimes : function (n) {
    if(typeof n !== "number"){
        return 'undefined';
    }
    if(n < 1 ){
        return 'undefined';
    }
  var arr = [];
  
  for (var counter = 0; counter <= n; counter++){
    for (var i = 2; i <= counter; i++){
      if(counter === i){
        arr.push(i);
      }
      if(counter % i === 0){
        break;
      }
    }
  }
  return arr;
}
}