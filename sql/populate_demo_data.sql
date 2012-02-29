/*
 * Categories 
 */
delete from products_subcategories;

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


INSERT INTO `subcategories` VALUES
(53,'boy','http://media-cdn.pinterest.com/upload/227220743669522114_oBCIz7MM_b.jpg',8),
(54,'girl','http://media-cdn.pinterest.com/upload/227220743669522109_H45FgYN3_b.jpg',8);

--INSERT INTO `subcategories` VALUES (1,'zaz','http://media-cdn.pinterest.com/upload/227220743669522653_Iv9G7HGX_b.jpg',1),(2,'logo','http://media-cdn.pinterest.com/upload/227220743669522651_ANhsJIJE_b.jpg',1),(3,'ford','http://media-cdn.pinterest.com/upload/227220743669522647_PRvhIiyU_b.jpg',1),(4,'toyota','http://media-cdn.pinterest.com/upload/227220743669522646_hf4cKuVj_b.jpg',1),(5,'honda','http://media-cdn.pinterest.com/upload/227220743669522642_TWce5Zw7_b.jpg',1),(6,'jeep','http://media-cdn.pinterest.com/upload/227220743669522636_gnKG1oc0_b.jpg',1),(7,'dodge','http://media-cdn.pinterest.com/upload/227220743669522622_MB8girPo_b.jpg',1),(8,'bmw','http://media-cdn.pinterest.com/upload/227220743669522618_qH4em1Bu_b.jpg',1),(9,'chrysler','http://media-cdn.pinterest.com/upload/227220743669522617_R54wCqWn_b.jpg',1),(10,'logo','http://media-cdn.pinterest.com/upload/227220743669522606_QBa33zBl_b.jpg',1),(11,'chinese','http://media-cdn.pinterest.com/upload/227220743669523097_jAZYVsZW_b.jpg',2),(12,'kenny g','http://media-cdn.pinterest.com/upload/227220743669523027_tf3eL8dE_b.jpg',2),(13,'kiss','http://media-cdn.pinterest.com/upload/227220743669523000_L7i9biUy_b.jpg',2),(14,'therion','http://media-cdn.pinterest.com/upload/227220743669522997_cjhTGNwB_b.jpg',2),(15,'mikle jackson','http://media-cdn.pinterest.com/upload/227220743669522993_2y5X6OGN_b.jpg',2),(16,'elvis','http://media-cdn.pinterest.com/upload/227220743669522986_Y9jprfHA_b.jpg',2),(17,'beethoven','http://media-cdn.pinterest.com/upload/227220743669522982_3iE1FWT5_b.jpg',2),(18,'ska-p','http://media-cdn.pinterest.com/upload/227220743669522979_jGVlItSc_b.jpg',2),(19,'manu chao','http://media-cdn.pinterest.com/upload/227220743669522949_blnyRH3B_b.jpg',2),(20,'sting','http://media-cdn.pinterest.com/upload/227220743669522940_tSSKAESo_b.jpg',2),(21,'cypress hill','http://media-cdn.pinterest.com/upload/227220743669522938_uPVL3dBV_b.jpg',2),(22,'roxy music','http://media-cdn.pinterest.com/upload/227220743669522929_aHCtr0aS_b.jpg',2),(23,'bob marlay','http://media-cdn.pinterest.com/upload/227220743669522915_RcTzvP3Q_b.jpg',2),(24,'eminem','http://media-cdn.pinterest.com/upload/227220743669522892_eeEuaZuj_b.jpg',2),(25,'madonna','http://media-cdn.pinterest.com/upload/227220743669522887_WkJ6Y7nF_b.jpg',2),(26,'metallica','http://media-cdn.pinterest.com/upload/227220743669522877_DyXbdeDp_b.jpg',2),(27,'rolling stone','http://media-cdn.pinterest.com/upload/227220743669522861_7Q3an0Hs_b.jpg',2),(28,'queen','http://media-cdn.pinterest.com/upload/227220743669522857_sSSVXJP2_b.jpg',2),(29,'depeche mode','http://media-cdn.pinterest.com/upload/227220743669522853_6vDX9Wtb_b.jpg',2),(30,'lady gaga','http://media-cdn.pinterest.com/upload/227220743669522844_nwzHy4aX_b.jpg',2),(31,'levi\'s','http://media-cdn.pinterest.com/upload/227220743669522816_8pyK81lK_b.jpg',3),(32,'diesel','http://media-cdn.pinterest.com/upload/227220743669522814_5Phyzdxe_b.jpg',3),(33,'D&G','http://media-cdn.pinterest.com/upload/227220743669522812_N5c5Bsyc_b.jpg',3),(34,'boss','http://media-cdn.pinterest.com/upload/227220743669522795_TpCioRrm_b.jpg',3),(35,'adidas','http://media-cdn.pinterest.com/upload/227220743669522792_x1wefQBP_b.jpg',3),(36,'puma','http://media-cdn.pinterest.com/upload/227220743669522788_VCW1cTFQ_b.jpg',3),(37,'nike','http://media-cdn.pinterest.com/upload/227220743669522708_hfx09dPt_b.jpg',3),(38,'versace','http://media-cdn.pinterest.com/upload/227220743669522702_Nt2LAqYg_b.jpg',3),(39,'tommy hilfiger','http://media-cdn.pinterest.com/upload/227220743669522699_CKTaKsV1_b.jpg',3),(40,'gap','http://media-cdn.pinterest.com/upload/227220743669522695_taW7Letk_b.jpg',3),(41,'juicy couture','http://media-cdn.pinterest.com/upload/227220743669522692_MEOcr8tE_b.jpg',3),(42,'lacoste','http://media-cdn.pinterest.com/upload/227220743669522689_Jw5kh3NS_b.jpg',3),(43,'givenchy','http://media-cdn.pinterest.com/upload/227220743669522686_iYRAoTd3_b.jpg',3),(44,'louis vuitton','http://media-cdn.pinterest.com/upload/227220743669522678_nAgAuVhL_b.jpg',3),(45,'polo','http://media-cdn.pinterest.com/upload/227220743669522674_3OvAgAEd_b.jpg',3),(46,'chanel','http://media-cdn.pinterest.com/upload/227220743669522670_5G4JC4Xa_b.jpg',3),(47,'zara','http://media-cdn.pinterest.com/upload/227220743669522658_Pm82qVoe_b.jpg',4),(48,'italian','http://media-cdn.pinterest.com/upload/227220743669523089_FgDDsLaQ_b.jpg',5),(49,'beatles','http://media-cdn.pinterest.com/upload/227220743669522839_cKKDIWU6_b.jpg',6),(50,'backpacker','http://media-cdn.pinterest.com/upload/227220743669523203_ygxc4Xm1_b.jpg',7),(51,'mercedes','http://media-cdn.pinterest.com/upload/227220743669522605_Vc9CsWDu_b.jpg',1),(52,'porshe','http://media-cdn.pinterest.com/upload/227220743669522513_tpHXLq5z_b.jpg',1),(55,'goth','http://media-cdn.pinterest.com/upload/227220743669516463_OhxIyrLs_b.jpg',9),(56,'emo','http://media-cdn.pinterest.com/upload/227220743669516449_YJDuc1dh_b.jpg',9),(57,'hippy','http://media-cdn.pinterest.com/upload/227220743669516444_29SVYum6_b.jpg',9),(58,'casual','http://media-cdn.pinterest.com/upload/227220743669516252_9jp3LAYH_b.jpg',9),(59,'metrosexual','http://media-cdn.pinterest.com/upload/227220743669516245_luARTLwI_b.jpg',9),(60,'geek','http://media-cdn.pinterest.com/upload/227220743669516232_rgkP1NuK_b.jpg',9),(61,'gopnik','http://media-cdn.pinterest.com/upload/227220743669516226_2b3fGa0z_b.jpg',9),(62,'glamour','http://media-cdn.pinterest.com/upload/227220743669516221_wRa43sly_b.jpg',9),(63,'smart','http://media-cdn.pinterest.com/upload/227220743669516212_qTyB91g1_b.jpg',9),(64,'hipsetr','http://media-cdn.pinterest.com/upload/227220743669516192_RdyMFoGY_b.jpg',9),(65,'wisky','http://media-cdn.pinterest.com/upload/227220743669515597_u7lBKpOy_b.jpg',10),(66,'non','http://media-cdn.pinterest.com/upload/227220743669515596_t1iOaBzL_b.jpg',10),(67,'beer','http://media-cdn.pinterest.com/upload/227220743669515595_cA99mFq6_b.jpg',10),(68,'gourmet','http://media-cdn.pinterest.com/upload/227220743669515970_2kZfMBlq_b.jpg',5),(69,'BBQ','http://media-cdn.pinterest.com/upload/227220743669515934_PNPeHtM6_b.jpg',5),(70,'japan','http://media-cdn.pinterest.com/upload/227220743669515929_x2EDHiYd_b.jpg',5),(71,'fastfood','http://media-cdn.pinterest.com/upload/227220743669515922_Jc1IaQ6J_b.jpg',5),(72,'vegetarian','http://media-cdn.pinterest.com/upload/227220743669515912_7hVHsNuM_b.jpg',5),(73,'single mother','http://media-cdn.pinterest.com/upload/227220743669516422_8lSraZ7b_b.jpg',11),(74,'lonely','http://media-cdn.pinterest.com/upload/227220743669516410_F9AGhB6O_b.jpg',11),(75,'in search','http://media-cdn.pinterest.com/upload/227220743669516397_SldGyqe2_b.jpg',11),(76,'child','http://media-cdn.pinterest.com/upload/227220743669516375_RsEiwYng_b.jpg',11),(77,'divorced','http://media-cdn.pinterest.com/upload/227220743669516361_xZSjOl0b_b.jpg',11),(78,'in love','http://media-cdn.pinterest.com/upload/227220743669516324_5CsyCi5C_b.jpg',11),(79,'with kids','http://media-cdn.pinterest.com/upload/227220743669516318_b4bf7bC8_b.jpg',11),(80,'cooking','http://media-cdn.pinterest.com/upload/227220743669516168_uYAWBAjO_b.jpg',7),(81,'photographer','http://media-cdn.pinterest.com/upload/227220743669515600_bEMwrt0M_b.jpg',7),(82,'fishing','http://media-cdn.pinterest.com/upload/227220743669515599_cHp3XLHK_b.jpg',7),(83,'kniting','http://media-cdn.pinterest.com/upload/227220743669515598_ZXOyjgnx_b.jpg',7),(84,'microsoft','http://media-cdn.pinterest.com/upload/227220743669522296_fGq6QFAJ_b.jpg',12),(85,'linux','http://media-cdn.pinterest.com/upload/227220743669522290_JsHkoTi1_b.jpg',12),(86,'apple','http://media-cdn.pinterest.com/upload/227220743669522285_bKMKtLzw_b.jpg',12),(87,'usual','http://media-cdn.pinterest.com/upload/227220743669522203_9RQSaXIH_b.jpg',13),(88,'quite so','http://media-cdn.pinterest.com/upload/227220743669522194_vJc4VWgA_b.jpg',13),(89,'crazy neat','http://media-cdn.pinterest.com/upload/227220743669522175_qKsgXa1x_b.jpg',13),(90,'pig','http://media-cdn.pinterest.com/upload/227220743669522158_J1xZsSsp_b.jpg',14),(91,'walking','http://media-cdn.pinterest.com/upload/227220743669521893_lKQrrWqc_b.jpg',15),(92,'cubing','http://media-cdn.pinterest.com/upload/227220743669521863_s37eLMRi_b.jpg',15),(93,'shopping','http://media-cdn.pinterest.com/upload/227220743669517854_afe0v2oW_b.jpg',15),(94,'meeting friends','http://media-cdn.pinterest.com/upload/227220743669517848_TY7BeuQJ_b.jpg',15),(95,'gaming','http://media-cdn.pinterest.com/upload/227220743669517840_cWBlLK4i_b.jpg',15),(96,'TV vatching','http://media-cdn.pinterest.com/upload/227220743669517825_tnnc5Aji_b.jpg',15),(97,'phlegmatic','http://media-cdn.pinterest.com/upload/227220743669521720_UttGBD5L_b.jpg',16),(98,'gloomy','http://media-cdn.pinterest.com/upload/227220743669521485_h18GL351_b.jpg',16),(99,'serious','http://media-cdn.pinterest.com/upload/227220743669517924_jf5kP1g7_b.jpg',16),(100,'fun','http://media-cdn.pinterest.com/upload/227220743669517907_dqe1eWkM_b.jpg',16);


