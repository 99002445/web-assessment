let user = function(name, dob, gender, transport) 
{
    this.name = name;
    this.dob = dob;
    this.gender = gender;
    this.transport = transport;

    this.display = function()
    {
    console.log("Name:" + this.name);
    console.log("DOB:" + this.dob);
    console.log("Gender" + this.gender);
    console.log("Transport:" + this.transport);
    }
}