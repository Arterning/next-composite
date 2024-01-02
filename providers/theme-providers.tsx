"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children, ...props }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}
