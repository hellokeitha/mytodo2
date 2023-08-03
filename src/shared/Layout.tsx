import React, { ReactNode } from "react";

interface HeaderProps {}
// interface는 TS에서 사용되는 데이터 구조를 정의하는 방법!
// 프롭스의 타입을 정의

const HeaderStyles: React.CSSProperties = {
  // CSSProperties: 리액트에서 컴포넌트의 스타일을 정의하는 객체타입
  width: "100%",
  background: "black",
  height: "50px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px",
  color: "white",
  fontWeight: "600",
};

const FooterStyles: React.CSSProperties = {
  width: "100%",
  height: "50px",
  display: "flex",
  background: "black",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
};

const layoutStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
};

function Header(props: HeaderProps) {
  return (
    <div style={HeaderStyles}>
      <span>To Do List</span>
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
