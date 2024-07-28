import Card from "./Card.jsx";

export default function Grid() {
  return (
    <>
      <div
        id="retreats"
        className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-3 lg:gap-8"
      >
        <div className=" rounded-lg">
          <Card />
        </div>
        <div className=" rounded-lg ">
          <Card />
        </div>
        <div className=" rounded-lg">
          <Card />
        </div>
        <div className=" rounded-lg">
          <Card />
        </div>
      </div>
    </>
  );
}
