CREATE DATABASE skalka CHARACTER SET 'utf8';
CREATE USER 'skalka'@'localhost' IDENTIFIED BY 'skalka';
GRANT ALL PRIVILEGES ON skalka.* TO 'skalka'@'localhost';
USE 'skalka';
