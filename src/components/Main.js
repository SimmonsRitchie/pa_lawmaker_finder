import React from 'react';
import Header from './Header'
import Footer from './Footer'
import InputBox from './InputBox'
import towns from '../../public/static/test.json';


export const Main = () => (
    <div className="container__main">
      <Header />
      <InputBox towns={towns}/>
      <Footer />
    </div>
)


export default Main
