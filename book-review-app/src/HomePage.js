import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className='home-page'>
      <h2 className='welcome-heading'>Welcome to Give Your Review!</h2>
      <p className='quote'>
        "If you don’t like to read, you haven’t found the right book." <br />– J.K. Rowling
      </p>

      <div className='book-container'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7t1MLmS5LyYIEDneloYju9R4qvIQRCx4ZQ&usqp=CAU' alt='Book 1' className='book-image' />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsW5KtY2lPasK22n8_XzlHQqTHkfwgBXcfhg&usqp=CAU' alt='Book 2' className='book-image' />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUI3W96ftKgM-hKizGUR_ZZmZkdhrbGeAdQ&usqp=CAU' alt='Book 2' className='book-image' />
        <br/>
        <img src='https://kunalbooks.com/wp-content/uploads/2019/09/9789389224160.jpg' alt='Book 2' className='book-image' />
        
      </div>

      
    </div>
  );
};

export default HomePage;