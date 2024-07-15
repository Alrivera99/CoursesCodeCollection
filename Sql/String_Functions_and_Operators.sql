-- String Functions and Operators
-- https://www.postgresql.org/docs/9.1/functions-string.html
-- 1. String concatenation
SELECT 'jose' || ' ' || 'Mueller' AS full_name;
-- 2. String concatenation with one non-string input
SELECT 'jose' || 123 AS full_name;
-- 3. Number of bits in string
SELECT bit_length('jose') AS bit_length;
-- 4. Character length of string
SELECT char_length('jose') AS char_length;
-- 5. Convert string to lower case
SELECT lower('Jose') AS lower;
-- 6. Number of bytes in string
SELECT octet_length('jose') AS octet_length;
-- 7. Replace substring
SELECT overlay('Txxxxas' placing 'hom' from 2 for 4);
-- 8. Location of specified substring
SELECT position('om' in 'Thomas') AS position;

SELECT UPPER(name) AS upper_name,
       length(name) AS name_length,
       id || '-' || name AS id_name,
       name FROM users;

SELECT name,
       substring(name, 1, 5) AS first_three,
       position(' ' in name) AS space_position
       FROM users;

SELECT name,
       substring(name, 1, position(' ' in name) - 1) AS first_name,
       substring(name, position(' ' in name) + 1) AS last_name
       FROM users;

UPDATE users SET first_name = substring(name, 1, position(' ' in name) - 1),
                 last_name = substring(name, position(' ' in name) + 1);

SELECT * FROM users;