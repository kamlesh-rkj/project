import React from "react";
import "./Header.css";


export default function Header() {
  return (
    <>
      <section>
        <div id="header">
          <div id="manu">
          <button className="btn btn-primary" 
                   
                  data-bs-toggle="offcanvas"
                  data-bs-target="#manuofcanvas" 
                  aria-controls="manuofcanvas">
                   
                    </button>
                    <div
              className="offcanvas offcanvas-start"
              
              data-bs-scroll="true"
              tabIndex="-1"
              id="manuofcanvas"
              aria-labelledby="manuheader"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="manuheader">
                  WELCOME TO ,LEARN FROM ME
                </h5>
               
              </div>
              <div className="offcanvas-body">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                
              </div>
            </div>
          </div>
          <div id="accountbar">
            <input type="text"></input>
          </div>
          <div id="serchbar">
            <input type="text" id="search" />
            <button>Search</button>
          </div>
          
        </div>
      </section>
    </>
  );
}
