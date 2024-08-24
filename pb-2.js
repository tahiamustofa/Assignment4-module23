function matchFinder(string1, string2) {

    if (!string1 || !string2) {
     return 'pls type a string';   
    }
    else if(string1.includes(string2) ){
        return true;
    }else{
      return false;
    }
}

console.log(matchFinder('John Doe','ohn'))