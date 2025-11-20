/* DIV Sottrai */
/* Si crea il div che conterrà titolo e pulsante per la sottrazione */
const divSub = document.createElement('div');
/* Si assegna una classe a tale div */
divSub.className = 'd_sub';

/* TITOLO 'Sottrai 1' */
/* Si crea un titolo per identificare lo scopo del pulsante */
const titleSub = document.createElement('h2');
/* Si assegna una classe e il testo al titolo */
titleSub.className = 'title_sub';
titleSub.textContent = 'Sottrai 1';
/* Si aggiunge il Titolo al div */
divSub.appendChild(titleSub);
/* Fine TITOLO 'Sottrai 1' */

/*  BUTTON '-'  */
/* Si crea il pulsante per sottrarre al contatore */
const btnSub = document.createElement('button');
/* Si crea un div dentro il pulsante per gestire meglio il testo */
const divMinus = document.createElement('div');
/* Si va ad assegnare una classe al pulsante e al div */
btnSub.className = 'btn sub';
divMinus.className = 'd_minus';
/* Si assegna il simbolo '-' al div come testo */
divMinus.textContent = '-';
/* Si aggiungono i vari elementi creati alla pagina */
divSub.appendChild(btnSub);
btnSub.appendChild(divMinus);
/* Fine BUTTON '-' */

/* Si aggiunge il div sottrai alla pagina */
document.body.append(divSub);

/* Fine DIV Sottrai */


/* CONTATORE */
/* Si crea il div che conterrà titolo e pulsante per aggiungere */
const divCounter = document.createElement('div');
/* Si assegna una classe a tale div */
divCounter.className = 'd_counter';
/* Si crea titolo per identificare il Contatore  */
const titleCounter = document.createElement('h1');
/* Si assegna una classe ed un testo al titolo */
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


/* DIV Aggiungi */
/* Si crea il div che conterrà titolo e pulsante per aggiungere */
const divAdd = document.createElement('div');
/* Si assegna una classe a tale div */
divAdd.className = 'd_add';

/* TITOLO 'Aggiungi 1' */
/* Si crea un titolo per identificare lo scopo del pulsante */
const titleAdd = document.createElement('h2');
/* Si assegna una classe e il testo al titolo */
titleAdd.className = 'title_add';
titleAdd.textContent = 'Aggiungi 1';
/* Si aggiunge il Titolo al div */
divAdd.appendChild(titleAdd);
/* Fine TITOLO 'Aggiungi 1' */

/*  BUTTON '+'  */
/* Si crea il pulsante per aggiungere al contatore */
const btnAdd = document.createElement('button');
/* Si crea un div dentro il pulsante per gestire meglio il testo */
const divPlus = document.createElement('div');
/* Si va ad assegnare una classe al pulsante e al div */
btnAdd.className = 'btn add';
divPlus.className = 'd_plus'
/* Si assegna simbolo '+' al div come testo */
divPlus.textContent = '+';
/* Si aggiungono i vari elementi creati alla pagina */
divAdd.appendChild(btnAdd);
btnAdd.appendChild(divPlus);
/* Fine BUTTON '+' */

/* Si aggiunge il div aggiungi alla pagina */
document.body.appendChild(divAdd);

/* Fine DIV Aggiungi */


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

