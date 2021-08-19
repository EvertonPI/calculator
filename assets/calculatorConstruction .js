function Calculator() {
  let display = document.querySelector(".display");
  this.initial = () => {
    captureClick();
    pressEnter();
  };

  const pressEnter = () =>
    display.addEventListener("keyup", e => {
      if (e.keyCode === 13) doAccount();
    });

  const captureClick = () => {
    document.addEventListener("click", e => {
      const el = e.target;
      if (el.classList.contains("btn-num")) addNumDisplay(el);
      if (el.classList.contains("clear")) btnClear();
      if (el.classList.contains("del")) deleteOne();
      if (el.classList.contains("eq")) doAccount();
    });
  };

  const addNumDisplay = el => (display.value += el.innerHTML);
  const btnClear = () => (display.value = "");
  const deleteOne = () => (display.value = display.value.slice(0, -1));
  const doAccount = () => {
    try {
      let account = eval(display.value);
      // com sinal + significa que será numeros só
      display.value = +account;

      if (!account || undefined) {
        alert("precisa realizar a conta");
        return (display.value = "");
      }
    } catch (error) {
      alert("verifique os números e aritmética");
    }
  };
}

const calculator = new Calculator();
calculator.initial();
