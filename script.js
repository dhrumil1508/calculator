const data = document.getElementById('data');

Tabnine|Edit|Test|Explain|Document|Ask
function display(input){
    data.value += input;
}

Tabnine|Edit|Test|Fix|Explain|Document|Ask
function cleardisplay(){
    data.value = '';
}

Tabnine |Edit|Test|Explain|Document|Ask
function calculate(){
    try{
        data.value = eval(data.value);
    } catch(e){
        data.value = 'Syntax error: ';
    }
}


