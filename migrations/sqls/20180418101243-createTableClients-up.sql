CREATE TABLE `clients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `phoneNumber` VARCHAR(255) NULL,
  `contactPersonName` VARCHAR(255) NULL,
  `contactPersonNumber` VARCHAR(255) NULL,
  `contactPersonEmail` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`));
