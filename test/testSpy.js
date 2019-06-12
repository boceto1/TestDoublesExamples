const sinon = require("sinon")
const chai = require("chai");
const expect = chai.expect;

const Account = require("../Account");

describe("Test Spy:calculateIva function", () => {
    context("when a user with 394$ calculate taxes for 5 years", () => {
        const account1 = new Account(1, "Jean", 394);
        const calculateIVASpy = sinon.spy(account1, "calculateIVA");
        account1.taxDeclaration(5);

        it("get's called 5 times", () => {
            expect(calculateIVASpy.callCount).equal(5)
        });
        it("return 47.98 on first call", () => {
            expect(calculateIVASpy.firstCall.returnValue).to.eq(47.28);
        });
        it("return 43.61 on last call", () => {
            expect(calculateIVASpy.lastCall.returnValue).to.eq(43.61);
        });
    });
});