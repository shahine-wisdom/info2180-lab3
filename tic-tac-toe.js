document.addEventListener("DOMContentLoaded", function() {
    let firstPlayer = "X";
    const sq = document.querySelectorAll("#board div");

    sq.forEach(function(square) {
        square.classList.add("square");

        square.addEventListener("click", function(){
            square.textContent = firstPlayer;
            square.classList.add(firstPlayer);

            firstPlayer = firstPlayer === "X" ? "O" : "X";

        });
    });
});