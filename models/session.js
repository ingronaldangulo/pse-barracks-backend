module.exports = (sequelize, type) => {
    return sequelize.define('session', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: type.INTEGER,
        token: type.STRING
    })
}