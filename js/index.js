const task1 = document.querySelector("#task1");
const task2 = document.querySelector("#task2");
const task3 = document.querySelector("#task3");

task1.addEventListener("click", () => {
    window.location.href = "biten-apple.html"; 
});

task2.addEventListener("click", () => {
    window.location.href = "eaten-apple.html";
});

task3.addEventListener("click", () => {
    window.location.href = "trash.html";
});