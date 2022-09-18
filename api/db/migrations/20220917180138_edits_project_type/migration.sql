-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "PreviewImage" TEXT NOT NULL,
    "Height" INTEGER NOT NULL,
    "Width" INTEGER NOT NULL,
    "BackgroundColor" TEXT NOT NULL,
    "Slug" TEXT NOT NULL,
    "Serialization" TEXT NOT NULL,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("BackgroundColor", "Height", "Id", "Name", "PreviewImage", "Serialization", "Slug", "Width", "userId") SELECT "BackgroundColor", "Height", "Id", "Name", "PreviewImage", "Serialization", "Slug", "Width", "userId" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
