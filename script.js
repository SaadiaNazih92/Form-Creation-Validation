const form = document.getElementById('registration-form');

        const feedbackDiv = document.getElementById('form-feedback');



        

        form.addEventListener('submit', function(event) {

            

            event.preventDefault(); 

            

            

            const username = document.getElementById('username').value.trim();

            const email = document.getElementById('email').value.trim();

            const password = document.getElementById('password').value.trim();



            

            let isValid = true;

            const messages = [];



           

            if (username.length < 3) {

                isValid = false;

                messages.push('Lo username deve contenere almeno 3 caratteri.');

            }



          

            if (!email.includes('@') || !email.includes('.')) {

                isValid = false;

                messages.push('Inserisci un indirizzo email valido.');

            }



                        if (password.length < 8) {

                isValid = false;

           

     messages.push('La password deve essere lunga almeno 8 caratteri.');

            }



            

            feedbackDiv.style.display = 'block'; // Rendiamo il div visibile



            if (isValid) {

                feedbackDiv.textContent = 'Registrazione avvenuta con successo!';

                feedbackDiv.style.backgroundColor = 'green';

                feedbackDiv.style.color = 'white';

            } else {

               

                feedbackDiv.innerHTML = messages.join('<br>');

                feedbackDiv.style.backgroundColor = '#ffbaba'; // Rosso chiaro

                feedbackDiv.style.color = '#d8000c';       // Rosso scuro

            }

        });
