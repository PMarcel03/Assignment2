const rootdiv = document.getElementById("root");
//Load JSON
fetch('SCP.json')
.then(response => response.json())
.then(
    //Display JSON data
    SCP => {
        SCP.forEach(
            scp => {
                //ID
                const HeaderID = document.createElement('h1');
                const SCPID = document.createElement('h3');
                HeaderID.innerHTML = "SCP ID:";
                SCPID.innerHTML = scp.ID;
                rootdiv.appendChild(HeaderID);
                rootdiv.appendChild(SCPID);
                //Class
                const SCPClass = document.createElement('h3');
                const HeaderClass = document.createElement('h2');
                HeaderClass.innerHTML ="SCP Class:";
                SCPClass.innerHTML = scp.Class;
                rootdiv.appendChild(HeaderClass);
                rootdiv.appendChild(SCPClass);
                //Procedure
                const SCPprod = document.createElement('p');
                const prodHeader = document.createElement('h2');
                prodHeader.innerHTML ="Containment Procedures:";
                SCPprod.innerHTML = scp.Procedure;
                rootdiv.appendChild(prodHeader);
                rootdiv.appendChild(SCPprod);
                //Description
                const SCPdesc = document.createElement('p');
                const DescHeader = document.createElement('h2');
                DescHeader.innerHTML = "SCP Description:";
                SCPdesc.innerHTML = scp.Description;
                rootdiv.appendChild(DescHeader);
                rootdiv.appendChild(SCPdesc);
                //Image
                const SCPImg = document.createElement('img');
                SCPImg.style.margin = "0 auto"
                SCPImg.style.display = "block"
                SCPImg.src = scp.Image;
                SCPImg.width =400;
                rootdiv.appendChild(SCPImg);
                //Text To Speech
                const button = document.createElement('button')
                button.textContent = "Read SCP Description"
                //Button Styling
                button.style.backgroundColor = "#600c0c"
                button.style.color = "white"
                button.style.borderRadius = "8px"
                button.style.padding = "15px 32px"
                button.style.fontSize = "16px"
                button.style.border = "none"
                //Event Listener activates on button click
                button.addEventListener(
                    'click',
                    () => {
                        const speech = new SpeechSynthesisUtterance(scp.Description + scp.ID)
                        
                        window.speechSynthesis.speak(speech);
                    }
                );
                rootdiv.appendChild(button);
            }
        )
    }
)



.catch(error => console.error(error))