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
    idProducto INT NOT NULL
    -- Otras columnas que puedas necesitar
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
