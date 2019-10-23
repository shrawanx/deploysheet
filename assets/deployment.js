function collectAndPrepare(clientMachineID, containerID) {
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
        $(`#${clientMachineID}`).text(setupGitRemoteOnClient)
        Prism.highlightElement($(`#${clientMachineID}`)[0]);
        $(`#${containerID}`).attr('hidden', false)
    }
}

$('#btnGenerateScriptDjango').click(function () {
    $(`#serverDeploymentScriptForStatic`).attr('hidden', true)
    collectAndPrepare("setupGitRemoteOnClientDjango","serverDeploymentScriptForDjango")
})

$('#btnGenerateScriptStatic').click(function () {
    $(`#serverDeploymentScriptForDjango`).attr('hidden', true)
    collectAndPrepare("setupGitRemoteOnClientStatic","serverDeploymentScriptForStatic")

})