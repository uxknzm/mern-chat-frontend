
export default function Card({children}: any) {
    let classes = 'bg-white shadow-md shadow-gray-300 rounded-md mb-5 p-4';
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }