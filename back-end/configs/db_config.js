const Sequelize = require("sequelize");

const sequelize = new Sequelize("emp_man_sys", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate()
  .then(() => {
    console.log("Connection Established !");
  })
  .catch((error) => {
    console.error("Error Connecting to database:", error);
  });

module.exports = sequelize;