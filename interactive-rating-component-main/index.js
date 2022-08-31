let submitButton = document.getElementById('submit');
let thankyou_ID = document.getElementById('container1');
let rating_ID = document.getElementById('container');
let rating = document.querySelectorAll(".rating");
let chosenRate;
let rating_score = document.getElementById('rating-percentage');

for (let index = 0; index < rating.length; index++) {
    const rateValue = rating[index];

    rateValue.addEventListener('click', function changeOnRating() {
        chosenRate = Number(rateValue.textContent)
        console.log(chosenRate)
        showRating(chosenRate)
    });
}

function showRating(rating) {
    rating_score.innerHTML = "You selected " + rating + " out of 5"
    console.log(rating_score.innerHTML);
}


submitButton.addEventListener('click', function changeOnSubmit() {
    if (typeof chosenRate !== undefined && rating_score.innerHTML !== "") {
        if (thankyou_ID.className == 'container1') {
            //  ======================================================================= TAKE NOTE OF THIS======================================================================== 
            // thankyou_ID.classList.toggle("container1-clicked")
            thankyou_ID.className = "container1-clicked";
            rating_ID.style.display = "none";
        } else {
            thankyou_ID.classList.toggle("container1")
        }
    } else {
        console.error('SELECT A RATING')
    }
});