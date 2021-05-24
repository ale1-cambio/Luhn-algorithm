exports.ccc = function() {
  function check_input(el){
    if (typeof(el) !== "undefined") {
      if (typeof(el) === "string") {
        el =  Array.from(el.toString()).map(Number);
        console.log(el)
        return cc(el)
      }else if (typeof(el) === "number") {
        el =  Array.from(el.toString()).map(Number);
        return cc(el);
      }else{
        return cc(el);
      }
    }else{
      return "INVALID INPUT!"
    }
  }

  function cc(inp){
    let sum = 0;
    for (let i = inp.length - 1; i >= 0; i-=2){
      sum+= inp[i];
      if (typeof(inp[i - 1] !== "undefined")) {
        if (inp[i -1] * 2 >= 10) {
          sum += (inp[i - 1] * 2) - 9;
        }else{
          sum += inp[i - 1] * 2;
        }
      }
    }
    if (sum % 10 === 0) {
      return true
    }else{
      return false
    }
  }
}