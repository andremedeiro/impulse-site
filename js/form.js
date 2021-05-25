const inputs = document.querySelectorAll("input");

var dispara = true;
document.querySelector("form button").addEventListener("click", function(){
    if (dispara) {
        disparaPixel();
    }
    submitForm();
    dispara = false;
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
        if (inputs[4].value.trim().length != 0) {
            callAPI(`mutation { createTableRecord(input: { table_id: \"A-7MYLTB\" fields_attributes: [{  field_id: \"nome\", field_value: \"${inputs[0].value}\" }, {  field_id: \"email\", field_value: \"${inputs[1].value}\" }, {  field_id: \"telefone\", field_value: \"${inputs[2].value}\"}, {  field_id: \"empresa\", field_value: \"${inputs[3].value}\"}, {  field_id: \"cargo\", field_value: \"${inputs[4].value}\"}, {  field_id: \"entrada_via\", field_value: \"Página de captura do site\"}] }) { table_record { record_fields { name value } } } }`);
        } else {
            callAPI(`mutation { createTableRecord(input: { table_id: \"A-7MYLTB\" fields_attributes: [{  field_id: \"nome\", field_value: \"${inputs[0].value}\" }, {  field_id: \"email\", field_value: \"${inputs[1].value}\" }, {  field_id: \"telefone\", field_value: \"${inputs[2].value}\"}, {  field_id: \"empresa\", field_value: \"${inputs[3].value}\"}, {  field_id: \"entrada_via\", field_value: \"Página de captura do site\"}] }) { table_record { record_fields { name value } } } }`);
        }
        callAPI(`mutation{ createCard(input: {pipe_id: 301622022 phase_id: 310785032 fields_attributes: [{field_id: \"empresa\", field_value: \"${inputs[3].value}\"}, {field_id: \"por_onde_veio_esse_contato\", field_value: \"Página de captura do site\"}] }) { card {id title }}}`);
    } else {
        callAPI(`mutation { createTableRecord(input: { table_id: \"A-7MYLTB\" fields_attributes: [{  field_id: \"nome\", field_value: \"${inputs[0].value}\" }, {  field_id: \"email\", field_value: \"${inputs[1].value}\" }, {  field_id: \"telefone\", field_value: \"${inputs[2].value}\"}, {  field_id: \"entrada_via\", field_value: \"Página de captura do site\"}] }) { table_record { record_fields { name value } } } }`);
    }
}

function callAPI(query) {
    var request = new XMLHttpRequest();

    request.open("POST", "https://app.pipefy.com/queries");

    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDEyMjMwMzIsImVtYWlsIjoiYW5kcmUubHVjYXMubWVkZWlyQGdtYWlsLmNvbSIsImFwcGxpY2F0aW9uIjozMDAwOTY2MTh9fQ.gQQHYNEFzLTy8C1SUmGMJs4Uiie_z71Gj0D_X2bL4ybpfM5bMvS7wTSfGgVFcwmcn2gjkyOOPsLei5XnWXnl4g");

    var body = {
        "query": query
    };

    request.send(JSON.stringify(body));
}