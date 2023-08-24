const socket = io();

socket.on("realTimeProducts", (data) => {
    let salida =  ``;

    data.forEach(item => {
        salida +=   `<div class="col-md-3">
                        <div class="card border-0 my-3">
                            <img src="${item.thumbnail}" class="img fluid" alt="${item.title}">
                            <div class="card-body text-left">
                                <p class="card-text">${item.title} <br /> <span class="text-success">$${item.price}</span></p>
                            </div>
                        </div>
                    </div>`
    });
    document.getElementById("producto").innerHTML = salida;
})

