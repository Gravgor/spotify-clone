/*
  Warnings:

  - Added the required column `baseColor` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondColor` to the `Playlist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "baseColor" TEXT NOT NULL,
ADD COLUMN     "secondColor" TEXT NOT NULL;
