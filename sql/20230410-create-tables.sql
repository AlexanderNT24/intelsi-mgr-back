CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR(255)
);

CREATE TABLE brands (
  brand_id SERIAL PRIMARY KEY,
  brand_name VARCHAR(255)
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_code VARCHAR(255),
  quantity INT,
  size_unit VARCHAR(50),
  comment TEXT,
  image VARCHAR(255),
  location VARCHAR(255),
  category_id INT REFERENCES categories(category_id),
  brand_id INT REFERENCES brands(brand_id)
);
