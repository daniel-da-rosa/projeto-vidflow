
const containerVideos = document.querySelector(".videos__container")


 async function buscarEMostrarVideos(){
    try{
    const busca = await fetch('http://localhost:3000/videos')
    const videos = await busca.json()

    videos.forEach((video)=>{
                if(video.categoria==""){
                    throw new Error('Video não tem categoria')
                }
                containerVideos.innerHTML +=`
                <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img  class="img-canal" src="${video.imagem}" alt="logo do canal">
                    <h3 class="titulo-video">${video.titulo},</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                </div>
                </li>
                `
            })
        }catch(error){
            containerVideos.innerHTML=` Erro ao carregar videos ${error}`
        // }finally{
        //     alert('Isso sempre acontece')
        //
     }
}

buscarEMostrarVideos()

const barraDePesquisa = document.querySelector('.pesquisar__input')

barraDePesquisa.addEventListener('input',filtrarPesquisa)

function filtrarPesquisa(){
debugger
    const videos = document.querySelectorAll('.videos__item')
    if(barraDePesquisa.value !=''){
        for(let video of videos){
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase()
            let valorFiltro = barraDePesquisa.value.toLowerCase()
            
            if(!titulo.includes(valorFiltro)){
                video.style.display ="none"
            }else{
                video.style.display ="block"
            }

        }
    }else{
        videos.style.display ="block"

    }
}


// const api = fetch('http://localhost:3000/videos')
// .then(res => res.json())
// .then((videos)=>
//     videos.forEach((jj)=>{
//         containerVideos.innerHTML +=`
//         <li class="videos__item">
//         <iframe src="${jj.url}" title="${jj.titulo}" frameborder="0" allowfullscreen></iframe>
//         <div class="descricao-video">
//             <img  class="img-canal" src="${jj.imagem} alt="logo do canal">
//             <h3 class="titulo-video">${jj.titulo},</h3>
//             <p class="titulo-canal">${jj.descricao}</p>
//         </div>
//         </li>
//         `
//     })
// )
// .catch((error)=>{
//     containerVideos.innerHTML = `<p>Houve um erro ao carregar os videos :${error} </p>`
// })

