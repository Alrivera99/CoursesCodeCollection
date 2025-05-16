--Practicando con la base de datos world
SELECT *
FROM country;

CREATE UNIQUE index "unique_country_name" ON country (name);

select *
from country
where continent = 'Africa';

create index "index_country_continent" on country (continent);
-- Fin de la práctica

-- 1. Crear una llave primaria en city (id)
ALTER TABLE city
    ADD PRIMARY KEY (id);

-- 2. Crear un check en population, para que no soporte negativos
ALTER TABLE city
    ADD CHECK (population >= 0);

-- 3. Crear una llave primaria compuesta en "countrylanguage"
-- los campos a usar como llave compuesta son countrycode y language
Alter table countrylanguage
    ADD PRIMARY KEY (countrycode, language);

-- 4. Crear check en percentage,
-- Para que no permita negativos ni números superiores a 100
ALTER TABLE countrylanguage
    ADD CHECK (percentage >= 0 AND percentage <= 100);