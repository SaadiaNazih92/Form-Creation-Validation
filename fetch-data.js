document.addEventListener('DOMContentLoaded', function() {

    // Una volta che il DOM è pronto, chiamiamo la nostra funzione per recuperare i dati.

    fetchUserData();

});
async function fetchUserData() {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
 	 throw new Error(`HTTP error! status: ${response.status}`);

        }
        const users = await response.json();

        dataContainer.innerHTML = '';
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');

            listItem.textContent = user.name;
            userList.appendChild(listItem);

        });
        dataContainer.appendChild(userList);
    } catch (error) {
        console.error('Errore durante il fetch dei dati:', error); // Logga l'errore in console per il debug.

        dataContainer.innerHTML = 'Failed to load user data.';

    }

}
