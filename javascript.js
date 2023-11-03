// Sample data (you would fetch this from an API in a real application)
const parties = [
  { name: "Party 1", date: "2023-11-15", time: "19:00", location: "Venue A", description: "Description 1" },
  { name: "Party 2", date: "2023-11-20", time: "18:30", location: "Venue B", description: "Description 2" }
];

// Function to render the party list
function renderPartyList() {
  const partyList = document.getElementById("party-list");
  partyList.innerHTML = "";

  parties.forEach((party, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${party.name} - Date: ${party.date}, Time: ${party.time}, Location: ${party.location}, Description: ${party.description}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      parties.splice(index, 1);
      renderPartyList();
    });

    li.appendChild(deleteButton);
    partyList.appendChild(li);
  });
}

// Initialize the party list
renderPartyList();

// Function to add a new party
const partyForm = document.getElementById("party-form");
partyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("party-name").value;
  const date = document.getElementById("party-date").value;
  const time = document.getElementById("party-time").value;
  const location = document.getElementById("party-location").value;
  const description = document.getElementById("party-description").value;

  parties.push({ name, date, time, location, description });
  renderPartyList();
  
  // You can send a POST request to an API here to add the party in a real application.
});
