document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.text();
    document.getElementById("message").innerText = data;

    if (response.ok) {
      if (data.role === "employee") {
        window.location.href = "/employees/dashboard.html";
      } else if (data.role === "customer") {
        window.location.href = "/customers/dashboard.html";
      }
    }
  } catch (err) {
    console.error(err);
    document.getElementById("message").innerText = "Error logging in.";
  }
});
