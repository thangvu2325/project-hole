import { Button, ConfigProvider, Flex, Image, Menu } from "antd";
import { Fragment, FunctionComponent, useRef } from "react";
import Title from "antd/es/typography/Title";
import { IconHome2, IconSettings, IconUserCircle } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";
import logo from "../../assets/image/Micropile Borelogs.png";

type MenuItem = Required<MenuProps>["items"][number];
interface SiderProps {}
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const Sider: FunctionComponent<SiderProps> = () => {
  const { pathname } = useLocation();
  const refDiv = useRef<HTMLDivElement>(null);

  const items: MenuItem[] = [
    getItem("Quản Lý Projects", "sub3", <Fragment></Fragment>, [
      getItem(
        <Link to={"/projects"}>Danh Sách Projects</Link>,
        "/projects",
        <Fragment></Fragment>
      ),
    ]),
  ];

  return (
    <div
      ref={refDiv}
      className={`overflow-hidden overflow-y-scroll min-w-[280px]  max-w-[280px] h-[100vh]  scrollCustom bg-[#001529] relative`}
    >
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedBg: "rgba(255,255,255,0.04)",
              itemSelectedColor: "#fff",
              itemPaddingInline: 0,
              itemMarginInline: 0,
              itemHoverColor: "#fff",
              itemHoverBg: "rgba(255,255,255,0.04)",
            },
          },
        }}
      >
        <Flex
          align={"center"}
          justify="center"
          className="p-6 cursor-pointer border-b-[0.8px] border-solid border-[#ccc] shadow-sm rounded-md"
        >
          <div className="border-[0.8px] border-solid border-[#2F3746] rounded-md">
            <Image
              src={logo}
              width={100}
              className="p-1"
              preview={false}
            ></Image>
          </div>
        </Flex>
        <div className="px-4 mt-4">
          <ul className="text-[#fff]">
            <li className="hover:bg-[rgba(255,255,255,0.04)] rounded-lg">
              <Link to={"/"} className="flex items-center py-[6px] px-[16px]">
                <IconHome2 className="mr-[16px] text-[#9da4ae]"></IconHome2>
                <Title
                  level={3}
                  style={{
                    color: "#9da4ae",
                    marginTop: "0",
                    marginBottom: "0",
                  }}
                >
                  Home
                </Title>
              </Link>
            </li>
            <li className="hover:bg-[rgba(255,255,255,0.04)] rounded-lg mt-[4px]">
              <Link
                to={"/settings"}
                aria-disabled
                className="flex items-center py-[6px] px-[16px]"
              >
                <IconSettings className="mr-[16px] text-[#9da4ae]"></IconSettings>
                <Title
                  level={3}
                  style={{
                    color: "#9da4ae",
                    marginTop: "0",
                    marginBottom: "0",
                  }}
                >
                  Setting
                </Title>
              </Link>
            </li>
            <li className="hover:bg-[rgba(255,255,255,0.04)] rounded-lg mt-[4px]">
              <Link
                to={"/profile"}
                className="flex items-center py-[6px] px-[16px]"
              >
                <IconUserCircle className="mr-[16px] text-[#9da4ae]"></IconUserCircle>
                <Title
                  level={3}
                  style={{
                    color: "#9da4ae",
                    marginTop: "0",
                    marginBottom: "0",
                  }}
                >
                  Profile
                </Title>
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <Title
              level={4}
              style={{
                color: "#9da4ae",
                marginTop: "0",
                textTransform: "uppercase",
                marginLeft: "8px",
                marginBottom: "8px",
              }}
            >
              Concepts
            </Title>
            <Menu
              inlineIndent={16}
              defaultSelectedKeys={[pathname]}
              defaultOpenKeys={[pathname]}
              mode="inline"
              style={{ backgroundColor: "transparent", color: "#9da4ae" }}
              items={items}
            />
          </div>
        </div>
      </ConfigProvider>
      <div className="fixed bottom-0 w-[280px] h-24 border-t-[0.8px] border-solid border-[#ccc] rounded-md">
        <Button
          className="absolute left-[50%] bottom-5 translate-x-[-50%] px-[16px] py-[8pxs] w-48 h-10"
          type="primary"
        >
          <Title level={3} style={{ color: "#fff", marginBottom: "0" }}>
            Log Out
          </Title>
        </Button>
      </div>
    </div>
  );
};

export default Sider;
