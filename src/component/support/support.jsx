import "./support.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Support() {
  const [query, setQuery] = useState({
    faseName: "",
    leastName: "",
    phoneNo: "",
    subject: "",
    email: "",
    textarea: "",
  });
  const handleInput = (e) => {
    let setname = e.target.name;
    let value = e.target.value;
    setQuery({ ...query, [setname]: value });
  };

  const navigate = useNavigate();
  const [sucessPoup, SetsucessPoup] = useState(false);
  const [sucess, Setsucess] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (
      query.faseName != "" &&
      query.leastName != "" &&
      query.subject != "" &&
      query.phoneNo != "" &&
      query.email != "" &&
      query.textarea != ""
    ) {
      SetsucessPoup(true);
    }
    if (
      query.faseName == "" ||
      query.leastName == "" ||
      query.subject == "" ||
      query.phoneNo == "" ||
      query.email == "" ||
      query.textarea == ""
    ) {
      Setsucess(true);
    }
   // console.log("click");
   // console.log(query);
  };
  const close = () => {
    Setsucess(false);
    navigate("/");
  };

  return (
    <div className="row justify-content-center m-0 p-0">
    <div className="col-md-10">
    <div className="contactUs">

          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0 contactUsLeft">
              <h2 className="mb-5">Fill the form. It's easy.</h2>
              <form className="border-right pr-5 mb-5" onSubmit={submit}>
                <div className="row ">
                  {/*div   class after=> errorOPe eerror class  */}

                  <div
                    className={
                      query.faseName == "" && sucess
                        ? "col-md-6 form-group errordived "
                        : "col-md-6 form-group"
                    }
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="faseName"
                      value={query.faseName}
                      onChange={handleInput}
                    />
                    {query.faseName == "" && sucess ? (
                      <span className="errorOPe">
                        This field can not be empty
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={
                    query.leastName == "" && sucess
                      ? "col-md-6 form-group errordived "
                      : "col-md-6 form-group"
                  }>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      name="leastName"
                      value={query.leastName}
                      onChange={handleInput}
                    />
                    {query.leastName == "" && sucess ? <span className="errorOPe">
                      This field can not be empty
                    </span> : ""}
                  </div>
                </div>
                <div className="row">
                  <div className={
                    query.phoneNo == "" && sucess
                      ? "col-md-6 form-group errordived "
                      : "col-md-6 form-group"
                  }>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone No"
                      name="phoneNo"
                      pattern="[789][0-9]{9}"
                      value={query.phoneNo}
                      onChange={handleInput}
                    />
                    {query.phoneNo == "" && sucess ? <span className="errorOPe">
                      This field can not be empty
                    </span> : ""}
                  </div>
                  <div className={
                    query.subject == "" && sucess
                      ? "col-md-6 form-group errordived "
                      : "col-md-6 form-group"
                  }>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={query.subject}
                      onChange={handleInput}
                    />
                    {query.subject == "" && sucess ? <span className="errorOPe">
                      This field can not be empty
                    </span> : ""}
                  </div>
                </div>
                <div className="row">
                  <div className={
                    query.email == "" && sucess
                      ? "col-md-12 form-group errordived "
                      : "col-md-12 form-group"
                  }>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={query.email}
                      onChange={handleInput}
                    // required
                    />
                    {query.email == "" && sucess ?
                      <span className="errorOPe">
                        This field can not be empty
                    </span> : ""}
                  </div>
                </div>
                <div className="row">
                  <div className={
                    query.textarea == "" && sucess
                      ? "col-md-12 form-group errordived "
                      : "col-md-12 form-group"
                  }>
                    <textarea
                      className="form-control"
                      cols="30"
                      rows="7"
                      placeholder="Write your message"
                      name="textarea"
                      value={query.textarea}
                      onChange={handleInput}
                    ></textarea>
                    {query.textarea == "" && sucess ? <span className="errorOPe">
                      This field can not be empty
                    </span> : ""}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn submit"

                    >
                      Submit
                    </button>
                    <span className="submitting"></span>
                  </div>
                </div>
              </form>
              {/* <div id="form-message-warning mt-4">Some thing is not fid up please fild oll input</div> */}

              {/* sucess popup */}
              {sucessPoup ? (
                <div className="form_message_success_message">
                  <span>
                    <i class="fa fa-check"></i>
                  </span>
                  <p>
                    Thank you for reaching out! Your inquiry has been received,
                    and we'll get back to you as soon as possible.
                  </p>
                  <button className="btn btn-danger " onClick={close}>
                    Close
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="col-lg-4 ml-auto contactUsRight">
              <h3 className="mb-4">Let's talk about everything.</h3>
              <p>
              We value your input and are eager to connect with you. Whether you have questions, feedback, or inquiries, our dedicated team is here to assist you. Feel free to reach out through the contact form below, and we'll make every effort to respond promptly. Your satisfaction is our priority, and we are committed to providing excellent customer service. If you prefer more direct communication, you can also reach us via email or phone. Your thoughts and concerns matter to us, and we appreciate the opportunity to address them. Thank you for considering us, and we look forward to hearing from you soon!
              </p>
              <p>
                <a href="#">Read more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Support;
