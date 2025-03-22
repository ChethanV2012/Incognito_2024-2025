import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDt8_OUKqnzhOo_107UEJ23uIB50ydB2to",
    authDomain: "incognito-13104.firebaseapp.com",
    databaseURL: "https://incognito-13104-default-rtdb.firebaseio.com/",
    projectId: "incognito-13104",
    storageBucket: "incognito-13104.appspot.com",
    messagingSenderId: "508309575287",
    appId: "1:508309575287:web:89fce1ea39f8aa8692d872"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

const tableBody = document.getElementById("registrationTableBody");
const totalRegistrationsSpan = document.getElementById("totalRegistrations");

function fetchRegistrations() {
    onValue(ref(database, "event_registrations"), (snapshot) => {
        tableBody.innerHTML = "";
        let count = 0;
        if (snapshot.exists()) {
            const registrations = snapshot.val();
            Object.keys(registrations).forEach((key, index) => {
                const data = registrations[key];
                const row = `<tr>
                    <td>${index + 1}</td>
                    <td>${data.teamName}</td>
                    <td>${data.userName}</td>
                    <td>${data.phoneNumber}</td>
                    <td>${data.emailId}</td>
                    <td>${data.collegeName}</td>
                    <td>${data.selectedEvent}</td>
                    <td><button class="delete-btn" onclick="deleteEntry('${key}')">Delete</button></td>
                </tr>`;
                tableBody.innerHTML += row;
                count++;
            });
        }
        totalRegistrationsSpan.textContent = count;
    });
}

window.deleteEntry = function (key) {
    if (confirm("Are you sure you want to delete this registration?")) {
        remove(ref(database, "event_registrations/" + key)).then(() => {
            fetchRegistrations();
        });
    }
};

fetchRegistrations();





