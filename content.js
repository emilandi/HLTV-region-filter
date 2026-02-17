
function addButton() {   

    const container = document.createElement("div");
    container.id = "hltv-split-container";
    
    const btnEU = document.createElement("div");
    const btnAM = document.createElement("div");
    const btnAS = document.createElement("div");
    const btnGL = document.createElement("div");    
      
    btnEU.innerText="EUROPA";
    btnEU.id="btnEU";
    btnEU.className="region-btn region region-eu";    

    btnAM.innerText="AMERICAS";
    btnAM.id="btnAM";
    btnAM.className="region-btn region region-america";    

    btnAS.innerText="ASIA";    
    btnAS.id="btnAS";
    btnAS.className="region-btn region region-asia";    

    btnGL.innerText="GLOBAL";    
    btnGL.id="btnGL";
    btnGL.className="region-btn";   

    container.appendChild(btnEU);
    container.appendChild(btnAM);
    container.appendChild(btnAS);
    container.appendChild(btnGL);

    document.querySelector("div.ranking-description").prepend(container);

    document.getElementById("btnEU").addEventListener('click',function(){
        initSplit("span.region.region-eu");    
    })
    document.getElementById("btnAM").addEventListener('click',function(){
        initSplit("span.region.region-america");
    })
    document.getElementById("btnAS").addEventListener('click',function(){
        initSplit("span.region.region-asia");
    })
    document.getElementById("btnGL").addEventListener('click',function(){        
        initSplit("div.ranking-header");
    })
}

function initSplit(region) {
    // if (document.getElementById("hltv-split-container")) return;  
    const teams = Array.from(document.querySelectorAll(".ranked-team, .ranking-team, .team")); 
    
    if (teams.length === 0) return; 

    let i=0;
     
    teams.forEach(team => {       
        const text = team.innerText;    
        if (team.querySelector(region)) {            
                i+=1;               
                team.style.display="block";
                team.querySelector('span.position.wide-position').innerText="#"+i;
                // if (i>11) {team.style.opacity = "0.5";}
            }else{
                team.style.display="none";                    
            }                        
    });

    console.clear;
    console.log(i + " equipos encontrados");   
}

addButton();

// const observer = new MutationObserver(() => {
//     initSplit();
// });

// observer.observe(document.body, { childList: true, subtree: true });