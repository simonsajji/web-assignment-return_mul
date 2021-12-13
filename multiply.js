//This is the function that does multiple results and returns the product value

function mul(a){
    return function(b){
        return function(c) {

            return (a*b*c);

        }
        
    }
}


// Get the element of button

var btn=document.getElementsByName('RESULT')[0];


var display=function(){
    var n1=document.getElementById('num1').value;
    var n2=document.getElementById('num2').value;
    var n3=document.getElementById('num3').value;
    
    let res=mul(n1)(n2)(n3);
    var val=document.getElementsByTagName('h2')[0];

    val.innerHTML=res;

}

btn.addEventListener('click',display);



// var m=mul(10)(20)(20);
// console.log(s);
