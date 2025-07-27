USE peerskill_db;


/*Since autoincrementing is done ,no need to add separateley the id  */
INSERT INTO users (name, email, role) VALUES   /* Inserting data into users */
('Aravind Sai', 'aravind@example.com', 'mentor'),
('Riya Sharma', 'riya@example.com', 'mentor'),
('Amit Verma', 'amit@example.com', 'mentee'),
('Sneha Rao', 'sneha@example.com', 'mentee'),
('Vikram Iyer', 'vikram@example.com', 'mentor'),
('Priya Nair', 'priya@example.com', 'mentee');




INSERT INTO skills (name) VALUES   /* Inserting the list of available skills into the skills table  */
('Data Structures'),
('Web Development'),
('Machine Learning'),
('Public Speaking'),
('UI/UX Design');


INSERT INTO user_skills (user_id, skill_id) VALUES /* Mapping the skills to the users (this is N:N relation) */
(1, 1), -- Aravind: Data Structures
(1, 2), -- Aravind: Web Development
(2, 3), -- Riya: Machine Learning
(2, 4), -- Riya: Public Speaking
(5, 2), -- Vikram: Web Dev
(5, 5); -- Vikram: UI/UX

/* Inserting the session requsts i.e the users requesting sessions from each other */

INSERT INTO session_requests (requester_id, mentor_id, skill_id, date, status) VALUES
(3, 1, 1, '2024-07-01', 'completed'), -- Amit → Aravind (DSA)
(4, 2, 3, '2024-07-03', 'completed'), -- Sneha → Riya (ML)
(6, 1, 2, '2024-07-04', 'pending'),   -- Priya → Aravind (Web)
(3, 5, 5, '2024-07-05', 'completed'), -- Amit → Vikram (UI/UX)
(4, 5, 2, '2024-07-06', 'pending');   -- Sneha → Vikram (Web)

/* Inserting static feedback to check the rating  */
INSERT INTO feedback (session_id, rating, comment) VALUES
(1, 5, 'Excellent explanation of DSA.'),
(2, 4, 'Great introduction to ML concepts.'),
(4, 5, 'Very creative and useful UI/UX session.');
