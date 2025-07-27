CREATE DATABASE peerskill_db;
USE peerskill_db;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(100),
  role ENUM('mentor','mentee')
);

CREATE TABLE skills (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50)
);

CREATE TABLE user_skills (
  user_id INT,
  skill_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (skill_id) REFERENCES skills(id)
);

CREATE TABLE session_requests (
  id INT PRIMARY KEY AUTO_INCREMENT,
  requester_id INT,
  mentor_id INT,
  skill_id INT,
  date DATE,
  status ENUM('completed', 'pending'),
  FOREIGN KEY (requester_id) REFERENCES users(id),
  FOREIGN KEY (mentor_id) REFERENCES users(id),
  FOREIGN KEY (skill_id) REFERENCES skills(id)
);

CREATE TABLE feedback (
  id INT PRIMARY KEY AUTO_INCREMENT,
  session_id INT,
  rating INT CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  FOREIGN KEY (session_id) REFERENCES session_requests(id)
);
