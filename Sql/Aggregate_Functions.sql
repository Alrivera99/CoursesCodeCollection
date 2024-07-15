SELECT *
FROM users
WHERE followers BETWEEN 4600 and 4700
ORDER BY followers ASC;


-- Min, Max, Avg, Count, Round
SELECT count(*)              as total_user,
       min(followers)        as min_followers,
       max(followers)        as max_followers,
       round(avg(followers)) as avg_followers
from users;

-- Min, Max
SELECT *
FROM users
WHERE followers = (SELECT min(followers) FROM users)
   or followers = (SELECT max(followers) FROM users);