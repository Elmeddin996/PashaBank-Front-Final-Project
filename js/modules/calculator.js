export function calculatorEvents() {

    const rangeAmount = document.querySelector("#amount");
    const outputAmount = document.querySelector("#amount-show");
    const textInputAmount = document.querySelector("#amount-text-input")
    const rangeTerm = document.querySelector("#term");
    const outputTerm = document.querySelector("#term-show");
    const textInputTerm = document.querySelector("#term-text-input")


    let percentage;
    calculationTermRange(rangeTerm.value)
    calculationTermInput(textInputTerm.value)

    rangeTerm.oninput = function () {
        calculationAmount(textInputAmount.value, this.value)
        calculationTermRange(this.value)
        textInputTerm.value = rangeTerm.value;
    }

    textInputTerm.oninput = function () {
        textInputTerm.value = 3;
        rangeTerm.value = textInputTerm.value;
    }

    rangeAmount.oninput = function () {

        calculationAmount(this.value, rangeTerm.value)
        textInputAmount.value = rangeAmount.value;
    }

    textInputAmount.oninput = function () {
        calculationAmount(this.value, rangeTerm.value)
        rangeAmount.value = textInputAmount.value;

    }

    function calculationTermRange(value) {
        if (value <= 6) {
            percentage = "12%";
        } else if (value > 6 && value < 10) {
            percentage = "14%";

        } else if (value >= 10 && value < 13) {
            percentage = "15.5%";

        } else if (value >= 13 && value < 19) {
            percentage = "16.5%";

        }
        else if (value >= 19) {
            percentage = "17%";

        }
        outputTerm.innerHTML = percentage;

    }

    function calculationTermInput(value) {
        if (value <= 6) {
            percentage = "12%";
        } else if (value > 6 && value < 10) {
            percentage = "14%";

        } else if (value >= 10 && value < 13) {
            percentage = "15.5%";

        } else if (value >= 13 && value < 19) {
            percentage = "16.5%";

        }
        else if (value >= 19) {
            percentage = "17%";

        }

        outputTerm.innerHTML = percentage;
    }

    function calculationAmount(amountVal, termVal) {
        let percent;
        if (termVal <= 6) {
            percent = 12;
        } else if (termVal > 6 && termVal < 10) {
            percent = 14

        } else if (termVal >= 10 && termVal < 13) {
            percent = 15.5;

        } else if (termVal >= 13 && termVal < 19) {
            percent = 16.5;

        }
        else if (termVal >= 19) {
            percent = 17;
        }

        let count = Number(amountVal) + (amountVal * (percent / 100));
        let finalAmount = count / termVal
        outputAmount.innerHTML = parseFloat(finalAmount.toFixed(2)) + " AZN";

    }

}

