-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "Email" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "CreatedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ModifiedDate" DATETIME NOT NULL,
    "Slug" TEXT NOT NULL,
    "ProfilePhoto" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "PreviewImage" TEXT NOT NULL,
    "Height" INTEGER NOT NULL,
    "Width" INTEGER NOT NULL,
    "BackgroundColor" TEXT NOT NULL,
    "Slug" TEXT NOT NULL,
    "Serialization" TEXT NOT NULL,
    CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
