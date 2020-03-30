--
-- MySQL 5.5.5
-- Mon, 30 Mar 2020 14:27:47 +0000
--

CREATE DATABASE `userdata` DEFAULT CHARSET utf8mb4;

USE `userdata`;

CREATE TABLE `datatable` (
   `github` varchar(20),
   `linkedin` varchar(100),
   `codechef` varchar(20),
   `hackerrank` varchar(20),
   `name` varchar(50),
   `imageUrl` varchar(200),
   `location` varchar(100),
   `company` varchar(100),
   `followers` varchar(10),
   `following` varchar(10),
   `publicRepo` varchar(10)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

INSERT INTO `datatable` (`github`, `linkedin`, `codechef`, `hackerrank`, `name`, `imageUrl`, `location`, `company`, `followers`, `following`, `publicRepo`) VALUES ('abhirangana', 'https://www.linkedin.com/in/abhi-rangana-a6a9791a1/', 'abhirangana', 'abhirangana', 'ABHISHEK RANGANA', 'https://avatars1.githubusercontent.com/u/60271592?v=4', 'null', 'null', '2', '1', '2');
INSERT INTO `datatable` (`github`, `linkedin`, `codechef`, `hackerrank`, `name`, `imageUrl`, `location`, `company`, `followers`, `following`, `publicRepo`) VALUES ('saisitaram2000', 'https://www.linkedin.com/in/saisitaram-vaddavalli-546252196/', 'saisitaram2000', 'saisitaramvadda1', 'null', 'https://avatars0.githubusercontent.com/u/53090249?v=4', 'null', 'null', '1', '2', '3');
INSERT INTO `datatable` (`github`, `linkedin`, `codechef`, `hackerrank`, `name`, `imageUrl`, `location`, `company`, `followers`, `following`, `publicRepo`) VALUES ('sharshach', 'https://www.linkedin.com/in/sri-harsha-chilukuri-89b97317a/', 'sharshach', 'sharshach', 'CHILUKURI SRI HARSHA', 'https://avatars3.githubusercontent.com/u/48358526?v=4', 'DURGAPUR', 'null', '4', '5', '10');