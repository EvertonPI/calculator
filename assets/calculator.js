function createCalculator() {
  return {
    display: document.querySelector(".display"),

    initial() {
      this.cliqueBottom();
      this.pressEnter();
    },
    pressEnter() {
      this.display.addEventListener("keyup", e => {
        if (e.keyCode === 13) this.doAccount();
      });
    },
    btnStopDisplay(el) {
      this.display.value += el;
    },
    btnClear() {
      this.display.value = 0 || "";
    },
    btnDeleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    doAccount() {
      let account = this.display.value;
      try {
        account = eval(account);
        this.display.value = +account;
        if (!account) alert("conta invalida, fazer a conta que deseja");
        return;
      } catch (erro) {
        alert("só numeros");
        return;
      }
    },
    cliqueBottom() {
      document.addEventListener("click", e => {
        const el = e.target;

        if (el.classList.contains("btn-num")) this.btnStopDisplay(el.innerText);
        if (el.classList.contains("clear")) this.btnClear();
        if (el.classList.contains("del")) this.btnDeleteOne();
        if (el.classList.contains("eq")) this.doAccount();
      });
    },
  };
}

const calculator = createCalculator();
calculator.initial();
