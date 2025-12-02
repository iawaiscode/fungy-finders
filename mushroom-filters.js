const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonFilter = document.getElementById("season");
const edibleFilter = document.getElementById("edible");
const noResultsMessage = document.querySelector(".no-results-message");

const currentFilters = {
  season: "all",
};

cards.forEach(function addAnimationName(card, index) {
  const mushroomId = `mushroom-${index + 1}`;
  card.style.viewTransitionName = `card-${mushroomId}`;
});

seasonFilter.addEventListener("change", updateFilters);
edibleFilter.addEventListener("change", updateFilters);

function updateFilters(event) {
  const filterType = event.target.name;
  currentFilters[filterType] = event.target.value;

  document.startViewTransition
    ? document.startViewTransition(() => filterCards())
    : filterCards();
}

function filterCards() {
  let hasVisibleCards = false;
  cards.forEach(function updateCardVisibility(card) {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    const matchedSeason =
      currentFilters.season === season || currentFilters.season === "all";
    const matchedEdible =
      currentFilters.edible === edible || currentFilters.edible === "all";

    if (matchedEdible && matchedSeason) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }

    hasVisibleCards
      ? (noResultsMessage.hidden = true)
      : (noResultsMessage.hidden = false);
  });
}
