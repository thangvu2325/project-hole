import { Button } from "antd";
import { FunctionComponent, useCallback, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import DocumentExportPDF from "./DocumentExportPDF";
import Title from "antd/es/typography/Title";
import { IconChevronDown } from "@tabler/icons-react";
import EditableTableForm from "./EditableTableForm";

interface BoreLogProps {}
export type dataType = {
  depth: number;
  description: string;
};
const BoreLog: FunctionComponent<BoreLogProps> = () => {
  const [data, setData] = useState<dataType[]>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentRef = useRef<any>(null);
  const refDiv = useRef<HTMLDivElement>(null);
  const handleToggleShowSearchBox = () => {
    if (refDiv.current) {
      refDiv.current.classList.toggle("h-260");
    }
  };
  const handleChangeTable = useCallback((value: dataType[]) => {
    setData(value);
  }, []);
  const handlePrint = () => {
    // Use the ReactToPrint component to initiate the printing
    // componentRef.current contains the reference to the component you want to print
    if (componentRef.current) {
      // Trigger the print action
      componentRef.current.onPrint();
      componentRef.current.style.display = "block";
    }
  };
  return (
    <div className=" bg-[#fff] shadow-lg">
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
      <div className="bg-[#fff]">
        <div className="px-4">
          <EditableTableForm
            handleChangeTable={handleChangeTable}
          ></EditableTableForm>
        </div>
        <div
          className="transition-height duration-1000 ease-in-out h-12 overflow-hidden"
          ref={refDiv}
        >
          <Title
            level={3}
            className="p-4 flex items-center outline-none font-semibold cursor-pointer select-none"
            onClick={handleToggleShowSearchBox}
          >
            <IconChevronDown></IconChevronDown>Preview PDF
          </Title>
          <DocumentExportPDF
            ref={componentRef}
            data={data ?? []}
          ></DocumentExportPDF>
        </div>
      </div>
    </div>
  );
};

export default BoreLog;
