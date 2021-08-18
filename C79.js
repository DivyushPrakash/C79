var studentlist=[];
function submit(){
    var name1=document.getElementById("input1").value;
    var name2=document.getElementById("input2").value;
    var name3=document.getElementById("input3").value;
    var name4=document.getElementById("input4").value;
    studentlist.push(name1);
    studentlist.push(name2);
    studentlist.push(name3);
    studentlist.push(name4);
    console.log(studentlist);
    document.getElementById("namesarray").innerHTML=studentlist;
    document.getElementById("submitb").style.display="none";
}

function sorting(){
     studentlist.sort();
     console.log(studentlist);
     document.getElementByI("namesarray").innerHTML=studentlist;
}