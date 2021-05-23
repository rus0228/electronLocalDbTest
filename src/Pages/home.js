import React from 'react';
import '../App.global.css';
import Div from '../compoenents/Div';
import { Link } from 'react-router-dom';

const Page = () => {
  return (
    <Div style={{flexDirection: 'column'}}>

      <Div>
        <Link className={'link'} to={{pathname: '/'}}>
          Logged in. Please click here to log out.
        </Link>
      </Div>
    </Div>
  );
};


export default Page;
