import { ssrImportKey } from "vite/module-runner";

const API_URL = "https://fakestoreapi.com"


export async function fetchAllProds() {
    try {
        const response = await fetch(`${API_URL}/products`)
        const result = await response.json()
        return result;
    } catch (e) {
        console.log("Error GET all prods=> ", e);
    }
}

export async function login(username, password) {
    try {
        const response = await fetch(`${API_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            })
        });

        const result = await response.json();
        return result;
    } catch (e) {
        console.log("Error login: ", e)
    }
}

export async function registerUser(newUser) {
    try{
        const response = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        });
        
        const result = await response.json();
        return result;
    } catch(e){
        console.error("Error Register User: ", error);
    }
}