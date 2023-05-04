

const Phrase = ({data}) => {
  return (
    <div >
      <h2 className="tracking-in-expand-fwd-top"> {data.phrase} </h2>
      
      <h4 className='user-author'> { data.author}</h4>
      
    </div>
  );
};

export default Phrase;