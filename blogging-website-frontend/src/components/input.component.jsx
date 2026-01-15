import { useState } from "react";

const InputBox = ({ name, id, type, value, placeholder, icon }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="w-[100%] relative mb-4">
      <input
        type={
          type == "password" ? (passwordVisible ? "text" : "password") : type
        }
        defaultValue={value}
        name={name}
        id={id}
        placeholder={placeholder}
        className="input-box capitalize"
      />
      <i className={"fi " + icon + " input-icon "}></i>
      {type == "password" ? (
        <i
          class={
            "fi fi-rr-eye" +
            (!passwordVisible ? "-crossed text-red" : "") +
            " input-icon left-[auto] right-4 cursor-pointer"
          }
          onClick={() => setPasswordVisible((currentVal) => !currentVal)}
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};
export default InputBox;
