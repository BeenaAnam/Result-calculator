function calculateGrade(){
    // get values
    let name = document.getElementById("name").value;
    let father = document.getElementById("father-name").value;
    let rollNum = Number(document.getElementById("roll-number").value);
    let comp = Number(document.getElementById("computer").value);
    let math = Number(document.getElementById("maths").value);
    let eng = Number(document.getElementById("english").value);
    let urdu = Number(document.getElementById("urdu").value);
    let isl = Number(document.getElementById("islamiyat").value);
    // tolal and percentage
    let obtain = comp + math + eng + urdu + isl;
    let total = 500;
    let percent = (obtain / total)* 100;

    // show result
    let result = document.getElementById("result");
    let message = "";

    if(percent <= 100 && percent >= 90){
      message = ("🎉Contratulations! You got A++ Grade with " + percent + "%");
    }
    else if(percent <= 89 && percent >= 80){
      message = ("🎉Contratulations! You got A Grade with " + percent + "%");
    }
    else if(percent <= 79 && percent >= 70){
      message = ("🎉Contratulations! You got B Grade with " + percent + "%" );
    }
    else if(percent <= 69 && percent >= 60){
      message = ("🎉Contratulations! You got C Grade with " + percent + "%" );
    }
    else if(percent <= 59 && percent >= 50){
      message = ("🎉Contratulation! You got D Grade with " + percent + "%" );
    }
    else{
        message = ("😥Your Are fail! Batter Luck Next Time" );
    }
      // show result with name, father name, roll no
      result.innerHTML= `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Father's Name:</strong> ${father}</p>
        <p><strong>Roll Number:</strong> ${rollNum}</p>
        <p><strong>Total Marks:</strong> ${obtain} / ${total}</p>
        <p><strong>Result:</strong> ${message}</p>
    `;
    result.style.opacity = 1;

}
