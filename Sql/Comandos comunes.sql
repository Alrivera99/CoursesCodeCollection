-- Create a table
CREATE TABLE "users"
(
    id    SERIAL,
    name  VARCHAR(100)        NOT NULL,
    role  VARCHAR(15)         NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    PRIMARY KEY (id)
);

-- Insert some data
INSERT INTO "users" (name, role, email)
VALUES ('Alice', 'admin', ' [email protected]2');

-- Query the table
SELECT *
FROM "users"
ORDER BY id
OFFSET 0;

-- Update a row
UPDATE "users"
SET role = 'admin'
WHERE id = 1;

WITH nums AS (
    SELECT id, 'prueba' || (row_number() OVER (ORDER BY id) + 5899) || '@gmail.com' as new_email
    FROM "users"
)
UPDATE "users"
SET email = nums.new_email
FROM nums
WHERE "users".id = nums.id;

-- Delete a row
DROP TABLE IF EXISTS "users";
