import * as React from "react";
import Card from "@mui/material/Card";

const ReviewCard = ({
  icon_source,
  quote,
  reviewer
}) => {
  return (
    <Card sx={{ maxWidth: 345}}>
      <div className="  flex flex-col justify-center items-center">
        {/* <div className=" "> */}
          <img
            src={icon_source}
            className=" h-40"
            alt="quote review icon"
          />
        {/* </div> */}
        <div className=" space-y-3 mt-6 flex flex-col justify-start bg-slate-300 w-full px-3 py-2">
          <h4>
            "
            <strong>
              {quote}
            </strong>
            "
          </h4>
          <p>
            <em>~ {reviewer}</em>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ReviewCard;
