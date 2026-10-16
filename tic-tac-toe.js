document.addEventListener("DOMContentLoaded", function() {
    const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
    const status = document.querySelector("#status");
    let firstPlayer = "X";
    const sq = document.querySelectorAll("#board div");

    sq.forEach(function(square) {
        square.classList.add("square");

        square.addEventListener("click", function(){
            square.textContent = firstPlayer;
            square.classList.add(firstPlayer);

             for (const combo of winningCombos) {
                 const [a, b, c] = combo;

        if (
            sq[a].textContent !== "" &&
            sq[a].textContent === sq[b].textContent &&
            sq[b].textContent === sq[c].textContent
        ) {
            status.textContent =
                "Congratulations! " + firstPlayer + " is the Winner!";

            status.classList.add("you-won");
        }
    }


            firstPlayer = firstPlayer === "X" ? "O" : "X";

        });
    });
});