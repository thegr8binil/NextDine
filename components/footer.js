import backgroundImage from './public/T.png';
const footer = () => {
  return (
   

    <footer style={{ backgroundImage: `url(${backgroundImage.default})` }} className="bg-cover bg-no-repeat">
        <p>Footer</p>
    </footer>
    
  );
};
export default footer;
