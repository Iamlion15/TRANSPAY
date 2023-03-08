const accountModel = require("../model/accountModel");
const userModel = require("../model/userModel");

const validateAmount = async(req, res, next) => {
    const amount = req.body.amount;
    const phone = req.user;
    const accountuser = await userModel.findOne({ phoneNumber: phone });
    const account = await accountModel.findOne({ user: accountuser._id });
    const newAmount = account.balance + amount;
    if (amount < 0) {
        res.status(200).json({ "message": "amount can not be negative" });
    }
    else if (newAmount >= 5000000) {
        res.status(200).json({ "message": "balance can not exceed 5 millions" });
    }
    else {
        req.amount = newAmount;
        next();
    }
}

module.exports = validateAmount;