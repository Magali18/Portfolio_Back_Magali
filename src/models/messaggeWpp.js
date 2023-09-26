const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "messageWpp",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      number: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      messagge: {
        type: DataTypes.TEXT,
        allowNull:false
      },
    },
    { timestamps: false }
  );
};
