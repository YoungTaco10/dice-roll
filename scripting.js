document.addEventListener("DOMContentLoaded",function()
{

    const button = document.querySelector("button");

    button.addEventListener("click", function()
    {
        const die1 = Math.floor(Math.random() * 6) + 1;
        const die2 = Math.floor(Math.random() * 6) + 1;
        const tot = die1 + die2;
        document.getElementById("die1").innerHTML = die1;
        document.getElementById("die2").innerHTML = die2;
        document.getElementById("tot").innerHTML = tot;
    })
})