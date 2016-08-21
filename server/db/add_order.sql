-- insert into orders (productName, price, container, notes, quantity, userName, phone)
--   values ($1, $2, $3, $4, $5, $6, $7);

insert into orders (object) values ($1);
