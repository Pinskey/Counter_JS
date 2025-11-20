/*  BUTTON '-'  */
const divSub = document.createElement('div');
divSub.className = 'd_sub';
const titleSub = document.createElement('h2');
titleSub.className = 'titleSub';
titleSub.textContent = 'Sottrai 1';
divSub.appendChild(titleSub);
/* Si crea il pulsante per togliere al contatore */
const btnSub = document.createElement('button');
/* Si crea un div dentro il pulsante per gestire meglio il testo */
const divMinus = document.createElement('div');
/* Si va ad assegnare una classe al pulsante e al div inoltre si assegna simbolo '-' al div */
btnSub.className = 'btn sub';
divMinus.className = 'd_minus';
divMinus.textContent = '-';
/* Si aggiungono i vari elementi creati alla pagina */
divSub.appendChild(btnSub);
btnSub.appendChild(divMinus);
document.body.append(divSub);


/* CONTATORE */
const divCounter = document.createElement('div');
divCounter.className = 'd_counter';
const titleCounter = document.createElement('h1');
titleCounter.className = 't_counter';
titleCounter.textContent = 'Contatore';
/* Si crea il counter inizializzato a 0 */
const counter = document.createElement('div');
/* Si va ad assegnare una classe al div e si assegna un testo di default */
counter.className = 'counter';
counter.textContent = '0'
/* Si aggiungono i vari elementi creati alla pagina */
document.body.appendChild(divCounter);
divCounter.appendChild(titleCounter);
divCounter.appendChild(counter);


/*  BUTTON '+'  */
const divAdd = document.createElement('div');
divAdd.className = 'd_add';
const titleAdd = document.createElement('h2');
titleAdd.className = 'titleAdd';
titleAdd.textContent = 'Aggiungi 1';
divAdd.appendChild(titleAdd);
/* Si crea il pulsante per aggiungere al contatore */
const btnAdd = document.createElement('button');
/* Si crea un div dentro il pulsante per gestire meglio il testo */
const divPlus = document.createElement('div');
/* Si va ad assegnare una classe al pulsante e al div inoltre si assegna simbolo '+' al div */
btnAdd.className = 'btn add';
divPlus.className = 'd_plus'
divPlus.textContent = '+';
/* Si aggiungono i vari elementi creati alla pagina */
divAdd.appendChild(btnAdd);
btnAdd.appendChild(divPlus);
document.body.appendChild(divAdd);


/* IMPLEMENTAZIONE FUNZIONI CONTATORE */
/* Si converte il valore del counter da numero a stringa per potervi sommare e sottrarre ad ogni click*/
var numCounter = Number(counter.textContent);
/* Si crea l' eventListener nel caso di click sul pulsante di aggiunta */
btnAdd.addEventListener('click',()=>{
    numCounter = Number(counter.textContent) + 1;
    counter.textContent = numCounter.toString();
})
/* Si crea l' eventListener nel caso di click sul pulsante di sottrazione */
btnSub.addEventListener('click', ()=>{
    if(numCounter > 0){
        numCounter = Number(counter.textContent) - 1;
        counter.textContent = numCounter.toString();
    }else{
        alert('Non sono permessi numeri negativi!');
    }
})