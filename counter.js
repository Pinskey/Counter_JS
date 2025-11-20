/*  BUTTON '-'  */
/* Si crea il pulsante per togliere al contatore */
const btnSub = document.createElement('button');
/* Si crea un div dentro il pulsante per gestire meglio il testo */
const divMinus = document.createElement('div');
/* Si va ad assegnare una classe al pulsante e al div inoltre si assegna simbolo '-' al div */
btnSub.className = 'btn sub';
divMinus.className = 'div minus';
divMinus.textContent = '-';
/* Si aggiungono i vari elementi creati alla pagina */
document.body.appendChild(btnSub);
btnSub.appendChild(divMinus);


/* CONTATORE */
/* Si crea il counter inizializzato a 0 */
const counter = document.createElement('div');
/* Si va ad assegnare una classe al div e si assegna un testo di default */
counter.className = 'counter';
counter.textContent = '0'
/* Si aggiungono i vari elementi creati alla pagina */
document.body.appendChild(counter);


/*  BUTTON '+'  */
/* Si crea il pulsante per aggiungere al contatore */
const btnAdd = document.createElement('button');
/* Si crea un div dentro il pulsante per gestire meglio il testo */
const divPlus = document.createElement('div');
/* Si va ad assegnare una classe al pulsante e al div inoltre si assegna simbolo '+' al div */
btnAdd.className = 'btn add';
divPlus.className = 'div plus'
divPlus.textContent = '+';
/* Si aggiungono i vari elementi creati alla pagina */
document.body.appendChild(btnAdd);
btnAdd.appendChild(divPlus);


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
    }
})