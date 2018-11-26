  //A, E, I, O, U
    function calcVowelsNum(str){
      return str.replace(/[^AEIOU]/gi, "").length;
    }

  console.log(calcVowelsNum("alQsAbc QQSax"));
