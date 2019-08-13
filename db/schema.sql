

USE add_your_database_here;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    restaurant_id INT NOT NULL ,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE restaurants
(
	id int NOT NULL AUTO_INCREMENT,
	restaurant_name varchar(255) NOT NULL,
	restaurant_id INT NOT NULL,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);