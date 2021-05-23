import React from 'react';
import icon from '../../assets/title.svg';
import '../App.global.css';
import Div from '../compoenents/Div';
import { Link, useHistory } from 'react-router-dom';
import { checkUser, initDatabase } from '../utils/db';

const Page = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const updateEmail = (e) => {
    setEmail(e);
  };
  const updatePassword = (e) => {
    setPassword(e);
  };
  const history = useHistory();

  const signIn = () => {
    checkUser(email, password).then((res) => {
      console.log(res);
      if (res.length > 0) {
        history.push('/home');
      } else {
        return;
      }
    })
  };

  React.useEffect(() => {
    initDatabase().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Div style={{flexDirection: 'column'}}>
      <Div style={{justifyContent: 'center'}}>
        <img width="150px" alt="icon" src={icon} />
      </Div>
      <Div style={{justifyContent: 'center'}}>
        Kombini
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
          <button className={'loginBtn'} onClick={signIn}>Sign In</button>
        </Div>
      </Div>

      <Div style={{flexDirection: 'row'}}>
        <Div className={'extraContent'}>
          <a>Forgot password?</a>
          <Link className={'link'} to={{pathname: '/signup'}} style={{marginLeft: 120}}>Sign Up</Link>
        </Div>
      </Div>
    </Div>
  );
};


export default Page;
