/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <InnerWrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler />
          <Nav>
            <NavLink href="/sale" style={{ "--delay-bit": "300ms" }}>
              Sale
            </NavLink>
            <NavLink href="/new" style={{ "--delay-bit": "350ms" }}>
              New&nbsp;Releases
            </NavLink>
            <NavLink href="/men" style={{ "--delay-bit": "400ms" }}>
              Men
            </NavLink>
            <NavLink href="/women" style={{ "--delay-bit": "450ms" }}>
              Women
            </NavLink>
            <NavLink href="/kids" style={{ "--delay-bit": "500ms" }}>
              Kids
            </NavLink>
            <NavLink href="/collections" style={{ "--delay-bit": "550ms" }}>
              Collections
            </NavLink>
          </Nav>
          <Footer>
            <SubLink href="/terms">Terms and Conditions</SubLink>
            <SubLink href="/privacy">Privacy Policy</SubLink>
            <SubLink href="/contact">Contact Us</SubLink>
          </Footer>
        </InnerWrapper>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  perspective: 3500px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 0.2s ease-in-out backwards;
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

  position: relative;
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  transform-origin: 100% 5%;

  @media (prefers-reduced-motion: no-preference) {
    animation-delay: 0.1s;
    animation-duration: 0.35s;
    animation-timing-function: cubic-bezier(0.26, 0.39, 1, 1.48);
    animation-fill-mode: both;
    animation-name: door-open;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${fadeIn} 600ms both;
  animation-delay: 0.4s;
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

  animation-delay: var(--delay-bit);
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: backwards;
  animation-name: ${fadeIn};
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
