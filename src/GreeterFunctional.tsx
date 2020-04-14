import React, {useState} from 'react';

interface GreeterProps {
  companyName: string;
}

/*
type GreeterPropsType = {
  companyName: string;
};
*/

const handleClickArrow = () => {
  console.log('You clicked on the button (arrow)');
};

function Greeter(props: GreeterProps) {
  // function Greeter(props: {companyName: string}) {
  // function Greeter(props: GreeterPropsType) {

  // let firstName = '';
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <form>
      <div className="form-group">
        <label htmlFor="first-name">What is your first name?</label>
        <input
          type="text"
          id="first-name"
          className="form-control"
          onChange={(event) => setFirstName(event.currentTarget.value)}
          value={firstName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="last-name">What is your last name?</label>
        <input
          type="text"
          id="last-name"
          className="form-control"
          onChange={(event) => setLastName(event.currentTarget.value)}
          value={lastName}
        />
      </div>
      <button
          onClick={handleClickArrow}
          type="button"
          className="btn btn-primary"
        >
          Say hi!
        </button>
      <div>
        <p>Hello, {firstName} {lastName}</p>
      </div>
    </form>
  );
}

export default Greeter;
