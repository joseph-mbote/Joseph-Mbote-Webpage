//alert("Details successfully posted");
var date=new Date();
document.write(date);
function upperCase(id) { 
    var x=document.getElementById(id).value;
    document.getElementById(id).value=x.toUpperCase();
      }
function lowerCase(id) { 
    var y=document.getElementById(id).value;
    document.getElementById(id).value=y.toLowerCase();
      }

function calc(){
	var a= +document.getElementById("rating1").value;
	var b= +document.getElementById("rating2").value;
	var c= +document.getElementById("rating3").value;
	var d= +document.getElementById("rating4").value;
	var e= +document.getElementById("rating5").value;

	var rating=((a+b+c+d+e)/25)*100;
	document.getElementById("rating").value=rating;
}