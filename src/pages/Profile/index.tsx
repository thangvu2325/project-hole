import { FunctionComponent, useEffect } from "react";

interface ProfilePageProps {}

const ProfilePage: FunctionComponent<ProfilePageProps> = () => {
  useEffect(() => {
    document.title = "Profile";
  }, []);
  return (
    <div className="text-center mt-28 text-[30px] font-[600]">
      Trang này sau này là Profile
    </div>
  );
};

export default ProfilePage;
