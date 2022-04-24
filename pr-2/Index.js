function calculate() {
    let a = parseFloat(document.getElementById('marks1').value);
    let b = parseFloat(document.getElementById('marks2').value);
    let c = parseFloat(document.getElementById('marks3').value);
    let d = parseFloat(document.getElementById('marks4').value);
    let e = parseFloat(document.getElementById('marks5').value);
    let f = parseFloat(document.getElementById('marks6').value);

    if(a>100 || b>100 || c>100 || d>100 || e>100 || f>100){
        alert('Please Enter valid number -->(under the vlaue 100)');
    }
    else{
        let sum = a+b+c+d+e+f;
        document.getElementById('obtain').innerHTML=sum;
        let pertg= sum/600*100;
        document.getElementById('percent').innerHTML=pertg;

            if(pertg>80){
               document.getElementById('grad').innerHTML="A";
            }
            else if(pertg>60){
                document.getElementById('grad').innerHTML="B";
             }
             else if(pertg>50){
                document.getElementById('grad').innerHTML="c";
             }
             else if(pertg>33){
                document.getElementById('grad').innerHTML="D";
             }
             else{
                document.getElementById('grad').innerHTML="Fail";

             }

             if(a>33 && b>33 && c>33 && d>33 && e>33 && f>33){
                 document.getElementById('remark').innerHTML="<span style='color:green'>Passed</span>";
             }
             else{
                document.getElementById('remark').innerHTML="<span style='color:red'>Fail</span>";

             }
        

    }

}