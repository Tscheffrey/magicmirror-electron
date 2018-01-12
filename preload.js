

const { ipcRenderer: ipc, remote } = require('electron');


init();


function init() {
    window.Bridge = {
      setDockBadge:setDockBadge
    }
}

function setDockBadge(count){
  if(count) remote.app.setBadgeCount(count)
}
