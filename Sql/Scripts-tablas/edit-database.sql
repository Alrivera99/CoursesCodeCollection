alter table country
    add primary key (code);

ALTER TABLE country
    ADD CHECK ( surfacearea >= 0 );

SELECT DISTINCT continent
FROM country;

ALTER TABLE country
    ADD CHECK ( continent IN ('Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'Antarctica', 'South America',
                              'Central America'));

ALTER TABLE country
    drop constraint country_continent_check;

SELECT *
FROM country
where region = 'Central America';

UPDATE country
SET continent = 'Central America'
WHERE region = 'Central America';

