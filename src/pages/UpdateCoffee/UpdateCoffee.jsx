
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, test, category, details, photoUrl } =
    coffee;



    const handlUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;

        const updatedCoffee = {name, quantity, supplier, test, category, details, photoUrl}

        console.log(updatedCoffee)

        //send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                    "content-type": 'application/json' 
            },
            body: JSON.stringify(updatedCoffee)
                       
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success...!',
                    text: 'Coffee Updated Sucessfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }

  return (
    <>
        <div className="bg-[rebeccapurple]  pt-8 pb-80 px-24">
      <h3 className="text-3xl text-center mb-8 font-bold">Update  {name} Coffee</h3>

      <form onSubmit={handlUpdateCoffee}>
{/* Name: Quantity: Row */}
        <div className="md:flex gap-7 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Add Coffee Info</span>
            </label>
            <label className="input-group input-group-vertical">
              <span>Coffee</span>
              <input
                type="text"
                name="name"
                defaultValue={name}
                
                className="input input-bordered w-full"
              />
            </label>
          </div>



          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Add Coffee Quantity</span>
            </label>
            <label className="input-group input-group-vertical">
              <span>Quantity</span>
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>
{/* Supplier: Test: Row */}
        <div className="md:flex gap-7 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Add Supplier Info</span>
            </label>
            <label className="input-group input-group-vertical">
              <span>Supplier</span>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
               
                className="input input-bordered w-full"
              />
            </label>
          </div>



          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Add Test Info</span>
            </label>
            <label className="input-group input-group-vertical">
              <span>Test</span>
              <input
                type="text"
                name="test"
                defaultValue={test}
                // placeholder="Please Test Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>
{/* Category: Details: Row */}
        <div className="md:flex gap-7 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Add Category Info</span>
            </label>
            <label className="input-group input-group-vertical">
              <span>Category</span>
              <input
                type="text"
                name="category"
                defaultValue={category}
                // placeholder="Add Category "
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Add Details Quantity</span>
            </label>
            <label className="input-group input-group-vertical">
              <span>Details</span>
              <input
                type="text"
                name="details"
                defaultValue={details}
                // placeholder="Please Add Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>
{/* Photo Url: Row */}
        <div className="md:flex gap-7 mb-8">
          <div className="form-control w-full">
            <label className="label">
            </label>
            <label className="input-group input-group-vertical">
              <span>Photo URL</span>
              <input
                type="text"
                name="photoUrl"
                defaultValue={photoUrl}
                // placeholder="Add Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>

        <input className="btn btn-block" type="submit" value="Add Coffee" />

      </form>
    </div>
    </>
  );
};

export default UpdateCoffee;
