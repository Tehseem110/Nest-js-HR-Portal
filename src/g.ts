// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;
//   const isPublicPath = path === "/login" || path === "/signup";

//   const token = request.cookies.get("HR-Token")?.value || "";

//   if (isPublicPath && token) {
//     return NextResponse.redirect("/");
//   }

//   if (!isPublicPath && !token) {
//     return NextResponse.redirect("/login");
//   }

//   // If the conditions above are not met, let the request continue
//   return NextResponse.next();
// }

// export const config = {
//   middleware: "all",
// };
