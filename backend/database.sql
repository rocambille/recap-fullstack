CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE todo (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  checked boolean NOT NULL DEFAULT FALSE,
  action varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO todo (checked, action) VALUES (true, 'Code'), (false, 'Pause');
