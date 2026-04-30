function generate() {
    // Inputs lena
    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let totalMarks = Number(document.getElementById("total").value);

    let obtained = s1 + s2 + s3 + s4;
    let per = (obtained / totalMarks) * 100;
    let grade = "";

    // Grade logic
    if (per >= 80) {
        grade = "A-One (Excellent! 🌟)";
    } else if (per >= 70) {
        grade = "A (Very Good! 👍)";
    } else if (per >= 60) {
        grade = "B (Good)";
    } else if (per >= 50) {
        grade = "C (Pass)";
    } else {
        grade = "Fail (Keep Trying!)";
    }

    // Display results
    document.getElementById("resultBox").style.display = "block";
    document.getElementById("obtainedMarks").innerHTML = "Obtained Marks: " + obtained;
    document.getElementById("percentage").innerHTML = "Percentage: " + per.toFixed(2) + "%";
    document.getElementById("grade").innerHTML = "Grade: " + grade;
}