const linkedInData = "https://www.linkedin.com/in/ratabeg/";
const gitHubData = "https://github.com/ratabeg";

const project1Data = "https://ratabeg.github.io/2048-game/";
const project2Data = "https://thecentralasianchronicles.asia/";

const githubbtn = document.getElementById("githubbtn");
const linkedInbtn = document.getElementById("linkedInbtn");
const footergithubbtn = document.getElementById("footergithubbtn");
const footerlinkedInbtn = document.getElementById("footerlinkedInbtn");
const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");


document.addEventListener("DOMContentLoaded", function () {
    githubbtn.href = gitHubData;
    linkedInbtn.href = linkedInData;
    project1.href = project1Data;
    project2.href = project2Data;
    footergithubbtn.href = gitHubData;
    footerlinkedInbtn.href = linkedInData;

});