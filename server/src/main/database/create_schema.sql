create table users (
	uid 		bigint 					not null,
	fb_uid 		bigint 					default null,
	first_name 	varchar(255) 			not null,
	last_name 	varchar(255) 			not null,
	gender 		enum('male', 'female') 	default null,
	birth_date	date					default null,
	image_url	varchar(1024)			default null,
	primary key(uid),
	unique (fb_uid)
);
