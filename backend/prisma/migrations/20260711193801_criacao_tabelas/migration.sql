/*
  Warnings:

  - You are about to drop the column `endereco` on the `contato` table. All the data in the column will be lost.
  - You are about to drop the column `whatsapp` on the `contato` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `destino` on the `orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `origem` on the `orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `orcamento` table. All the data in the column will be lost.
  - You are about to drop the `servico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `necessidade` to the `Contato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Contato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinoEntrega` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detalhesEntrega` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origemColeta` to the `Orcamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contato` DROP COLUMN `endereco`,
    DROP COLUMN `whatsapp`,
    ADD COLUMN `necessidade` TEXT NOT NULL,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `orcamento` DROP COLUMN `descricao`,
    DROP COLUMN `destino`,
    DROP COLUMN `origem`,
    DROP COLUMN `status`,
    ADD COLUMN `destinoEntrega` VARCHAR(191) NOT NULL,
    ADD COLUMN `detalhesEntrega` TEXT NOT NULL,
    ADD COLUMN `origemColeta` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `servico`;

-- DropTable
DROP TABLE `usuario`;
