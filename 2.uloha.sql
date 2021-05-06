
use databaza;
drop table discounts;
create table discounts (
	Favorites char(1),
    `From Url` mediumtext,
    `To URL` mediumtext,
    `Anchor Text` TINYTEXT,
    `Link Status` varchar(8),
    `Type` varchar(10),
    BLdom tinytext,
    DomPop tinytext,
    Power int,
    Trust int,
    `Power*Trust` int, 
    Alexa tinytext,
    IP varchar(15),
    CNTRY varchar(10)
    );
    
LOAD DATA INFILE 'C:/Users/Tekumseh/Desktop/project/junior/testData--www-linkresearchtools-com.csv' 
INTO TABLE discounts 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

-- aby fungoval infile --secure-file-priv="" 