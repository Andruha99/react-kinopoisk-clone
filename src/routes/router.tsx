import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { DetailsPage } from "../pages/DetailsPage/DetailsPage";
import { FavoritesPage } from "../pages/FavoritesPage/FavoritesPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { ResetPassword } from "../pages/ResetPassword/ResetPassword";
import { SearchPage } from "../pages/SearchPage/SearchPage";
import { SettingsPage } from "../pages/SettingsPage/SettingsPage";
import { SignInPage } from "../pages/SignInPage/SignInPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { TrendsPage } from "../pages/TrendsPage/TrendsPage";
import { ROUTE } from "./routes";
import { MainTemplate } from "../templates/MainTemplate";
import { RequireAuth } from "components/RequireAuth/RequireAuth";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.DETAILS} element={<DetailsPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPassword />} />
      <Route element={<RequireAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
      </Route>
    </Route>,
  ),
);
