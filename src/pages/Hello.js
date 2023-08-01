import logo from './../logo.svg';
import './../App.css';
import { useState } from 'react';


const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

const user = {
    name: 'Kaboom!',
    imageUrl: 'https://content.magnumphotos.com/wp-content/uploads/2019/05/cortex/par196080-teaser-story-big.jpg',
    imageSize: 150,
};

function ShoppingList() {
    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'white' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}

function MyButton({ count, onClick }) {

    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="App">

            <header className="App-header">
                <Profile />
                <img src={logo} className="App-logo" alt="logo" />

                <p>
                    Hi, Fauzan Disini!
                </p>

                {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

                <MyButton count={count} onClick={handleClick} />
                <MyButton count={count} onClick={handleClick} />
                <ShoppingList />
            </header>
            <AboutPage />
        </div>
    );
}




export default App;
