/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale" style={{ "--delay-bit": "400ms" }}>
            Sale
          </NavLink>
          <NavLink href="/new" style={{ "--delay-bit": "450ms" }}>
            New&nbsp;Releases
          </NavLink>
          <NavLink href="/men" style={{ "--delay-bit": "500ms" }}>
            Men
          </NavLink>
          <NavLink href="/women" style={{ "--delay-bit": "550ms" }}>
            Women
          </NavLink>
          <NavLink href="/kids" style={{ "--delay-bit": "600ms" }}>
            Kids
          </NavLink>
          <NavLink href="/collections" style={{ "--delay-bit": "650ms" }}>
            Collections
          </NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  opacity: 1;
  display: flex;
  justify-content: flex-end;
  animation: fadein 0.2s ease-in-out backwards;
  perspective: 3500px;
`;

const Content = styled(DialogContent)`
  @keyframes slidein {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes door-open {
    0% {
      transform: rotateY(-100deg);
    }
    100% {
      transform: rotateY(0);
    }
  }

  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  transform-origin: 100% 5%;
  animation-delay: 0.2s;
  animation-duration: 0.35s;
  animation-timing-function: linear;
  animation-fill-mode: backwards;
  animation-name: door-open;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  }  
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation-delay: var(--delay-bit);
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: backwards;
  animation-name: fadein;
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
