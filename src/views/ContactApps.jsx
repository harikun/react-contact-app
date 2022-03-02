import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllContact from "../redux/actions/getAllContact";

function ContactApps() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loadingReducer.loading);
  const contacts = useSelector((state) => state.contactReducer.allContact);

  useEffect(() => {
    dispatch(getAllContact());
  }, []);
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          {loading ? (
            <div className="d-flex justify-content-center mt-5">
              <div className="spinner-border" role="status">
                <span className="visually-hiddeen">Loading...</span>
              </div>
            </div>
          ) : contacts.length === 0 ? (
            <div className="text-center m-2 p-4">Data Not Found</div>
          ) : (
            contacts.map((contact) => {
              return (
                <div className="col-md-4 p-1" key={contact.id}>
                  <div className="card shadow radius">
                    <div className="card-body">
                      <h5 className="card-title">{contact.name}</h5>
                      <p className="card-text">{contact.email}</p>
                      <p className="card-text">{contact.phonenumber}</p>
                      <p className="card-text">category: {contact.category}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default ContactApps;
