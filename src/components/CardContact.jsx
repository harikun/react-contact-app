function CardContact(props) {
  return (
    <div className="card shadow radius">
      <div className="card-body">
        <h5 className="card-title">{props.contact.name}</h5>
        <p className="card-text">{props.contact.email}</p>
        <p className="card-text">{props.contact.phonenumber}</p>
        <p className="card-text">category: {props.contact.category}</p>
      </div>
    </div>
  );
}

export default CardContact;
