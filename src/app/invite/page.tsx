"use client";

import { useState } from "react";
import { Button } from "@/components/button";
// import Image from "next/image";
import DiscordModal from "@/components/DiscordModal";
import TelegramModal from "@/components/TelegramModal";

export default function InvitePage() {
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState(false);
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false);

  return (


    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            Add Collab.Land bot to your community!
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Collab.Land services DAOs, NFT communities, brands, and creators of
            projects big and small. If your project has a token, we are ready to
            support your community creation needs.
          </p>
          <div className="space-y-4">
            <Button
              className="w-full max-w-md py-6 text-lg bg-[#c1c4ea] hover:bg-[#4752C4]"
              onClick={() => setIsDiscordModalOpen(true)}
            >
              <img
                src="https://www.svgrepo.com/show/353655/discord-icon.svg"
                alt="discord"
                width={24}
                height={24}
                className="mr-2"
              />
              Discord
            </Button>
            <Button
              className="w-full max-w-md py-6 text-lg bg-[#0088cc] hover:bg-[#0077b5]"
              onClick={() => setIsTelegramModalOpen(true)}
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="Telegram"
                width={24}
                height={24}
                className="mr-2"
              />
              Telegram
            </Button>
          </div>
        </div>

        {/* 3D Objects */}
        <div className="relative flex justify-center items-center min-h-screen">
          {/* Main 3D Robot Image */}
          <img
            src="https://invite.collab.land/1686850132536/f9431545ac969f50c98d.png"
            alt="3D Robot"
            width={300}
            height={300}
            className="z-10"
          />

          {/* Purple Gear */}
          <img
            src="https://invite.collab.land/1686850132536/eca2b919cf748765b912.png"
            alt="3D Gear"
            width={100}
            height={100}
            className="absolute top-1/4 left-[15%] z-0"
          />

          {/* Yellow Sphere */}
          <img
            src="https://invite.collab.land/1686850132536/16ae63d9e287adaff140.png"
            alt="3D Gear"
            width={80}
            height={80}
            className="absolute bottom-[25%] left-[20%] z-0"
          />

          {/* Orange Nut */}
          <img
            src="https://invite.collab.land/1686850132536/59be93a28abf1614a7dc.png"
            alt="3D Nut"
            width={60}
            height={60}
            className="absolute top-[40%] right-[25%] z-0"
          />

          {/* Blue Nut */}
          <img
            src="https://invite.collab.land/1686850132536/bfc48217ce376088f1af.png"
            alt="3D Nut"
            width={50}
            height={50}
            className="absolute bottom-[15%] right-[40%] z-0"
          />
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-gray-600">
        <a href="#" className="mr-4 hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="mr-4 hover:underline">
          Terms
        </a>
        <span>© 2023 Collab.Land</span>
      </footer>

      <DiscordModal
        isOpen={isDiscordModalOpen}
        onClose={() => setIsDiscordModalOpen(false)}
      />
      <TelegramModal
        isOpen={isTelegramModalOpen}
        onClose={() => setIsTelegramModalOpen(false)}
      />
    </div>



  );
}
