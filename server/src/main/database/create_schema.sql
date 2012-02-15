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
    added_when date     default null,
    last_login date     default null,
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
    product_url    varchar(1024)                                  default null,
    image_url      varchar(1024)                                  default null,
    image_feed     varchar(1024)                                  default null,
    image_details  varchar(1024)                                  default null,
    image_list     varchar(1024)                                  default null,
    added_by_uid   bigint                                         default null,
    price          float                                          default null,
    type           enum('image', 'image_with_story', 'story')     default null,
    added_when    date                                           default null,
    is_public      enum('t','f')                                  default 't',
    primary        key(id)
);

create index prod_added_by_uid_idx
on products ( added_by_uid );

/**
 * Categories table structure
 */
drop table if exists categories;

create table categories (
    id             bigint                                         not null auto_increment, 
    name           varchar(255)                                   default null,
    image_url      varchar(1024)                                  not null,
    primary        key(id)
);

/**
 * subcategories table structure
 */
drop table if exists subcategories;

create table subcategories (
    id             bigint                                         not null auto_increment,
    name           varchar(255)                                   default null,
    image_url      varchar(1024)                                  not null,
    category_id    bigint                                         not null,
    primary        key(id)
);

create index subcat_cat_id_idx
on subcategories ( category_id );

/**
 * products_subcategories table structure
 */
drop table if exists products_subcategories;

create table products_subcategories (
    subcategory_id    bigint                                         not null,
    product_id        bigint                                         not null,
    primary           key(subcategory_id, product_id)
);

create index prod_cat_pid_idx
on products_subcategories ( product_id );

create index prod_cat_cid_idx
on products_subcategories ( subcategory_id );

/**
 * user_subcategories table structure
 */
drop table if exists user_subcategories;

create table user_subcategories (
    id                 bigint                                     not null auto_increment,
    subcategory_id     bigint                                     not null,
    user_id            bigint                                     not null,
    primary key(id)
);

create index user_cat_cid_idx
on user_subcategories ( subcategory_id );

/**
 * lists table structure
 */
drop table if exists lists;

create table lists (
    id             bigint                                        not null,
    name           varchar(255)                                  default null,
    owner_id       bigint                                        default null,
    target_id      bigint                                        not null,
    last_updated   timestamp,
    primary        key(id)
);

create index lists_owner_idx
on lists ( owner_id );

/**
 * list_prod table structure
 */
drop table if exists list_prod;

create table list_prod (
    list_id        bigint                                         not null,
    product_id     bigint                                         not null,
    primary        key(list_id, product_id)
);

create index list_prod_lid_idx
on list_prod ( list_id );

/**
 * user_actions_in_prod_list table structure
 */
drop table if exists user_actions_in_prod_list;

create table user_actions_in_prod_list (
    list_id         bigint                                        not null,
    product_id      bigint                                        not null,
    user_id         bigint                                        not null,
    user_action     enum('y', 'n', 'in')                          default null,
    primary         key(list_id, product_id, user_id)
);
