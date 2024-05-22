function mostrar()
{
    let r,r1,r2,r3;
    let cant=0;
    if(document.getElementById('len01').checked)
    {
        r="JavaScript";
        cant++;
    }else{
        r="";
    }if(document.getElementById('len02').checked)
    {
        r1="python";
        cant++;
    }else{
        r1="";
    }if(document.getElementById('len03').checked)
    {
        r2="php";
        cant++;
    }else{
        r2="";
    }if(document.getElementById('len04').checked)
    {
        r3="c#";
        cant++
    }else{
        r3="";
    }
    document.getElementById('resp').value=r+""+r1+""+r2+""+r3;
    alert("la cantidad de lenguajes seleccionados fue: "+cant);
    
}