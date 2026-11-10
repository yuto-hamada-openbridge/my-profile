import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// リクエストのたびにログイン状態（セッション）を確認・更新する
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
          Object.entries(headers).forEach(([key, value]) =>
            response.headers.set(key, value),
          );
        },
      },
    },
  );

  // 注意：createServerClient と getUser の間に別の処理を入れないこと
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 未ログインで /members 以下にアクセスしたら /login へ
  if (!user && request.nextUrl.pathname.startsWith("/members")) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return response;
}
