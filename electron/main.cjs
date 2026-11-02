const {app,BrowserWindow}=require('electron');const path=require('node:path');
function open(){const win=new BrowserWindow({width:1440,height:900,minWidth:900,minHeight:600,backgroundColor:'#0b111b',webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true}});win.loadFile(path.join(__dirname,'../dist/index.html'));}
app.whenReady().then(()=>{open();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)open()})});app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
