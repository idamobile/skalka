use skalka;

delete from users;

insert into users (id, fb_uid, first_name, last_name, gender, birth_date, image_url)
values (1, 657129580, "Sergey", "Royz", "male", "1986-08-16", "http://graph.facebook.com/657129580/picture");

insert into users (id, fb_uid, first_name, last_name, gender, birth_date, image_url)
values (2, 1286973829, "Andrew", "Yakovlev", "male", "1985-10-13", "http://graph.facebook.com/1286973829/picture");

insert into users (id, fb_uid, first_name, last_name, gender, birth_date, image_url)
values (3, 542817925, "Samantha", "Lee-ann", "female", "1989-11-05", "http://graph.facebook.com/542817925/picture");

insert into users (id, fb_uid, first_name, last_name, gender, birth_date, image_url)
values (4, 506177159, "Valentin", "Kravtsov", "male", "1978-11-05", "http://graph.facebook.com/506177159/picture");

delete from lists;

insert into lists(id, name, owner_id, target_id)
values (1, "My List", 1, 2);

insert into lists(id, name, owner_id, target_id)
values (2, "My List", 4, 1);

delete from list_prod;

insert into list_prod (list_id, product_id)
values (1, 1);

delete from user_actions_in_prod_list;

insert into user_actions_in_prod_list(list_id, product_id, user_id, user_action)
values (1, 1, 1, 'y');

delete from categories;

insert into categories(id, name, image_url)
value (1, "Profression", null);

delete from subcategories;

insert into subcategories (id, name, image_url, category_id)
values (1, "Teacher", "www.yandex.ru", 1);

delete from user_subcategories;

insert into user_subcategories (id, subcategory_id, user_id)
values (1, 1, 1);
