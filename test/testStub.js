const sinon = require("sinon")
const chai = require("chai");
const expect = chai.expect;

const Account = require("../Account");
const Ledger = require("../Ledger");

describe("Test Stub:Transfer Function", () => {
    describe("when transmiter and receiver exist", () => {
        const ledger = new Ledger();
        const getAccount = sinon.stub(ledger, "getAccount");
        getAccount.withArgs(12).returns(new Account(12, "Jean", 345));
        getAccount.withArgs(13).returns(new Account(13, "Daniel", 23));
        context("transmiter transfer 10$  to receiver", () => {
            const transferSpy = sinon.spy(ledger, "transfer");
            ledger.transfer(12, 13, 10);
            it("function getAccount has called twice", () => {
                expect(getAccount.callCount).equal(2);
            });
            it("transfer return SUCCESS", () => {
                expect(transferSpy.firstCall.returnValue).equal("SUCCESS");
            });
        })
    });
});