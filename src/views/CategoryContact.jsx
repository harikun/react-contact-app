import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CategoryContact() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loadingReducer.loading);

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });
    setTimeout(() => {
      dispatch({ type: "LOADING", payload: false });
    }, 2000);
  }, [dispatch]);
  return (
    <>
      loading ? <p>loading...</p> :<p>CategoryContact</p>;
    </>
  );
}

export default CategoryContact;
