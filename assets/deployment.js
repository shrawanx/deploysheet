$('#btnGenerateScript').click(function () {
    let serverIp = $('#serverIP').val()
    let serverUser = $('#serverUser').val()
    let serverAlias = $('#serverAlias').val()
    let isServerIpUserUsed = $('#toggleSwitch').prop('checked')
    let fullURL = ""
    if (isServerIpUserUsed) {
        fullURL = `${serverUser}@${serverIp}`

    } else {
        fullURL = serverAlias
    }
    if (!fullURL) {
        alert("Enter Server Alias or IP")
    } else {
        let setupGitRemoteOnClient = `
git remote add server ${fullURL}:/home/ubuntu/repo.git/
git push server --all`
        $('#setupGitRemoteOnClient').text(setupGitRemoteOnClient)
        Prism.highlightElement($('#setupGitRemoteOnClient')[0]);

        $('#serverDeplymentScript').attr('hidden',false)
    }
})
