import { FunctionComponent, useEffect } from "react";

interface SettingsPageProps {}

const SettingsPage: FunctionComponent<SettingsPageProps> = () => {
  useEffect(() => {
    document.title = "Settings";
  }, []);
  return (
    <div className="text-center mt-28 text-[30px] font-[600]">
      Trang này sau này là Settings
    </div>
  );
};

export default SettingsPage;
