import {
  DetailsPage,
  FavoritesPage,
  HomePage,
  ResetPassword,
  SearchPage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  TrendsPage,
} from "pages";
import { ROUTE } from "routes";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainTemplate } from "templates";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />}></Route>
      <Route path={ROUTE.FAVORITES} element={<FavoritesPage />}></Route>
      <Route path={ROUTE.DETAILS} element={<DetailsPage />}></Route>
      <Route path={ROUTE.SEARCH} element={<SearchPage />}></Route>
      <Route path={ROUTE.TRENDS} element={<TrendsPage />}></Route>
      <Route path={ROUTE.SETTINGS} element={<SettingsPage />}></Route>
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />}></Route>
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />}></Route>
      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPassword />}></Route>
    </Route>,
  ),
);
