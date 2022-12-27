import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const USER_ID_IDENTIFIER =
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";
const EMAIL_IDENTIFIER =
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress";
const ROLE_IDENTIFIER =
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
const PERSONEL_ID_IDENTIFIER = "personelId";
export default class TokenService {
  constructor() {
    this.cookies = new Cookies();
    this.token = this.cookies.get("token");
  }
  getUserId() {
    return jwtDecode(this.token)[USER_ID_IDENTIFIER];
  }
  getUserEmail() {
    return jwtDecode(this.token)[EMAIL_IDENTIFIER];
  }
  getUserRole() {
    return jwtDecode(this.token)[ROLE_IDENTIFIER];
  }
  getUserPersonelId() {
    return jwtDecode(this.token)[PERSONEL_ID_IDENTIFIER];
  }
}
