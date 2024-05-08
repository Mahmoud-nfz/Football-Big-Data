import Image from "next/image";
import { PlayerInfoCard } from "~/components/players/PlayerInfoCard";
import { PlayerStatsCard } from "~/components/players/PlayerStatsCard";
import { player1 as player } from "~/data/players";
import { latestMatches } from "~/data/matches";

export default function PlayerScreen() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/football-stadium-1.jpg")' }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 h-full w-full bg-white bg-opacity-90">
        <div className="z-10 flex h-full items-center justify-between px-5">
          {/* Left Div */}
          <PlayerInfoCard
            player={player}
            className="h-full w-1/3 py-4 text-left"
          />

          {/* Center Image */}
          <div className="flex-shrink-0">
            <Image
              src={player.image}
              alt="Center Image"
              width={300}
              height={300}
            />
          </div>

          {/* Right Div */}
          <PlayerStatsCard
            player={player}
            latestMatches={latestMatches}
            className="h-full w-1/3 py-4 text-left"
          />
        </div>
      </div>
    </div>
  );
}