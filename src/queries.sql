-- 1. Write a query to retrieve the 10 most recently onboarded customers.
  SELECT *
    FROM onboarded_customers -- NOTE: Assuming table name.
ORDER BY created_at DESC     -- NOTE: Assuming field.
   LIMIT 10;

-- 2. Write a query that filter all customers with emails from @gmail.com.
SELECT *
  FROM onboarded_customers
 WHERE email LIKE '%@gmail.com'; -- NOTE: Assuming field.
-- TODO: Case-sensitive?

-- 3. Write a query that shows the number of customers created per month in 2025.
SELECT COUNT(*)::float / 12.0 AS customers_per_month
  FROM onboarded_customers
 WHERE created_at >= '2025-01-01'
   AND created_at < '2026-01-01';
-- TODO: Extend with computing difference in months to make `12.0` dynamic.

-- 4. Write a query to find all email addresses that appear more than once.
  SELECT email,
         COUNT(*) AS total
    FROM onboarded_customers
GROUP BY email
  HAVING COUNT(*) > 1;

-- 5. Write a query to find all customers whose first name starts with "A".
SELECT *
  FROM onboarded_customers
 WHERE first_name LIKE 'A%'; -- NOTE: Assuming field.
-- TODO: Case-sensitive?
