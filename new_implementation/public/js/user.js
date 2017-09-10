var user = "";

if (localStorage.getItem("user") == null)
{
    user = "Guest";
    localStorage.setItem("user","Guest" );
    console.log("Logged in as Guest");
}
else
{
    user = localStorage["user"];
}

function login(username)
{
    user = username;
    console.log("Logged in as " + username);
}

function  logout()
{
    user = "Guest";
    console.log("Logged out as " + username);
}

