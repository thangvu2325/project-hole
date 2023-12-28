import Title from "antd/es/typography/Title";
import { Component } from "react";
import { dataType } from ".";
import logo from "../../assets/image/Micropile Borelogs.png";
import { Flex, Image } from "antd";
type DocumentExportPDFProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.MutableRefObject<any>;
  data: dataType[];
  className?: string;
};
export default class DocumentExportPDF extends Component<DocumentExportPDFProps> {
  render() {
    return (
      <div className="mx-[80px] mt-[30px] text-[16px]">
        <Flex justify="space-between" align="end" className="mb-3">
          <Image
            preview={false}
            src={logo}
            height={70}
            className="ml-1"
          ></Image>
          <Flex vertical>
            <Title level={3} style={{ textAlign: "center" }}>
              SHINEI GEOTECHNIQUE (M)SDN. BHD
            </Title>
            <Title level={3} style={{ textAlign: "center" }}>
              MICROPILE BORELOG
            </Title>
          </Flex>
          <Flex style={{ marginBottom: "-18px" }} align="end">
            <Title
              style={{
                border: "1px solid #ccc",
                padding: "4px 6px",
              }}
              level={3}
            >
              Log No.
            </Title>
            <Title
              style={{ border: "1px solid #ccc", padding: "4px 6px" }}
              level={3}
            >
              17
            </Title>
          </Flex>
        </Flex>
        <div className="grid grid-cols-10 ">
          <p className="col-span-1 border-2  pl-[4px] sm:p-[2px] ">Project</p>
          <p className="col-span-7 border-2  pl-[4px] sm:p-[2px]">
            Proposed Slope Remediation for Monoluxury Sdn Bhd Cameron
          </p>
          <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">Date</p>
          <input
            className="col-span-1 border-2  pl-[4px] sm:p-[2px]"
            type="text"
          ></input>
        </div>
        <div className="grid grid-cols-10 ">
          <p className="col-span-1 border-2  pl-[4px] sm:p-[2px] ">Pile No.</p>
          <input
            className="col-span-4 border-2  pl-[4px] sm:p-[2px]"
            type="text"
          ></input>
          <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">Pile Dia</p>
          <p className="col-span-2 border-2  pl-[4px] sm:p-[2px]">200mm</p>
          <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">Rake</p>
          <p className="col-span-1 border-2   pl-[4px] sm:p-[2px]">Vertical</p>
        </div>
        <div className="grid grid-cols-10 ">
          <p className="col-span-3 border-2  pl-[4px] sm:p-[2px] ">
            Boring Plant.
          </p>
          <p className="col-span-2 border-2  pl-[4px] sm:p-[2px] ">
            Hong Drill
          </p>
          <p className="col-span-1 border-2  pl-[4px] sm:p-[2px] ">Depth (m)</p>
          <p className="col-span-4 border-2  pl-[4px] sm:p-[2px] text-center">
            Description
          </p>
        </div>
        <div className="grid grid-cols-10 mt-[2px]">
          <div className="col-span-5 grid grid-cols-5">
            <div className="col-span-5  grid grid-cols-5">
              <p className="col-span-1  border-2 pl-[4px] sm:p-[2px]">Boring</p>
              <p className="col-span-2   border-2 pl-[4px] sm:p-[2px] text-center">
                Date
              </p>
              <p className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center">
                Time
              </p>
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">Start</p>
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">End</p>
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">
                Grouting
              </p>
              <p className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center">
                Date
              </p>
              <p className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center">
                Time
              </p>
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">Start</p>
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">End</p>
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Platform Level (RL)
              </p>

              <input
                type="text"
                className="col-span-2 border-2   pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Top Of Casing (RL)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Cut-off Level (RL)
              </p>

              <input
                type="text"
                className="col-span-2 border-2   pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Bored Depth (m) fr. TOC
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                TOE Level (RL)
              </p>

              <input
                type="text"
                className="col-span-2 border-2   pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2   text-center pl-[4px] sm:p-[2px]">
                Bored Depth (m) fr. OGL
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Pile Length (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Soil Drilling (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Total weathered Rock, Boulders, Cavity (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Rock Socket Length (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Grout Length (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Nos. of bag
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2   text-center pl-[4px] sm:p-[2px]">
                API Pipe Size (mm)
              </p>

              <p className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center">
                88.9dia, 6.4thk
              </p>
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                API Pipe Length (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Permanent Casing (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]"></p>

              <input
                type="text"
                className="col-span-2 border-2   pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2   text-center pl-[4px] sm:p-[2px]"></p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-5 border-2   text-center pl-[4px] sm:p-[2px]">
                Remarks
              </p>
            </div>
          </div>

          <div className="col-span-5 grid grid-cols-5 border-[2px] border-solid border-[#e5e7eb]">
            <div className="col-span-1 border-[2px] border-solid border-[#e5e7eb]"></div>
            <div className="col-span-4 border-[2px] border-solid border-[#e5e7eb]">
              {this.props.data.length
                ? this.props.data.map((item, index, array) => {
                    const deepest = array[array.length - 1].depth;
                    const deep =
                      index > 0
                        ? array[index].depth - array[index - 1].depth
                        : array[index].depth;
                    const heightPercent = (deep * 100) / deepest;
                    const isLastItem = index === array.length - 1;
                    const isFirstItem = index === 0;
                    return (
                      <div
                        key={index}
                        className={`w-full ${
                          isLastItem ? "border-b-0" : "border-b-2"
                        }  border-solid border-[#ccc] relative`}
                        style={{ height: `${heightPercent}%` }}
                      >
                        <Title
                          level={2}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          {item.description}
                        </Title>
                        <Title
                          level={3}
                          className={`absolute ${
                            isLastItem ? "bottom-0" : isFirstItem ? "top-0" : ""
                          } left-[50%] translate-x-[-50%]`}
                          style={{ margin: "0", fontWeight: "600" }}
                        >
                          {isLastItem
                            ? "End of BoreHole"
                            : isFirstItem
                            ? "Top of Borehole"
                            : ""}
                        </Title>
                        <div
                          className={`absolute left-[-40px] bottom-[-2px] w-[40px] ${
                            isLastItem ? "h-0" : "h-[2px]"
                          } bg-[#ccc]`}
                        >
                          <div className="absolute top-[-16px] right-2 text-[16px] text-nowrap ">
                            {item.depth} m
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
