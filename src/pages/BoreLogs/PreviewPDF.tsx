import { FunctionComponent, useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button, Flex } from "antd";
import DocumentExportPDF from "../BoreLogs/DocumentExportPDF";
import { useAppSelector } from "../../redux/hook";
import { formBorelogSelector } from "../../redux/selector";
import { IconChevronLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

interface PreviewPageProps {}
export type dataType = {
  depth: number;
  description: string;
};
const PreviewPage: FunctionComponent<PreviewPageProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentRef = useRef<any>(null);
  const formData = useAppSelector(formBorelogSelector).data;
  const navigate = useNavigate();
  const handlePrint = () => {
    if (componentRef.current) {
      // Trigger the print action
      componentRef.current.onPrint();
    }
  };

  return (
    <div className="pb-4">
      <Flex align="center">
        <Button
          className="bg-gray-600 mr-2 w-20 flex justify-center items-center ml-4"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IconChevronLeft className="text-[#fff]"></IconChevronLeft>
        </Button>
        <ReactToPrint
          trigger={() => (
            <Button
              type="primary"
              style={{ margin: "8px 16px " }}
              onClick={handlePrint}
            >
              Export
            </Button>
          )}
          content={() => componentRef.current}
        />
      </Flex>
      <DocumentExportPDF
        ref={componentRef}
        formData={formData}
      ></DocumentExportPDF>
    </div>
  );
};

export default PreviewPage;
