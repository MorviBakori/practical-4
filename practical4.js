
// Practical 4 - DOM Manipulation and Event Handling

// 1. Selecting HTML Elements
document.getElementById("selectBtn").addEventListener("click", function () {
    const byId = document.getElementById("selectMessage");
    const byClass = document.getElementsByClassName("demoClass");
    const byTag = document.getElementsByTagName("p");
    const firstBox = document.querySelector(".box");
    const allBoxes = document.querySelectorAll(".box");

    document.getElementById("selectOutput").innerHTML =
        "getElementById(): " + byId.textContent +
        "<br>getElementsByClassName(): " + byClass.length + " elements" +
        "<br>getElementsByTagName(): " + byTag.length + " paragraphs" +
        "<br>querySelector(): " + firstBox.tagName +
        "<br>querySelectorAll(): " + allBoxes.length + " boxes";
});

// 2. Change content, attribute and style
document.getElementById("contentBtn").addEventListener("click", function () {
    document.getElementById("changeText").textContent =
        "New message: Special offer available!";
});

document.getElementById("attributeBtn").addEventListener("click", function () {
    const link = document.getElementById("shopLink");
    link.setAttribute("href", "https://www.google.com");
    link.textContent = "Open Google";
});

document.getElementById("styleBtn").addEventListener("click", function () {
    const text = document.getElementById("changeText");
    text.style.color = "blue";
    text.style.fontWeight = "bold";
});

// 3. Create, append, replace and remove elements
document.getElementById("addBtn").addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "Headphones";
    document.getElementById("productList").appendChild(newItem);
});

document.getElementById("replaceBtn").addEventListener("click", function () {
    const list = document.getElementById("productList");

    if (list.children.length === 0) {
        return;
    }

    const newItem = document.createElement("li");
    newItem.textContent = "Smart Watch";
    list.replaceChild(newItem, list.children[0]);
});

document.getElementById("removeBtn").addEventListener("click", function () {
    const list = document.getElementById("productList");

    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    }
});

// 4. Click and double-click events
document.getElementById("clickBtn").addEventListener("click", function () {
    document.getElementById("clickOutput").textContent = "Button was clicked.";
});

document.getElementById("doubleBtn").addEventListener("dblclick", function () {
    document.getElementById("clickOutput").textContent = "Button was double-clicked.";
});

// 5. Mouse events
const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function () {
    document.getElementById("mouseOutput").textContent = "Mouse entered the box.";
    mouseBox.classList.add("highlight");
});

mouseBox.addEventListener("mouseout", function () {
    document.getElementById("mouseOutput").textContent = "Mouse left the box.";
    mouseBox.classList.remove("highlight");
});

// 6. Keyboard events
const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("keydown", function (event) {
    document.getElementById("keyOutput").textContent = "Key down: " + event.key;
});

nameInput.addEventListener("keyup", function () {
    document.getElementById("keyOutput").textContent = "Current text: " + nameInput.value;
});

// 7. Change event
document.getElementById("categorySelect").addEventListener("change", function () {
    document.getElementById("changeOutput").textContent =
        this.value ? "Selected Category: " + this.value : "Please select a category.";
});

// 8. Theme switching
document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    this.setAttribute("aria-pressed", isDark);
    this.textContent = isDark ? "Switch to Light Theme" : "Switch to Dark Theme";
});

// 9. Image preview
document.getElementById("imageSelect").addEventListener("change", function () {
    const image = document.getElementById("previewImage");
    image.src = this.value;
    image.alt = this.options[this.selectedIndex].text + " product preview";
});

// 10. Dynamic menu
document.getElementById("menuBtn").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    const isHidden = menu.hidden;

    menu.hidden = !isHidden;
    this.setAttribute("aria-expanded", isHidden);
});
