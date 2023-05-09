const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, test, category, details, photoUrl } =
    coffee;
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={photoUrl} alt={name} />
        </figure>
        <div className="card-body ">
         <div className="flex gap-7 ">
         <div className="w-full text-center">
            <h2 className="text-3xl text-center">
              {name} Quantity: {quantity}
            </h2>
            <p>
              {supplier} : {test} : {category}
            </p>
            <p>{details}</p>
          </div>
          <div className="card-actions ">
            <div className=" flex flex-col space-y-4">
              <button className="btn ">View</button>
              <button className="btn">Edit</button>
              <button className="btn">Delete</button>
            </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
