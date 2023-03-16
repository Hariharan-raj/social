import React, { useState, useEffect } from "react";
import axios from "axios";
import DefaultLayout from "../components/Default_layout";

function Home() {
  const [phoneNumbers, setPhoneNumbers] = useState(null);
  const [editing, setEditing] = useState(null);
  const [edited, setEdited] = useState("");

  useEffect(() => {
    async function fetchPhoneNumbers() {
      const response = await axios.get("http://localhost:5001/Number/users");
      const data = await response.data;
      setPhoneNumbers(data);
    }

    fetchPhoneNumbers();
  }, [editing]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5001/Number/users/${id}`);
    const newPhoneNumbers = phoneNumbers.filter(
      (phoneNumber) => phoneNumber._id !== id
    );
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleEdit = (id) => {
    setEditing(id);
  };

  const handleSave = async (id, edited) => {
    console.log("*****************************");
    console.log(edited);
    let upd = {
      phoneNumber: edited,
    };
    await axios.put(`http://localhost:5001/Number/users/${id}`, upd);
    const newPhoneNumbers = phoneNumbers.map((number) => {
      if (number._id === id) {
        return { ...number, edited };
      }
      return number;
    });
    setPhoneNumbers(newPhoneNumbers);
    setEditing(null);
    setEdited("");
  };

  return (
    <DefaultLayout>
    <div className="w-100 listing-parent">
      <a href="/login" className="back-button">
        <div class="material-symbols-outlined">arrow_back</div>
        <div className="sign-out">Sign Out</div>
      </a>
      <h2>Mobile Numbers List</h2>
      <table className="mob-listing-section">
        <thead>
          <tr>
            <th>Email / Ph Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {phoneNumbers &&
          phoneNumbers.map((phoneNumber) => (
            <tr key={phoneNumber._id}>
              {editing === phoneNumber._id ? (
                <>
                <td>
                  <input
                      type="text"
                      defaultValue={phoneNumber.phoneNumber}
                      onChange={(event) => setEdited(event.target.value)} className="input-field"
                    />
                </td>
                <td>
                    <button onClick={() => handleSave(phoneNumber._id, edited)} className="saveBtn">
                      <span class="material-symbols-outlined">check</span>
                    </button>
                </td>
                  
                </>
              ) : (
                <>
                  <td>{phoneNumber.phoneNumber}</td>
                  <td className="action-btn-section">
                      <button onClick={() => {
                        handleEdit(phoneNumber._id)
                        setEdited(phoneNumber.phoneNumber);
                        }
                        } className="editBtn">
                      <span class="material-symbols-outlined">
                      edit
                      </span>
                      </button>
                      <button onClick={() => handleDelete(phoneNumber._id)} className="deleteBtn">
                      <span class="material-symbols-outlined">
                        delete
                        </span>
                      </button>
                  </td>
                  
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </DefaultLayout>
  );
}

export default Home;
