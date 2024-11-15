let adultsCount = 2;
let childrenCount = 0;

document.getElementById("travelerBtn").addEventListener("click", () => {
  const dropdown = document.getElementById("travelerDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

function updateCount(type, change) {
  if (type === "adults") {
    adultsCount = Math.max(1, adultsCount + change); // Ensure at least 1 adult
    document.getElementById("adultsCount").innerText = adultsCount;
  } else if (type === "children") {
    childrenCount = Math.max(0, childrenCount + change); // Ensure children count is 0 or more
    document.getElementById("childrenCount").innerText = childrenCount;
  }
  updateTravelerButtonText();
}

function updateTravelerButtonText() {
  const totalTravelers = adultsCount + childrenCount;
  document.getElementById("travelerBtn").innerText = `${totalTravelers} travelers`;
}

function closeDropdown() {
  document.getElementById("travelerDropdown").style.display = "none";
}
