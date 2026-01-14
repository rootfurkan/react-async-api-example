import React from 'react'
import './css/Header.css';

function Header() {
  return (
    <div className='header'>
        <ul className='nav'>
            <li>Anasayfa</li>
            <li>Kategoriler</li>
            <li>Ürünler</li>
            <li>Hakkımızda</li>
            <li>İletişim</li>
        </ul>
    </div>
  )
}

export default Header