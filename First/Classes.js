let user = function(name, email, number, billdate, billamount) 
{
    this.name = name;
    this.email= email;
    this.number = number;
    this.billdate = billdate;
    this.billamount = billamount;

    this.display = function()
    {
    console.log("Name:" + this.email);
    console.log("Email ID :" + this.dob);
    console.log("Phone Number" + this.number);
    console.log("Bill Date:" + this.billdate);
    console.log("Bill Amount:" + this.billamount);
    }
}