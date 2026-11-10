"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

// ログアウト処理（サーバー側でセッションを削除してトップへ戻る）
export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}
