import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between p-3 border-b-2 mx-auto max-w-7xl'>
            <h1 className='font-bold text-4xl '>Knowledge Cafe</h1>
            <img src={profile}></img>
        </header>
    );
};

export default Header;