/* Fetching the Top 5 Rated  Mentors*/

SELECT u.name , AVG(f.rating) AS avg_rating 
FROM feedback f 
JOIN session_requests s ON f.session_id = s.id
JOIN users u ON s.mentor_id = u.id
WHERE u.role = 'mentor'
GROUP BY u.id
ORDER BY avg_rating DESC
LIMIT 5;


/* Fetching the most requested skills */

SELECT sk.name AS skill_name , COUNT(*) AS request_count
FROM session_requests sr
JOIN  skills sk  on sk.id = sr.skill_id
GROUP BY sk.id
ORDER BY request_count DESC
LIMIT 5;



/* Fetching the session status summary i.e giving total no of completed and pending sessions  */

SELECT  status , COUNT(*) AS status_count
FROM session_requests 
GROUP BY status;


/* Fetching mentees who gave feedback rating  more than 4 */

SELECT DISTINCT u.name  AS mentee_name
FROM users u 
JOIN session_requests sr ON  u.id =sr.requester_id
JOIN feedback f on f.session_id = sr.id
WHERE f.rating >=4;


/* Fetching mentor wise session count */

SELECT u.name AS mentor_name , COUNT(*) AS total_session 
FROM users u 
JOIN session_requests sr ON sr.mentor_id = u.id
GROUP BY u.id
ORDER BY total_session DESC;


