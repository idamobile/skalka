/**
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
*/

drop table if exists users;
create table users (
	uid 		bigint 					not null,
	fb_uid 		bigint 					default null,
	first_name 	varchar(255) 			not null,
	last_name 	varchar(255) 			not null,
	primary key(uid),
	unique (fb_uid)
);

insert into users (uid, fb_uid, first_name, last_name)
values (1, 657129580, "Sergey", "Royz");

insert into users (uid, fb_uid, first_name, last_name)
values (2, 1286973829, "Andrew", "Yakovlev");