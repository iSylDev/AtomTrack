import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

export async function proxy(request: NextRequest) {
  console.log("PROXY TRIGGERED on:", request.nextUrl.pathname);
  return await updateSession(request);
}

export const updateSession = async (request: NextRequest) => {
  // Create an unmodified response

  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(supabaseUrl!, supabaseKey!, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          request.cookies.set(name, value),
        );
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options),
        );
      },
    },
  });

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  const url = request.nextUrl.clone();

  if (request.headers.has("next-action")) {
    return supabaseResponse;
  }

  // Check if a logged in user tries access the auth pages, redirect them to dashboard
  if (user && (url.pathname.startsWith("/auth") || url.pathname === "/")) {
    url.pathname = "/dashboard/overview";
    return NextResponse.redirect(url);
  }

  // Redirect logged-in users hitting the base /dashboard to /dashboard/overview
  if (user && url.pathname === "/dashboard") {
    url.pathname = "/dashboard/overview";
    return NextResponse.redirect(url);
  }

  // Check if a guest tries to access the dashboard, redirect them to auth pages
  if (!user && url.pathname.startsWith("/dashboard")) {
    url.pathname = "/auth";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
};

export const config = {
  matcher: ["/", "/dashboard/:path*", "/auth/:path*"],
};
