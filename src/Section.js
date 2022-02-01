import movies from "./movies.json";
import Subsection from "./Subsection";

console.log(Object.keys(movies));

const Section = () => {
  return (
    <div>
      {movies.map((movies, index) => {
        return <Subsection key={index} category={category} images={images} />;
      })}
    </div>
  );
};

export default Section;

{
  /* <div>{result}</div> */
}
