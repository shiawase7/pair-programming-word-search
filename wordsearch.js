const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join('')) //array of strings
    //console.log("horizontal Join", horizontalJoin);
    

    if(letters.length === 0){
        return false;
    }

    const horizontalLength = letters[0].length;
    const verticalLength = letters.length;

    let outputBool = false;
    for (l of horizontalJoin) {
        if (l.includes(word)){
            outputBool = true;
        } 
    }
    for(let c = 0; c < horizontalLength; c++) {
        let vertWords = []
         for(let r = 0; r < verticalLength; r++) {
            vertWords.push(letters[r][c]);
            //console.log("vertWords", vertWords);
        }
        let vertJoined = vertWords.join('');
        console.log("vertJoined", vertJoined);
        if(vertJoined.includes(word)) {
            outputBool = true
        }
    }
    
    //console.log(vertWords)
    return outputBool;
};

wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['B', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['A', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['N', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['D', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['O', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['N', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['E', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['D', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'ABANDONED')



module.exports = wordSearch