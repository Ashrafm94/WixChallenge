var input = ")(((()())(((((((((())(())))()()(()(()(()(()(()())))()(((()()(())()(())(()((())())(((()))))))(()())()))(((())()))((()(()(()))((())((()((()))(())())))))()(())((())()()()((()))())()(()())((())))()())())()((())))))(()()(()))(()))()))(((()())((((()))((()))()))))(())))(())(()))())()(((())()()()()()((())((()()(()(()(())))(()((((()))))((())))(()()(()((((())))))())))()())()(())()(((()(()(()())()))((()(()()(())))())(()()))())(()()(())()((((())())(()()))((()))()()(((((())(())))()(((()(()(((()())))()()()(()())(((((((())()()(()))())))()(((())))))(()())))()(()((()))))(()))()()((()(())))((((()))(())(()())((()(((())())((())())()))()((())((((((((((())))))()(()))())(())()()))()())())()()(()))))(())))()))(()())((()(((((()(()))())()()((()))))((()(())()((()))()))((()))())))()))(()((())())))())))())())())((()(()())))()))()))(()()()(()))((((()((()((((()))))()((()()())(()()))()())((()())((((((((((()))()(()))())))()(())))(((()(((())()())())((()))(()))()()(()()(())(())(()(()((()(((()))()()()()(()()())))(()))(())))(()))(()()()((((())))(()()()))()))(())(()))((())()))))))))((((()))()()()())()()(()))()()()((())(())(()))())(()))())))))))))()))(()())()(()))()()))))))))((())((()())())()(())()(()(((()(()((()))(()))))())())()))))(()()((())())))())()()))()(()(((())()())))(()(()()((()((())(()((()))()())))))()())))()))(())(()()()((((()(((()())(()(()))))(((()(())()(())()((())()())()()()()())))((()()())())))(((()(((())())))())())()())()(()(()()))()()))((())((())((((((()(()))()(((()((((())))()()()((()())))))))(()))()()((()())(())()()(()((()))))((())(((()()())(((()))())()())((())))(((()(()))()))()()(((((((((())((()))()))()()(()())()(())(()(()((())))()((()(()))(())))()(()()(()()((((()(((((()((())(())())(()(((((()()(((()()()))))(((()((())((()))(()))()))()(())))))()((())))(((((())()))(())))((()(())(()()";


//function to check in which floor we are standing
var floors = function (input){

    var arr = input.split("");
    var floorsSum = 0;
    
    //Check if we are Go up or Down
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == ")"){
            floorsSum--;
        }else if(arr[i] == "("){
            floorsSum++;
        }
    }
    
    return floorsSum;

} 

floors(input);