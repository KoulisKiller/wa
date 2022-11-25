$(document).ready(function() {$("#myform").submit(function(e){
      e.preventDefault();
      var vyplneneJmeno = $("#nick").val();
       var Kamos = $("#kanoe_kamarad").val();
      if(vyplneneJmeno.length <2) {
            alert("Musi to byt delsi nez dva znaky");
            $("#nick").css("background-color","red");
            return false;
      }else if(Kamos != ""){
        if(Kamos.length<2){
        alert("Prezdivka")
        }
      }
      return true;
});});

