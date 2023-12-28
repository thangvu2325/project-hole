import { IconSearch, IconUserCircle } from "@tabler/icons-react";
import { Flex } from "antd";
import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="fixed top-0 right-0 left-[280px] shadow-sm border-b-[1px] h-14">
      <Flex justify="space-between" align="center" className="h-14">
        <span className="ml-4 hover:bg-slate-100 p-2 cursor-pointer rounded-3xl">
          <IconSearch></IconSearch>
        </span>
        <span className="mr-4 hover:bg-slate-100 p-2 cursor-pointer rounded-3xl">
          <IconUserCircle width={30} height={30}></IconUserCircle>
        </span>
      </Flex>
    </div>
  );
};

export default Header;
