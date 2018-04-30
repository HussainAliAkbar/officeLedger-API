CREATE TABLE `transactions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `isPaid` INT NOT NULL DEFAULT 0,
  `businessClientId` INT NOT NULL,
  `amount` INT NOT NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  `paymentDate` DATETIME NULL,
  `additionalDetails` VARCHAR(255) NULL,
  `paymentMethod` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_transactions_1_idx` (`businessClientId` ASC),
  CONSTRAINT `fk_transactions_1`
    FOREIGN KEY (`businessClientId`)
    REFERENCES `businessClients` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
