class Account {

    constructor(id = 0, name = "", amount = 0.00) {
        this.id = id;
        this.name = name;
        this.amount = amount
    }

    calculateIVA() {
        return parseFloat((this.amount * 0.12)
            .toFixed(2));
    }

    transferAmount(amount) {

        if (amount > this.amount) {
            return false;
        }
        this.amount = this.amount - amount;
        return true;
    }

    receiveAmount(amount) {
        this.amount = this.amount + amount;
    }


    taxDeclaration(years) {
        let declarations = []
        for (let i = 0; i < years; i++) {
            declarations.push(this.calculateIVA());
            this.amount = this.amount - (this.amount * 0.02);
        }
        return declarations;
    }
}

module.exports = Account;