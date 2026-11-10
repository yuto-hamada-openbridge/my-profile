import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/actions";

// ログイン状態に応じて「ログイン」「ログアウト」を切り替えるボタン
export async function AuthButton() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <Link
        href="/login"
        className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background hover:opacity-80"
      >
        ログイン
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link href="/members" className="text-sm hover:underline">
        メンバー専用
      </Link>
      <form action={signOut}>
        <button
          type="submit"
          className="rounded-full border border-foreground/30 px-4 py-1.5 text-sm font-medium hover:bg-foreground/10"
        >
          ログアウト
        </button>
      </form>
    </div>
  );
}
