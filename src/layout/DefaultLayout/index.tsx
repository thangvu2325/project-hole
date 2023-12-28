import { Flex, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { FunctionComponent, ReactNode } from "react";
import Header from "../components/Header";
import Sider from "../components/Sider";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ background: "transparent" }} className="flex flex-row">
      <Sider></Sider>
      <Flex className="relative w-full h-screen" vertical>
        <Header></Header>
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
