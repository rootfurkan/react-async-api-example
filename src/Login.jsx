import React from 'react'

export const users = [
    {
        username : "furkan",
        password : "123"
    },
        {
        username : "hicabi",
        password : "321"
    }
]

function Login() {
  return (
    <>
        <p>Kullanıcı Adınız</p>
        <input type="text" />

        <p>Şifreniz</p>
        <input type="text" />
    </>
    
  )
}

export default Login