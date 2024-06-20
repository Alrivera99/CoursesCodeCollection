CREATE TABLE "users"
(
    id   SERIAL,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(15)  NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO "users" (name, role)
VALUES ('Alice', 'admin'),
       ('Bob', 'user'),
       ('Charlie', 'user');

DROP TABLE IF EXISTS "users";