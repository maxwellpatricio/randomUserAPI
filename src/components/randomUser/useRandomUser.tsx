import { useEffect, useState } from "react";
import { IRandomUser, Result } from "./userType";

const useRandomUser = () => {
  const axios = require("axios").default;
  const [user, setUser] = useState<Result>({} as Result);
  const [showMore, setShowMore] = useState(false);

  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userState, setUserState] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userPostalCode, setUserPostalCode] = useState("");

  const getUserData = () => {
    return axios.get("https://randomuser.me/api/").then((res: any) => {
      const { data } = res;
      return data;
    });
  };

  const updateUserData = () => {
    getUserData().then((data: any) => {
      const userInfo = {
        picture: data.results[0].picture.large,
        name: data.results[0].name.first,
        lastName: data.results[0].name.last,
        age: data.results[0].dob.age,
        email: data.results[0].email,
        phone: data.results[0].phone,
        city: data.results[0].location.city,
        state: data.results[0].location.state,
        country: data.results[0].location.country,
        postalCode: data.results[0].location.postcode,
        gender: data.results[0].gender
      };

      setUserName(userInfo.name)
      setUserLastName(userInfo.lastName)
      setUserAvatar(userInfo.picture)
      setUserAge(userInfo.age)
      setUserEmail(userInfo.email)
      setUserPhone(userInfo.phone)
      setUserCity(userInfo.city)
      setUserState(userInfo.state)
      setUserCountry(userInfo.country)
      setUserPostalCode(userInfo.postalCode)
      setUserGender(userInfo.gender)
    });
  };

  useEffect(() => {
    updateUserData();
  }, []);

  return {
    updateUserData,
    userName,
    userLastName,
    userAvatar,
    userAge,
    userEmail,
    userPhone,
    userCity,
    userState,
    userCountry,
    userPostalCode,
    userGender,
    setShowMore,
    showMore
  };
};
export default useRandomUser;
