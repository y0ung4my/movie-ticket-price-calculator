// BUSINESS LOGIC

function TicketSelection(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

TicketSelection.prototype.price = function(inputtedMovieValue, inputtedTimeValue, inputtedAgeValue) {
  let price = 12 + parseInt(inputtedMovieValue) + parseInt(inputtedTimeValue) + parseInt(inputtedAgeValue);
  return "$" + price;
};

// UI LOGIC
// JQUERY JUNK
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    
    const inputtedMovie = $("#movie-select option:selected").text();
    const inputtedTime = $("#time-select option:selected").text();
    const inputtedAge = $("#age-select option:selected").text();
    const inputtedMovieValue = $("#movie-select").val();
    const inputtedTimeValue = $("#time-select").val();
    const inputtedAgeValue = $("#age-select").val();

    let newTicket = new TicketSelection(inputtedMovie, inputtedTime, inputtedAge);
    $(".ticket").show();
    $("span.printout").html(newTicket.price(inputtedMovieValue, inputtedTimeValue, inputtedAgeValue));
  });
});

