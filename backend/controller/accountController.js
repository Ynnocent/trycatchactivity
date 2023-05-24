const AccountModel = require("../model/accountModel");

exports.getAccountData = (req, res) => {
  const accountList = AccountModel.fetchAccounts();
  res.json({
    status: 200,
    message: "GET sucessful, also you're cuteeeeeee",
    accountData: accountList,
  });
};

exports.postAccountData = (req, res) => {
  const { firstName, lastName, age, email } = req.body;
  const newAccountData = new AccountModel(firstName, lastName, age, email);
  newAccountData.save();

  res.json({
    status: 201,
    message: "POST successful, don't worry this class is ez you got this",
  });
};
