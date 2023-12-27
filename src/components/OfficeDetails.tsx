import React from "react";
import { useState } from "react";
import { customSelectProps } from "../../types";
import { set } from "mongoose";

const OfficeDetails = () => {
  const [date, setDate] = useState();
  console.log("data", date);
  return (
    <form
      className="mt-16 md:grid grid-cols-3   h-auto md:h-[70vh] p-4"
      action=""
    >
      <section className="border-r border-purple-400 p-6 flex flex-col gap-3">
        <div className="search_input  ">
          <label htmlFor="employment type" className="desc">
            Employment Type
          </label>
          <select id="countries" className="search_input mt-3 ">
            <option selected>select an option</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="search_input ">
          <label htmlFor="employment type" className="desc">
            Duration
          </label>
          <select id="countries" className="search_input mt-3 ">
            <option selected>select an option</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="search_input ">
          <label htmlFor="employment type" className="desc">
            Department
          </label>
          <select id="countries" className="search_input mt-3 ">
            <option selected>select an option</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="search_input ">
          <label htmlFor="employment type" className="desc">
            Designation
          </label>
          <select id="countries" className="search_input ">
            <option selected>select an option</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </section>

      <section className="border-r border-purple-400 p-6 flex flex-col gap-3">
        <div>
          <label className="desc" htmlFor="">
            Employee code
          </label>
          <input
            className="search_input"
            type="text"
            placeholder="enter you full Name"
          />
        </div>

        <div>
          <label className="desc" htmlFor="">
            Reference Number
          </label>
          <input
            className="search_input"
            type="text"
            placeholder="enter you full Name"
          />
        </div>

        <div>
          <label className="desc" htmlFor="">
            Joining date
          </label>
          <input
            className="search_input"
            type="date"
            placeholder="enter you full Name"
            onChange={(e: any) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label className="desc" htmlFor="">
            Official Email
          </label>
          <input
            className="search_input"
            type="text"
            placeholder="enter you full Name"
          />
        </div>
      </section>

      <section className="flex flex-col gap-3 p-6">
        <div>
          <label className="desc" htmlFor="">
            Renumration
          </label>
          <input
            className="search_input"
            type="text"
            placeholder="enter you full Name"
          />
        </div>

        <div>
          <label className="desc" htmlFor="">
            Bank
          </label>
          <input
            className="search_input"
            type="text"
            placeholder="enter you full Name"
          />
        </div>

        <div className="search_input ">
          <label htmlFor="employment type" className="desc">
            ID card
          </label>
          <select id="countries" className="search_input ">
            <option selected>select an option</option>
            <option value="US">issued</option>
            <option value="CA">not issued</option>
          </select>
        </div>
      </section>
    </form>
  );
};

export default OfficeDetails;
