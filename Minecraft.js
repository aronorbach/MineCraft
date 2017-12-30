$(document).ready(function(){
    createContainer();
    createShed();
    createCloud();
    createRock();
    createWood();
    createTree();
    aud.play();
});

var mineCraft = {};

//function to make the overhead container
var createContainer= function(){
    var container = $('<div>');
    mineCraft.shed= $('<div>');
    var counter=0;
    var width = 20;
    var height = 15;

    container.addClass('gameBoard');//added class gameboard to container div
    mineCraft.shed.addClass('shed');//gave right side shed a class


        for(var i = 0; i< height; i++){
            for (var j=0; j<width; j++){
                counter++;
                var div = $('<div>');
                container.append(div);
                div.attr('id','block'+counter);
                div.addClass("pixels");

                if (i>=13){
                    div.addClass("dirt");
                }
                else if(i==12){
                    div.addClass("grass");
                }
                div.on('click', blockClick);
            }
        }
    $('body').append(container);
    $('body').append(mineCraft.shed);
}

//function to make the shed
  var createShed= function(){

    var shovel= $('<div>');
    shovel.addClass("shovel");
    shovel.on("click",toolClick);


    var axe= $('<div>');
    axe.addClass("axe");
    axe.on("click",toolClick);

    var pick= $('<div>');
    pick.addClass("pick");
    pick.on("click",toolClick);

    mineCraft.shed.append(shovel, axe, pick);
  }


//functions to build the objects on the board
var createCloud= function(){
    var cloudLocation= ['66','85','86', '87', '88', '89','106', '107','108', '109', '110','129'];
        for(i=0; i<cloudLocation.length; i++){
            var cloud= $("#block"+cloudLocation[i]);
            cloud.addClass("cloud");
        }
}
var createWood= function(){
    var woodLocation= ['236', '216', '196','176'];
        for(i=0; i<woodLocation.length; i++){
            var wood= $("#block"+woodLocation[i]);
            wood.addClass("wood");
        }
}
var createRock= function(){
    var rockLocation= ['228', '229', '230', '231', '231'];
        for(i=0; i<rockLocation.length; i++){
            var rock= $("#block"+rockLocation[i]);
            rock.addClass("rock");
        }
}
var createTree= function(){
    var treeLocation= ['174', '175', '177', '178', '154', '155', '156', '157', '158', '134', '135', '136', '137', '138','114','115','116','117','118'];
        for(i=0; i<treeLocation.length; i++){
            var tree= $("#block"+treeLocation[i]);
            tree.addClass("tree");
        }
}

//the function that removes a certain class of the div when it is clicked on to reveal the default background light blue
var blockClick = function(){
     var clickedOn= $(this).attr("class");
         if (clickedOn==('pixels tree') && mineCraft.selectedTool=='axe'){
            $(this).removeClass('tree');
         }
         else if (clickedOn=='pixels wood' && mineCraft.selectedTool=='axe'){
            $(this).removeClass('wood');
         }
         else if (clickedOn=='pixels rock' && mineCraft.selectedTool=='pick'){
            $(this).removeClass('rock');
         }
         else if (clickedOn=='pixels dirt' && mineCraft.selectedTool=='shovel'){
            $(this).removeClass('dirt');
         }
         else if (clickedOn=='pixels grass' && mineCraft.selectedTool=='shovel'){
            $(this).removeClass('grass');
         }
};

//gets the class of the clicked tools
var toolClick = function(){
   mineCraft.selectedTool = $(this).attr('class');
};
