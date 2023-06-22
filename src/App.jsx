import Fruits from "./components/Fruits";
import { useState } from "react";
import {FiPlus,FiMinus} from "react-icons/fi";
import{AiFillDelete} from"react-icons/ai"
export default function App(){

  const [fruits, setFruits] = useState([
    {
    id: "1",
    name: "Apple",
    price: 220000
    },
    {
    id: "2",
    name: "Mango",
    price: 100000
    },
    {
    id: "3",
    name: "Banana",
    price: 60000
    },
   ]);

   const [newId, setNewId] = useState("");
   const [newName, setNewName] = useState("");
   const [newPrice, setNewPrice] = useState("");
   const [editId, setEditId] = useState("");


   const editById = (e) =>{
    setFruits(fruits.map((vl)=>{
      if(vl.id===editId){
        return{
          ...vl,
          [e.target.name]:[e.target.value]
        }
      }else{
        return vl;
      }
    }))
   }

   return(
    
    <>
    <main>
    <form>
      <h4>Tambah</h4>
      <label>
        ID:
        <input type="text"
        value={newId} 
        onChange={(e) => setNewId(e.target.value)}/>
      </label>
      <label>
        Name:
        <input type="text"
        value={newName} 
        onChange={(e) => setNewName(e.target.value)}/>
      </label>
      <label>
        Price:
        <input type="text" 
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}/>
      </label>
      <button
      onClick={(e)=> {
        e.preventDefault();
        setFruits([
          {id:newId, name:newName, price:newPrice},
          ...fruits,
        ]);
      }}
      ><FiPlus/> Tambah Depan</button>
            <button
      onClick={(e)=> {
        e.preventDefault();
        setFruits([
          ...fruits,
          { id:newId, name:newName, price:newPrice},
        ]);
      }}
      > <FiPlus/> Tambah Belakang</button>

    </form>
    <form>
      <h4>Edit berdasarkan ID</h4>
      ID:
      <input type="text" value={editId} onChange={(e)=>setEditId(e.target.value)} />
      Name:
      <input type="text" name="name" onChange={editById} />
      Price: 
      <button onClick={(e) => {
                    e.preventDefault();
                    const increment = fruits.map((f) => {
                      if (editId=== f.id) {
                        return {
                          ...f,
                          price: parseInt(f.price) + 1,
                        };
                      } else {
                        return f;
                      }
                    });
                    setFruits(increment);
                  }}><FiPlus/>Tambah</button><button onClick={(e) => {
                    e.preventDefault();
                    const increment = fruits.map((f) => {
                      if (editId=== f.id) {
                        return {
                          ...f,
                          price: parseInt(f.price) - 1,
                        };
                      } else {
                        return f;
                      }
                    });
                    setFruits(increment);
                  }}><FiMinus/>kurang</button>
    <button onClick={(e) => {
                  e.preventDefault();
                  const deleteId = fruits.filter((f) => {
                    return editId !== f.id;
                  });
                  setFruits(deleteId);
                }}
              ><AiFillDelete/>Hapus</button>

    </form>
    <form>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFruits(fruits.slice(1));
            }}
          >
            <AiFillDelete />
            Hapus depan
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFruits(fruits.slice(0, -1));
            }}
          >
            <AiFillDelete />
            Hapus Belakang
          </button>{" "} <button
            onClick={(e) => {
              e.preventDefault();
              setFruits([]);
            }}
          >
            <AiFillDelete />
            Hapus semua
          </button>{" "}
        </form>    </main>
    <div className="div-fruits">
    {fruits.map((v, i)=>{
      return(
        <Fruits
        key={i}
        id={v.id}
        name={v.name}
        price={v.price}
        />
      );
    } )}
    </div>
    </>
   )}


