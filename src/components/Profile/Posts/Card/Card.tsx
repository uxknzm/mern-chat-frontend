
export default function Card({children, margins}: any) {
    let classes = 'bg-white shadow-md shadow-gray-300 rounded-md mb-5';
    if (!margins) {
      classes += ' p-4';
    } else {
      classes += ' p-4 ml-[18rem] mr-[18rem]';
    }
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }