import React from "react";

const PersonalDetails = ({ data, handleChange }) => {
  return (
    <form
      className="mt-16 md:grid grid-cols-3   h-auto md:h-[70vh] p-4"
      action=""
    >
      <section className="border-r border-purple-400 p-6 flex flex-col gap-3">
        <div>
          <label className="desc" htmlFor="">
            Full Name
          </label>
          <input
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.fullName || ""}
            name="fullName"
            className="search_input"
            type="text"
          />
        </div>

        <div>
          <label className="desc" htmlFor="">
            Father Name
          </label>
          <input
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.fatherName}
            name="fatherName"
            className="search_input"
            type="text"
          />
        </div>

        <div>
          <label className="desc" htmlFor="">
            Contact No.
          </label>
          <input
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.contactNo}
            name="contactNo"
            className="search_input"
            type="number"
          />
        </div>
        <div>
          <label className="desc" htmlFor="">
            Personal Email id
          </label>
          <input
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.personalEmail}
            name="personalEmail"
            className="search_input"
            type="text"
          />
        </div>
        <div className="search_input  ">
          <label htmlFor="Marital Status" className="desc">
            Marital Status
          </label>
          <select
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.maritalStatus}
            name="maritalStatus"
            id="countries"
            className="search_input mt-3 "
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>
      </section>

      <section className="border-r border-purple-400 p-6 flex flex-col gap-3">
        <div>
          <label className="desc" htmlFor="">
            Permanent Address
          </label>
          <input
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.permanentAddress}
            name="permanentAddress"
            className="search_input"
            type="text"
          />
        </div>

        <div>
          <label className="desc" htmlFor="">
            Temperory Address
          </label>
          <input
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.temperoryAddress}
            name="temperoryAddress"
            className="search_input"
            type="text"
          />
        </div>

        <div>
          <label className="desc" htmlFor="">
            Emergency Number
          </label>
          <input
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.emergencyNumber}
            name="emergencyNumber"
            className="search_input"
            type="text"
          />
        </div>

        <div>
          <label className="desc" htmlFor="">
            Name of Emergency Contact
          </label>
          <input
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.NameOfEmergencyContact}
            name="NameOfEmergencyContact"
            className="search_input"
            type="text"
          />
        </div>

        <div>
          <label className="desc" htmlFor="">
            Relation to emergency contact
          </label>
          <input
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.emergencyContactRelation}
            name="emergencyContactRelation"
            className="search_input"
            type="text"
          />
        </div>
        <div>
          <label className="desc" htmlFor="">
            work experience
          </label>
          <textarea
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.workExperience}
            name="workExperience"
            className="search_input"
          />
        </div>
      </section>

      <section className="flex flex-col gap-3 p-6">
        <div className="bg-purple-200 p-2 border border-purple-400">
          <label className="desc" htmlFor="">
            Pan card No
          </label>
          <input
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.pancardNo}
            name="pancardNo"
            className="search_input"
            type="number"
          />

          <span className="desc ">Upload copy of Pan card</span>
          <div className="">
            <label className="input_file">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Select File
              <input
                onChange={(e) => handleChange("file", e)}
                name="pancardFile"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="bg-purple-200 p-2 border border-purple-400">
          <label className="desc" htmlFor="">
            Aadhar card number
          </label>
          <input
            onChange={(e) => {
              handleChange("text", e);
            }}
            value={data.aadharcardNo}
            name="aadharcardNo"
            className="search_input"
            type="text"
          />

          <span className="desc ">Upload Copy of Aadhar card</span>
          <div className="">
            <label className="input_file">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Select File
              <input
                onChange={(e) => handleChange("file", e)}
                name="aadharcardFile"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="bg-purple-200 p-2 border border-purple-400">
          <div>
            <label className="desc" htmlFor="">
              Account No.
            </label>
            <input
              onChange={(e) => {
                handleChange("bank", e);
              }}
              value={data?.bankDetails?.accountNo}
              name="accountNo"
              className="search_input"
              type="text"
            />
          </div>
          <div>
            <label className="desc" htmlFor="">
              IFSC code
            </label>
            <input
              onChange={(e) => {
                handleChange("bank", e);
              }}
              value={data?.bankDetails?.ifscCode}
              name="ifscCode"
              className="search_input"
              type="text"
            />
          </div>
          <div>
            <label className="desc" htmlFor="">
              Branch
            </label>
            <input
              onChange={(e) => {
                handleChange("bank", e);
              }}
              value={data?.bankDetails?.branch}
              name="branch"
              className="search_input"
              type="text"
            />
          </div>
          <span className="desc ">
            upload soft copy of Passbook or cancelCheck
          </span>
          <div className="">
            <label className="input_file">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Select File
              <input
                onChange={(e) => handleChange("file", e)}
                name="bankFile"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </div>
      </section>
    </form>
  );
};

export default PersonalDetails;
