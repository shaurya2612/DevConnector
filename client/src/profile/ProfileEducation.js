import React from "react";
import Moment from "react-moment";

export const ProfileEducation = ({
  education: { school, degree, fieldodstudy, current, to, from, description },
}) => {
  return (
    <div>
      <h3 className="text-dark">
        {school}
        <p>
          <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
          {!to ? " Now" : <Moment>{to}</Moment>}
        </p>
        <p>
          <strong>Degree: </strong>
          {degree}
        </p>
        <p>
          <strong>Field of study: </strong>
          {description}
        </p>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      </h3>
    </div>
  );
};

export default ProfileEducation;
