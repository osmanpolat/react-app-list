function PersonalList({ personalImage, personalName, personalAge }) {
  return (
    <>
      <div className="person-item">
        <div className="person-image">
          <img src={personalImage} alt="" />
        </div>
        <div className="personDetail">
          <div className="person-name">{personalName}</div>
          <div className="personAge">
            <strong>Age:</strong>
            {personalAge}
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalList;
