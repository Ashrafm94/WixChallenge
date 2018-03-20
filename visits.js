var input = "^v>><^^v^^>><^>v<<^v^<<^<>>v^<<>><<^v>v<v>>>>^<>v>v^<^>><vv>>^^>>>^>><><>^>^<v<^<^>v><<v<<v^v>><>^>^^v><<^>>v<^^v^^>v<^^><^v^^<><<<>>><^<vv^^<^^<v>>^<v^v^^vv<<<><^<<^vv^^^v<v>><>v<v^><^vv^^>v^>^^^^<>^>^^^>>vv<>vvvv>>v^<><vv<>>^vv^<v>^vv<<v^<v<>v>><^v^v^<^^<^>>^>v<^v^>><<>><>^^v>v>><<><v<v^^><v<<><<vv<>v>^><<<^vv<<^><>^>^^<^^><^v^v^^v>v^<^<<<>v><v^<<^^v>>>><<v^v<>><<>^v>><>><<^v<^>>^v<<<>^<<v^^^<>>><>>v><<^<>>><>^^^v^^<v^v^>v<v^><^<^>v><>v^>vv>^<v<^v<^^>><<^^<^<>>v^>vv<<<>v^<>v<>><><v><><>^><v>vv>^v<>>v<>^^v>>^<>v<^^<<^v^^<<<<^<<^><<<^>^vv>>vv^<>^<^>v<v<^^<v^>^>^^v>^><<^<>^<v^>^^>>^<^vvv>^v^<>>>>^^><v>v^<v<v<v<<v^>>^>^v<^<^>v^^v<><<^^^>^<^<^>>v><v>^>vvvv^>^<<^vvv><>>>>^><><^>v^v>><^^><vv^<^v>^>^v^vv>^>v^<>><><v<<vv>v<>>><vvv><>^vv^v^v^^>>^^<vv^^v>^^^><v<^^><^vv^^<<^^><^^v>v^<>^>><^vv^^<^<^<v<<^>v><<v<<v^<^^>vv<<vv^<<>>>>><<>^^><><^<>>^v^<vv<<v^<><<<<>^<>^>^vv>v^v>><<<>^>><^v>>vvv<<^>>^<v<>>>^v^^>><v>vv^^^<<>>^^<v><^^>>^<^v><v><^v><>^>^vvv>v>v^vv<<>^vvv^v^<v>>vv<<v<vv<vv><>>>><v^>^v><vvvv^v^>v<vv^v<<>vv<v<v^v^<>vv^v^^<<>^vv^>v>v>>^^<>^>^<>vv>v<^^^<<>>^<v<v^<vv><v<<v<<v^>v<>><^^>>v<<<^^v^>^<>^<^^>>^vv<^";

//return how many positions visits more thant once
function howManyPositionsVisitsMoreThanOnce(input){
    var arr = input.split("");
    var visitsCount = 0;
    var x = 0;
    var y = 0;
    var currentPosition = { x : 0 , y : 0 };
    var visits = new Array(); //array for save directions
    var alreadyChecked = new Array(); //array for prevent duplicate checks of the same position
    visits.push(currentPosition);
    var isUpdate = false;
    
    //Check Each Element what it has and do according the value.
    for(var i = 0; i < arr.length; i++){
        isUpdate = false;
        if(arr[i] == "<"){
            x--;
            isUpdate = true;
        }else if(arr[i] == ">"){
            x++;
            isUpdate = true;
        }else if(arr[i] == "^"){
            y++;
            isUpdate = true;
        }else if(arr[i] == "v"){
            y--;
            isUpdate = true;
        }
        
        //if is need to be updated then update it
        if(isUpdate){
            currentPosition = { x : x , y : y };
            
            if(PositionHasNotCheckedCountYet(x ,y , visits , alreadyChecked)){
                visitsCount++;
                alreadyChecked.push(currentPosition);
            }else{
                visits.push(currentPosition);
            }
        }
       
    }

    return visits;
}

//function to check if the position has been checked or not 
function PositionHasNotCheckedCountYet(x ,y , visits , alreadyChecked){
    if(isPoisitionExist(x , y , visits) && !isPoisitionExist(x , y , alreadyChecked))
        return true;
    return false;
}

//check if position exist
function isPoisitionExist(x , y , visits){
    for(var i = 0; i < visits.length; i++)
        if(visits[i].x == x && visits[i].y == y)
            return true;
    return false;
}


howManyPositionsVisitsMoreThanOnce(input);