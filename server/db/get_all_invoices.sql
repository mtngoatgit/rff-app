SELECT orders.orderid AS "id", username AS "client", productQuantity AS "quantity",
  productname AS "product", productmeasure AS "unit", productPrice AS "price", productnotes AS "notes" FROM invoice
JOIN orders ON orders.orderid = invoice.orderid JOIN users ON users.userid = orders.userid;
