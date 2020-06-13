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

 Date: 13/06/2020 15:29:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `age` int(0) NULL DEFAULT NULL,
  `male` int(0) NOT NULL DEFAULT 1,
  `mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `hobby` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '张三', 18, 1, '13111110000', '123456@qq.com', '加班');
INSERT INTO `user` VALUES (2, '李四', 38, 1, '12311112222', '456@qq.com', 'chie');
INSERT INTO `user` VALUES (3, '王二虎', 33, 1, '13100010012', NULL, NULL);
INSERT INTO `user` VALUES (4, '李晓玲', 28, 0, NULL, NULL, NULL);
INSERT INTO `user` VALUES (9, 'shadiao', 1, 1, NULL, NULL, NULL);
INSERT INTO `user` VALUES (12, 'meng', 1, 1, NULL, NULL, NULL);
INSERT INTO `user` VALUES (13, '卢浮宫', 10, 1, NULL, NULL, NULL);
INSERT INTO `user` VALUES (14, '拉拉呱', 12, 1, NULL, NULL, NULL);
INSERT INTO `user` VALUES (17, '经过规干', 11, 1, NULL, NULL, NULL);
INSERT INTO `user` VALUES (19, '阳光2', 20, 1, NULL, NULL, NULL);
INSERT INTO `user` VALUES (20, '周杰伦', 30, 1, '12313231', '123@qq.com', '唱歌、游戏');

SET FOREIGN_KEY_CHECKS = 1;
