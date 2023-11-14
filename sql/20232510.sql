CREATE TABLE projects (
    id serial PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    code VARCHAR (255) NOT NULL,
    execution_time NUMERIC NOT NULL
);

CREATE TABLE request (
    id SERIAL PRIMARY KEY,
    dateRequest DATE NOT NULL,
    dateShipment DATE NOT NULL,
    requestStatus VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    idProducto INT NOT NULL,
    supervisorStatus VARCHAR(255), -- Puedes ajustar el tipo de datos según tus necesidades
    supervisor_id INT, -- Este es un ejemplo, asegúrate de que sea el tipo de dato correcto
    
    -- Agrega una clave foránea para relacionar con la tabla de supervisores (si es necesario)
    FOREIGN KEY (supervisor_id) REFERENCES user_intelsi(id)
);

CREATE TABLE user_intelsi (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    enabled BOOLEAN NOT NULL,
    rol VARCHAR(255) NOT NULL
);
