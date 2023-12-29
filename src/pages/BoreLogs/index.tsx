import { Button } from "antd";
import { FunctionComponent, useCallback, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Title from "antd/es/typography/Title";
import EditableTableForm from "./EditableTableForm";
import {useNavigate} from "react-router-dom";
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
  const navigate = useNavigate();
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
            onClick={() => {
              navigate(location.pathname + "/" + "preview");
            }}
          >
            Preview PDF
          </Title>
          {/* <DocumentExportPDF
            ref={componentRef}
            data={data ?? []}
          ></DocumentExportPDF> */}
        </div>
      </div>
    </div>
  );
};

export default BoreLog;