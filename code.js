const btnCbx = document.getElementById('check-btn');
const listMenu = document.getElementById('list-menu');

btnCbx.addEventListener('change', ()=>{
    ShowMenu(btnCbx.checked);
});

//show menu responsive
const ShowMenu = (isCbxActive)=>{
    if(!isCbxActive){
        //console.log('no mostrar menu')
        listMenu.style.display = 'flex';
    }else{
        listMenu.style.display = 'none';
    }
    //console.log(btnCbx.checked);
}
