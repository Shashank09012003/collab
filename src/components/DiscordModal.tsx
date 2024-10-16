import { Button } from "@/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import { X } from "lucide-react"
import Image from "next/image"

interface DiscordModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DiscordModal({ isOpen, onClose }: DiscordModalProps = { isOpen: false, onClose: () => {} }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold">Always check the bot Discord</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">⚡ ID:</span> Collab.Land#6372
            </p>
            <p>
              <span className="font-semibold">⚡ User ID:</span> 704521096837464076
            </p>
            <a
              href="#"
              className="text-blue-500 hover:underline flex items-center"
            >
              <img src="https://invite.collab.land/1686850132536/0d638f696521f39fccf9.png"
                alt="Discord"
                width={20}
                height={20}
                className="mr-2"
              />
              Discord Bot Walk-through
            </a>
            <Button className="w-full bg-[#2e0e3d] hover:bg-[#bcbed4]">
              <Image
                src="https://www.svgrepo.com/show/353655/discord-icon.svg"
                alt="Discord"
                width={24}
                height={24}
                className="mr-2"
              />
              Continue with Discord
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}