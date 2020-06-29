CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path varchar(600) NOT NULL,
	description varchar(1000) NOT NULL,
	likes INTEGER NOT NULL
);

INSERT INTO "gallery" ("path", "description", "likes") 
    VALUES('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0 );
INSERT INTO "gallery" ("path", "description", "likes") 
    VALUES('images/goat_small_1.jpg', 'Photo of a goat taken at Glacier National Park.', 0 );
INSERT INTO "gallery" ("path", "description", "likes") 
    VALUES('images/goat_small_2.jpg', 'Photo of a goat taken at Glacier National Park.', 0 );
INSERT INTO "gallery" ("path", "description", "likes") 
    VALUES('images/goat_small_3.jpg', 'Photo of a goat taken at Glacier National Park.', 0 );