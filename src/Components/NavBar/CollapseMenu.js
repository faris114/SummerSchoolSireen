import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSpring, animated } from "react-spring";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });
  console.log(open, "hello open");
  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavLinks>
          <li>
            <AnchorLink href="#about">About us</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#why">Why us</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#places">Places</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact" offset="100">
              Contact us
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#programs">Programs</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#recommendations">Recommendations</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#gallery">Gallery</AnchorLink>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;

    @media (min-width: 768px) {
      display: none;
    }
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
