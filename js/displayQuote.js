import quotes from "./quotes.js";

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(document).ready(function () {
  let id = -1;

  function getRandomQuote() {
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    while (id == quoteIndex) {
      quoteIndex = Math.floor(Math.random() * quotes.length);
    }

    id = quotes[quoteIndex].id;

    $("#text")
      .empty()
      .append(`<i class="bi bi-quote"></i>${quotes[quoteIndex].quote}`);
    $("#author").empty().append(`- ${quotes[quoteIndex].author}`);
    $("#text, #author").animate({ opacity: "1" }, "slow");
  }

  $("#text, #author").css({ opacity: "0" });

  getRandomQuote();

  $("#new-quote").click(function () {
    $("#text").animate({ opacity: "0" }, 750);
    $("#author").animate({ opacity: "0" }, 750, getRandomQuote);
  });
});
