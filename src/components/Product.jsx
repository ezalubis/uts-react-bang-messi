import Button from "./Button";
import { MdClose, MdDelete, MdEdit } from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

export default function Product({ id, name, image,des, price, setEditedProduct,setProducts,products,product,cart,setCart,isCartOpen,setIsCartOpen }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <section>
        <h2>{name}</h2>
        <p>
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          })} {`(${des})`}
        </p>
        <div>
          <Button
            variant="tonal"
            onClick={() =>
              setEditedProduct({
                id,
                name,
                image,
                price,
              })
            }
          >
            Edit
          </Button>
          <Button
            variant="tonal"
            onClick={() =>
              confirm(`Apakah anda yakin ingin menghapus ${name}?`)&&
              setProducts(products.filter((p)=>p.id !==product.id))
            }
          >
            Apus</Button>

        </div>
      </section>
    </div>
    
  );
}
