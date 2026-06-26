// ============================
// DARK / LIGHT THEME TOGGLE
// ============================

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});


// ============================
// TODO APP WITH LOCAL STORAGE
// ============================

let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {

    const taskList =
    document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li =
        document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });
}

function addTask() {

    const taskInput =
    document.getElementById("taskInput");

    const task =
    taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(task);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    taskInput.value = "";

    renderTasks();
}

function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    renderTasks();
}

renderTasks();


// ============================
// PRODUCTS DATA
// ============================

const products = [

{
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 50000,
    rating: 4.8,
    image: "images/laptop.png"
},

{
    id: 2,
    name: "Mobile",
    category: "Electronics",
    price: 25000,
    rating: 4.6,
    image: "images/mobile.png"
},

{
    id: 3,
    name: "Sports Shoe",
    category: "Fashion",
    price: 3500,
    rating: 4.9,
    image: "images/shoe.png"
}

];


// ============================
// DISPLAY PRODUCTS
// ============================

function displayProducts(productArray) {

    const container =
    document.getElementById(
        "productContainer"
    );

    container.innerHTML = "";

    productArray.forEach(product => {

        container.innerHTML += `

        <div class="product-card">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>
                    Category:
                    ${product.category}
                </p>

                <p>
                    ⭐ ${product.rating}
                </p>

                <p class="price">
                    ₹${product.price}
                </p>

                <button class="view-btn">
                    View Details
                </button>

            </div>

        </div>

        `;
    });
}

displayProducts(products);


// ============================
// FILTERING & SORTING
// ============================

const categoryFilter =
document.getElementById(
    "categoryFilter"
);

const sortOption =
document.getElementById(
    "sortOption"
);

categoryFilter.addEventListener(
    "change",
    filterAndSortProducts
);

sortOption.addEventListener(
    "change",
    filterAndSortProducts
);

function filterAndSortProducts() {

    let filteredProducts =
    [...products];

    const category =
    categoryFilter.value;

    const sort =
    sortOption.value;

    // Category Filter

    if (category !== "all") {

        filteredProducts =
        filteredProducts.filter(
            product =>
            product.category === category
        );
    }

    // Sort by Price

    if (sort === "price") {

        filteredProducts.sort(
            (a, b) =>
            a.price - b.price
        );
    }

    // Sort by Rating

    if (sort === "rating") {

        filteredProducts.sort(
            (a, b) =>
            b.rating - a.rating
        );
    }

    displayProducts(
        filteredProducts
    );
}


// ============================
// CONTACT FORM
// ============================

const contactForm =
document.getElementById(
    "contactForm"
);

contactForm.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        alert(
            "Message Sent Successfully!"
        );

        contactForm.reset();
    }
);


// ============================
// SMOOTH SCROLL ACTIVE NAV
// ============================

const navLinks =
document.querySelectorAll(
    "nav a"
);

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        function () {

            navLinks.forEach(
                item =>
                item.classList.remove(
                    "active"
                )
            );

            this.classList.add(
                "active"
            );
        }
    );
});


// ============================
// SCROLL ANIMATION
// ============================

const cards =
document.querySelectorAll(
    ".card"
);

window.addEventListener(
    "scroll",
    () => {

        cards.forEach(card => {

            const cardTop =
            card.getBoundingClientRect().top;

            if (cardTop <
                window.innerHeight - 100) {

                card.classList.add(
                    "show"
                );
            }
        });
    }
);