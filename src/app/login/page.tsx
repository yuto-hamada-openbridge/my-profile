import type { Metadata } from "next";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "ログイン | H.Y" };

// ログインページ（/login）
export default function LoginPage() {
  return (
    <div className="mx-auto max-w-sm">
      <h1 className="mb-6 text-2xl font-bold">ログイン</h1>
      <LoginForm />
    </div>
  );
}
