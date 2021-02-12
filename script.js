const fileInput=document.getElementById("file");
const host="https://fileshare-yt.herokuapp.com";
const  uploadUrl=`${host}/api/files`
const browse=document.getElementById("browse");
const btn=document.getElementsByClassName("btn")[0];

btn.addEventListener('click',e=>{

   let elem= document.getElementById("linkInput");
   elem.focus();
   elem.select();
   try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successfully copied' : 'unsuccessful';
    if(successful){
alert("The download link of the file is copied.Share it with your friends");
    }
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

})


browse.addEventListener('click',(e=>{

fileInput.click();

}))
fileInput.addEventListener('change',e=>{


var file=fileInput.files[0];
console.log(file);
upload(file)

})

function upload(file){

const xhr=new XMLHttpRequest();
 
const form=new FormData();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
form.append("myfile",file);


xhr.onreadystatechange=()=>{
    if(xhr.readyState===XMLHttpRequest.DONE){
let link=JSON.parse(xhr.response);
console.log(link.file)
    document.getElementById("linkInput").value=link.file;
    }

};
xhr.open("POST",uploadUrl);
xhr.send(form);

}