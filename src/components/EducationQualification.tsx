import React from "react";

const EducationQualification = () => {
  return (
    <form
      className="mt-16 md:grid grid-cols-4   h-auto md:h-[70vh] p-4"
      action=""
    >
      <section className="border-r border-purple-400 p-6 flex flex-col gap-3">
        <div>
          <label className="desc" htmlFor="">
            Highest Qualification
          </label>
          <input
            className="search_input"
            type="text"
            placeholder="enter you full Name"
          />
        </div>
      </section>

      <section className="border-r border-purple-400 p-6 flex flex-col gap-3">
        <div>
          <label className="desc" htmlFor="">
            Graduation CGPA
          </label>
          <input
            className="search_input"
            type="text"
            placeholder="enter you full Name"
          />
        </div>

        <div className="bg-purple-200 p-2 border border-purple-400">
          <label className="desc" htmlFor="">
            Graduation %
          </label>
          <input
            className="search_input"
            type="text"
            placeholder="enter you full Name"
          />

          <span className="desc ">Practicle file os. pdf</span>
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
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </section>

      <section className="border-r border-purple-400 flex flex-col gap-3 p-6">
        <div>
          <label className="desc" htmlFor="">
            10th CGPA
          </label>
          <input
            className="search_input"
            type="text"
            placeholder="enter you full Name"
          />
        </div>

        <div className="bg-purple-200 p-2 border border-purple-400">
          <label className="desc" htmlFor="">
            10 %
          </label>
          <input
            className="search_input"
            type="text"
            placeholder="enter you full Name"
          />

          <span className="desc ">Practicle file os. pdf</span>
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
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3 p-6">
        <div>
          <label className="desc" htmlFor="">
            12th CGPA
          </label>
          <input
            className="search_input"
            type="text"
            placeholder="enter you full Name"
          />
        </div>

        <div className="bg-purple-200 p-2 border border-purple-400">
          <label className="desc" htmlFor="">
            12 %
          </label>
          <input
            className="search_input"
            type="text"
            placeholder="enter you full Name"
          />

          <span className="desc ">Practicle file os. pdf</span>
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
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </section>
    </form>
  );
};

export default EducationQualification;
