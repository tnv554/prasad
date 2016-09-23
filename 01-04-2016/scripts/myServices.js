//create service using service ()
obj.service("DemoService", function()
{
	this.sum=function(x,y)
	{
		var z= parseInt(x)+parseInt(y);
		return z;
	};
	this.multiply=function(x,y)
	{
		var z= parseInt(x)*parseInt(y);
		return z;
	};
});