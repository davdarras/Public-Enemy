import { ThemeProvider } from "@emotion/react";
import { render, RenderOptions } from "@testing-library/react";
import { getMessages, LocaleType } from "core/i18n/messages";
import { SnackbarProvider } from "notistack";
import React, { ReactElement } from "react";
import { IntlProvider } from "react-intl";
import { appTheme } from "ui/theme";

let locale: LocaleType = "en";
if (import.meta.env.VITE_LOCALE) {
  locale = import.meta.env.VITE_LOCALE;
}

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <IntlProvider messages={getMessages(locale)} locale={locale}>
        <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
      </IntlProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
