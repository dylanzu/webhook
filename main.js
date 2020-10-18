$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="")
        {
            alert("Your webhook URL is missing");
            return false;
        }
        if (content==null || content=="")
        {
            alert("Type something in the message box and try again");
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});

    });
});
