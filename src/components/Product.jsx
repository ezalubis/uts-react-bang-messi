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

          <Button
            variant="tonal"
            onClick={()=>{
              if(cart.find((p)=>p.id===product.id)){
                setCart(
                  cart.map((p)=>
                    p.id===product.id ? {...p,count:p.count+1,}:p
                  )
                );
              }else{
                setCart([...cart,{product,count:1}]);
              }
            }}
          >
            keranjang
          </Button>
        </div>
      </section>
      {isCartOpen && (
        <div className="card dialog">
          <button onClick={() => setIsCartOpen(false)}>
            <MdClose />
          </button>
          <h1>Keranjang</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Jumlah</th>
                <th>Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((pc) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{pc.count.toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => {
                        if (pc.count > 1) {
                          setCart(
                            cart.map((p) =>
                              id === id
                                ? { ...p, count: p.count - 1 }
                                : p
                            )
                          );
                        } else {
                          setCart(cart.filter((p) => p.id !== id));
                        }
                      }}
                      title="Kurangi"
                    >
                      <AiOutlineMinusCircle />
                    </button>
                    <button
                      onClick={() => {
                        setCart(
                          cart.map((p) =>
                            id === id
                              ? { ...p, count: p.count + 1 }
                              : p
                          )
                        );
                      }}
                      title="Tambah"
                    >
                      <AiOutlinePlusCircle />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    
  );
}
