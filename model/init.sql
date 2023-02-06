DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS lists;

CREATE TABLE lists  (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  description  VARCHAR(100)
);

CREATE TABLE posts  (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  text VARCHAR(500),
  list_id INT NOT NULL
);

ALTER TABLE posts
ADD FOREIGN KEY (list_id) REFERENCES lists(id);

-- INSERT INTO lists(name, description) VALUES ('test list', 'test description of test list');
-- INSERT INTO posts(title, text, list_id) VALUES ('test post of test list ', 'here is some text for the text of the test post', 1);

