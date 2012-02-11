USE skalka;

DROP INDEX prod_cat_pid_idx ON products_categories;
DROP INDEX prod_cat_cid_idx ON products_categories;
DROP INDEX lists_owner_idx ON products_categories;
DROP INDEX list_prod_lid_idx ON list_prod;

DROP DATABASE IF EXISTS skalka;
DROP USER skalka@'localhost';
