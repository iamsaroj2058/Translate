


function Menu({ data }) {


  return (
    <div className="flex justify-center">

      <div>
        {data.map((info, ind) => (
          <div className="box-border h-24 w-96 p-4 border-2" key={ind}>
            <div className="flex">
              {info.title} &nbsp;&nbsp;&nbsp;&nbsp; {info.price}
            </div>
            <div>{info.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
