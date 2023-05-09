import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const {_id, name, quantity, supplier, test, category, details, photoUrl } = coffee;

  const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                              )
            const remaining = coffees.filter(cofe => cofe._id !== _id);
            setCoffees(remaining)       
                    }
                })

            }
          })
  }


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
              <Link to={`updateCoffee/${_id}`}>
              <button className="btn">Edit</button>
              </Link>
              <button onClick={() => handleDelete(_id)} className="btn bg-red-600">Delete</button>
            </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
