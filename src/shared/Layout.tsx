import React, { ReactNode } from "react";

interface HeaderProps {}
// interface는 TS에서 사용되는 데이터 구조를 정의하는 방법!
// 프롭스의 타입을 정의

const HeaderStyles: React.CSSProperties = {
  // CSSProperties: 리액트에서 컴포넌트의 스타일을 정의하는 객체타입
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  background: "black",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: "20px",
  color: "white",
  fontWeight: "600",
  fontFamily: "Work Sans, sans-serif",
  fontSize: "2em",
};

const FooterStyles: React.CSSProperties = {
  width: "100%",
  height: "100px",
  display: "flex",
  background: "black",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  fontFamily: "Work Sans, sans-serif",
};

const layoutStyles: React.CSSProperties = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  minHeight: "90vh",

  fontFamily: "Roboto Mono, monospace",
};

function Header(props: HeaderProps) {
  return (
    <div style={HeaderStyles}>
      <div>SORT BY</div>
      <div>IMPORTANT</div>
      <div>DUE DATE</div>
      <div>DONE</div>
      <div>ABOUT</div>
    </div>
  );
}

interface FooterProps {}

function Footer(props: FooterProps) {
  return (
    <div style={FooterStyles}>
      <span>React B - Yeonjoo Baek</span>
    </div>
  );
}

interface LayoutProps {
  children: ReactNode;
  // Layout컴포넌트에서 children은 ReactNode 타입으로 지정되어 자식요소를 자유롭게 받아올 수 있게됨
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div style={layoutStyles}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
