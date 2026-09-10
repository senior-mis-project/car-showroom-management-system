async function loadCarDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) return;

  try {
    const response = await fetch(`/api/cars/${id}`);
    const car = await response.json();

    const detail = document.getElementById("car-detail");
    detail.innerHTML = `
      <div class="car-detail">
        <img src="/public/${car.image}" alt="${car.model}" />
        <div class="car-info">
          <h2>${car.model}</h2>
          <p>السعر: ${car.price} جنيه</p>
          <table class="specs">
            <tr><th>الموديل</th><td>${car.year || "غير محدد"}</td></tr>
            <tr><th>المحرك</th><td>${car.engine || "غير محدد"}</td></tr>
            <tr><th>الكيلومترات</th><td>${car.mileage || "غير محدد"}</td></tr>
            <tr><th>ناقل الحركة</th><td>${car.transmission || "غير محدد"}</td></tr>
            <tr><th>الوصف</th><td>${car.description || "لا يوجد وصف"}</td></tr>
          </table>
        </div>
      </div>
    `;
  } catch (err) {
    console.error(err);
    document.getElementById("car-detail").innerHTML =
      "<p>حدث خطأ أثناء تحميل السيارة.</p>";
  }
}
loadCarDetail();
