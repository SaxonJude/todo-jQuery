$("ul").on("click", "span", function(event){
    $(this).parent().fadeToggle(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("ul").on("click", "li", function(event){
    $(this).toggleClass("strike");
})

$("input[type=text]").keypress(function(event){
    if (event.which === 13) {
       var todoText = $(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".plus").on("click", function(){
    $("input[type=text]").fadeToggle();
})