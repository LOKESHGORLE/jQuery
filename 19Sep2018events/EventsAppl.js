$(document).ready(function () {
    $("#SUBMIT").click(BodyBackroundChange);
    $("#ts1").attr("class", "whitefont");
    $("#btnhello").click(alerthello);
    //$("body").css("background-image","url(backgroungimage.jpg)")

    $("p").empty;
    $("h1").css("margin-inline-start", 200);
    $("#hide").on("click", hidetext);
    $("#show").on("click", function () {
        $("p").show();   
    });

    console.log($(".carlinkedlist").siblings());
    $("#link1").siblings().css({
        "color": "red",
        "font-style": "italic"
    }); 

    $("#ts2").mouseover(function () {
        alert("mouse on key");
    });
    $("#link1").mouseover(function () {
        $("#link1").siblings().fadeToggle();
    });
    //$("#link1").mouseout(function () {
    //    $(".listclass").fadeIn();
    //});
    $("#testremove").click(function () {
        $("#detach").detach();
        $("#remove").remove();
        $("#empty").empty();
    });
    $("#AddQualification").click(AddQualificationColumn);
    function AddQualificationColumn(){
        console.log("entered qual creation");
        $("#AddQualification").append.createElement("input");
    }


}
);

function hidetext() {
    //alert("entered hide");
    $("p").hide();
    console.log("hide end");
}  

function BodyBackroundChange() {
    $("body").css("background","red");
}
function alerthello() {
    alert("hello");
}

    //function()
    //{
    //    $("#btnhello").click(alerthello);
    //    function alerthello()
    //    {
    //         alert("hello");
    //    }
    //})

//$(document).ready(function () {
//    $("#ts1").attr("class", "whitefont");
//}
//)

/*$("#Qualification").css("backgroung",'red');*/

//function AddQualificationColumn() {
//    var form = document.getElementById('AddQualification');
//    var addform = document.createElement("input")
//    console.log('start');
//    form.appendChild(addform)
//    console.log('created');
//}
function AddQualificationColumn() {
    console.log("entered qual creation");
    $("AddQualification").append.createElement("input[type:text]");
}


//function createQualField() {
//    var input = document.createElement('input');
//    input.type = 'text';
//    input.name = 'pet[]';
//    return input;
//}


//document.getElementById('Qualification').addEventListener('click', function (e) {
//    form.appendChild(createQualField())
//    ;
//});

//document.getElementById("AddQualification").onclick = function () {
//    var form = document.getElementById('AddQualification');
//    var addform = document.createElement("input")
//    form.appendChild(addform)
//}
