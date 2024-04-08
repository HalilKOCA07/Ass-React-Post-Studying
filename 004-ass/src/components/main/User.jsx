import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styleUser from "./user.module.scss"

export const User = ({userShow}) => {
//* kullanıcı biligilerini butan üzerine maus ile geldiğimde onMouseEnter metodu ile ilgili sekmenin bilgilerini açılması için booleon değer içeren useState leri oluşturdum *** örneğin isim butonun üzerine geldiğimde showName true değeri alırken diğerleri False değeri alacak true değeri alanlar opacity si 1 false değerinde olanların opacity si 0 olacak böylece sadece isim gözükecek diğerleri gözükmeyecek*** */
    const [showName, setShowName] = useState(false)
    const [showEmail, setShowEmail] = useState(false)
    const [showAge, setShowAge] = useState(false)
    const [showCity, setShowCity] = useState(false)
    const [showPhone, setShowPhone] = useState(false)

const showUserName = () => {
    setShowName(true)
    setShowEmail(false)
    setShowAge(false)
    setShowCity(false)
    setShowPhone(false)
}
const showUserEmail = () => {
    setShowName(false)
    setShowEmail(true)
    setShowAge(false)
    setShowCity(false)
    setShowPhone(false)
}
const showUserAge = () => {
    setShowName(false)
    setShowEmail(false)
    setShowAge(true)
    setShowCity(false)
    setShowPhone(false)
}
const showUserCity = () => {
    setShowName(false)
    setShowEmail(false)
    setShowAge(false)
    setShowCity(true)
    setShowPhone(false)
}
const showUserPhone = () => {
    setShowName(false)
    setShowEmail(false)
    setShowAge(false)
    setShowCity(false)
    setShowPhone(true)
}

    
    return(
        <>
        <Card className="text-center">
      <Card.Header>{userShow?.login?.username}</Card.Header>
      <Card.Body>
        <img className="rounded-circle" src={userShow.picture.large} alt="" />
      </Card.Body>
      <Card.Footer className={styleUser.userInfo}>

            <Card.Footer className='text-muted position-absolute' style={{opacity: showName ? 1 : 0}}>{`${userShow?.name?.title} ${userShow?.name?.first} ${userShow?.name?.last}`}</Card.Footer>
            <Card.Footer className='text-muted position-absolute' style={{opacity: showEmail ? 1 : 0}}>{userShow?.email}</Card.Footer>
            <Card.Footer className='text-muted position-absolute' style={{opacity: showAge ? 1 : 0}}>{userShow?.dob?.age}</Card.Footer>
            <Card.Footer className='text-muted position-absolute' style={{opacity: showCity ? 1 : 0}}>{`${userShow?.location?.city} in ${userShow?.location?.country}`}</Card.Footer>
            <Card.Footer className='text-muted position-absolute' style={{opacity: showPhone ? 1 : 0}}>{userShow?.phone}</Card.Footer>
      </Card.Footer>
 

      <Card.Footer className="text-muted d-flex justify-content-evenly">
        <button className="btn btn-primary" onMouseEnter={showUserName}>1</button>
        <button className="btn btn-primary"  onMouseEnter={showUserEmail}>2</button>
        <button className="btn btn-primary"  onMouseEnter={showUserAge}>3</button>
        <button className="btn btn-primary"  onMouseEnter={showUserCity}>4</button>
        <button className="btn btn-primary"  onMouseEnter={showUserPhone}>5</button>
      </Card.Footer>
    </Card>
        </>

    )
}