const {Visitante} = require("../models/Visitante");

const createVisitController = async (name) => {
    try {
        return await Visitante.create({name}
    
        );
    } catch (error) {
        console.error("Error al crear el visitante:", error);

        throw new Error("No se pudo crear el visitante.");
    }
};

module.exports = {createVisitController};

