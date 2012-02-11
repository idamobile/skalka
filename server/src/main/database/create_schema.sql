use skalka;

create table users (
    uid         bigint                  not null auto_increment,
    fb_uid      bigint                  default null,
    first_name  varchar(255)            not null,
    last_name   varchar(255)            not null,
    gender      enum('male', 'female')  default null,
    birth_date  date                    default null,
    image_url   varchar(1024)           default null,
    primary key(uid),
    unique (fb_uid)
);

create table products (
    pid            bigint                                         not null,
    story          varchar(1024)                                  default null,
    image_url      varchar(1024)                                  not null,
    added_by_uid   bigint                                         not null,
    price          float                                          not null,
    type           enum('image', 'image_with_story', 'story')     default null,
    primary        key(pid)
);

create index prod_added_by_uid_idx
on products ( added_by_uid );

create table categories (
    cid            bigint                                         not null,
    name           varchar(255)                                   default null,
    image_url      varchar(1024)                                  not null,
    primary        key(cid)
);

create table products_categories (
    pid            bigint                                         not null,
    cid            bigint                                         not null
);

create index prod_cat_pid_idx
on products_categories ( pid );

create index prod_cat_cid_idx
on products_categories ( cid );

create table user_categories (
    uid            bigint                                         not null,
    cid            bigint                                         not null
);

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
on products_categories ( cid );

create table list_prod (
    lid            bigint                                         not null,
    pid            bigint                                         not null
);

create index list_prod_lid_idx
on list_prod ( lid );

create table user_lines_prod_in_list (
    lid             bigint                                        not null,
    prod_id         bigint                                        not null,
    uid             bigint                                        not null,
    act             enum('y', 'n', 'in')                          default null,
    primary        key(lid, prod_id, uid)
);
