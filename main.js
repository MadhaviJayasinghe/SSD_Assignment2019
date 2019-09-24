$(document).ready(function(){

    var client_id = "77728710098-vovtnu055cijvn9bv6o1hj7iqq24l221.apps.googleusercontent.com";

    var redirect_uri = "http://localhost/GoogleDriveUpload/upload.html";

    var project_scope = "https://www.googleapis.com/auth/drive";

    var project_url = "";

    $("#login").click(function(){

        signIn(client_id,redirect_uri,project_scope,project_url);

    });

    function signIn(clientId,redirect_uri,scope,url){

        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
            +"&prompt=consent&response_type=code&client_id="+client_id+"&scope="+scope
            +"&access_type=offline";

        window.location = url;

    }

});