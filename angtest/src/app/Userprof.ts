

export class Userprof {
    private _id? : number;
    constructor(private _username: string,private _email: string,private _password: string) {
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(value: number | undefined) {
        this._id = value;
    }

    get instance(){
        return this;
    }

    set username(username : string){
        this._username = username;
    }

    set email(email : string){
        this._email = email;
    }

    set password(password : string){
        this._password = password;
    }

    get username() {
        return this._username;
    }

    get email(){
        return this._email;
    }

    get password() {
        return this._password;
    }

    initUser(uservalue: string,emailvalue: string, passvalue: string) : void{
        this.username = uservalue;
        this.email = emailvalue;
        this.password = passvalue;   
    }

   isValid(): any{
    if(this.username.length < 4){
        return this.UsernameErr();
    }else if (this.password.length < 9) {
        return this.PasswordErr();
    } else {
        return true;
    }
   }
    UsernameErr(): Error{
    return new Error("Username does not match rules!")
  }
    PasswordErr(): Error{
    return new Error("Password does not match rules!")
  }
}