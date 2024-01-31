import Webdev from "./webdev";

function Services({ newValue }: { newValue: number }) {
  return (
    <div>
      {newValue}
      <Webdev anotherValue={newValue} />
    </div>
  );
}

export default Services;
