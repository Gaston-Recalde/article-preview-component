document.getElementById("button").addEventListener('click', () => {
    document.querySelector(".share").style.display = 'flex';
    document.getElementById("buttonClose").style.display = 'inline-block';
    document.getElementById("button").style.display = 'none';
});

const init = () => {
    document.querySelector(".share").style.display = 'none';
    document.getElementById("button").style.display = 'inline-block';
    document.getElementById("buttonClose").style.display = 'none';
}

// function init(){
//     document.querySelector(".share").style.display = 'none';
//     document.getElementById("button").style.display = 'inline-block';
//     document.getElementById("buttonClose").style.display = 'none';
// };

document.getElementById("buttonClose").addEventListener('click', init());
document.getElementById("buttonCloseOne").addEventListener('click', init());