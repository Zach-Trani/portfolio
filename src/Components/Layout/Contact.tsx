import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            ></input>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={4}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// <div>
//             <div className="d-flex justify-content-center align-items-end credit-container">
//             Website Design by Zachary Trani ©2023
//             </div>
//         </div>
