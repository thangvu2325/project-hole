import { Button } from "antd";
import { FunctionComponent, useRef } from "react";
import ReactToPrint from "react-to-print";
import DocumentExportPDF from "./DocumentExportPDF";

interface BoreLogProps {}
export type dataType = {
  depth: number;
  description: string;
};
const data: dataType[] = [
  { depth: 1, description: "Soil" },
  { depth: 4, description: "Sand" },
  { depth: 8, description: "Silt" },
  { depth: 12, description: "Clay" },
];
const BoreLog: FunctionComponent<BoreLogProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentRef = useRef<any>(null);

  const handlePrint = () => {
    // Use the ReactToPrint component to initiate the printing
    // componentRef.current contains the reference to the component you want to print
    if (componentRef.current) {
      // Trigger the print action
      componentRef.current.onPrint();
    }
  };
  return (
    <div style={{ background: "#fff" }}>
      <ReactToPrint
        trigger={() => (
          <Button
            type="primary"
            style={{ margin: "8px 16px" }}
            onClick={handlePrint}
          >
            Export
          </Button>
        )}
        content={() => componentRef.current}
      />
      <DocumentExportPDF ref={componentRef} data={data}></DocumentExportPDF>
    </div>
  );
};

export default BoreLog;
