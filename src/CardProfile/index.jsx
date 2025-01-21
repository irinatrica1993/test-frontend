import { TitleSubTitle } from "../TitleSubTitle";

export const CardProfile = ({ name, job, image, isCheked }) => {
  console.log("image", image);
  return (
    <div className="profile-card">
      <img src={image} alt={`${name} profile`} />
      {isCheked && <div className="verified">✅</div>}
      <TitleSubTitle title={name} subtitle={job} />
      <div className="card-profile-info">
        <h2>{name}</h2>
        <p>{job}</p>
        <label>
          <input type="checkbox" checked={isCheked} readOnly />
          {isCheked ? "Vittoria" : ""}
        </label>
      </div>
    </div>
  );
};
