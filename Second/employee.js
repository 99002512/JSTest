class employee{

    constructor(name,email,phone,amt){

        this.name=name;
        this.email=email;

    }
 

    display(){

        return this.name;

    };
 

    validateName(emp)
    {

        name=emp.name;
        var letters = /^[A-Za-z]+$/;
        var len=name.length;


        if(name.match(letters) && (len>=5))

        {
        return true;
        }

        else

           {
           alert("ALERT");
            return false;
           }

    }
 

    validateEmail(emp)
    {

       var email=emp.email;
     var mailformat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

          if (email.match(mailformat))

            {
             return true
            }
        else
        return (false)
 

            

        
 

            

    }
