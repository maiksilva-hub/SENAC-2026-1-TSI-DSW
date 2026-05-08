// --- COMMIT 3: Base do Frontend e Variáveis ---
const API_URL = "/api/v1";

window.onload = () => {
    if (localStorage.getItem("token")) {
        showTodoSection();
        loadTasks();
    }
}

// --- COMMIT 4: Funcionalidade de Autenticação (Login/Register) ---
async function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: user, password: pass })
    });

    if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", data.token); // Salva o JWT no navegador
        showTodoSection();
        loadTasks();
    } else {
        alert("Credenciais inválidas!");
    }
}

async function register() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: user, password: pass })
    });

    if (res.ok) alert("Usuário criado! Agora faça login.");
}

function logout() {
    localStorage.removeItem("token");
    document.getElementById("auth-section").style.display = "block";
    document.getElementById("todo-section").style.display = "none";
}

function showTodoSection() {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("todo-section").style.display = "block";
}
