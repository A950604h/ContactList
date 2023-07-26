import React, { Fragment, useState } from 'react';

const Contact_Input = () => {
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');
  const [list, setList] = useState([]);

  // adding new items
  const addList = () => {
    // validations
    if (inputText1.trim() !== "" && inputText2.trim() !== "") {
      if (inputText2.length === 10) {
        setList([...list, [inputText1 , " | ", inputText2]]);
        setInputText1("");
        setInputText2("");
      } else 
      {
        alert("Enter a valid mobile number");
      }

    } else {
      alert("Please insert all fields!");
    }
  };

  // deleting list by index
  const deleteList = (key) => {
    let nList = [...list];
    nList.splice(key, 1);
    setList([...nList]);
  };

  // updating list by index
  const updateList = (index, updatedText) => {
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index] = updatedText;
      return updatedList;
    });
  };

  return (
    <>
      <div className='input_container'>
        <input
          type='text'
          placeholder='Full Name'
          value={inputText1}
          onChange={(e) => {
            setInputText1(e.target.value);
          }}
        /><br /><br />

        <input
          type='number'
          placeholder='Contact No.'
          value={inputText2}
          onChange={(e) => {
            setInputText2(e.target.value);
          }}
        />

        <br /><br />

        <button
          type='submit'
          className='btn'
          onClick={() => {
            addList();
          }}
        >
          ADD
        </button><br />
            <hr style={{width:"360px",marginBottom:"px"}}/>
      </div>

      <div className="main-container" >
        <div style={{marginBottom:"20px"}}>

          <h2>Contact List :</h2>


          <div className='row' style={{  margin: "3px", height: "400px" }}>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {
              list.map((item, i) => (
                <li key={i} style={{ color: "black",margin:"auto", padding: "10px 0px ", display: "block",border: "2px solid purple",
                                    width:"480px", marginTop:"4px"}}>
                  <li style={{display:'inline-block'}}>{item}</li>
                  <i
                    className="fa-sharp fa-solid fa-pen"
                    style={{ fontSize: "20px", marginLeft: "150px", marginRight: "15px" }}
                    onClick={(e) => {
                      const updatedText1 = prompt("Enter name :");
                      const updatedText2 = prompt("Enter number :");
                      let updatedText = [updatedText1," | ",updatedText2];
                      if (updatedText !== null || updatedText2.length !==10 )
                   {
                        updateList(i, updatedText);
                      }
                    }}
                  ></i>

                  <i
                    className="fa-sharp fa-solid fa-trash"
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                    onClick={(e) => {
                      deleteList(i);
                    }}
                  ></i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_Input;
