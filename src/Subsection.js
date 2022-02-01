import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";

const Subsection = (props) => {
  return (
    <div>
      <h1>{props[index].category}</h1>
      <img src={props[index].images} />
    </div>
  );
};

export default Subsection;
