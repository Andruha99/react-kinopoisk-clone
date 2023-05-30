import { PixemaDark, PixemaLight } from "assets";
import { Form, HeaderContainer, HeaderWrap, StyledInputSearch, StyledLink } from "./styles";
import { AccountName } from "components/AccountName/AccountName";
import { useToggle } from "hooks/useToggle";
import { useWindowSize } from "hooks/useWindowSize";
import { BurgerMenu } from "components/BurgerMenu/BurgerMenu";
import { ROUTE } from "routes";
import { Link, generatePath, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "store";
import { fetchSearch } from "store/features/searchSlice/searchSlice";
import { userSelector } from "store/selectors/userSelector";
import { themeSelector } from "store/selectors/themeSelector";

export const Header = () => {
  const { register, handleSubmit } = useForm();
  const { isAuth } = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width < 1280;
  const { theme } = useAppSelector(themeSelector);

  const navigate = useNavigate();

  const onSubmit = ({ searchValue }: any) => {
    dispatch(fetchSearch(searchValue));
    navigate(generatePath(ROUTE.SEARCH, { title: searchValue }));
  };

  return (
    <HeaderWrap>
      <HeaderContainer>
        <Link to={ROUTE.HOME}>{theme === "light" ? <PixemaLight /> : <PixemaDark />}</Link>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputSearch type="text" {...register("searchValue")} />
        </Form>
        {isAuth ? (
          <StyledLink to={ROUTE.SETTINGS}>
            <AccountName />
          </StyledLink>
        ) : (
          <StyledLink to={ROUTE.SIGN_UP}>
            <AccountName />
          </StyledLink>
        )}

        {isMobile && (
          <BurgerMenu isMobile={isMobile} handleClose={toggleMenu} isOpen={isMenuOpen} />
        )}
      </HeaderContainer>
    </HeaderWrap>
  );
};
