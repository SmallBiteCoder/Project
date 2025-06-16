

var container_2 = document.getElementById('MangCard');
var but=document.getElementById('delo')
var load=0

var data_main=[]
var data_arrangement=[]
var data_status=[]

var category = 'sno'









function changeVar(vari) {
    category = vari
}





function fillCard(data, card) {
    const temp = document.createElement('div');
    temp.innerHTML = card;

    temp.querySelector('#title').innerHTML = `${data['Name']}`;
    temp.querySelector('#cat').innerHTML = `${data['category']}`;
    temp.querySelector('#dic').innerHTML = `${data['project_discretion']}`;
    temp.querySelector('#libries').innerHTML = `  ${data['Project requirements']['libraries']}`;
    temp.querySelector('#concp').innerHTML = ` ${data['Project requirements']['concepts']}`;
    temp.querySelector('#lang').innerHTML = ` ${data['Project requirements']['language']}`;
    temp.querySelector('#link1').innerHTML = ` ${data['Project requirements']['learn topics from'][0]}`;
    temp.querySelector('#link1').href =data['Project requirements']['learn topics from'][0]
    temp.querySelector('#link2').innerHTML = ` ${data['Project requirements']['learn topics from'][1]}`;
    temp.querySelector('#link2').href =data['Project requirements']['learn topics from'][1]
    temp.querySelector('#id').innerHTML = ` NB250${data['s.no']}`;
    temp.querySelector('#time').innerHTML = ` ${data['Time'] } minutes`;
    temp.querySelector('#dif').innerHTML = ` ${data['Difficulty'] } /100`;

    return temp;
}

async function divPopulate(isi,fin){
    
    if (load===0){
        const response = await fetch('static/project.json');
    const data = await response.json();
    data_main=data
    data_arrangement=data
    load +=1
    }
    
    
        
        
        

         
        const cardHtml = await getcard();
        data_arrangement.slice(isi, fin).forEach(element => {
            const cardElement = fillCard(element, cardHtml);
            container_2.innerHTML += cardElement.outerHTML
        });
    
    container_2.append(but);

        

        
        

    
}






function search(key) {
    if (category==='sno'){
        container_2.innerHTML=''
        data_arrangement=data_main
        data_status['initial_point']=0
        data_status['final_point']=30   
        addMoreItem()

    }
    
}

function addMoreItem(){
    try{
        
        but.remove()
            
        
    }catch{
        
    }

    
if ( 'initial_point' in data_status ){
        if(data_status['initial_point']==0){
            data_status['initial_point']=0
            data_status['final_point']=30
        }
        else{
            data_status['initial_point']=data_status['final_point']
        data_status['final_point']=data_status['final_point']+30
        }
        
    }
    else{
        
        data_status['initial_point']=0
        data_status['final_point']=30
    }
    
    divPopulate(data_status['initial_point'],data_status['final_point'])
    data_status['initial_point']=data_status['final_point']

}

function getcard() {
    return fetch('html/card.html').then(res => res.text());
}

    

addMoreItem()
