-- CREATE TABLE profiles (
--   id serial primary key not null,
--   name varchar(70),
--   password varchar(200),
-- )
-- HOW TO ADD TABLES VIA COMMAND LINE:

CREATE TABLE wholesale_summary (
  id serial primary key not null,
  note text
);

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

CREATE TABLE users (
  userId serial primary key not null,
  userName varchar(30),
  userEmail varchar(320) unique,
  userPhone text
);

CREATE TABLE orders (
  userId int REFERENCES users (userId),
  orderId serial primary key not null
);

CREATE TABLE invoice (
  orderId int REFERENCES orders (orderId),
  productName varchar(70),
  productMeasure varchar(70),
  productNotes text,
  productPrice money,
  productQuantity int
);

CREATE TABLE notes (
  id serial primary key not null,
  note text
);
