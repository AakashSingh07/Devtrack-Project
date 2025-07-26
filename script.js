const cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item.name} - $${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: $${total}`;
}

document.getElementById("js-book").addEventListener("click", () => {
  addToCart({ name: "JavaScript Book", price: 20 });
});

document.getElementById("py-guide").addEventListener("click", () => {
  addToCart({ name: "Python Guide", price: 25 });
});

const ctx = document.getElementById("progressChart").getContext("2d");

const progressData = {
  labels: [
    "Responsive Web Design",
    "JavaScript DS&A",
    "Front End Libraries",
    "Data Visualization",
    "APIs & Microservices",
    "Quality Assurance",
    "Scientific Python"
  ],
  datasets: [{
    label: "Progress (%)",
    data: [100, 85, 80, 75, 70, 65, 60],
    backgroundColor: "rgba(54, 162, 235, 0.5)",
    borderColor: "rgba(54, 162, 235, 1)",
    borderWidth: 1
  }]
};

new Chart(ctx, {
  type: "bar",
  data: progressData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10
        }
      }
    }
  }
});
