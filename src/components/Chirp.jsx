import React from 'react';
import Moment from 'moment-timezone'

const Chirp = ({chirp}) => {
   return( <li className="list-group-item border-primary rounded" id='chirpListItem'>
    <strong>@{chirp.user}</strong> <br /><br /> {chirp.message}{" "}
     {/* <h1>Username is {user}<br /> {message}</h1>
        <main>
          <section className="row justify-content-center">
            <ul
              className="list-group w-50 border-primary rounded"
              id="timeLine"
              style={{
                border: "1px solid",
                position: "absolute",
                left: "400px",
                boxShadow: "10px 5px 34px 6px #000000",
              }}
            >
              {newChirp}
            </ul>
          </section>
        </main>
      </div> */}
  </li>)
};

export default Chirp;