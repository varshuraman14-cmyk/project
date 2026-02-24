document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calcBtn").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let sub1 = Number(document.getElementById("sub1").value);
    let sub2 = Number(document.getElementById("sub2").value);
    let sub3 = Number(document.getElementById("sub3").value);
    let sub4 = Number(document.getElementById("sub4").value);
    let sub5 = Number(document.getElementById("sub5").value);

    if (
      name === "" ||
      isNaN(sub1) ||
      isNaN(sub2) ||
      isNaN(sub3) ||
      isNaN(sub4) ||
      isNaN(sub5)
    ) {
      document.getElementById("result").innerHTML =
        "Please fill all fields correctly!";
      return;
    }

    let total = sub1 + sub2 + sub3 + sub4 + sub5;
    let percentage = total / 5;
    let grade = "";

    if (percentage >= 90) {
      grade = "A+";
    } else if (percentage >= 80) {
      grade = "A";
    } else if (percentage >= 70) {
      grade = "B";
    } else if (percentage >= 60) {
      grade = "C";
    } else if (percentage >= 50) {
      grade = "D";
    } else {
      grade = "Fail";
    }

    document.getElementById("result").innerHTML =
      "Name: " +
      name +
      "<br>" +
      "Total: " +
      total +
      "<br>" +
      "Percentage: " +
      percentage.toFixed(2) +
      "%<br>" +
      "Grade: " +
      grade;
  });
});
