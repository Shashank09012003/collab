import { Button } from "@/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import { X } from "lucide-react"
import Image from "next/image"

interface TelegramModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TelegramModal({ isOpen, onClose }: TelegramModalProps = { isOpen: false, onClose: () => {} }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold">Always check the bot Telegram</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">⚡ User Name:</span> collablandbot
            </p>
            <a
              href="#"
              className="text-blue-500 hover:underline flex items-center"
            >
             <img src="https://invite.collab.land/1686850132536/0d638f696521f39fccf9.png" 
                alt="Telegram"
                width={20}
                height={20}
                className="mr-2"
              />
              Telegram Bot Walk-through
            </a>
            <Button className="w-full bg-[#0088cc] hover:bg-[#0077b5]">
              <Image
                src="data:image/jpeg;base64,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"
                alt="Telegram"
                width={24}
                height={24}
                className="mr-2"
              />
              Continue with Telegram
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}