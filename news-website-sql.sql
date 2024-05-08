ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'koleda2015';

DROP DATABASE newsDB;
CREATE DATABASE newsDB;

CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    role ENUM("User", "Editor", "Moderator", "Admin") NOT NULL,
    registered INT,
    active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE category(
	id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    name VARCHAR(255) UNIQUE,
    description VARCHAR(255),
    show_in_navigation BOOLEAN DEFAULT FALSE
);

CREATE TABLE news(
	id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    title VARCHAR(255) NOT NULL,
    picture_name VARCHAR(255),
    short_description VARCHAR(255),
    important BOOLEAN DEFAULT FALSE,
    category_id INT,
    created_on INT NOT NULL,
    created_by INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (created_by) REFERENCES users(id)
);
    
    