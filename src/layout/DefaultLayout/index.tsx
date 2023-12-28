import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { FunctionComponent, ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ background: "transparent" }}>
      <Content
        style={{
          margin: "0 auto",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default DefaultLayout;
