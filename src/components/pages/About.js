import React from 'react';
import '../../App.css';
import space5 from '../../images/space-5.jpg'; 


function About() {
  return (
    <>
    <h1 className="about">ABOUT</h1>
        <div className='cards'>
      <h1>who is COSM anyway?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <p>
            <img src={space5}  alt="Travel" className="cards__item__img" />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam a quam unde pariatur nihil magni voluptatem, earum beatae optio in ea iusto exercitationem voluptas, possimus assumenda hic ad ratione doloremque?
            Quisquam numquam delectus, hic voluptate aspernatur debitis quis nam suscipit quam fugiat, dolorum earum id accusamus aliquid corporis ipsam molestiae ab quaerat culpa. Architecto facilis illum dicta quo nisi. Impedit?
            Odit nam molestias soluta consectetur nostrum quos ut neque recusandae excepturi fuga facere illo sint eligendi autem, deleniti vel repudiandae. Ipsam neque deserunt dolorum iure porro nesciunt fugit illum ullam!
          </p>
          <p>
            
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam a quam unde pariatur nihil magni voluptatem, earum beatae optio in ea iusto exercitationem voluptas, possimus assumenda hic ad ratione doloremque?
            Quisquam numquam delectus, hic voluptate aspernatur debitis quis nam suscipit quam fugiat, dolorum earum id accusamus aliquid corporis ipsam molestiae ab quaerat culpa. Architecto facilis illum dicta quo nisi. Impedit?
            Odit nam molestias soluta consectetur nostrum quos ut neque recusandae excepturi fuga facere illo sint eligendi autem, deleniti vel repudiandae. Ipsam neque deserunt dolorum iure porro nesciunt fugit illum ullam!
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;