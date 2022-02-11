var equal = false;
var save = null;

function update_input_bar(number) {
    if (equal == true){
        clear_input();
        equal = false;
    }

    var input = document.getElementById("tx").value;
    if (input.length > 8)return false;
    if(input.substr(input.length - 1) != "+" && input.length < 7){
        document.getElementById("tx").value += number;
        console.log(number);
    }
    else if (number != "+")document.getElementById("tx").value += number;
}

function add(sym){
    if (save == null && document.getElementById("tx").value !== ""){
        document.getElementById("tx").value += sym;
        save = document.getElementById("tx").value;
        document.getElementById("tx").value = "";
    }
    else equal_output();
}

function clear_input() {
    document.getElementById("tx").value = "";
    save = null;
}

function equal_output() {
    if (save != null && equal == false && document.getElementById("tx").value !== ""){
        document.getElementById("tx").value = eval(save + document.getElementById("tx").value);
        save = document.getElementById("tx").value;
        equal = true;
    }
}