/*
 * Assign subcategories to products 
 */

insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Outdoor LP Gas Fire Pit with Slate Top';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Rustica Gourmet Gift Box';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Blooming Flower Pot Cake';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Bone Collection iPhone Portable Amplifier';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Tea Diver';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Rosso Amore';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Monogrammed Wine Stopper';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'The Gardener Tote';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Bamboo Puzzle Laptop Stand';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Video Recording Ski Goggles';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'The Dogbrella';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'A Thai Pad for your iPad';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Think Paper Recycle Bin';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Aquatic Condo';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Heifer Pitcher';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'USB Tulip Hub';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'WalletSafe 200';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Kirie Bamboo Wood Clock';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Golden Egg Bank';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Star Wars Light Saber Chop Sticks';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Re-Run Hana Hobo';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'upwardly mobile' and p.description = 'The Gigantic Inflatable Climbing Iceberg';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Micro Samsonite Travel Scooter';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Philosophy Birthday Girl Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Car Trunk Organizer & Cooler';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Levana ClearVu Video Baby Monitor';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Herbes de Provence Growing Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Matt & Nat ''Florence'' Handbag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Baby Einstein Baby Neptune Ocean Adventure Gym';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Heath Ceramics Marie Basic Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Manduka eKO Yoga Mat';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Luxury Plush Robe';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Giselle Succulent Trough';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Wusthof Classic 6-piece Knife Block Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Imperia Pasta Machine';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Riedel Amadeo Lyra Decanter';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'iTunes Gift Card';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'TwistTogether Lamp';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Kyoku for Men Luxury Gift Box';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Double Face Knit Scarf';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'The Follow Me Puppy';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Hanging Aquarium';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'S''more to Love';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Wilson Six One Tour BLX';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Voyage Air Folding Acoustic Guitar';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Khaki Bike to Work Pants';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Help I Need A LOT of Help';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Eco Soccer Ball';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'upwardly mobile' and p.description = 'Vertu Constellation Diamond Cell Phone';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'upwardly mobile' and p.description = 'Dynaudio Focus 220 Loudspeakers';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Hanna Winery 2010 Russian River Sauvignon Blanc';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'CAL Bears Youth T-Shirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'K-Swiss Ultrascendor Tennis Shoes';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Soulra- Solar Powered System for iPod and iPhone';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Skip Hop Duo Deluxe Diaper Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Philippe Starck Citrus Squeezer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Circe Teapot';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Burnt Baby Burnt Caramel Truffle Box';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Safekeeper Mirrored Jewelry Cabinet by Lori';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Phone ID Case';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Caudalie Crushed Cabernet Scrub';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Primo Ceramic Kamado Charcoal Smoker Grill';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Sundown White Women''s Watch';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Stainless-Steel Grill Tools';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Ulitmate Grill Cleaning Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Pizza Stone and Peel Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'iCade- iPad arcade';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Orbit Stroller Travel System';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Scala 5 Inch Brim Swinger Hat';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Naturopathica Facial Starter Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Snuggie Couples';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Rose Heart Wreath';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Wüsthof Classic Ikon Knives';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Organic Long-Stemmed Roses';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Teraforma Whisky Stones';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Canon G12 10MP Digital Camera';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Peasants & Travelers Doctor Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Livescribe Echo Smartpen';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Lunar Crystal Blush Pierced Earrings';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Deluxe Baby Keepsake Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Samsung SCH–LC11 3G/4G LTE Mobile Hotspot for Veri';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Element Wine Chiller & Coasters Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Baby Bunch Bouquet Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'UniFlame Deep Drawn Bronze Fire Pit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Stainless Steel Snack Bowls';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Show-Off Right Angle Bolster Lounger';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'The Omaha Steaks Summit Combo';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = '3-Tier Tiffin & Carrier Bag Combo';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Haba Room Tent Pirate';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Golf BBQ Tools Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Face Mug';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Protect Our Earth Glasses';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Do-Goodie Brownies';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Ferruccio Laviani Orbital Floor Lamp';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Orla Kiely Big Summer Large Tote';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'PUMA Men’s Enamel Wide Belt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Periodic Bacon T-Shirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Brasil ''60s 5-Star Jersey';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'upwardly mobile' and p.description = 'Apogee Selectip-Rollerball Pen';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Radiohead Xurbia Wall Poster';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Insulated Cooler Tote';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'BOSE TriPort On Ear Stereo Headphones';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Riedel Vinum Bordeaux Glass Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'LaCie Rugged 1TB USB/Firewire Portable Hard Drive';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Mighty Leaf Mango Green Tea';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'The Travel Book (Lonely Planet)';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Eye-Fi 8GB Mobile X2 Wireless Memory Card';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Adagio Teas Jumbo Cup & Tea Infuser';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'MacBook Air 11';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Tauntaun Sleeping Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Fender American Vintage Series ''62 Telecaster Custom Electric Guitar';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Numsi Orange Delights Wall Art';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'GroveMade iPad 2 Case';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Blue Bird Print';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Whiskey Stones';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Disney Monster''s Onesie';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Binary Watch';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'SmileFido Fine Art Photography for Dogs';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Long Ball - Larry David Tee Shirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Philz Ambrosia Coffee of God';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Funky Shoe Chair';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = '24-Pocket Cotton Overdoor Shoe Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'WeWOOD Timepiece';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Strida Silver Foldable Bike';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Tiffany Keys Heart Key Pendant';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Haba Room Tent Marrakesh';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'The Hide & Seek Wallet';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Speck Credit Card iPhone 4 Case';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Klipsch HD 5.1-Channel Home Theater';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Aveda Replenishing Body Moisturizer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Shun Classic Chef''s Knife';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Treksta';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Ultimate Turkish Bath Towels';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Adonde Ceramics';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Carter''s Bumble Wall Decals';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Mother''s Eternal Love Necklace';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Bluetooth Caller ID Watch';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Peacock V Neck Dress';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Substrata Wooden iPad Cases';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Boogie Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Zoku Quick Pop Maker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Hario V60 Coffee Drip Kettle Buono';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Wireframe Diamond Earrings';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Hunter Original Wellington Boots';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Bottoms-Up Wine Barrel Table & Planter';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'DwellStudio Wool Tree Rug';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Stone Egg Lanterns';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Radiant Pick-Me-Up Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'euforia Thousand-Layer Cake';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Blue Bottle Bella Donovan Starter Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Trumpette Baby Buffalo Socks';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'iHome Portable Bluetooth Speaker System';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Verizon HTC Thunderbolt 4G Smart Phone';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Beach Framed Print';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Tuscan Blood Orange Take Me There Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'How to Cook Everything Vegetarian by Mark Bittman';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Felco F-2 Classic Manual Hand Pruner';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Bugaboo Leather Carryall';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Cushi Stripe iPhonePad';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Carlton Cow Rocker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Flowering Tea Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Dunhill Solar Charger';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Soda Pop Culture Earrings';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Sweetheart Buckle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Champagne Baubles Champagne Cap Couture Jewelry';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Thumbprint Necklace';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Garmin Forerunner® 610';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'New Balance 890';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'FAMOUS STARS & STRAPS VAMP HIGH';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Color Wheel Pendant';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'My Eco Can';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Skip Hop Zoo Pack Little Kid Backpack';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Skip Hop Zoo Lunchies Insulated Lunch Bags';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'O''bon Rainbow Pencils';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Recycled Eco Star Crayons';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Recycled Kids Sketchbook';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Season''s Bounty Fruit Basket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'The Ultimate Tea Forte Experience';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Stained Glass Snail Accent Light';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Photo Stickers';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Zinnia Gift Collection';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Limited-Edition Mary Kay Tranquil Waters Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'TOKIDOKI Royal Pride Collection';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Sporty Overnighter Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Stila Lip Glaze Trio';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Benjamin Bridge NOVA 7 2010';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Hayden Harnett Bespoke Silk Scarf';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Wusthof Classic Black Hollow Edge Steak Knife Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Esque Off Pitcher + Cup';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Women''s Linen & Terry Robe';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'The Westmount from Baskits';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Cathy Waterman Diamond Earrings';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Jimmy Belasco Green Green Grass Soy Candle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Lotta Jansdotter Echo Double Strap Tote';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Terrapin Ridge Wasabi';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Large Change-O-Luminary';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Enchanted Woodland Votive Hurricane';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Simply Seasonal Centrepiece';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Century Metal Clock';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Christmas Sprinkles Mug';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Venetian Home Canisters';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Garden Party Tub';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Artist''s Impression Chip ''N Dip and Iron Stand';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Chateau Gaslight & Lantern Stand';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Smores Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Lavish Luxury Chocolate Gift Basket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Live your passion: Food';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Eco-Fleece Ponchos';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Alfabetika Alphabet Print';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Bibi & Mimi BabyJane Pastel Socks';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Magnificent Baby Footie';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Babycakes Cake Pop Maker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Lovely Nursery Prints';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Theory Remington Skull Cap';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Musical Band from Plan Toys';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Hello Kitty brush set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Sperry Top-Sider Metallic for Toddlers';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Italian Porcini';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Star Trek Enterprise Pizza Cutter';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Lifesaver Bottle 4000';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Cake Pops by Bakerella';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Doodle Jump Mix & Match Stationery';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Fall Sprite Brownies';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = '10 pc. Gems Pumpkin Box';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'TakeBreak Wall Sticker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Single Storagepalooza';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Clothes Cactus';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Personalized Monogram Lunchbox';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Greek Skull Bracelet';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Mediterranean Fig Perfume and Fragrance Collection';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Retro Candy Gift Pack';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'M&Ms Ceramic Character Figural Mug';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Winter Warmers Gift Collection';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Canadian Maple Brining Collection';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Apple Bushel Gift';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Brunch Gift Basket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Party Package Petit Fours';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Spiced Pumpkins';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'The Canadian Train Blanket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Gerbera Daisy Umbrella and Tote';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Cyclone Puzzle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Rainbow Glass Bracelet';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Double Dutch Oven';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Kushies Zolo Stacrobats';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Imaginary Animals Easy Craft Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Spa Wish Gift Certificate';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'All-Natural Dog Treats in Retro Tin';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Avery Chains & Pearl Necklace';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'P90x Extreme Home Fitness Program';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Karvt Mac Sleeve';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Ivy and Bean - No News Is Good News';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Better Homes and Gardens Garden Fresh Meals';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Wormies, Scary Bears, & Pumpkins';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Mini Cookie & Brownie Bites Basket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Red Velvet Cupcakes';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Bruno Racing Car';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Murakami: The Meaning of the Nonsense of the Meaning';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Barefoot Coffee "The Boss" Espresso';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'LEGO 3 Piece Toy Organizer Cubes';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Happy Socks Dotted & Stripped Tights';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Powerbag Device Charging Messenger';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Tricks And Treats Tin';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Build Your Own Trick or Treat Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Perky-Pet Glass Hummingbird Feeder';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Creaky Coffin Box';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Festive Turkey Basket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Philosophy Trick or Treat Lip Shine Duo';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Candy Corn Shampoo, Shower Gel & Bubble Bath';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Solar Powered Cascade Fountain';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Northbound Coffee';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Jack-Oï¿½-Lantern Man';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Creepy Critters Tower';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Halloween Popcorn Ball Decorating Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = '3-D Halloween Mug Set of 4';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Hauntingly Delicious: Gourmet Halloween Gift Basket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Halloween Stacking Cake Plates (set of 3)';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Love Letter Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Snake & Butterfly Peanut Butter Cups';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'GrowBottle Upcycled Hydrogardens';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Party Cube Cooler';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Personalized Wine Bottle Salt Mill';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Wall-E Toothbrush';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'KitchenAid Pro 500 Mixer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Wildlife Works Tees';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Matt & Natt Phish Clutch';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Michael Kors Wallet Clutch for iPhone';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Alessi Stovetop Espresso Maker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Mr. Roboto Dog Duvet';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Cobra Portable Picnic Chair';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Garden365 Elevated Garden';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Rocky Bathrobe';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Phish Patagonia Fleece Jacket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Aster Dangles';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Doggone Dog Tags';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Sake Bomb';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'The Draper Shoe Shine Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Geek Panties';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Dior Capture Totale';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Leaves Slate Coaster Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Travel Vest for Men';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Waterburst Cocktail Napkins';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Pirate Rocking Ship';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Superhero Onesies';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Harmonica Instruction Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Teavana Perfect Tea Maker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Five Little Monkeys Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Fine Wine Tote';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Iconic Camera Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Chicco Fun Travel Activity Nest';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Tea Tower';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Fossil Max Tablet Sleeve';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Coffee Cup Gadget Car Charger';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Sunflower Bird Bath';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Gaiam Garden Composter';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Sedu Revolution Pro Ionic Travel set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Bindya Python Print Scarf';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Vinyl Record Bowls';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Chilled Salad Server';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Standing Jewelry Box';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Sculpted Jewelry Tree';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Gaiam Compost Bucket Tall';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Gala Fondue Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Classic Music Box Record Player';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Year of Seeds';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Gaiam Teak Puzzle Serving Tray';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Gaiam Tree of Life Yoga Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Bunnies by the Bay 2-Piece Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Baden Champions Bocce Ball Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'The Only Digital Camera Swim Mask';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Nike+ SportWatch GPS powered by TomTom';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Everything Fits Gym Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Back To The Root Mushroom Growing Kits';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Speck Products iGuy Standing iPad Cover';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'The Zaggmate Keyboard Wireless - Bluetooth';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Beaba Babycook';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Numark iDJ iPod 2 Channel Mixer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Meteor Mic USB Studio Microphone';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Paw Pet Carrier - White - Frontgate';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Bath & Body Invigoration';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Griffin Slap Flexible Wristband for iPod Nano (6th generation)';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Crosley Keepsake - USB Turntable';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'iShred Guitar Connect Cable for iPhone, iPod, and iPad';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Romance Films Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'L.L.Bean O-Grill Portable LP Gas Grill';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Oval Leash with Light';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Orvis Barbour Waxed-Cotton Dog Jacket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Juicy Couture Sequined iPad Sleeve';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'iPhone 4 / 4S Jett Metal Case';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Coffee Cup Warmer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'COSIMO by Antonio Verdi';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Kindle Fire';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Fitbit - The Wellness Monitor';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Champagne & Flutes Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Brave New World of Wine';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Nike Athletic ID Sport Shoulder Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Hario Ceramic Coffee Brewing Funnel';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Cocktail Table and Cooler in One';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Design Your Own Chuck Taylors';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'World''s Finest Pool Float';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Personalized Glass Drinking Jars';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Cordless LED Grill Light';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Namb "Twist" Cocktail Shaker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Ralph Lauren Cocktail Shaker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'NFL Louis Comfort Tiffany-Style Lamp';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Handprint Canvas Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Rodeo Dog Bed';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Pac-Man Bank';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Sprayground Rasta Backpack';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Photo Collage Personalized Tie';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Miller Genuine Draft Beer Box Cowboy Hat';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Ballpark Cuff Links';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Smooshed Ice Cream Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Fogless Shower Mirror';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Champagne Congratulations';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Authentic Big Lebowski Bowling shirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Orvis World War II Mechanic''s Sweater';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'L.L. Bean Continental Rucksack';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Donegal Tweed Patch Sweater';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Vans Monocole T-Shirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'The North Face Diez Jacket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'L.L. Bean Wrinkle Resistant Blazer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Sesame Street Bert Face T-shirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'iHome iP1 Audio System for iPod/iPhone';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Speakal iBoo Docking Station Speakers';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Pangea Dallas Cowboys ProToast Toaster';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Sundance Film Festival Box Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'The iPhone Photo Printer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Ticket Stub Diary';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'zerOz Om Wallet';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Recycled LP Coasters';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Eton Solar Powered Sound System';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Homeloo Wooden LCD Clock';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = '8GB USB Flash Drive';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Personalized Garden Tools Bag & Kneeling Pad';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Vera Wang Love Knots Toasting Flutes';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'The Body Shop Gift Card';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Bamboo Bath Caddy';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'WineHug Travel Wine Carrier';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = '360 Degree Spinner Rolling Carry-On';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Rolling Pet Trolley and Backpack';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Frontgate - Cat Food Storage Canister - Silver';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Orbee-Tuff Sport Coach''s Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Escape Pack';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'The Ultimate Frisbee Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'NIKE STORM FLY 2.0 JACKET';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Baratza Virtuoso Burr Coffee Grinder';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Home Energy Monitor';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Easybloom Plant Sensor';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Hand-Dipped Strawberry Roses';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Heart Cutter Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Sterling Silver Intertwined Hearts Bracelet';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'The Newburyport Whoopie Pie';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Ultimate Dessert Truffle Gift Box';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Buddha Board';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Deep Sea Sand Art';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Continent Pillow Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Trevi Lacquer Finish Square Wall Mirror';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Lumen Candle Shadow Projector';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Leighton Pagoda Umbrella';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Govino Shatterproof Stemless Wine Glasses';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Tour de France Wine Gift Pack';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Silver Rabbit Wine Tool Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Riedel Sommeliers Burgundy Grand Cru Glass';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Maple Wine and Dine 4 pack';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Brookstone 12-Bottle Silent Wine Refrigerator';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Lenox Tuscany Classic Decanter';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Guitar Pick Punch';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Massaging Bed Rest';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Bose SoundDock Series II';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Singing Karaoke System with iPod Docking';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'L.L.Bean Sunbuster Shelter/Privacy Screen Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Nike Storm Fly Women''s Running Jacket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Fitbit Wireless Personal Trainer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Spiderpodium Flex Tablet Stand';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'REL Brittania 2 Subwoofer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Bony Levy Wavy Stackable Diamond Ring';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Silver Bracelet Watch';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Kenneth Cole New York Drape Front Faux Shearling Coat';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Whole Spice Holiday Jar Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Fossil Terrain Shave Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Philosophy The Travel Agent Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'GelaSkins Removable Art Prints for iPad';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Boppy Pillow with Slipcover';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'ERGObaby - Organic Baby Carrier';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Foxgloves Original Women''s Gardening Gloves';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Promenade Garden Tote with Tools';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Escape Luxury Travel & Sleep Mask';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Sephora Quilted Travel Bag Collection';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Gardener Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Tulle & Satin Babydoll';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'The New InterCourses Cookbook';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Classic Dispenser with 3 Bags of Personalized M&Ms';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Macadams Chocolate Collection';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Gourmet Organic Dog Biscuits';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Orvis Reliabowl';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Solvit Tagalong Booster Pet Car Seat';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Ultra Mini Travel Steamer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Memory Foam Head Support Travel Pillow';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Scratch Off World Map';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'National Geographic Personalized Aerial Map Jigsaw Puzzle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'National Geographic Genographic Project Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Lighting Mosaic Lamp "Green with Envy"';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Christmas Red Mosaic Stained Glass Lamp';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Texas Rodeo Stained Glass Mosaic Lamp';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Lighting Peace Signs and Flowers Mosaic Stained Glass Lamp';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Blue Heart Mosaic Necklace Pendant';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Heart Mosaic Pendant Necklace Autumn Sunset';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Mosaic Ring Adjustable Greens from Earth';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Mosaic Stained Glass Platter Blue Ocean';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Mosaic Eye of the Majesty';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Michelle''s Garden Round Stained Glass Mosaic Lamp';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Lighting Switch Plate Decorative Mosaic iheartu';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Mod Dots Delight iPad Case';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Fashionably Lauren Black Women''s Ribbon Belt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Black Victoria Shrug with Lace Ruffles';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Painted Amaryllis Measuring Cups';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Eva Solo Portable Grill';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Breville Juice Fountain Elite';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Apple TV';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Sea Royalty Natural Caviar Ring';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Kitara Earrings';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Honey Badger T-Shirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Condolisa Side Table';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Christmas Red Twig Wreath';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Kitchit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Starbucks eGift Card';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Lasonic i931 Ghetto Blaster with iPod Dock';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'iPad 2';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Thermos Vacuum Insulated 16oz Black Travel Tumbler';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = '18ct Eternity Diamond Ring';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Syma S107G Remote Control Helicopter';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Angry Birds 9 Pack Assortment w/ Sound';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'SnapMount Tripod Mount for iPhone 4/4S';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'The Unofficial Official Handbook of Good Deeds';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Laser Kitty Wallet';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'The Alchemist by Paulo Coelho';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Louis Garneau Men''s Cycling Bib';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Bicycle Wine Rack';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'blanket ID';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Felt Reindeer Head';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Echo Touch Gloves';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Nesting Babushka Glasses (set of 3)';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'White Topaz Band by Cathy Waterman';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Tall Felt Bud Vase';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Facebook Propaganda Poster';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Initial Pillow';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'iPad 2';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Chrome Loop Candelabra';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Wobble Bowls by Speechless Studios';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'BKR Bottle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'A ShihTzu Puppy';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Aether Travel Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Hand Knit Peruvian Highland Wool Felted Cat Napper';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Christmas Tree Dog Toy';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Organic Catnip Kicker Stick';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Catnip Cassettes';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Catnip Pizza Slices';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Owl Hat for Baby in Undyed Alpaca';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'MATT & NAT Munro Belt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Aurora World Barn Yard Friends Carrier';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Skip Hop Baby Changing Station';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Electric Pepper Grinder & Salt Mill';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Kitty Cat Corn';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'The Walking Dead: The Complete First Season (3-Disc Special Edition)';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Carnivore Coasters';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Purple Padded iPad Case with Stand';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Personalized Smartphone or iPod Case - Custom Made!';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Appliqued Name Blanket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Happi Shoulder Bag';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Personalized Drawstring Bag - Custom Made!';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Moses Style Doll Bed KOZY KOT';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Doll Bedding Quilt & Pillow Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Wild Tote Bag Purse';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Mei Tai style Doll Carrier';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Custom Smartphone or iPod Case';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Fun Flowers Padded iPad Case withStand';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Funky Flowers Padded iPad Case with Stand';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Padded iPad Case with built in Stand and Pockets - Custom Made!';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Doll Bedding Quilt & Pillow Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Sweet Cupcakes Purse';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Personalized Neck Cooler';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Spoon Salt & Pepper Shaker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Recycled Traffic Light Lens Bowl';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Klean Kanteen Wide Insulated Stainless Steel';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Art Nouveau Floral iPhone Case';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Floral Design Business Card Case';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Vintage Metal Door Knob Wine Stopper';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Wine Butler';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Red Alder Wine Shaped Wood Cutting Board with Cheese Knife';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Biodegradable Bamboo Flower Pot';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Lodestar Farms Lemon Olive Oil';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Clean House, Clean Planet Book';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Personalized Suki Journal';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Rachaelhale Personalized Notebook';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Suki Personalized Desk Planner';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'An Everlasting Meal: Cooking with Economy and Grace';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Why I Fight: The Belt Is Just an Accessory (BJ Penn)';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Print Workshop : Hand-Printing Techniques + Truly Original Projects';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Kindle Case with Built in Stand - Custom Made!';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Mr. Grinch Holiday Dog Collar';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Blue and Snowflakes Breakaway Cat Collar';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'YOU ARE THE SUN TSHIRT';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'ABOVE EARTH 23 Historic Space Missions Tshirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'ROCKSTAR 28 Classic Rockers (1964-76) Tshirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'BEYOND EARTH LETTER PRESS PRINT 23 Historic Space Missions';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = '141 Famous Beards and/or Stashes Tshirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Bodum Bistro Electric Water Kettle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Kiva Gift Cards';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Upcycled Glass Traffic Light Lens Display Bowl';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Music Education Donation Holiday Cards';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'CAbi Faux Wrap dress';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Canon Telephoto Zoom Lens for Canon Digital SLR Cameras';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'The Science of Parenting Book';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Bebe Au Lait Hooter Hider';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Aveda Tranquility Boxed Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Aveda Hand & Foot Relief Lotion Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Aveda For Him Products Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'You Are Not So Smart';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Sound Wave Scarf';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Pixel Landscape';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Tree branches chiffon scarf';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Geodesic Dome Shawl';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Ice Tree';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Vibram FiveFingers Shoes';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'iPhone Holder for Dashboard or Windshield';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'iPhone Audio Cable for Car, Home Stereo';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Donation to Red Cross';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Aveda Smooth Infusion Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Aveda Color Conserve & Damange Remedy Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Aveda Refresh-Mint Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Aveda Balancing Ritual Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'Aveda Gift Wrapped Candle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'BEST IN PARK Old School Collar';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Doggy Mansion - Alabama';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Reknitz Dog Sweaters';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'LOIS HILL Sterling Silver Thin Cut Cuff Bangle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'North Face WOMEN''S THUNDER JACKET';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'MoMA Design Store Measuring Cups';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Lego Ninjago Spinjitzu Dojo';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Crispin Jones Cyclops Watch';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Porthole Round Flask';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Glencairn Whiskey Glasses, Set of 4';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Whiskey Lover''s Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = '101 Whiskies to Try Before You Die';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Owen Decanter';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Coach Tech Cases';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'Sorry We''re Closed Eye Mask';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'jetsetter' and p.description = 'American Fashion Travel Book';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Sur La Table Bamboo Steamers';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Glamour Mini Flask';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Le Creuset Berry Jam Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Dylan''s Candy Bar Signature Chocolate Wheel';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = '10in Cornell Dark Modern Wall Clock';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Stella Blanca Modern Wall Clock';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Chemex Glass Manual Coffeemaker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Kids Sock Monkey Slippers';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Maple End Grain 15-inch Chopping Block';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Sandra Boynton Greatest Hits';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Kidz Gear WIred Headphones for Kids';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Mudpuppy World Traveler Magnetic Figure';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'The Faceless Watch';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Skybox Pet Booster Seat';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Cherry Blossoms Candle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Wine Cork Candles';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'The Man Can';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = '100 Good Wishes Candle Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Napa Soap Co Ceramic Shaving Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'American Eagle Puffer Coat';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Personalized Shoeshine Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Dapper Diamond Sweater';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Green Camouflage Dog Hoodie';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Battlefield 3 Video Game';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Jarden Sunbeam Theater Style Popcorn Maker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Anne Taintor Barware Coasters';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Vera Wang Love Knots Picture Frame';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Good Fortune Necklace';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Ancient Art of Origami Box Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Sculpey Modeling Clay Sampler Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Denim Biker Jacket with Gold Skulls';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Black Biker Jacket with White Skulls';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'RecycleBone Chew Toy';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Recycled Soda Bottle Leash';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Magna-Tiles Translucent Colors 100 pieces';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Gorilla Coffee Gift Box Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Sweet Pea Scooter';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Melissa and Doug Deluxe Magic Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'My First Scooter';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Smartphone Dock';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Pop Art Puppy Mug';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Gianni Vattimo, Nihilism and Emancipation';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Camper Mauro Lace-ups';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Trophy Tennis Ball Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Featherstone Heights Brownstone Bird Cage';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'See''s Candies Nuts & Chews';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Concrete Sketch Pencil';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Thermapen - Instant Read Thermometer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Alphabet Photography';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Flight Stainless Steel Watch - Black';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Mophie Juice Pack Air';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Tea Stick Infuser';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Samsung Galaxy Nexus';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Tortilla Press';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Air Hockey Table';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Dartboard with Cabinet and Electronic Scorer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'CardBoard Playhouse';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'upwardly mobile' and p.description = 'Puma Ping Pong Table';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Laga Bags';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Sitting Taller Kids';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Burton Men''s Process Flying-V Snowboard';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Traktor Kontrol X1 Performance DJ Controller';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Kodak Photo Book';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Rose City Vegan Chocolates';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Zen Alarm Clock';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Schoolbags for Kids';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Mushroom Gardens';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Soiree Wine Aerator';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Gardian Angel Candlesticks';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Bike Chain Star Ornament';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Bento Gift Box';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Aromatherapy Sampler Gift Box';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Aromatherapy Bath & Body Starter Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Memory Foam Wedge Pillow';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Fred Flare Wacky Bandages';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Green Toys Pink Dump Truck';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'treehugger' and p.description = 'The Original Naturally Safe Finger Paint Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Rolls Royce Phantom Coupe';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Pink Organic Crochet Baby Hat';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Bun in the Oven Organic Skincare for Mom';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Picnic Pal Ducky Gift Crate';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Oceanfast 48';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Issey Miyake Trapezoid Collection Chronograph Watch';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Stamp Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Eco Friendly Hand Felted Shoes for Outdoors';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Lib Tech T. Rice Pro Horsepower Snowboard';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'BEST IN PARK Distinguished Engraved Collar';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Best in Park Field Coat for Pugs and Frenchies';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = '12 Days of Christmas Pet Treats';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Jets Polo';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'iPhone 4 Charger Stand';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Get Well Soon Dog and Cone Collar';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Supra Snowflake Pack Skytops';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Flud Tableturns Watch';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Existential Whale Shirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Taxi Mittens';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Traveling Gypsy Blouse';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'The Encounter, digital print by 88editions';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Moonrise, Charmed Meadow, original etching';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'February Visit, solar plate etching on handmade paper';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Botanical Silhouettes, ooak monotypes';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Filson Dog Lover Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Retro Santa Dog Toy';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Eco-Bone';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Burton Cartel Flex Snowboard Binding';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Electric EG2.5 Goggles';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Mosaic Stepping Stone Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Tartine Bakery Cookbook';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Kindle Fire';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Minu-Skull Hi-Fi Mini Speaker System';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = '10 Deep Wiildcard Cardigan';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Good Wood Baretta Stud Earrings';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Good Wood Diamond Bracelet';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Drama Queen Earings';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Turquoise Dream Earrings';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Herban Essentials Pet Towlette';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'V Indulgence Tower';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'MarieBelle Red 36pc Chocolate Box';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Monagrammed Paper Guest Towels';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'newborn' and p.description = 'Gund Blanket Bear';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Monagrammed Glass Pitcher';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'VonZipper Feenom Goggle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Skullcandy Rasta earBuds';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'SodaStream Soda Maker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Nuttbutt Yellow Harness Vest';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'pet lover' and p.description = 'Olive Cookie Treat Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Gun Egg Fryer Mold';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Sonic Over Ear Headphones';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Floral Pattern Ring Antiqued Silver Bouquet Band';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Hand Painted Glass Vase With Poppies';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'IT''SUGAR megabox';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'beauty queen' and p.description = 'Lavender Mint Splash Soap';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Snowflake Hand Painted Glass Candle Holder';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Christmas Hand Painted Glass Candle Holder';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'Hand Painted Glass Bottle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Vintage Silver Rim Ice Bucket and Glasses';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Danish Teak Bird Bottle Opener Corkscrew';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Mod Zeuthen Denmark Piggy Bank';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Vintage Brass Kitten Figurines';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Scandinavian Mid Century Modern Beer Stein';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Jumbo Flip Clock';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Palomino Blackwing 602 Pencil';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Gas Mask Ring';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Cropped Turtleneck Hand Knitted Sweater with long Sleeves';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Handknit Crochet Bracelet';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Giant Crochet Cowl - Cream';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'BUBBLES - Hand Crochet Capelet Warm Shoulders';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Snuggle Hoods from Creaturekebab';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Queen Anne''s Lace Hand Painted Coffee Mugs';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Queen Anne''s Lace Hand Painted Salt and Paper Shakers';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hostess' and p.description = 'Queen Anne''s Lace Hand Painted Ceramic Sugar Bowl';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Jeremy Scott Adidas Wing Shoes';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'ZENS Glass Tea Set-Cui Qu';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Clever Coffee Dripper';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'outdoorsy' and p.description = 'Adirondack Firestone';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Lighter Cufflinks';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Santa''s Oven Mitt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = '5 lbs of Silly Putty';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Winter Stripes Cupcake Wrappers';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Caviar Dreams Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Vitra Design Ball Clock';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Exotic & Rare Cheese Collection';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Hive Honey Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Dylan''s Candy Jewelry Box';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Guitar Hero Warriors Bundle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Case-Mate Monsta iPhone Case';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Hat Box: The Collected Lyrics of Stephen Sondheim';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Camera Table Dolly';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Catch Phrase Electronic Game';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Phish - YEM Beanie';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'hipster' and p.description = 'Lilypad Beginner''s Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Baby''s First Camera';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'toy xylophone';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Smiling Moon Balancer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Little Rocker''s Guitar Rattle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Peace Sign Teething Rattle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Old-School Toy Truck';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Classic Racer';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Off-Road Adventure Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Ion iTYPE Bluetooth Keyboard for Smart Phones and PDAs';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'Atari iPad Arcade';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Personalized Hometown Puzzle';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Better Marriage Blanket';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'Giraffe Toilet Paper Holder';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'Training Wheels Eliminator';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Custom Beer Pong Table';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fitness buff' and p.description = 'Verdict Skis';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'The Walking Dead Red Eyes T-Shirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Sons Of Anarchy Patch T-Shirt';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Modernist Cuisine Encyclopedia';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Versetta iPad Handbags';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Felted Shoes Yellow with Yellow Sole Colo';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'uber geek' and p.description = 'iHome Rechargeable Mini Speakers';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'American Shredding';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'DeLonghi 15-Bar-Pump Espresso Maker';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'iLuv Sweet Cotton Headphones';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Satin Heart Chocolate Box';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Camellia Bonsai';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Valentine Gift Tower';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'wine lover' and p.description = 'A Taste Adventure Wine Sampler';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'almost famous' and p.description = 'Studio Essential Art Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Mismo Backpack';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'The Modern Mixologist Cocktail Book';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'fashionista' and p.description = 'Jewelry Bog';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Massage Oil Aphrodisiac Candle Gift Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'green thumb' and p.description = 'Make Your Own Bonsai Kit';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Two Tiered Truffle Server';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Silver Box of Treats';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Heart Cup & Saucer Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Zappos Jeans and Shoes';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'munchkin' and p.description = 'CRAZY FORTS Construction Toy 69pc';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'decorator' and p.description = 'The Thinker Carved Wood Statue';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'John Varvatos Star USA ''Hipster'' Chukka Boot';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'The Visionary State: A Journey Through California''s Spiritual Landscape';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'ilovetypography a-z hoodie';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'romantic' and p.description = 'Pretty In Pink Ruffle Cake';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'sweet tooth' and p.description = 'Choclatique Cookbook: 150 Simply Elegant Desserts';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'All-Clad Stainless 9-Piece Cookware Set';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Cuisinart Food Processor';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'metrosexual' and p.description = 'Saucony Jazz Low Pro Vegan Sneakers';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Royal Dragon Of Wisdom';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = 'foodie' and p.description = 'Wicked Good Barbecue';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'The Beacon Dog Light';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'Michael Bastian Army Shirt in Blue';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'New Balance U420 Running Shoes';
insert into products_subcategories 
select s.id, p.id from subcategories s, products p 
where s.name = '' and p.description = 'CAbi';
