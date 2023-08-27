const {DataTypes} = require ('sequelize')

module.exports = (sequielize) =>{
    sequielize.define(
    "Visitante",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
          },
        name:{
            type: DataTypes.STRING,
            defaultValue:"visitante",
            allowNull: false
        },
        fecha:{
            type:DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull:false
        }
    
    }
    )
}
