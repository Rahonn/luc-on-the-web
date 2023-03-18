export function saveTemp(code) {
    sessionStorage.setItem("code", btoa(code));
}

export function loadTemp() {
    return sessionStorage.getItem("code");
}
