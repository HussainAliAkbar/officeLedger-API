CREATE TABLE `businessClients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `businessId` INT NOT NULL,
  `clientId` INT NOT NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_businessClients_1_idx` (`businessId` ASC),
  INDEX `fk_businessClients_2_idx` (`clientId` ASC),
  CONSTRAINT `fk_businessClients_1`
    FOREIGN KEY (`businessId`)
    REFERENCES `businesses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_businessClients_2`
    FOREIGN KEY (`clientId`)
    REFERENCES `clients` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
