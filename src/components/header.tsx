import Link from "next/link";
import { Suspense } from "react";
import { AuthButton } from "@/components/auth-button";

// 全ページ共通のヘッダー
export function Header() {
  return (
    <header className="border-b border-foreground/10">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
        <Link href="/" className="font-bold tracking-wide">
          H.Y
        </Link>
        {/* ログイン状態は cookie を読むため Suspense の中で表示する */}
        <Suspense fallback={<span className="h-8 w-20" />}>
          <AuthButton />
        </Suspense>
      </div>
    </header>
  );
}
