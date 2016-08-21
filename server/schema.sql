-- CREATE TABLE profiles (
--   id serial primary key not null,
--   name varchar(70),
--   password varchar(200),
-- )

CREATE TABLE products (
  id serial primary key not null,
  name varchar(70),
  price money,
  container varchar(30),
  notes text
);

CREATE TABLE markets (
  id serial primary key not null,
  name varchar(70),
  address varchar(110),
  times varchar(70),
  notes text
);

-- CREATE TABLE orders (
--   id serial primary key not null,
--   productName varchar(70),
--   price money,
--   container varchar(30),
--   notes text,
--   quantity integer,
--   userName varchar(70),
--   phone integer
-- );

CREATE TABLE orders (
  id serial primary key not null,
  object text[]
);

CREATE TABLE notes (
  id serial primary key not null,
  note text
);
