

$().ready(function(){

    console.log("Everything will be ok!");

    $("p").css("color", "blue").css("font size","1.5em");
    
    $("Button").click(function(){
        $("p").css("color","red");
        $("input").val("Changed the default");

    

    });

    $("label").text(" The input control is next:");
    

});