import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteHistoryApi, getVideoHistoryApi } from "../services/allApi";

const WatchHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const result = await getVideoHistoryApi();

    if (result.status === 200) {
      setHistory(result.data);
    } else {
      console.log("API failed");
      console.log(result.message);
    }
  };

  const removeVideoHistory = async (id) => {
    await deleteHistoryApi(id)
    getHistory()
  }
  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch History</h2>
        <Link className="text-decoration-none fw-bold fs-5" to="/home">
          Back to Home <i className="fa-solid fa-rotate-left"></i>
        </Link>
      </div>
      <table className="table mb-5 container shadow w-100 table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Url</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {history?.length > 0 ? (
            history.map((video, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{video?.name}</td>
                <td>
                  <a href={video?.link}>{video?.link}</a>
                </td>
                <td>{video?.timeStamp}</td>
                <td>
                  <button className="btn" onClick={() => removeVideoHistory(video?.id)}>
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No history available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default WatchHistory;
