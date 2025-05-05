// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Change header text
function changeHeaderText() {
    const title = document.getElementById("main-title");
    if (title.textContent === "DOM Manipulation Exercise") {
        title.textContent = "Javascript DOM Manipulation";
    } else {
        title.textContent = "DOM Manipulation Exercise";
    }
}

// Add new list element
function addNewElement() {
    const list = document.getElementById("itemList");
    const newItem = document.createElement("li");
    const itemCount = list.children.length + 1;
    newItem.textContent = `Item ${itemCount}`;
    list.appendChild(newItem);
}

// Remove last list element
function removeLastElement() {
    const list = document.getElementById("itemList");
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    }
}

// Event listeners
document.getElementById("toggleButton").addEventListener("click", toggleDarkMode);
document.getElementById("changeTextBtn").addEventListener("click", changeHeaderText);
document.getElementById("addElementBtn").addEventListener("click", addNewElement);
document.getElementById("removeElementBtn").addEventListener("click", removeLastElement);

// Bonus: Change paragraph color on mouseover
document.getElementById("content").addEventListener("mouseover", function() {
    this.style.color = "blue";
});

document.getElementById("content").addEventListener("mouseout", function() {
    this.style.color = "";
});