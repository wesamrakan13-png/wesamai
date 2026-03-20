import { cookies } from "next/headers";
import { Suspense } from "react";
import { Chat } from "@/components/chat";
import { DataStreamHandler } from "@/components/data-stream-handler";
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models";
import { generateUUID } from "@/lib/utils";

// ملاحظة لوسام: هذا الملف هو قلب واجهة WESAM AI PRO
export const metadata = {
  title: "WESAM AI PRO | المحرك السيادي",
  description: "نظام الذكاء الاصطناعي الخاص بالمطور وسام ركان",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="flex h-dvh bg-[#0a0a0a] items-center justify-center text-[#d4af37]">جاري تحميل قوة وسام...</div>}>
      <NewChatPage />
    </Suspense>
  );
}

async function NewChatPage() {
  const cookieStore = await cookies();
  const modelIdFromCookie = cookieStore.get("chat-model");
  const id = generateUUID();

  const selectedModel = modelIdFromCookie ? modelIdFromCookie.value : DEFAULT_CHAT_MODEL;

  return (
    <>
      <Chat
        autoResume={false}
        id={id}
        initialChatModel={selectedModel}
        initialMessages={[]}
        initialVisibilityType="private"
        isReadonly={false}
        key={id}
      />
      <DataStreamHandler />
      
      <footer className="fixed bottom-2 right-4 text-[10px] text-zinc-500 pointer-events-none">
        WESAM-PRO ENGINE V1.0 🛡️
      </footer>
    </>
  );
}
