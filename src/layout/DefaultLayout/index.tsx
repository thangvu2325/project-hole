import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { FunctionComponent, ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ height: "1000px", background: "transparent" }}>
      <Content
        style={{
          width: "1000px",
          margin: "0 auto",
          paddingTop: "60px",
          paddingBottom: "180px",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default DefaultLayout;
