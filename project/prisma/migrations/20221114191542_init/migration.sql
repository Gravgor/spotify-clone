-- CreateTable
CREATE TABLE "likedPlaylists" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "playlistId" INTEGER NOT NULL,

    CONSTRAINT "likedPlaylists_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "likedPlaylists" ADD CONSTRAINT "likedPlaylists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likedPlaylists" ADD CONSTRAINT "likedPlaylists_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
