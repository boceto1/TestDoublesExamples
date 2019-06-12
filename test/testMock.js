const sinon = require("sinon")

const Ledger = require("../Ledger");


describe("Test Mocks: transferAndNotify function", function () {
    context("when transferID and receiverID exists", () => {
        const ledger = new Ledger();
        var mockLedger = sinon.mock(ledger);
        it("get's SUCCESS", () => {
            mockLedger.expects("transfer").withArgs(12, 13, 123).returns("SUCCESS");
        })
        it("Notify transfer and receiver User", () => {
            mockLedger.expects("notify").withArgs(12).returns("USER NOTIFIED");
            mockLedger.expects("notify").withArgs(13).returns("USER NOTIFIED");
            ledger.transferAndNotify(12, 13, 123);
            mockLedger.verify();
        });
    })
});