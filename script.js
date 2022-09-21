function clear_sc()
{
    document.getElementById("dis").value="";
}

function display(value)

{   
    document.getElementById("dis").value+=value;
}




function calculation(){

    var p=document.getElementById("dis").value;
    var re=eval(p);
    document.getElementById("dis").value=re;

}