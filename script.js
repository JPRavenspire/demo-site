"use strict";

let entries = JSON.parse(localStorage.getItem("entriesCache")) || [];

const form = document.querySelector("#guest-form");
const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#message");
const entriesContainer = document.querySelector("#entries");
const error = document.querySelector("#error");
// voeg error

renderEntries();

// Check of the submit wordt aangeklikt
form.addEventListener("submit", (event) => {
    // voeg default handler
    event.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    // Data Validation

    if (name === "") {
        error.textContent = "Name is required.";
        return;
    }

    if (message.length < 5) {
        error.textContent = "Message must be at least 5 characters.";
        return;
    }
    
    error.textContent = "";

    const entry = {
        name: name,
        message: message,
        date: new Date().toLocaleString()
    };

    entries.push(entry);

    localStorage.setItem("entriesCache", JSON.stringify(entries));

    console.log(`name: ${name} message: ${message}`);
    //renders messages:
    renderEntries();

    nameInput.value = "";
    messageInput.value =  "";

})

    // voer submit logica uit

        // sla data op


// functie: data op de website zetten
function renderEntries() {
    entriesContainer.innerHTML = "";

    entries.forEach(entry => {
        const div = document.createElement("div");
        div.classList.add("entry");

        div.innerHTML = `
            <div class="entry-name">${entry.name}</div>
            <div>${entry.message}</div>
            <div class="entry-date">${entry.date}</div>

        `;

        entriesContainer.appendChild(div);
    })
}