
const Sequelize = require('sequelize');
const FilmModel = require('./models/films');
const UserModel = require('./models/users');

const sequelize = new Sequelize('backend','root','programmer', {
    host: 'localhost',
    dialect: 'mysql'
});

const Film = FilmModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

console.log('Creating database');
const sql_create_database = 'CREATE DATABASE  IF NOT EXISTS backend';
sequelize.query(sql_create_database);


sequelize.sync({force: false}).then(() => {
    console.log('Tablas sincronizadas.')
    console.log('Inserting data of films I');
    sql_insert_films = "INSERT INTO films VALUES (2,'El Juego del Calamar','Pelicula coreana',4,'Ronald Angulo','2021-10-23 15:36:39','2021-10-23 15:36:39');";
    sequelize.query(sql_insert_films);

    sql_insert_films = "INSERT INTO films VALUES (3,' Ejército de los muertos','Casi veinte años después de s zombies con esta película de Netflix',3,'Ronald Angulo','2021-10-23 20:53:32','2021-10-23 20:53:32');";
    sequelize.query(sql_insert_films);

    sql_insert_films = "INSERT INTO films VALUES (4,'Cherry','Los hermanos Russo, creadores de algunas de las películas más aclamadas del Universo Cinematográfico de Marvel (UCM), incluida',3,'Ronald Angulo','2021-10-23 20:54:21','2021-10-23 20:54:21');";
    sequelize.query(sql_insert_films);

    sql_insert_films = "INSERT INTO films VALUES (5,'Snake Eyes: El origen','Este spin-off de  se centra en la historia de los orígenes de Snake Eyes (Henry Golding)',3,'Henry Golding','2021-10-23 20:54:47','2021-10-23 20:54:47');";
    sequelize.query(sql_insert_films);

    sql_insert_films = "INSERT INTO films VALUES (6,'Confinados','De entre las  que han surgido de la pandemia del Covid-19 a lo largo de 2020, y también ahora 2021',3,'HBO','2021-10-23 20:55:22','2021-10-23 20:55:22');";
    sequelize.query(sql_insert_films);

    sql_insert_films = "INSERT INTO films VALUES (7,'Mortal Kombat','El famoso videojuego vuelve a la gran pantalla por tercera vez, y las tortas y la violencia están aseguradas',3,'Simon McQuoid','2021-10-23 20:55:45','2021-10-23 20:55:45');";
    sequelize.query(sql_insert_films);

    sql_insert_films = "INSERT INTO users VALUES (1,'admin@ejemplo.poc','$2a$10$YgnXBmnw6kNu28s5DLvfPON8j1/dVVWike7nDQ8dY5ZHeA9Og9Jyy','2021-10-23 14:51:07','2021-10-23 14:51:07');";
    sequelize.query(sql_insert_films);

  
})





module.exports = {
    Film,
    User
}

