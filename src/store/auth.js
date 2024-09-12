import {defineStore} from "pinia";

export const useAuthStore = defineStore("user", {
    state: () => ({
        userToken: null,
        user: null,
    }),

    actions: {
        async loginUser(user) {
            try {
                const raw = JSON.stringify(user);
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const response = await fetch(`https://localhost:7170/api/Login`, {
                    method: "POST",
                    headers: myHeaders,
                    body: raw
                });

                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }

                const data = await response.text();
                console.log(data)

                this.userToken = data;
                localStorage.setItem("auth", data);

                return data;  // Retourne les données si nécessaire
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        async registerUser(user) {
            try {
                const raw = JSON.stringify(user);
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const response = await fetch(`https://localhost:7170/api/Register`, {
                    method: "POST",
                    headers: myHeaders,
                    body: raw
                });

                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }

                return await response.json();  // Retourne les données si nécessaire
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        async getUser() {
            try {
                const token = localStorage.getItem("auth");
                if (!token) {
                    throw new Error("Aucun token trouvé dans le localStorage.");
                }

                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                console.log(token);
                myHeaders.append("Authorization", `Bearer ${token}`);

                const response = await fetch(`https://localhost:7170/api/User/me`, {
                    method: "GET",
                    headers: myHeaders
                });

                if (!response.ok) {
                    // Si la réponse n'est pas réussie (par exemple, statut 4xx ou 5xx)
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }

                const userData = await response.json();

                this.user = userData.data;

                return userData; // Si vous souhaitez renvoyer les données à l'appelant
            } catch (err) {
                console.error(err);
                throw err; // Assurez-vous de relancer l'erreur pour que l'appelant puisse la gérer
            }
        }
    }
});