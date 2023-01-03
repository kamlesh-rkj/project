import React from "react";
import "./Header.css";


export default function Header() {
  return (
    <>
      <section>
        <div id="header">
          <div id="manu">
          <button className="btn btn-primary" 
                  type="button" 
                  data-bs-toggle="offcanvas"
                  data-bs-target="#manuofcanvas" 
                  aria-controls="manuofcanvas">
                   
                    </button>
            <div
              className="offcanvas offcanvas-start"
              data-bs-scroll="true"
              tabindex="-1"
              id="manuofcanvas"
              aria-labelledby="manuheader"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="manuheader">
                  WELCOME TO ,LEARN FROM ME
                </h5>
                {/* <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button> */}
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
          <div id="serchbar">
            <input type="text" id="search" />
            <button>Search</button>
          </div>
          <div id="accountbar"></div>
        </div>
      </section>
    </>
  );
}
