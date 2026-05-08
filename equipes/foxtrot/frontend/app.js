// --- COMMIT 3: Base do Frontend e Variáveis ---
const API_URL = "/api/v1";

window.onload = () => {
    if (localStorage.getItem("token")) {
        showTodoSection();
        loadTasks();
    }
}
