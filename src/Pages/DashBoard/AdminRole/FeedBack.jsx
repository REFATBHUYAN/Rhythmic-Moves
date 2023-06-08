import React from "react";

const FeedBack = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">FeedBack</h1>
      <form>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">FeedBack</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
          <input type="button" value="Add FeedBack" />
        </div>
      </form>
    </div>
  );
};

export default FeedBack;
