import { Flex, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { FunctionComponent, ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ background: "transparent" }}>
      <Sider width={280} className="h-screen"></Sider>
      <Flex className="relative w-full h-screen" vertical>
        <Header className="fixed top-0 right-0 left-[280px] shadow-sm border-b-[1px]"></Header>
        <Content
          style={{
            overflow: "scroll",
            marginTop: "64px",
            background: "transparent",
          }}
        >
          {children}
        </Content>
      </Flex>
    </Layout>
  );
};

export default DefaultLayout;
