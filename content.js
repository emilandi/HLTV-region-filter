
function addButton() {   

    console.log("DOM fully loaded and parsed");
    // You can safely access and manipulate elements here

    const container = document.createElement("div");
    container.id = "hltv-split-container";
    container.style.display = "flex";
    container.style.width = "100%";
    container.style.padding = "5px";
    container.style.gap="10px";  

    const btnEU = document.createElement("button");
    const btnAM = document.createElement("button");
    const btnAS = document.createElement("button");
    const btnGL = document.createElement("button");
    
    btnEU.style.padding="10px";
    btnEU.style.margin="10px";    
    btnEU.innerText="EUROPA";
    btnEU.style.flex="1"; 
    btnEU.style.textAlign="center";
    btnEU.id="btnEU";    

    btnAM.innerText="AMERICAS";
    btnAM.style.padding="10px";
    btnAM.style.margin="10px";    
    btnAM.style.flex="1";   
    btnAM.style.textAlign="center";
    btnAM.id="btnAM";

    btnAS.innerText="ASIA";    
    btnAS.style.padding="10px";
    btnAS.style.margin="10px";    
    btnAS.style.flex="1";  
    btnAS.style.textAlign="center";
    btnAS.id="btnAS";

    btnGL.innerText="GLOBAL";    
    btnGL.style.padding="10px";
    btnGL.style.margin="10px";    
    btnGL.style.flex="1";  
    btnGL.style.textAlign="center";
    btnGL.id="btnGL";

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
        window.location.reload();
    })
}

function initSplit(region) {
    // if (document.getElementById("hltv-split-container")) return;  
    const teams = Array.from(document.querySelectorAll(".ranked-team, .ranking-team, .team")); 
    if (teams.length === 0) return;   
   
    
    let i=1;
    let j=1;
    let k=1;
    
      teams.forEach(team => {       
        const text = team.innerText;    
        if (team.querySelector(region)) {
            console.log(team);
                // if (i>11) {team.style.opacity = "0.5";}
                team.style.display="block";
                team.querySelector('span.position.wide-position').innerText="#"+i;
                i+=1;                 
            }else{
                team.style.display="none"; 
            }          
                        
    });   
}

addButton();

//initSplit("span.region.region-eu");
//initSplit("span.region.region-america");
//initSplit("span.region.region-asia");


// const observer = new MutationObserver(() => {
//     initSplit();
// });

// observer.observe(document.body, { childList: true, subtree: true });