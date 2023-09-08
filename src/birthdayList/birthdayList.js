const BirthdayList = ({ name, age, image }) => {
  return (
    <div className="person">
      <img src={image} alt={name} title={name} className="personImage" />
      <div>
        <p className="personName">{name}</p>
        <p className="personAge">{age} Years</p>
      </div>
    </div>
  );
};

export default BirthdayList;
