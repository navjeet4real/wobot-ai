import React, { Fragment, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css";
import logo from "./../images/logo.png";
import Solid_lines from "./../images/Solid_lines.png";

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companyName: '',
      industry: 'select',
      size: '',
    }
  }
  handleCompanyChange = (event) => {
    this.setState({
      companyName: event.target.value
    })
  }
  handleIndustryChange = (event) => {
    this.setState({
      industry: event.target.value
    })
  }
  handleSizeChange = (event) => {
    this.setState({
      size: event.target.value
    })
  }
  handleSubmit = (event) => {
    const {companyName, industry,size} = this.state;
    event.preventDefault();
    const formDetails = {companyName,industry,size}

    console.log(formDetails)
  }

  render() {
    return (
      <Fragment>
        <div className="login-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="content">
            <div className="header">
              <img className="solid-lines" src={Solid_lines} alt="" />
              <h2 className="heading">It’s a delight to have you onboard</h2>
              <p className="sub-text">Help us know you better.<br></br>(This is how we optimize Wobot as per your business needs)</p>
            </div>
            <div className="form-fields">
              <form action="" onSubmit={this.handleSubmit}>
                <div className="input-field">
                  <label className="label-style" htmlFor="">Company name</label>
                  <input
                    className="input-style1"
                    value={this.state.companyName}
                    onChange={this.handleCompanyChange}
                    type="text"
                    placeholder="e.g. Example Inc"
                  />
                </div>
                <div className="input-field">
                  <label className="label-style" htmlFor="">Industry</label>
                  <select className="input-style2" value={this.state.industry} onChange={this.handleIndustryChange} name="" id="">
                    <option value="select">Select</option>
                    <option value="select2">Select2</option>
                    <option value="select3">Select3</option>
                  </select>

                </div>
                <div className="input-field-3">
                  <label htmlFor="" className="label-style">Company size</label>
                  <div className="options" value={this.state.size} onChange={this.handleSizeChange}>
            
                    <input type="radio" value="1-20" className="btn-check" name="options-outlined" autoComplete="off" />
                    <label htmlFor="" className="tag btn-outline-primary">1-20</label>

                    <input type="radio" value="21-50" className="btn-check" name="options-outlined" autoComplete="off" />
                    <label htmlFor="" className="tag btn-outline-primary">21-50</label>

                    <input type="radio" value="51-200" className="btn-check" name="options-outlined" autoComplete="off" />
                    <label htmlFor="" className="tag btn-outline-primary">51-200</label>

                    <input type="radio" value="201-500" className="btn-check" name="options-outlined" autoComplete="off" />
                    <label htmlFor="" className="tag btn-outline-primary">201-500</label>

                    <input type="radio" value="500+" className="btn-check" name="options-outlined" autoComplete="off" />
                    <label htmlFor="" className="tag btn-outline-primary">500+</label>

                  </div>
                </div>
                <div >
            <button className="btn" type="submit">Get Started</button>
            </div>
              </form>
            </div>

           
          </div>
          <div className="terms">
            <p>Terms of use  |  Privacy policy </p>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default Login