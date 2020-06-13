/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : mytest

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 13/06/2020 15:29:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES (1, 'admin', '$2b$10$y2q3YjkVpD.l7kI4fm9VnuMMwhOUSK26yIxCyPQzYWwScIIRcJZtW');
INSERT INTO `login` VALUES (3, 'root', '$2b$10$/iLmETisPOxQsXLoV/lM8.7Mbj3ne/eBiLyo.kpJvN9tpdG8IyYQW');
INSERT INTO `login` VALUES (4, 'zhoujielun', '$2b$10$m6vFGnN08RHupm3quS9hxutSIUygbLDwAu3fCuYjASQpz60gtCz3O');

SET FOREIGN_KEY_CHECKS = 1;
