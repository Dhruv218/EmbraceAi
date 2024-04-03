import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";
import { URL } from "../../constants";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${URL}/auth`;
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
	<div className="containerr"> 
    <div class="login">
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        <input
         type="email"
		 placeholder="Email"
		 name="email"
		 onChange={handleChange}
		 value={data.email}
		 required
         />
        <input
         type="password"
		 placeholder="Password"
		 name="password"
		 onChange={handleChange}
		 value={data.password}
		 required
 
        />
			{error && <div className={ 'error_msg'}>{error}</div>}
        <button
          type="submit"
          class="btn btn-primary btn-block btn-large"
        >
          Let me in.
        </button>
      </form>
	  <div className={ 'right'}>
					<h1>New Here? </h1>
					<Link to="/signup">
						<button type="button" className={ 'white_btn'}>
							Signup
						</button>
					</Link>
				</div>
    </div>
	</div>
  );
};

export default Login;
