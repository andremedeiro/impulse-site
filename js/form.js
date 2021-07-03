const inputs = document.querySelectorAll("input");
const alert = document.querySelector(".alert");

var dispara = true;
var temVazio = false;
document.querySelector("form button").addEventListener("click", function(){
    if (dispara) {
        disparaPixel();
        dispara = false;
    }

    temVazio = false;
    
    for(var i = 0; i < 3; i++ ){
        if(inputs[i].value.trim().length == 0) {
            temVazio = true;
        }
    }

    if(temVazio) {
        alert.style.top = "0px";
        setTimeout(() => {alert.style.top = "-100px"}, 1500);
    } else {
        submitForm();
    }
});

inputs[3].addEventListener('keyup', function() {
    if (inputs[3].value.trim().length != 0 ){
        inputs[4].style.display = "block";
        inputs[4].placeholder = "Qual o seu cargo na " + inputs[3].value + "?";
    } else {
        inputs[4].style.display = "none";
    }
});

function submitForm() {
    if (inputs[3].value.trim().length != 0) {

        let informacoes = `Nome do Contato: ${inputs[0].value}\nEmail do Contato: ${inputs[1].value}\nTelefone do Contato: ${inputs[2].value}`;

        if (inputs[4].value.trim().length != 0) {
            
            informacoes += `\nCargo do contato: ${inputs[4].value}`
            
            callAPI({
                link: "https://api-impulse-henna-one.vercel.app/api/pipefy/createTable",
                table_id: "A-7MYLTB",
                fields: `{  field_id: \"nome\", field_value: \"${inputs[0].value}\" }, {  field_id: \"email\", field_value: \"${inputs[1].value}\" }, {  field_id: \"telefone\", field_value: \"${inputs[2].value}\"}, {  field_id: \"empresa\", field_value: \"${inputs[3].value}\"}, {  field_id: \"cargo\", field_value: \"${inputs[4].value}\"}, {  field_id: \"entrada_via\", field_value: \"Página de captura do site\"}`
            });

        } else {        
            callAPI({
                link: "https://api-impulse-henna-one.vercel.app/api/pipefy/createTable",
                table_id: "A-7MYLTB",
                fields: `{  field_id: \"nome\", field_value: \"${inputs[0].value}\" }, {  field_id: \"email\", field_value: \"${inputs[1].value}\" }, {  field_id: \"telefone\", field_value: \"${inputs[2].value}\"}, {  field_id: \"empresa\", field_value: \"${inputs[3].value}\"}, {  field_id: \"entrada_via\", field_value: \"Página de captura do site\"}`
            });
        }

        callAPI({
            link: "https://api-impulse-henna-one.vercel.app/api/pipefy/createPipe",
            pipe_id: "301622022",
            phase_id: "310785032",
            fields: `{field_id: \"empresa\", field_value: \"${inputs[3].value}\"}, {field_id: \"por_onde_veio_esse_contato\", field_value: \"Página de captura do site\"}, {field_id: \"informa_es_sobre_o_lead_2\", field_value: \"${informacoes}\"}`
        })

    } else {        
        callAPI({
            link: "https://api-impulse-henna-one.vercel.app/api/pipefy/createTable",
            table_id: "A-7MYLTB",
            fields: `{ field_id: \"nome\", field_value: \"${inputs[0].value}\" }, {  field_id: \"email\", field_value: \"${inputs[1].value}\" }, {  field_id: \"telefone\", field_value: \"${inputs[2].value}\"}, {  field_id: \"entrada_via\", field_value: \"Página de captura do site\"}`
        });
    }
}

function callAPI(query) {
    var request = new XMLHttpRequest();

    request.open("POST", query.link);

    request.setRequestHeader("Content-Type", "application/json");

    request.send(JSON.stringify(query));

    request.onreadystatechange = function () {
        inputs.forEach(input => {
            input.value = '';
        })
        smoothScrollTo(document.offsetTop, 0, 200);
    }
}