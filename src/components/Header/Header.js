import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink>
            <a id="topLink" href="/sale">
              Sale
            </a>
            <a id="bottomLink" href="/sale">
              Sale
            </a>
          </NavLink>
          <NavLink>
            <a id="topLink" href="/new">
              New&nbsp;Releases
            </a>
            <a id="bottomLink" href="/new">
              New&nbsp;Releases
            </a>
          </NavLink>
          <NavLink>
            <a id="topLink" href="/men">
              Men
            </a>
            <a id="bottomLink" href="/men">
              Men
            </a>
          </NavLink>
          <NavLink>
            <a id="topLink" href="/women">
              Women
            </a>
            <a id="bottomLink" href="/women">
              Women
            </a>
          </NavLink>
          <NavLinkAlt>
            <a id="topLink" href="/kids">
              Kids
            </a>
          </NavLinkAlt>
          <NavLinkAlt>
            <a id="topLink" href="/collections">
              Collections
            </a>
          </NavLinkAlt>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLinkAlt = styled.div`
  position: relative;

  a {
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    transition: color 250ms ease;
  }

  #topLink {
    font-weight: ${WEIGHTS.medium};
    transition: color 250ms ease;
  }

  &:hover #topLink {
    color: var(--color-primary);
  }

  #topLink::before,
  #topLink::after {
    position: absolute;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    opacity: 0;
    background: var(--color-primary);
    background-color: var(--color-primary);
    transition: transform 250ms ease, opacity 150ms ease;
    pointer-events: none; // Avoids the jittering on hover.
  }

  #topLink::before {
    transform: translateY(-20px);
    top: 0;
  }

  #topLink::after {
    transform: translateY(20px);
    bottom: 0;
  }

  &:hover #topLink::before {
    transform: translateY(0px);
    opacity: 1;
  }

  &:hover #topLink::after {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const NavLink = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 24px;

  &:first-of-type a {
    color: var(--color-secondary);
  }

  a {
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    transition: transform 150ms ease;
  }

  #topLink {
    font-weight: ${WEIGHTS.medium};
  }

  #bottomLink {
    font-weight: ${WEIGHTS.bold};
  }

  // In the video, Josh made each of these text links their own component

  &:hover #topLink {
    transform: translateY(-100%);
    transition: transform 150ms ease;
  }

  &:hover #bottomLink {
    transform: translateY(-100%);
    transition: transform 150ms ease;
  }
`;

export default Header;
