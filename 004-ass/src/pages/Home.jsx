import { useEffect, useState } from "react";
import { Header } from "../components/header/Header";
import { User } from "../components/main/User";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserAdd } from "../components/main/UserAdd"

export const Home = () => {

  const [userShow, setUserShow] = useState({
    isim: "",
    email: "",
    age: "",
    picture: "",                          // en az kullanacağım kadar 
    city: "",                             // "key: value" olusturmam gerekir
    telefon: "",                           // key isimi önemli değil ödemli olan burda adet
    password: "",
    gender: "",
  });


        //*  **** getUSer ile API den user verilerini cektim ve kullanmak için userShow a set ettim */
  const getUser = async () => {
    const responsive = await fetch("https://randomuser.me/api/")

        const dataUser = await responsive.json();
        setUserShow(dataUser.results[0])

    }

        //* **** useEffect ile sonsuz döngüden didMount yaptım böylece getUser fonsiyonu bir kere çalışır ve durur */
    useEffect(() => {
        getUser()
    }, [])
    console.log(userShow)

  return (
    <>
      <Header />
      <User userShow={userShow}/> 
      {/* içine verilerimi set ettimğim userShow u kullanmak için user.jsx'e  gönderdim */}
      <UserAdd users={userShow} getUser={getUser}/>
    </>
  );
};
