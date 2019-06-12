class Ledger {

    constructor() {
        this.accounts = [];
    }

    setAccounts(accounts) {
        this.accounts = accounts;
    }

    getAccount(accountID) {
        return accounts.filter(account => account.id === accountID);
    }

    transfer(transmitterID, receiverID, amount) {
        const transmitter = this.getAccount(transmitterID);
        const receiver = this.getAccount(receiverID);

        if (transmitter.length === 0 || receiver.length === 0) {
            return "NOT FOUND"
        }

        if (!transmitter.transferAmount(amount)) {
            return "INSUFFICIENT FUNDS";
        }

        receiver.receiveAmount(amount);
        return "SUCCESS";
    }

    notify(transmitterID) {
        return "USER NOTIFIED!"
    }

    transferAndNotify(transmitterID, receiverID, amount) {
        const transferResult = this.transfer(transmitterID, receiverID, amount)
        switch (transferResult) {
            case "SUCCESS":
                this.notify(transmitterID);
                this.notify(receiverID);
                break;
            case "INSUFFICIENT FUNDS":
                this.notify(transmitterID);
                break;
            case "NOT FOUND":
                this.notify(transmitterID);
                break;
            default:
                break;
        }
    }

}

module.exports = Ledger;