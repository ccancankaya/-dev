module.exports = (sequelize, Sequelize) => {
    const Ip_Info = sequelize.define("ip_infos", {
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      ip_address: {
        type: Sequelize.STRING
      }
    });
  
    return Ip_Info;
  };
  