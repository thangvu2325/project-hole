import { FunctionComponent, useEffect } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  useEffect(() => {
    document.title = "Trang Chủ";
  }, []);
  return (
    <div className="text-center mt-28 text-[30px] font-[600]">
      Trang này sau này là Dashboard
    </div>
  );
};

export default Home;
