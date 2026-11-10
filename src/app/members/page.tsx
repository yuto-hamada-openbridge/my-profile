import type { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = { title: "メンバー専用 | H.Y" };

// ログインした人だけが見られるページ（/members）
export default function MembersPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">メンバー専用ページ</h1>
      <Suspense fallback={<p className="text-foreground/60">読み込み中…</p>}>
        <MembersContent />
      </Suspense>
    </div>
  );
}

async function MembersContent() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 念のためサーバー側でも確認（proxy.ts でもリダイレクトしている）
  if (!user) {
    redirect("/login");
  }

  return (
    <div className="space-y-4">
      <p>
        ようこそ、<span className="font-medium">{user.email}</span> さん。
      </p>
      <p className="rounded-xl border border-foreground/10 p-5 leading-relaxed">
        このページはログインした人だけが閲覧できます。ここには会員向けの情報を載せることができます。
      </p>
    </div>
  );
}
