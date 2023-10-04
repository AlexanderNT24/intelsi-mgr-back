
-- Insertar una categoría de minerales
INSERT INTO categories (category_name) VALUES ('Minerales');

-- Insertar una categoría de equipos mineros
INSERT INTO categories (category_name) VALUES ('Equipos Mineros');

-- Insertar una categoría de explosivos
INSERT INTO categories (category_name) VALUES ('Explosivos');

-- Insertar una marca de equipos mineros
INSERT INTO brands (brand_name) VALUES ('Caterpillar');

-- Insertar otra marca de equipos mineros
INSERT INTO brands (brand_name) VALUES ('Komatsu');

-- Insertar una tercera marca de equipos mineros
INSERT INTO brands (brand_name) VALUES ('Volvo Construction Equipment');
INSERT INTO products (product_code, quantity, size_unit, comment, image, location, category_id, brand_id)
VALUES ('M001', 1000, 'kg', 'Mineral de oro de alta pureza', 'https://example.com/gold.jpg', 'Mina A', 1, 1);
INSERT INTO products (product_code, quantity, size_unit, comment, image, location, category_id, brand_id)
VALUES ('M002', 500, 'toneladas', 'Carbón térmico de calidad superior', 'https://example.com/coal.jpg', 'Mina B', 2, 1);
INSERT INTO products (product_code, quantity, size_unit, comment, image, location, category_id, brand_id)
VALUES ('M003', 800, 'toneladas', 'Mineral de cobre en bruto', 'https://example.com/copper.jpg', 'Mina C', 1, 2);



