
let first_input = "";
let second_input = "";


function start() {
    let matrix_input1 = document.querySelector("#matrix_input1");
    let matrix_input2 = document.querySelector("#matrix_input2");
    let sum_input = document.querySelector("#sum_input");

    matrix_input1.innerHTML = "";
    matrix_input2.innerHTML = "";
    sum_input.innerHTML = "";

    first_input = document.querySelector("#first_input").value;
    second_input = document.querySelector("#second_input").value;

    if (first_input == "" || second_input == "") {
        alert("Please enter values");
        return;
    }

    if (isNaN(first_input) || isNaN(second_input)) {
        alert("Please enter numbers");
        return;
    }

    if (first_input != second_input) {
        alert("Please enter same number  of rows and columns");
        return;
    }

    if (first_input < 2 || first_input < 2) {
        alert("Please enter number greater than 1");
        return;
    }



    for (let i = 0; i < first_input; i++) {
        for (let j = 0; j < second_input; j++) {

            matrix_input1.innerHTML += `<input type="number" class="matrix_input" id="matrix_input1_${i}_${j}" required value= "0" min = "0" max = "999" style="width:40px;">`;

            matrix_input2.innerHTML += `<input type="number" class="matrix_input" id="matrix_input2_${i}_${j}" required value= "0" min = "0" max = "999" style="width:40px;">`;

            sum_input.innerHTML += `<input type="number" readonly class="matrix_input" id="sum_input_${i}_${j}" required placeholder ="0" style="width:40px;">`;
        }

        matrix_input1.innerHTML += `<br>`;
        matrix_input2.innerHTML += `<br>`;
        sum_input.innerHTML += `<br>`;
    }

    document.querySelector("#input_form").classList.remove("form_input");
}


function sum() {

    let matrix1 = [];
    let matrix2 = [];

    for (let i = 0; i < first_input; i++) {
        for (let j = 0; j < second_input; j++) {
            if (matrix1[i] === undefined) matrix1[i] = []
            if (matrix2[i] === undefined) matrix2[i] = []

            matrix1[i][j] = +document.querySelector(`#matrix_input1_${i}_${j}`).value
            matrix2[i][j] = +document.querySelector(`#matrix_input2_${i}_${j}`).value
        }
    }

    let select = document.getElementById('drop_down');
    let value = select.options[select.selectedIndex].value;
    console.log(value);

    if (value == "+") {
        let result = sumMatrix(matrix1, matrix2);
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result.length; j++) {
                document.querySelector(`#sum_input_${i}_${j}`).value = result[i][j];
            }
        }

    }

    else if (value == "-") {
        let result = subMatrix(matrix1, matrix2);
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result.length; j++) {
                document.querySelector(`#sum_input_${i}_${j}`).value = result[i][j];
            }
        }

    }

    else if (value == "x") {
        let result = mulMatrix(matrix1, matrix2);
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result.length; j++) {
                document.querySelector(`#sum_input_${i}_${j}`).value = result[i][j];
            }
        }

    }
}

function sumMatrix(matrix1, matrix2) {
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return result;
}

function subMatrix(matrix1, matrix2) {
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            result[i][j] = matrix1[i][j] - matrix2[i][j];
        }
    }
    return result;
}

function mulMatrix(matrix1, matrix2) {
    var aNumRows = matrix1.length, aNumCols = matrix1[0].length,
        bNumRows = matrix2.length, bNumCols = matrix2[0].length,
        result = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
        result[r] = new Array(bNumCols); // initialize the current row
        for (var c = 0; c < bNumCols; ++c) {
            result[r][c] = 0;             // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) {
                result[r][c] += matrix1[r][i] * matrix2[i][c];
            }
        }
    }
    return result;
}