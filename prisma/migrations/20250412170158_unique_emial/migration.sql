-- CreateTable
CREATE TABLE `curso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `universidade_id` VARCHAR(255) NOT NULL,
    `endereco_id` INTEGER NOT NULL,
    `datacriacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `dataatualizacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(255) NOT NULL,
    `cidade` VARCHAR(255) NOT NULL,
    `uf` VARCHAR(255) NULL,
    `logradouro` VARCHAR(255) NULL,
    `bairro` VARCHAR(255) NOT NULL,
    `numero` VARCHAR(255) NULL,
    `complemento` VARCHAR(255) NOT NULL,
    `datacriacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `dataatualizacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `universidade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `razao` VARCHAR(255) NOT NULL,
    `fantasia` VARCHAR(255) NOT NULL,
    `endereco_id` INTEGER NOT NULL,
    `datacriacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `dataatualizacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `datacriacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `dataatualizacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
