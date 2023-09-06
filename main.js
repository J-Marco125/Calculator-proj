function displayToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculatedResult() {
    try {
        document.getElementById("result").value = eval(
            document.getElementById("result").value
        );
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}