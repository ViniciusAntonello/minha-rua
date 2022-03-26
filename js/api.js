const inputCep = document.querySelector('#cep');
const inputStreet = document.querySelector("#rua"); 
const inputComplement = document.querySelector("#complemento"); 
const inputNeighborhood = document.querySelector("#bairro"); 
const inputUF = document.querySelector("#UF"); 

const BASE_URL = 'https://brasilapi.com.br/api'

inputCep.onkeyup = async (event) => {
    if(inputCep.value.length < 8) {
        return;
    }

    const answer = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
        method: 'GET',
    });

    const answerContent = await answer.json();

    inputStreet.value = answerContent.street;
    inputNeighborhood.value = answerContent.neighborhood;
    inputUF.value = answerContent.state;
    inputComplement.value = answerContent.city;

    console.log(answerContent);
    // alert(`Cep completo: ${inputCep.value}`);
}