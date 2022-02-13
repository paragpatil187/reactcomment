import { useState } from "react";

export const Comment = ({ data }) => {
  //destructure
  const [show, setShow] = useState(false); //use for checking having extra cooment
  return (
    <div>
      {data?.map((el, idx) => {
        //mapping data idx for key
        return (
          <div className="container" key={idx}>
            <p>{el.author}</p>
            <p>{el.timestamp}</p>
            <p>{el.body}</p>
            {el.replies ? ( //if replies available thenset show turn true show btuuon
              //if replies not preseent jus t sy no replies yet
              //if show true and have replies greater than zero now take cooment data as new replies///imp remember//
              //else blank
              <button onClick={() => setShow(!show)}>
                {!show ? <p>Check Replies</p> : <p>Hide Replies</p>}
              </button>
            ) : (
              <p style={{ color: "red" }}>No Replies yet</p>
            )}

            {show && el.replies && el.replies.length > 0 ? (
              <Comment data={el.replies} />
            ) : (
              " "
            )}

            <hr />
          </div>
        );
      })}
    </div>
  );
};
