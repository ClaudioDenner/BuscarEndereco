const loader = document.getElementById('load')
loader.style.display = 'none'



var resposta = []



var dados = []
function requisitar(){
  
  loader.style.display = 'block'
    resposta = []

    let texto = document.getElementById('exampleInputEmail1')
    
  if(texto.value==''){alert('Atenção! Pesquisar sem preencher um endereço não retornará um resultado.')}
    var endereco = texto.value
    var requestOptions = {
    method: 'GET',
    };

    fetch("https://api.geoapify.com/v1/geocode/search?text="+endereco+"&apiKey=1f3dea862efb400ba00e3ed4d9169353", requestOptions)
    .then(response => response.json())
    .then(function(response){
      response.features.forEach(element => {
        resposta.push({
            Endereco: element.properties.address_line1 + ' - '+element.properties.address_line2,
            Estado:element.properties.state,
            Cidade:element.properties.district,
            Coordenadas: element.properties.lat+', '+element.properties.lon,
           
            


            
            



        });
        
        

           
    });
    text()
  })
    .catch(error => console.log('error', error));


  

    


}


function text(){
  var resp = document.getElementById('resp')
  resp.innerHTML = ''
  resposta.forEach(element=>{
   
  resp.innerHTML = 
  resp.innerHTML+'<br>'
  +'<b>Endereço:</b> '+element['Endereco']+'<br>'
  +'<b>Cidade:</b> '+element['Cidade']+'<br>'
  +'<b>Coordenadas:</b> '+element['Coordenadas']
  +'<hr>'

   
  })

  loader.style.display = 'none'

}


const form = document.getElementById('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Deu certo')
})


