import reactImage from '../assets/react-core-concepts.png';

function Header() {
    const types = ['Fundamental','Crucial','Core'];
    const randomIndex = Math.floor(Math.random() * types.length);
    const type = types[randomIndex];

    return (
        <header>
            <img src={reactImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>{type} React concepts you will need for almost any app you are going to build!</p>
        </header>

    )
}

export default Header;