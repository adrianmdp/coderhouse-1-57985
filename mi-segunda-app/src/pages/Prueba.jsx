import inhabitants from "../data/inhabitants.js";

const Select = (props) => {
  const { options, onSelect } = props;

  return options.map((inhabitant) => {
    return (
      <div key={inhabitant.id}>
        <input
          type="radio"
          name="inhabitant"
          id={inhabitant.id}
          onChange={() => onSelect(inhabitant)}
        />
        <label htmlFor={inhabitant.id}>{inhabitant.name}</label>
      </div>
    );
  });
};

const Prueba = () => {
  const myFunction = (value) => {
    console.log(value.name);
  };

  return <Select options={inhabitants} onSelect={myFunction} />;
};

export default Prueba;
