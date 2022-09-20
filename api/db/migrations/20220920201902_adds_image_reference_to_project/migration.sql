-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Image" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "ImageUrl" TEXT NOT NULL,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT,
    CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Image_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("Id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Image" ("CreatedAt", "Id", "ImageUrl", "userId") SELECT "CreatedAt", "Id", "ImageUrl", "userId" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
