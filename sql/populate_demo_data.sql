/*
 * Categories 
 */
delete from subcategories where category_id = 999999;

delete from categories where name like 'personality';
insert into categories(id, name, image_url, weight) values (999999, 'personality', 'http://www.google.com', 1);

/*
 * Subcategories from http://pinterest.com/ilnem/new-categories/
 */

insert into subcategories(name, image_url, category_id) values ('munchkin', 'http://media-cdn.pinterest.com/upload/227220743669595685_46YhW65n_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('wine lover', 'http://media-cdn.pinterest.com/upload/227220743669595675_Enc7ipVk_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('beauty queen', 'http://media-cdn.pinterest.com/upload/227220743669595660_IrRKHno1_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('green thumb', 'http://media-cdn.pinterest.com/upload/227220743669595652_0lPT9DDx_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('sweet tooth', 'http://media-cdn.pinterest.com/upload/227220743669595627_vvf1BfW3_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('newborn', 'http://media-cdn.pinterest.com/upload/227220743669595559_Wgv6ugYW_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('fitness buff', 'http://media-cdn.pinterest.com/upload/227220743669595551_KJ6OLiDj_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('romantic', 'http://media-cdn.pinterest.com/upload/227220743669595496_GhHr3uJ5_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('treehugger', 'http://media-cdn.pinterest.com/upload/227220743669595486_Q0tnfZWE_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('outdoorsy', 'http://media-cdn.pinterest.com/upload/227220743669595469_CEmyjbti_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('music lover', 'http://media-cdn.pinterest.com/upload/227220743669595264_qZ6TXfiW_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('jetsetter', 'http://media-cdn.pinterest.com/upload/227220743669595253_oC7LXpJO_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('decorator', 'http://media-cdn.pinterest.com/upload/227220743669595246_NugSQDhs_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('hostess', 'http://media-cdn.pinterest.com/upload/227220743669595220_FZcmwDRg_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('pet lover', 'http://media-cdn.pinterest.com/upload/227220743669595156_YpkCMG8l_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('metrosexual', 'http://media-cdn.pinterest.com/upload/227220743669595151_BQGRCZzn_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('fashionista', 'http://media-cdn.pinterest.com/upload/227220743669595115_s0zpfp1I_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('hipster', 'http://media-cdn.pinterest.com/upload/227220743669595083_f06nU41V_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('geek', 'http://media-cdn.pinterest.com/upload/227220743669594852_PDf85dA2_b.jpg', 999999);
insert into subcategories(name, image_url, category_id) values ('foodie', 'http://media-cdn.pinterest.com/upload/227220743669594844_svwXn9Pd_b.jpg', 999999);
