SELECT orders.orderid AS "id", username AS "client", productQuantity AS "quantity",
  productname AS "product", productmeasure AS "unit", productPrice AS "price", productnotes AS "notes" FROM invoice
JOIN orders ON orders.orderId = invoice.orderId JOIN users ON users.userId = orders.userId
WHERE productQuantity IS NOT NULL;
