export function saveTemp(code) {
    sessionStorage.setItem("code", btoa(code));
}

export function loadTemp(code) {
    return sessionStorage.getItem("code");
}
