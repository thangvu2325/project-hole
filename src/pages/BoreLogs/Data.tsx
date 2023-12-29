import { Button } from "antd";
import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setState } from "../../redux/formBorelogSlice";
import { FormBorelogDataType } from "../../types";
import { useLocation, useNavigate } from "react-router-dom";
import { formBorelogSelector } from "../../redux/selector";
import { IconChevronLeft } from "@tabler/icons-react";

function Data() {
  const navigate = useNavigate();
  const location = useLocation();
  const formDataBoreLogs = useAppSelector(formBorelogSelector).data;
  const [formData, setFormData] =
    useState<FormBorelogDataType>(formDataBoreLogs);
  const dispatch = useAppDispatch();
  const handleClick = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(setState(formData));
    navigate(location.pathname + "/example");
  };

  return (
    <div
      style={{
        padding: "24px 36px",
        borderRadius: "6px",
        paddingBottom: "48px",
        width: "100%",
      }}
    >
      <div className="bg-[#fff] p-4 rounded-md shadow-md">
        <div className="container relative">
          <form className="row m-[20px]" onSubmit={handleClick}>
            <div className="col-6 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Project Date
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.projectDate}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    projectDate: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-6 mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Pile No.
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                value={formData.pileNo}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, pileNo: e.target.value }))
                }
              />
            </div>
            <div className="col-3 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Boring Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.boringStartDate}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    boringStartDate: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-3 mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Boring Start Time
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                type="time"
                value={formData.boringStartTime}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    boringStartTime: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-3 mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Boring End Date
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                type="date"
                value={formData.boringEndDate}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    boringEndDate: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-3 mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Boring End Time
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                type="time"
                value={formData.boringEndTime}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    boringEndTime: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-3 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Grouting Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.groutingStartDate}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    groutingStartDate: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-3 mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Grouting Start Time
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                type="time"
                value={formData.groutingStartTime}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    groutingStartTime: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-3 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Grouting End Date
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.groutingEndDate}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    groutingEndDate: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-3 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Grouting End Time
              </label>
              <input
                type="time"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.groutingEndTime}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    groutingEndTime: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-2 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Platform Level (RL)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.platformLevel}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    platformLevel: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-2 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Top Of Casing (RL)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.topOfCasing}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    topOfCasing: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-2 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Cut-off Level (RL)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.cutOffLevel}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    cutOffLevel: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-2 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Bored Depth (m) fr. TOC
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.toc}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    toc: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-2 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                TOE Level (RL)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.toe}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    toe: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-2 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Bored Depth (m) fr. OGL
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.ogl}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    ogl: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-2 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Pile Length (m)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.pileLength}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    pileLength: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-2 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Soil Drilling (m)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.soilDrilling}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    soilDrilling: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-2 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Total weathered Rock
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.totalWeathered}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    totalWeathered: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-2 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Rock Socket Length (m)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.rockSocket}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    rockSocket: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-2 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Grout Length (m)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.groutLength}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    groutLength: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-2 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nos. of bag
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.ofBag}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    ofBag: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                API Pipe Length (m)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.api}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    api: e.target.value,
                  }))
                }
              />
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Permanent Casing (m)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={formData.permanent}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    permanent: e.target.value,
                  }))
                }
              />
            </div>

            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-primary flex items-center justify-center w-[600px] h-8 mx-auto"
            >
              Submit
            </Button>
          </form>
          <Button
            className="bg-gray-600 mr-4 w-20 flex justify-center items-center absolute bottom-0 right-0"
            onClick={() => {
              navigate(-1);
            }}
          >
            <IconChevronLeft className="text-[#fff]"></IconChevronLeft>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Data;
