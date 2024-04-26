
const containerVideos = document.querySelector(".videos__container")




const api = fetch('http://localhost:3000/videos')
.then(res => res.json())
.then((videos)=>//aqui é o endPoint
    videos.forEach((jj)=>{ //um parametro que vijj
        containerVideos.innerHTML +=`
        <li class="videos__item">
        <iframe src="${jj.url}" title="${jj.titulo}" frameborder="0" allowfullscreen></iframe>
        <div class="descricao-video">
            <img  class="img-canal" src="${jj.imagem} alt="logo do canal">
            <h3 class="titulo-video">${jj.titulo},</h3>
            <p class="titulo-canal">${jj.descricao}</p>
        </div>
        </li>
        `
    })
)


