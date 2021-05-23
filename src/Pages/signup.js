import React from 'react';
import icon from '../../assets/title.svg';
import '../App.global.css';
import Div from '../compoenents/Div';
import { Link } from 'react-router-dom';
import { initDatabase, insertUser } from '../utils/db';

const Page = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const updateName = (e) => {
    setName(e);
  };
  const updateEmail = (e) => {
    setEmail(e);
  };
  const updatePassword = (e) => {
    setPassword(e);
  };

  const submitUser = () => {
    insertUser(name, email, password).then((res) => {
      console.log(res);
    });
  };

  return (
    <Div style={{flexDirection: 'column'}}>

      <Div style={{justifyContent: 'center'}}>
        <img width="150px" alt="icon" src={icon} />
      </Div>

      <Div style={{justifyContent: 'center'}}>
        Kombini
      </Div>

      <Div style={{flexDirection: 'row'}}>
        <Div className={'label'}>&#128100;</Div>
        <Div className={'labelContent'}>
          <input className={'input'} onChange={event => updateName(event.target.value)}/>
        </Div>
      </Div>

      <Div style={{flexDirection: 'row'}}>
        <Div className={'label'}>&#128231;</Div>
        <Div className={'labelContent'}>
          <input className={'input'} onChange={event => updateEmail(event.target.value)}/>
        </Div>
      </Div>

      <Div style={{flexDirection: 'row'}}>
        <Div className={'label'}>&#128274;</Div>
        <Div className={'labelContent'}>
          <input type='password' className={'input'} onChange={event => updatePassword(event.target.value)}/>
        </Div>
      </Div>

      <Div style={{flexDirection: 'row'}}>
        <Div className={'labelContent'}>
          <button className={'loginBtn'} onClick={submitUser}>Sign Up</button>
        </Div>
      </Div>

      <Div style={{flexDirection: 'row'}}>
        <Div className={'extraContent'} style={{justifyContent: 'center'}}>
          <Link className={'link'} to={{pathname: '/'}}>Back</Link>
        </Div>
      </Div>

    </Div>
  );
};


export default Page;
