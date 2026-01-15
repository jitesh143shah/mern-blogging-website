import InputBox from "../components/input.component";
import googleIcon from "../assets/images/google.png";
import { Link } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";

const UserAuthForm = ({ type }) => {
  return (
    <>
      <AnimationWrapper keyValue={type}>
        <section className="h-cover flex items-center justify-center">
          <form className="w-[80%] max-w-400px">
            <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
              {type == "sign-in" ? "Welcome back" : "Join us today"}
            </h1>
            {type != "sign-in" ? (
              <InputBox
                name="username"
                type="text"
                placeholder="Username"
                icon="fi-rr-user"
              />
            ) : (
              ""
            )}
            <InputBox
              name="email"
              type="email"
              placeholder="email"
              icon="fi-rr-envelope"
            />
            <InputBox
              name="password"
              type="password"
              placeholder="password"
              icon="fi-rr-key"
            />
            <button className="btn-dark center mt-14" type="submit">
              {type.replace("-", " ")}
            </button>

            <div className="flex justify-center items-center opacity-10 gap-2 my-10 text-black uppercase font-black">
              <hr className="w-1/2 bg-dark-grey" />
              <p>or</p>
              <hr className="w-1/2 bg-dark-grey" />
            </div>
            <button className="btn-dark capitalize flex items-center justify-center gap-4 w-[90%] center">
              <img src={googleIcon} alt="" className="w-5" />
              continue with google
            </button>
            {type == "sign-in" ? (
              <p className="mt-6 text-dark-grey text-xl text-center ">
                Don't have account ?
                <Link
                  to="/signup"
                  className="underline  text-black capitalize text-xl ml-1"
                >
                  join us today
                </Link>
              </p>
            ) : (
              <p className="mt-6 text-dark-grey text-xl text-center ">
                Already a member ?
                <Link
                  to="/signin"
                  className="underline text-black capitalize text-xl ml-1"
                >
                  Sign in here.
                </Link>
              </p>
            )}
          </form>
        </section>
      </AnimationWrapper>
    </>
  );
};
export default UserAuthForm;
