// // ملف script.js
//
// // مثال: زرار "تفاصيل" يفتح رسالة منبثقة
// document.addEventListener("DOMContentLoaded", () => {
//   const detailButtons = document.querySelectorAll(".car-card a");
//
//   detailButtons.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//       event.preventDefault(); // يمنع الانتقال لصفحة جديدة
//       alert("سيتم عرض تفاصيل السيارة قريباً 🚗");
//     });
//   });
// });
//
// // مثال: تغيير لون الهيدر عند التمرير
// window.addEventListener("scroll", () => {
//   const header = document.querySelector("header");
//   if (window.scrollY > 50) {
//     header.style.backgroundColor = "#2563eb"; // أزرق فاتح
//   } else {
//     header.style.backgroundColor = "#1e3a8a"; // أزرق غامق
//   }
// });

async function loadCars() {
  try {
    const response = await fetch("/api/cars"); // calls Express API
    const cars = await response.json();

    const container = document.getElementById("car-container");
    container.innerHTML = ""; // clear old content

    cars.forEach((car) => {
      const card = document.createElement("div");
      card.className = "car-card";
      card.innerHTML = `
        <img src="/public/${car.image}" alt="${car.model}" />
        <h3>${car.model}</h3>
        <p>السعر: ${car.price} جنيه</p>
        <a href="car-detail.html?id=${car.id}">تفاصيل</a>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading cars:", err);
  }
}

async function addCustomer() {
  const name = document.getElementById("cust-name").value;
  const phone = document.getElementById("cust-phone").value;
  await fetch("http://localhost:3000/customers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone }),
  });
  alert("Customer added!");
}

loadCars();
