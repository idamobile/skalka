use skalka;

/**
 * Users table structure
 */
drop table if exists users;

create table users (
    id          bigint                  not null auto_increment,
    fb_uid      bigint                  default null,
    first_name  varchar(255)            not null,
    last_name   varchar(255)            not null,
    gender      enum('male', 'female')  default null,
    birth_date  date                    default null,
    image_url   varchar(1024)           default null,
    added_when	date					default null,
    last_login	date					default null,
    primary key(id),
    unique (fb_uid)
);

/**
 * Products table structure
 */
drop table if exists products;

create table products (
    id             bigint                                         not null auto_increment,
    description    varchar(1024)                                  default null,
    story          varchar(1024)                                  default null,
    image_url      varchar(1024)                                  default null,
    image          varchar(1024)                                  default null,
    added_by_uid   bigint                                         default null,
    price          float                                          default null,
    type           enum('image', 'image_with_story', 'story')     default null,
    added_when	   date                                           default null,
    primary        key(id)
);

create index prod_added_by_uid_idx
on products ( added_by_uid );

create table categories (
    id             bigint                                         not null auto_increment,
    name           varchar(255)                                   default null,
    image_url      varchar(1024)                                  not null,
    primary        key(id)
);

create table subcategories (
    id             bigint                                         not null auto_increment,
    name           varchar(255)                                   default null,
    image_url      varchar(1024)                                  not null,
    category_id    bigint                                         not null,
    primary        key(id)
);

create index subcat_cat_id_idx
on subcategories ( category_id );


create table products_subcategories (
    subcategory_id    bigint                                         not null,
    product_id        bigint                                         not null,
    primary           key(subcategory_id, product_id)
);

create index prod_cat_pid_idx
on products_subcategories ( product_id );

create index prod_cat_cid_idx
on products_subcategories ( subcategory_id );

create table user_subcategories (
    subcategory_id     bigint                                         not null,
    uid                bigint                                         not null,
    primary            key(subcategory_id, uid)
);

create index user_cat_cid_idx
on user_subcategories ( subcategory_id );


create table events (
    eid            bigint                                         not null,
    description    varchar(255)                                   not null,
    primary        key(eid)
);

create table lists (
    lid            bigint                                        not null,
    owner_id       bigint                                        default null,
    target_id      bigint                                        not null,
    eid            bigint                                        not null,
    primary        key(lid)
);

create index lists_owner_idx
on lists ( owner_id );

create table list_prod (
    lid            bigint                                         not null,
    pid            bigint                                         not null,
    primary        key(lid, pid)
);

create index list_prod_lid_idx
on list_prod ( lid );

create table user_lines_prod_in_list (
    lid             bigint                                        not null,
    prod_id         bigint                                        not null,
    uid             bigint                                        not null,
    act             enum('y', 'n', 'in')                          default null,
    primary         key(lid, prod_id, uid)
);
