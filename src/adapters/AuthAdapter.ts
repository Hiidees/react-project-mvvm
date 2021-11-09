import { IAuthEntity } from "../@types/entities/IAuthEntity";


let data: IAuthEntity[] = [{
    
    email: "giuseppe.salerno@email.com",
    password: "Delfino97."
  }, {
    
    email: "marco.carollo@email.com",
    password: "Elefante98."
  }, {
    
    email: "davide.lobue@email.com",
    password: "Rinoceronte96."
  }];


  export class AuthAdapter{
//evita di fare casino con le interfacce
    public async checkingUsersAsync(props:IAuthEntity): Promise<boolean> {
        const {email, password} = props;
        console.log(props);
        // Delay data fetching
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });
        console.log("checkingUsersAsync");
        var isauth=false;
        data.map(user => {
               if((user.email === email) && (user.password === password)){
                   isauth=true;
               }
        })//session fare

        return isauth;
      }
  }