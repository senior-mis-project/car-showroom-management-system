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
  const response = await fetch("http://localhost:3000/cars");
  const cars = await response.json();
  const list = document.getElementById("car-list");
  list.innerHTML = cars.map(c => `<li>${c.model} - $${c.price}</li>`).join("");
}

async function addCustomer() {
  const name = document.getElementById("cust-name").value;
  const phone = document.getElementById("cust-phone").value;
  await fetch("http://localhost:3000/customers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone })
  });
  alert("Customer added!");
}

loadCars();

