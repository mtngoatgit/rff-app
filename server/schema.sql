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
